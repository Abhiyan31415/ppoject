import { useState } from "react";
import { projects } from "@/lib/data";
import { appById } from "../apps";

const sidebar = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certificates" },
  { id: "resume", label: "Resume.pdf" },
];

/** A Finder window listing the projects. Double-click (or tap) to open one. */
export default function ProjectsApp({ open }: { open: (id: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="finder">
      <aside className="finder-sidebar">
        <p className="finder-heading">Places</p>
        <button className="finder-place active">Projects</button>
        {sidebar.map((s) => (
          <button key={s.id} className="finder-place" onClick={() => open(s.id)}>
            {s.label}
          </button>
        ))}
      </aside>

      <div className="finder-main" onClick={() => setSelected(null)}>
        <div className="finder-grid">
          {projects.map((p) => {
            const id = `project:${p.slug}`;
            return (
              <button
                key={id}
                className={`finder-item ${selected === id ? "selected" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(id);
                  // Touch screens have no double-click, so open on one tap.
                  if (window.matchMedia("(pointer: coarse)").matches) open(id);
                }}
                onDoubleClick={() => open(id)}
                onKeyDown={(e) => e.key === "Enter" && open(id)}
              >
                {appById[id].icon(56)}
                <span className="finder-label">{p.name}</span>
              </button>
            );
          })}
        </div>
        <p className="finder-status">
          {projects.length} items · double-click to open
        </p>
      </div>
    </div>
  );
}
