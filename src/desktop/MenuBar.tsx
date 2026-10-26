import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { profile, projects } from "@/lib/data";

type Item = { label: string; action: () => void } | "divider";
type Menu = { name: string; bold?: boolean; items: Item[] };

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(t);
  }, []);
  return now.toLocaleString(undefined, { weekday: "short", hour: "numeric", minute: "2-digit" });
}

export default function MenuBar({
  open,
  closeAll,
  openSpotlight,
  mobile,
}: {
  open: (id: string) => void;
  closeAll: () => void;
  openSpotlight: () => void;
  mobile: boolean;
}) {
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const clock = useClock();
  const link = (url: string) => () => window.open(url, "_blank", "noopener");

  const menus: Menu[] = [
    {
      name: "logo",
      items: [
        { label: "About Abhiyan", action: () => open("about") },
        "divider",
        { label: "Close All Windows", action: closeAll },
      ],
    },
    {
      name: "Finder",
      bold: true,
      items: [
        { label: "About", action: () => open("about") },
        { label: "Search…  ⌘K", action: openSpotlight },
        "divider",
        { label: "Close All Windows", action: closeAll },
      ],
    },
    {
      name: "Projects",
      items: [
        { label: "Show All Projects", action: () => open("projects") },
        "divider",
        ...projects.map((p) => ({ label: p.name, action: () => open(`project:${p.slug}`) })),
      ],
    },
    {
      name: "Go",
      items: [
        { label: "About", action: () => open("about") },
        { label: "Work", action: () => open("experience") },
        { label: "Skills", action: () => open("skills") },
        { label: "Certificates", action: () => open("certifications") },
        "divider",
        { label: "Resume.pdf", action: () => open("resume") },
        { label: "Terminal", action: () => open("terminal") },
        { label: "Contact", action: () => open("contact") },
      ],
    },
    {
      name: "Socials",
      items: [
        { label: "GitHub", action: link(profile.github) },
        { label: "LinkedIn", action: link(profile.linkedin) },
        { label: "Email", action: () => (window.location.href = `mailto:${profile.email}`) },
      ],
    },
  ];

  useEffect(() => {
    if (!active) return;
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setActive(null);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("pointerdown", close);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("pointerdown", close);
      window.removeEventListener("keydown", esc);
    };
  }, [active]);

  const shown = mobile ? menus.filter((m) => m.name === "logo" || m.bold) : menus;

  return (
    <nav className="menubar" ref={ref} aria-label="Menu bar">
      <ul className="menus">
        {shown.map((m) => (
          <li key={m.name} className="menu">
            <button
              className={`menu-title ${m.bold ? "bold" : ""} ${active === m.name ? "active" : ""}`}
              aria-haspopup="true"
              aria-expanded={active === m.name}
              onClick={() => setActive(active === m.name ? null : m.name)}
              onPointerEnter={() => active && setActive(m.name)}
            >
              {m.name === "logo" ? <span className="logo">AK</span> : mobile && m.bold ? "Abhiyan" : m.name}
            </button>
            {active === m.name && (
              <ul className="dropdown" role="menu">
                {m.items.map((item, i) =>
                  item === "divider" ? (
                    <li key={i} className="divider" role="separator" />
                  ) : (
                    <li key={item.label}>
                      <button
                        role="menuitem"
                        onClick={() => {
                          setActive(null);
                          item.action();
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="menubar-right">
        <button className="menu-title" aria-label="Search (⌘K)" onClick={openSpotlight}>
          <Search size={14} />
        </button>
        <span className="clock">{clock}</span>
      </div>
    </nav>
  );
}
