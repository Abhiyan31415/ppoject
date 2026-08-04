import { aboutCards } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="01 — About"
          title="A little about how I work"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {aboutCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="card-surface h-full p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_50px_-30px_rgba(45,212,191,0.55)]">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
                  {card.title}
                </h3>

                {card.type === "text" && (
                  <p className="text-sm leading-relaxed text-warm">
                    {card.content as string}
                  </p>
                )}

                {card.type === "list" && (
                  <ul className="space-y-3">
                    {(card.content as string[]).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-warm"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 flex-shrink-0 text-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {card.type === "tags" && (
                  <div className="flex flex-wrap gap-2">
                    {(card.content as string[]).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#1f3a38] bg-[rgba(45,212,191,0.08)] px-3 py-1 font-mono text-xs text-warm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
