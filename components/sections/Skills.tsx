'use client';

import { skills } from '@/lib/data';
import { useLogger } from '@/context/LogContext';

const SignalBars = ({ tier }: { tier: number }) => {
  const totalBars = 5;
  const activeBars = tier;
  const color =
    tier >= 4 ? 'bg-green-500' : tier === 3 ? 'bg-blue-500' : 'bg-yellow-500';

  return (
    <div className="flex gap-1 mt-2">
      {[...Array(totalBars)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-full rounded-sm transition-all duration-300 ${
            i < activeBars ? color : 'bg-white/10'
          } ${i < activeBars ? 'shadow-[0_0_5px_rgba(255,255,255,0.3)]' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default function Skills() {
  const { addLog } = useLogger();

  const getTierLabel = (tier: number) => {
    if (tier >= 4) return 'KERNEL';
    if (tier === 3) return 'USER_SPACE';
    return 'AUXILIARY';
  };

  const getTierColor = (tier: number) => {
    if (tier >= 4) return 'text-green-500';
    if (tier === 3) return 'text-blue-500';
    return 'text-yellow-500';
  };

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-primary text-xs font-mono mb-2 tracking-widest">
              SYS_CHECK: MODULES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
              Operational <span className="text-white/40">Capabilities</span>
            </h2>
          </div>
          {/* Decorative Header Element */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex gap-1">
              <span className="w-1 h-1 bg-white/20"></span>
              <span className="w-1 h-1 bg-white/20"></span>
              <span className="w-1 h-1 bg-primary animate-pulse"></span>
            </div>
            <span className="text-xs text-white/40 font-mono">ALL_SYSTEMS_GO</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() =>
                addLog(
                  `MODULE_SCAN: Analyzing ${skill.name}... [ACCESS_LEVEL: ${getTierLabel(skill.tier)}]`,
                  'INFO'
                )
              }
              className="group relative bg-[#0B1121] border border-white/10 hover:border-primary/50 transition-all duration-300 p-5 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors"></div>

              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                  {skill.category}
                </span>
                <div className="text-white/20 group-hover:text-primary transition-colors w-6 h-6">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <div className="text-xs text-white/40 font-mono mb-4">{skill.version}</div>
              <div className="mt-4">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[10px] text-white/40 font-mono">INTEGRITY_LEVEL</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${getTierColor(skill.tier)}`}
                  >
                    {getTierLabel(skill.tier)}
                  </span>
                </div>
                <SignalBars tier={skill.tier} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
