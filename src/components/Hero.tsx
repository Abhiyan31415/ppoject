"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import Terminal from "./Terminal";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-fade absolute inset-0" />

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-warm sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <br />
            <span className="text-glow text-accent">{profile.name}</span>
          </h1>

          <p className="mt-4 text-xl text-warm/80 sm:text-2xl">
            {profile.role}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-warm">
            <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-success">
              AWS Certified Solutions Architect – Associate
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono">
              {profile.focus}
            </span>
          </div>

          <p className="mt-5 max-w-lg whitespace-pre-line text-base leading-relaxed text-warm sm:text-lg">
            {profile.tagline}
          </p>

          <p className="mt-4 font-mono text-sm text-warm">{profile.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm text-warm transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-warm transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-warm transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-warm sm:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
