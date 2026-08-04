import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-28">
      <div className="section-shell">
        <Reveal>
          <div className="card-surface flex flex-col items-start gap-8 overflow-hidden p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-4">06 — Contact</p>
              <h2 className="max-w-md text-3xl font-semibold tracking-tight text-warm sm:text-4xl">
                Let&apos;s build something together.
              </h2>
              <p className="mt-3 max-w-md text-warm">
                Open to freelance work, internships, and interesting
                collaborations. Reach out any time.
              </p>
            </div>

            <div className="flex flex-shrink-0 flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-border px-5 py-3 text-sm text-warm transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-border px-5 py-3 text-sm text-warm transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
