'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { useLogger } from '@/context/LogContext';

export default function Projects() {
  const { addLog } = useLogger();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(typeof window !== 'undefined' ? navigator.onLine : true);

    const handleOnline = () => {
      setIsOnline(true);
      addLog('NETWORK_EVENT: Connection re-established. UPLINK_STABLE.', 'SUCCESS');
    };

    const handleOffline = () => {
      setIsOnline(false);
      addLog('NETWORK_EVENT: Connection lost. RUNNING_OFFLINE_MODE.', 'ERROR');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [addLog]);

  const handleLink = (url: string | undefined, type: 'CODE' | 'DEMO', title: string) => {
    if (!url) {
      addLog(`ACCESS_DENIED: User attempted to access restricted ${type} for "${title}".`, 'WARN');
      return;
    }
    addLog(`EXT_LINK: Redirecting to ${type} for "${title}"...`, 'SUCCESS');
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-white/10 relative">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-16 border-l-2 border-primary pl-6 relative">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary"></div>
          <div className="absolute -left-[5px] bottom-0 w-2 h-2 bg-primary"></div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-primary text-xs font-mono mb-2 tracking-widest">
                DIR: /ROOT/ENGINEERING/PROJECTS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                Schematic Overview
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div
                className={`flex items-center justify-end gap-2 mb-1 transition-colors duration-300 ${isOnline ? 'text-white/60' : 'text-red-500/80'}`}
              >
                <span
                  className={`material-symbols-outlined text-sm ${isOnline ? 'text-green-500 animate-pulse' : 'text-red-500 animate-bounce'}`}
                >
                  {isOnline ? 'wifi' : 'wifi_off'}
                </span>
                <span className="text-xs font-mono uppercase">
                  {isOnline ? 'Connection Stable' : 'CONNECTION LOST'}
                </span>
              </div>
              <p className="text-xs text-white/40 font-mono">
                RENDER_SCALE: 1:1 | DRAWN_BY: DEV_UNIT_01
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#0B1121] technical-border border border-white/10 p-1 transition-all hover:-translate-y-1 hover:border-white/30 flex flex-col h-full"
            >
              <div className="absolute -top-3 left-4 text-[10px] text-white/40 font-mono bg-[#0B1121] px-1">
                {project.ref}
              </div>
              <div className="h-full flex flex-col border border-white/5 p-4 bg-white/[0.02]">
                <div className="relative w-full aspect-video mb-5 overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors bg-slate-900/50">
                  <div className="absolute top-2 right-2 z-10 bg-black/80 backdrop-blur text-white/80 text-[10px] px-2 py-0.5 rounded-sm border border-white/10 font-mono">
                    PROJ_{project.title}
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-6xl text-white/20 group-hover:text-primary/40 transition-colors">
                        {project.imagePlaceholder}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>
                </div>

                <div className="flex flex-col grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`flex items-center gap-1.5 bg-${project.statusColor}-900/10 border border-${project.statusColor}-500/20 px-2 py-0.5 rounded-sm`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-${project.statusColor}-500 ${project.status === 'LIVE' ? 'animate-pulse' : ''}`}
                      ></span>
                      <span
                        className={`text-[10px] font-bold text-${project.statusColor}-400 tracking-wider`}
                      >
                        {project.status}
                      </span>
                    </span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono border border-white/10 text-white/50 px-2 py-1 bg-white/5 uppercase hover:text-white hover:border-white/30 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dashed border-white/10">
                    {project.githubUrl ? (
                      <button
                        onClick={() => handleLink(project.githubUrl, 'CODE', project.title)}
                        className="flex items-center justify-center gap-2 h-9 border border-white/20 hover:bg-white/5 hover:border-white/40 text-white text-xs font-bold tracking-wider transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">code</span>
                        SOURCE
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 h-9 border border-white/10 bg-white/5 text-white/20 text-xs font-bold tracking-wider cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined text-[16px]">lock</span>
                        CLASSIFIED
                      </button>
                    )}

                    {project.demoUrl ? (
                      <button
                        onClick={() => handleLink(project.demoUrl, 'DEMO', project.title)}
                        className="flex items-center justify-center gap-2 h-9 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(19,91,236,0.15)] hover:shadow-[0_0_20px_rgba(19,91,236,0.4)] cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                        LAUNCH
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 h-9 border border-white/10 bg-white/5 text-white/20 text-xs font-bold tracking-wider cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined text-[16px]">wifi_off</span>
                        OFFLINE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
