"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  FolderGit2,
  Wrench,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Search,
  BadgeCheck,
} from "lucide-react";
import { profile, navLinks } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const goTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const commands: Command[] = useMemo(
    () => [
      ...navLinks.map((link) => ({
        id: link.href,
        label: link.label,
        hint: "Jump to section",
        icon: <User size={16} />,
        action: () => goTo(link.href),
      })),
      {
        id: "projects-icon",
        label: "View Projects",
        hint: "Scroll to featured work",
        icon: <FolderGit2 size={16} />,
        action: () => goTo("#projects"),
      },
      {
        id: "skills-icon",
        label: "View Skills",
        hint: "Scroll to toolkit",
        icon: <Wrench size={16} />,
        action: () => goTo("#skills"),
      },
      {
        id: "certifications-icon",
        label: "View Certifications",
        hint: "Scroll to credentials",
        icon: <BadgeCheck size={16} />,
        action: () => goTo("#certifications"),
      },
      {
        id: "resume",
        label: "Download Resume",
        hint: profile.resumeUrl,
        icon: <FileDown size={16} />,
        action: () => window.open(profile.resumeUrl, "_blank"),
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: profile.github.replace("https://", ""),
        icon: <Github size={16} />,
        action: () => window.open(profile.github, "_blank"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: profile.linkedin.replace("https://", ""),
        icon: <Linkedin size={16} />,
        action: () => window.open(profile.linkedin, "_blank"),
      },
      {
        id: "email",
        label: "Send an Email",
        hint: profile.email,
        icon: <Mail size={16} />,
        action: () => (window.location.href = `mailto:${profile.email}`),
      },
    ],
    [goTo],
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="safe-float z-50 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs text-warm shadow-[0_12px_30px_-18px_rgba(0,0,0,0.9)] transition-colors hover:border-accent hover:text-accent sm:flex"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd className="rounded border border-border bg-bg px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-bg/80 px-4 pt-[12vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <Search size={16} className="text-warm" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent font-mono text-sm text-warm placeholder:text-warm focus:outline-none"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-warm">
                  esc
                </kbd>
              </div>
              <div className="max-h-80 overflow-y-auto p-2 terminal-scrollbar">
                {filtered.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-warm">
                    No commands found.
                  </p>
                )}
                {filtered.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      c.action();
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-warm transition-colors hover:bg-bg"
                  >
                    <span className="text-accent">{c.icon}</span>
                    <span className="flex-1">{c.label}</span>
                    {c.hint && (
                      <span className="truncate text-xs text-warm">
                        {c.hint}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
