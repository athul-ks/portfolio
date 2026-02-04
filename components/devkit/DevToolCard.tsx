import { ReactNode } from 'react';

interface DevToolCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  tag: string;
  onClick: () => void;
}

export default function DevToolCard({ title, description, icon, tag, onClick }: DevToolCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-[#0B1121] border border-white/10 p-1 hover:border-primary/50 transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-primary transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-primary transition-colors"></div>

      <div className="h-full flex flex-col p-5 bg-white/[0.02]">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-white/5 border border-white/10 rounded-sm group-hover:border-primary/50 transition-colors">
            {icon}
          </div>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded bg-white/5">
            {tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed mb-4 grow font-light">
          {description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          <span>INITIALIZE_TOOL</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </div>
      </div>
    </div>
  );
}
