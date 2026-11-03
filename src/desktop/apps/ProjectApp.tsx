import { useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/lib/data";
import { appById } from "../apps";

export default function ProjectApp({ project: p }: { project: Project }) {
  const [zoom, setZoom] = useState<number | null>(null);
  const phones = p.shots.every((s) => s.phone);
  // The lightbox is drawn over the whole window, not inside the scrolling content.
  const [host, setHost] = useState<HTMLElement | null>(null);

  return (
    <div
      className="doc"
      ref={(el) => setHost(el?.closest(".window") as HTMLElement | null)}
    >
      <div className="project-head">
        {appById[`project:${p.slug}`].icon(64)}
        <div className="project-info">
          <div className="project-title-row">
            <h1>{p.name}</h1>
            <div className="project-actions">
              {p.demo && (
                <a className="aqua-btn primary small" href={p.demo} target="_blank" rel="noreferrer">
                  Open live <ExternalLink size={12} />
                </a>
              )}
              {p.github && (
                <a className="aqua-btn small" href={p.github} target="_blank" rel="noreferrer">
                  <Github size={12} /> View code
                </a>
              )}
            </div>
          </div>
          <p className="muted">{p.meta}</p>
          <div className="tags">
            {p.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {p.video && (
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${p.video}`}
            title={`${p.name} demo video`}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {p.shots.length > 0 && (
        <div className={`shots ${phones ? "phones" : ""}`}>
          {p.shots.map((s, i) => (
            <button
              key={s.src}
              className="shot"
              onClick={() => setZoom(i)}
              aria-label={`Enlarge: ${s.alt}`}
            >
              <img src={s.src} alt={s.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {zoom !== null &&
        host &&
        createPortal(
          <div className="lightbox" onClick={() => setZoom(null)}>
            <button className="lightbox-close" aria-label="Close">
              <X size={18} />
            </button>
            <img src={p.shots[zoom].src} alt={p.shots[zoom].alt} />
            <p>{p.shots[zoom].alt}</p>
          </div>,
          host,
        )}

      <p>{p.description}</p>

      <h2 className="label">What it does</h2>
      <ul className="plain-list">
        {p.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {p.sections.map((sec) => (
        <section key={sec.heading}>
          <h2 className="label">{sec.heading}</h2>
          {sec.paragraphs?.map((t) => (
            <p key={t}>{t}</p>
          ))}
          {sec.bullets && (
            <ul className="plain-list">
              {sec.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
