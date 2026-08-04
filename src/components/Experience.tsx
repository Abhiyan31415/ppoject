import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="02 — Experience" title="Where I've worked" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="card-surface p-6 lg:sticky lg:top-24">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-warm">
              Current role
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-warm">
              Freelance Full Stack Developer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-warm">
              Working across client and personal projects with React, Node.js,
              Express, PostgreSQL, Flutter, Supabase, and modern web
              technologies.
            </p>
          </div>

          <div className="relative border-l border-border pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.08} className="relative pb-8">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[160px_1fr] md:gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-warm">
                      {job.period}
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-warm">
                      {job.role}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-warm">
                    {job.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
