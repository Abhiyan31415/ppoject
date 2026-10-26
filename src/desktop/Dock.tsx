import { useState } from "react";
import { appById, dockApps } from "./apps";

/** Bottom dock. The hovered icon and its neighbours grow a little, like the real thing. */
export default function Dock({
  open,
  running,
  size,
}: {
  open: (id: string) => void;
  running: Set<string>;
  size: number;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const scale = (i: number) => {
    if (hover === null) return 1;
    const d = Math.abs(hover - i);
    return d === 0 ? 1.35 : d === 1 ? 1.15 : 1;
  };

  return (
    <nav className="dock" aria-label="Dock" onPointerLeave={() => setHover(null)}>
      {dockApps.map((d, i) => (
        <button
          key={d.id}
          className="dock-item"
          style={{ transform: `scale(${scale(i)})`, margin: `0 ${(scale(i) - 1) * size * 0.4}px` }}
          onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}
          onClick={() => open(d.id)}
          aria-label={appById[d.id].title}
        >
          <span className="dock-tip">{appById[d.id].title}</span>
          {d.icon(size)}
          <span className={`dock-dot ${running.has(d.id) ? "on" : ""}`} />
        </button>
      ))}
    </nav>
  );
}
