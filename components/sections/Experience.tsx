'use client';

import { useRef, useEffect } from 'react';
import { experiences } from '@/lib/data';
import { useLogger } from '@/context/LogContext';
import { useInView } from 'framer-motion';

export default function Experience() {
  const { addLog } = useLogger();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      addLog('NAV_TRACKING: User entered "Experience" sector.', 'INFO');
    }
  }, [isInView, addLog]);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 border-b border-white/10 relative z-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="text-primary text-xs font-mono mb-2 tracking-widest block">
              SYS_LOGS: HISTORY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase mb-6">
              Runtime <span className="text-white/40">Logs</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light border-l border-white/10 pl-4">
              Chronological execution trace of professional engagements and successfully compiled
              milestones.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
          <div className="flex flex-col gap-12 pl-8 md:pl-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#0B1121] border border-primary rounded-full group-hover:bg-primary transition-colors relative z-10"></div>
                  {index === 0 && (
                    <div className="absolute w-6 h-6 border border-primary/30 rounded-full animate-ping"></div>
                  )}
                </div>

                <div className="flex flex-col bg-white/[0.02] border border-white/5 p-6 hover:border-primary/30 transition-all group-hover:-translate-y-1 duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="text-primary font-mono">{exp.company}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/50 font-light">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    {exp.achievements.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-white/70 font-light"
                      >
                        <span className="text-primary/50 font-mono mt-1">&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 px-2 py-0.5 rounded-sm group-hover:border-primary/30 group-hover:text-white/70 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
