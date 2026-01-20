'use client';

import { education, certifications } from '@/lib/data';
import { useLogger } from '@/context/LogContext';

export default function Education() {
  const { addLog } = useLogger();

  return (
    <section className="py-24 px-6 lg:px-12 border-b border-white/10 relative z-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Academic History */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-2xl">school</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
              Academic <span className="text-white/40">Protocol</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-px border-l border-dashed border-white/20"></div>
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 group">
                <div className="absolute -left-[4px] top-2 w-3 h-3 bg-black border border-primary rounded-full group-hover:bg-primary transition-colors"></div>

                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-white/60 font-mono text-sm mb-2">{edu.institution}</p>

                <div className="flex items-center gap-4 text-xs font-mono text-white/40">
                  <span className="bg-white/5 px-2 py-1 rounded border border-white/5">
                    BATCH: {edu.year}
                  </span>
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
              Credentials <span className="text-white/40">Database</span>
            </h2>
          </div>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onMouseEnter={() =>
                  addLog(
                    `CREDENTIAL_VERIFY: Validating signature for "${cert.name}"... OK.`,
                    'SUCCESS'
                  )
                }
                className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-4 hover:border-primary/30 hover:bg-white/[0.04] transition-all cursor-crosshair group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-white/20 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-white/40 font-mono">{cert.issuer}</span>
                      <span className="text-[10px] text-white/20">•</span>
                      <span className="text-[10px] text-white/30 font-mono">{cert.year}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono text-white/20 block tracking-wider group-hover:text-white/40 transition-colors">
                    ID: {cert.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
