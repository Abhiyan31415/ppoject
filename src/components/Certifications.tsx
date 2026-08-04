"use client";

import { useState } from "react";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="certifications" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="05 — Certifications" title="Credentials" />

        {featured && (
          <Reveal className="mb-6">
            <div className="card-surface relative overflow-hidden border-accent/30 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.08),transparent_55%)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-30px_rgba(45,212,191,0.55)]">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-sm font-semibold text-accent">
                    AWS
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-warm">
                      {featured.name}
                    </h3>
                    <p className="mt-1 text-sm text-warm">
                      {featured.issuer} · {featured.year}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-warm">
                      <span className="rounded-full border border-border px-2.5 py-1 font-mono">
                        {featured.badge?.toUpperCase() ?? "AWS"}
                      </span>
                      <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-success">
                        Verified
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-success">
                      <BadgeCheck size={15} />
                      Verified
                    </div>
                  </div>
                </div>

                <div className="flex flex-shrink-0 flex-col items-start gap-2 sm:items-end">
                  <button
                    onClick={() => setRevealed((v) => !v)}
                    className="flex items-center gap-1.5 rounded-md border border-accent/40 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
                  >
                    <ShieldCheck size={14} />
                    Verify Credential
                  </button>
                  {revealed && featured.credentialId && (
                    <p className="max-w-[220px] break-all text-right font-mono text-[11px] text-warm">
                      {featured.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {rest.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="card-surface h-full p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_18px_40px_-28px_rgba(45,212,191,0.45)]">
                <BadgeCheck size={18} className="mb-3 text-accent" />
                <h4 className="text-sm font-medium leading-snug text-warm">
                  {cert.name}
                </h4>
                <p className="mt-2 font-mono text-xs text-warm">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
