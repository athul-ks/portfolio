'use client';

import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLogger } from '@/context/LogContext';
import { toast } from 'sonner';

export default function Contact() {
  const { addLog } = useLogger();
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');

  useEffect(() => {
    if (state.succeeded) {
      addLog('COMMS_UPLINK: Encrypted packet sent to HQ successfully.', 'SUCCESS');
    }
    if (state.errors) {
      addLog('COMMS_ERROR: Transmission failed. Retrying...', 'WARN');
      toast.error('Transmission Failed', {
        description: 'Signal lost. Please check your connection and retry.',
      });
    }
  }, [state.succeeded, state.errors, addLog]);

  return (
    <section className="py-12 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none"></div>
      <div className="w-full max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <span className="text-primary text-xs font-mono mb-2 tracking-widest block">
            COMMS_UPLINK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase mb-6">
            Initiate <span className="text-white/40">Transmission</span>
          </h2>
        </div>

        {state.succeeded ? (
          <div className="bg-green-500/10 border border-green-500/50 p-8 max-w-lg mx-auto rounded-lg backdrop-blur-sm animate-in fade-in zoom-in duration-500">
            <span className="material-symbols-outlined text-green-500 text-4xl mb-2">
              check_circle
            </span>
            <h3 className="text-xl font-bold text-white mb-2">TRANSMISSION RECEIVED</h3>
            <p className="text-white/60 text-sm font-mono">
              System has acknowledged your signal. <br />
              Expect a response shortly.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 text-xs text-green-400 hover:text-green-300 underline underline-offset-4"
            >
              [RESET TRANSMISSION LINK]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4 text-left">
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <input type="hidden" name="_subject" value="New Submission from Portfolio" />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Unit Identifier (Name)
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="bg-[#0B1121] border border-white/20 p-3 text-white text-sm focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all technical-border"
                  placeholder="ENTER NAME"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                  Contact Frequency (Email)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="bg-[#0B1121] border border-white/20 p-3 text-white text-sm focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all"
                  placeholder="ENTER EMAIL"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                Transmission Data (Message)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="bg-[#0B1121] border border-white/20 p-3 text-white text-sm focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all resize-none"
                placeholder="ENTER MESSAGE TYPE..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <p className="text-[10px] font-mono text-white/30 mt-4 leading-relaxed uppercase tracking-tighter">
              <span className="text-primary/50">[PRIVACY_PROTOCOL]:</span> Data provided via this
              uplink is used exclusively for professional correspondence. No information is stored
              for marketing or shared with third-party entities.
            </p>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary hover:bg-primary/90 cursor-pointer disabled:bg-primary/50 disabled:cursor-not-allowed text-white py-4 font-bold tracking-widest uppercase text-sm border border-primary transition-all hover:shadow-[0_0_20px_rgba(19,91,236,0.3)] flex justify-center items-center gap-2 group"
            >
              {state.submitting ? (
                <>
                  <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ENCRYPTING & SENDING...
                </>
              ) : (
                <>
                  INITIATE TRANSMISSION
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-16 border-t border-white/10 pt-8 flex justify-center gap-8">
          <a
            href="https://github.com/athul-ks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors text-xs font-mono flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span> [GITHUB]
          </a>
          <a
            href="https://www.linkedin.com/in/athulkrishnaks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors text-xs font-mono flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span> [LINKEDIN]
          </a>
        </div>

        <div className="mt-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Athul Krishna // Secure Transmission Protocol // All Rights
          Reserved
        </div>
      </div>
    </section>
  );
}
