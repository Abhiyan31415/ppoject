"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="A selection of products and experiments spanning web, mobile, and applied AI."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-200 hover:border-accent/50 hover:shadow-[0_22px_60px_-36px_rgba(45,212,191,0.55)]"
              >
                <div className="relative h-40 overflow-hidden border-b border-border bg-[linear-gradient(135deg,rgba(17,24,28,0.95),rgba(16,31,34,0.95))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(94,234,212,0.12),transparent_24%),linear-gradient(135deg,rgba(45,212,191,0.08),transparent_60%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(11,15,16,0.9))]" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-border bg-bg/70 px-2 py-1 font-mono text-[10px] text-warm">
                      preview
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[10px] text-accent">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-end justify-start p-4">
                    <div className="max-w-[70%] rounded-xl border border-border bg-bg/40 p-4 backdrop-blur-sm">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        {project.name}
                      </p>
                      <p className="mt-1 text-sm text-warm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(45,212,191,0.12)]" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium text-warm">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-warm">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs text-warm"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#1f3a38] bg-[rgba(45,212,191,0.08)] px-2.5 py-1 font-mono text-[11px] text-warm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-warm transition-colors hover:text-accent"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-accent-hover"
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
