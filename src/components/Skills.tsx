import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="04 — Skills" title="Technical toolkit" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.06}>
              <div className="card-surface h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-warm">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#1f3a38] bg-[rgba(45,212,191,0.08)] px-2.5 py-1.5 font-mono text-xs text-warm transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
