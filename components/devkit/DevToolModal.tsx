import { ReactNode, useEffect } from 'react';

interface DevToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function DevToolModal({ isOpen, onClose, title, children }: DevToolModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl bg-[#0B1121] border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             <h2 className="text-lg font-bold tracking-wider text-white uppercase font-mono">
               TOOL: {title}
             </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-white/50 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar bg-[#0f1629]">
          {children}
        </div>

        <div className="p-2 border-t border-white/10 bg-[#0B1121] text-[10px] text-white/30 font-mono text-center uppercase tracking-widest">
           Process Active // Secure Environment
        </div>
      </div>
    </div>
  );
}
