import { useState } from 'react';
import { toast } from 'sonner';

export default function Base64Converter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'ENCODE' | 'DECODE'>('ENCODE');

  const handleConvert = () => {
    try {
      if (!input) {
        setOutput('');
        return;
      }

      if (mode === 'ENCODE') {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
      toast.success(`Successfully ${mode === 'ENCODE' ? 'Encoded' : 'Decoded'}`);
    } catch {
      toast.error('Invalid Base64 string');
      setOutput('Error: Invalid input for decoding');
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="flex flex-col gap-6 h-[50vh]">
        <div className="flex justify-center mb-2">
             <div className="flex bg-black/40 p-1 rounded-md border border-white/10">
                 <button 
                    onClick={() => setMode('ENCODE')}
                    className={`px-4 py-1.5 text-xs font-bold tracking-wider rounded flex items-center gap-2 transition-all ${mode === 'ENCODE' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                 >
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    ENCODE
                 </button>
                 <button 
                    onClick={() => setMode('DECODE')}
                    className={`px-4 py-1.5 text-xs font-bold tracking-wider rounded flex items-center gap-2 transition-all ${mode === 'DECODE' ? 'bg-primary text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                 >
                    <span className="material-symbols-outlined text-[16px]">lock_open</span>
                    DECODE
                 </button>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grow">
            <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 font-mono uppercase">Input Text</label>
                <textarea
                    className="w-full h-full bg-black/30 border border-white/10 text-white/80 font-mono text-sm p-4 rounded focus:outline-none focus:border-primary/50 resize-none"
                    placeholder={mode === 'ENCODE' ? "Enter text to encode..." : "Enter Base64 to decode..."}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs text-white/50 font-mono uppercase">Result</label>
                    <button onClick={copyToClipboard} className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
                    </button>
                </div>
                <div className="w-full h-full bg-black/30 border border-white/10 text-white/80 font-mono text-sm p-4 rounded overflow-auto break-all">
                    {output}
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-2">
             <button
                onClick={handleConvert}
                className="w-full md:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/50 text-white text-sm font-bold tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
             >
                <span className="material-symbols-outlined">sync_alt</span>
                CONVERT NOW
             </button>
        </div>
    </div>
  );
}
