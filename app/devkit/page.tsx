'use client';

import { useState } from 'react';
import Link from 'next/link';
import DevToolCard from '@/components/devkit/DevToolCard';
import DevToolModal from '@/components/devkit/DevToolModal';
import JsonFormatter from '@/components/tools/JsonFormatter';
import Base64Converter from '@/components/tools/Base64Converter';

type ToolType = 'JSON_FORMATTER' | 'BASE64_CONVERTER' | null;

export default function DevKitPage() {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'JSON_FORMATTER',
      title: 'JSON Formatter',
      description: 'Validate, format, and minify JSON data with syntax highlighting. Essential for API debugging.',
      icon: <span className="material-symbols-outlined text-3xl text-yellow-400">data_object</span>,
      tag: 'DATA_PROCESS',
    },
    {
      id: 'BASE64_CONVERTER',
      title: 'Base64 Encoder',
      description: 'Encode and decode Base64 strings securely. Useful for data transmission and auth headers.',
      icon: <span className="material-symbols-outlined text-3xl text-purple-400">lock</span>,
      tag: 'CRYPTO_UTIL',
    },
  ];

  const renderTool = () => {
      switch(activeTool) {
          case 'JSON_FORMATTER': return <JsonFormatter />;
          case 'BASE64_CONVERTER': return <Base64Converter />;
          default: return null;
      }
  };

  const getToolTitle = () => {
     const tool = tools.find(t => t.id === activeTool);
     return tool ? tool.title : '';
  };

  return (
    <div className="relative min-h-screen flex flex-col font-display text-white selection:bg-primary selection:text-white">
      <div className="fixed inset-0 bg-blueprint -z-50" />

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1121]/90 backdrop-blur-sm">
          <div className="px-6 lg:px-12 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold tracking-[0.15em] leading-none text-white group-hover:text-primary transition-colors">
                  ATHULK.DEV
                </h1>
                <span className="text-[10px] text-white/50 tracking-widest leading-none mt-1">
                  DEV_UNIT_01
                </span>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
                 <Link href="/" className="text-xs font-bold tracking-wider text-white/60 hover:text-white transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    RETURN_HOME
                 </Link>
            </div>
          </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
           <div className="mb-12">
               <span className="text-primary text-xs font-mono mb-2 tracking-widest block">
                 SYS_ACCESS: /ROOT/DEV_KIT
               </span>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-4">
                 Developer <span className="text-white/40">Utilities</span>
               </h2>
               <p className="text-white/60 max-w-2xl font-light leading-relaxed">
                   A  collection of essential developer tools provided for quick access and debugging. 
                   All operations are performed client-side.
               </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {tools.map(tool => (
                   <DevToolCard
                      key={tool.id}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      tag={tool.tag}
                      onClick={() => setActiveTool(tool.id as ToolType)}
                   />
               ))}
           </div>
      </main>

      <DevToolModal 
         isOpen={!!activeTool} 
         onClose={() => setActiveTool(null)}
         title={getToolTitle()}
      >
         {renderTool()}
      </DevToolModal>
    </div>
  );
}
