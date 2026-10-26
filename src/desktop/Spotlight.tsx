import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { profile } from "@/lib/data";
import { apps } from "./apps";

type Result = { key: string; label: string; hint: string; icon?: React.ReactNode; run: () => void };

export default function Spotlight({ onClose, open }: { onClose: () => void; open: (id: string) => void }) {
  const [q, setQ] = useState("");
  const [index, setIndex] = useState(0);

  const all: Result[] = useMemo(
    () => [
      ...apps.map((a) => ({ key: a.id, label: a.title, hint: "Open", icon: a.icon(22), run: () => open(a.id) })),
      { key: "github", label: "GitHub", hint: "Link", run: () => window.open(profile.github, "_blank", "noopener") },
      { key: "linkedin", label: "LinkedIn", hint: "Link", run: () => window.open(profile.linkedin, "_blank", "noopener") },
      { key: "email", label: "Email Abhiyan", hint: profile.email, run: () => (window.location.href = `mailto:${profile.email}`) },
    ],
    [open],
  );

  const results = all.filter((r) => r.label.toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => setIndex(0), [q]);

  const choose = (r?: Result) => {
    if (!r) return;
    r.run();
    onClose();
  };

  return (
    <div className="spotlight-backdrop" onPointerDown={onClose}>
      <div className="spotlight" role="dialog" aria-label="Search" onPointerDown={(e) => e.stopPropagation()}>
        <div className="spotlight-input">
          <Search size={18} />
          <input
            autoFocus
            value={q}
            placeholder="Search projects, skills, resume…"
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "ArrowDown") setIndex((i) => Math.min(i + 1, results.length - 1));
              if (e.key === "ArrowUp") setIndex((i) => Math.max(i - 1, 0));
              if (e.key === "Enter") choose(results[index]);
            }}
          />
        </div>
        {results.length > 0 && (
          <ul className="spotlight-results">
            {results.map((r, i) => (
              <li key={r.key}>
                <button className={i === index ? "active" : ""} onPointerEnter={() => setIndex(i)} onClick={() => choose(r)}>
                  <span className="spotlight-icon">{r.icon}</span>
                  <span className="spotlight-label">{r.label}</span>
                  <span className="muted small">{r.hint}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
