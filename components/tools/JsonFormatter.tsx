import { useState } from 'react';
import { toast } from 'sonner';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
      toast.success('JSON Formatted Successfully');
    } catch (err) {
      setError((err as Error).message);
      toast.error('Invalid JSON');
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
      toast.success('JSON Minified Successfully');
    } catch (err) {
      setError((err as Error).message);
      toast.error('Invalid JSON');
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard');
  };

  const clearAll = () => {
      setInput('');
      setOutput('');
      setError(null);
  };

  return (
    <div className="flex flex-col gap-4 h-[60vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-2 h-full">
           <div className="flex justify-between items-center">
             <label className="text-xs text-white/50 font-mono uppercase">Input</label>
             <button onClick={clearAll} className="text-xs text-red-400 hover:text-red-300 underline">Clear</button>
           </div>
           <textarea
             className="w-full h-full bg-black/30 border border-white/10 text-white/80 font-mono text-xs p-4 rounded focus:outline-none focus:border-primary/50 resize-none"
             placeholder="Paste JSON here..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
           ></textarea>
        </div>

        <div className="flex flex-col gap-2 h-full">
           <div className="flex justify-between items-center">
             <label className="text-xs text-white/50 font-mono uppercase">Output</label>
             <button onClick={copyToClipboard} className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
               <span className="material-symbols-outlined text-[14px]">content_copy</span> Copy
             </button>
           </div>
           <div className={`w-full h-full bg-black/30 border ${error ? 'border-red-500/50' : 'border-white/10'} text-white/80 font-mono text-xs p-4 rounded relative overflow-auto`}>
             {error ? (
                <div className="text-red-400 whitespace-pre-wrap">{error}</div>
             ) : (
                <pre className="whitespace-pre-wrap break-words text-green-400/90">{output}</pre>
             )}
           </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center pt-2">
        <button
          onClick={formatJson}
          className="px-6 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-wider rounded-sm transition-colors"
        >
          FORMAT
        </button>
        <button
          onClick={minifyJson}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wider rounded-sm transition-colors"
        >
          MINIFY
        </button>
      </div>
    </div>
  );
}
