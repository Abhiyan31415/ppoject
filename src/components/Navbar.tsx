"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { Menu, X, TerminalSquare } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm text-warm"
        >
          <TerminalSquare size={18} className="text-accent" />
          <span>abhiyan.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors decoration-2 underline-offset-8 hover:underline hover:decoration-accent ${
                  active === link.href
                    ? "text-accent"
                    : "text-warm hover:text-[#f8fafc]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-warm transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-md border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/20"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          className="text-warm md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="section-shell flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-warm transition-colors hover:bg-card hover:text-[#f8fafc]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
