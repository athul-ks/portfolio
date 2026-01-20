'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [time, setTime] = useState<string>('00:00:00');
  const [hue, setHue] = useState<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '⚠️ CONNECTION LOST | Athul Krishna';
      } else {
        document.title = 'Athul Krishna';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cycleTheme = () => {
    setHue((prev) => (prev + 90) % 360);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-display text-white selection:bg-primary selection:text-white">
      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 bg-blueprint -z-50"
        style={{ filter: `hue-rotate(${hue}deg)` }}
      />

      {/* Side Rulers */}
      <div className="fixed left-4 top-32 bottom-32 w-px bg-white/10 hidden xl:flex flex-col justify-between items-center py-4 z-40 pointer-events-none">
        <span className="text-[9px] text-white/30 -rotate-90 whitespace-nowrap">Y-AXIS 00</span>
        <span className="text-[9px] text-white/30 -rotate-90 whitespace-nowrap">Y-AXIS 50</span>
        <span className="text-[9px] text-white/30 -rotate-90 whitespace-nowrap">Y-AXIS 100</span>
      </div>
      <div className="fixed right-4 top-32 bottom-32 w-px bg-white/10 hidden xl:flex flex-col justify-between items-center py-4 z-40 pointer-events-none">
        <span className="text-[9px] text-white/30 rotate-90 whitespace-nowrap">Z-DEPTH</span>
      </div>

      <div className="flex-grow flex flex-col w-full" style={{ filter: `hue-rotate(${hue}deg)` }}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1121]/90 backdrop-blur-sm">
          <div className="px-6 lg:px-12 h-16 flex items-center justify-between">
            {/* Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="material-symbols-outlined text-primary text-3xl animate-pulse-slow">
                architecture
              </span>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold tracking-[0.15em] leading-none text-white group-hover:text-primary transition-colors">
                  ATHULK.DEV
                </h1>
                <span className="text-[10px] text-white/50 tracking-widest leading-none mt-1 group-hover:text-white/70 transition-colors">
                  FULL_STACK // SECURE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-8">
              {[
                { name: 'MODULES', id: 'skills' },
                { name: 'LOGS', id: 'logs' },
                { name: 'PROJECTS', id: 'projects' },
                { name: 'CREDENTIALS', id: 'education' },
                { name: 'COMM_LINK', id: 'contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-xs font-bold tracking-widest text-white/60 hover:text-primary transition-colors cursor-pointer relative group"
                >
                  <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">
                    &gt;{' '}
                  </span>
                  [{item.name}]
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end mr-4">
                <span className="text-[10px] text-white/40 font-mono">SYS_LOCAL_TIME</span>
                <span className="text-xs font-mono text-primary">{time}</span>
              </div>
              <Link
                href="#"
                className="hidden border border-primary/90 hover:bg-primary/10 text-primary px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider items-center gap-2 transition-all group cursor-pointer hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
              >
                <span className="material-symbols-outlined text-[16px] group-hover:rotate-90 transition-transform duration-700">
                  settings
                </span>
                DEV_KIT
              </Link>
              {/* Theme Cycler Button */}
              <button
                onClick={cycleTheme}
                className="border border-primary/50 hover:bg-primary/10 text-primary px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider flex items-center gap-2 transition-all group cursor-pointer hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] active:scale-95 select-none"
              >
                <span
                  className="material-symbols-outlined text-[16px] transition-transform duration-500"
                  style={{ transform: `rotate(${hue}deg)` }}
                >
                  contrast
                </span>
                <span className="hidden sm:inline">
                  {hue === 0
                    ? 'SYS_THEME: BLUE'
                    : hue === 90
                      ? 'SYS_THEME: PURPLE'
                      : hue === 180
                        ? 'SYS_THEME: AMBER'
                        : 'SYS_THEME: GREEN'}
                </span>
                <span className="sm:hidden">THEME</span>
              </button>
            </div>
          </div>

          {/* Decorative header line with measurements */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between px-12 pointer-events-none">
            <div className="h-1 w-px bg-white/20"></div>
            <div className="h-1 w-px bg-white/20"></div>
            <div className="h-1 w-px bg-white/20"></div>
            <div className="h-1 w-px bg-white/20"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col relative w-full scroll-smooth">
          <Hero />
          <div id="skills" className="scroll-mt-0">
            <Skills />
          </div>
          <div id="logs" className="scroll-mt-10">
            <Experience />
          </div>
          <div id="projects" className="scroll-mt-10">
            <Projects />
          </div>
          <div id="education" className="scroll-mt-30">
            <Education />
          </div>
          <div id="contact" className="scroll-mt-10">
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}
