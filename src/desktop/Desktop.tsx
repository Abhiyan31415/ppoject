import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { appById, desktopIcons } from "./apps";
import Window, { type WinState } from "./Window";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import Spotlight from "./Spotlight";

const MENU_H = 26;
// Default window size (apps can set their own), shrunk to fit smaller screens.
const WIN_W = 1100;
const WIN_H = 815;

function useIsMobile() {
  const query = "(max-width: 767px)";
  const [mobile, setMobile] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMobile(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return mobile;
}

export default function Desktop() {
  const mobile = useIsMobile();
  const dockSize = mobile ? 46 : 52;
  const dockH = dockSize + 26;
  const [wins, setWins] = useState<WinState[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState(false);

  const topZ = wins.reduce((m, w) => Math.max(m, w.z), 0);
  const focusedId = wins.filter((w) => !w.minimized).sort((a, b) => b.z - a.z)[0]?.id;

  const update = (id: string, patch: Partial<WinState>) =>
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, ...patch } : w)));

  const open = useCallback(
    (id: string) => {
      const app = appById[id];
      if (!app) return;
      setWins((ws) => {
        const z = ws.reduce((m, w) => Math.max(m, w.z), 0) + 1;
        if (ws.some((w) => w.id === id)) {
          return ws.map((w) => (w.id === id ? { ...w, minimized: false, z } : w));
        }
        // Cascade new windows a little so they don't stack exactly on top of each other.
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const w = Math.min(app.width ?? WIN_W, vw - 40);
        const h = Math.min(app.height ?? WIN_H, vh - MENU_H - dockH - 30);
        const step = (ws.length % 6) * 28;
        // Small windows (About) sit a bit left of centre, as before; large ones are centred.
        const shift = app.width ? -120 : 0;
        const x = Math.max(20, Math.min((vw - w) / 2 + shift + step, vw - w - 20));
        const y = Math.max(MENU_H + 14, Math.min(MENU_H + 40 + step, vh - dockH - h));
        return [...ws, { id, x, y, w, h, z, minimized: false, maximized: false }];
      });
    },
    [dockH],
  );

  const close = (id: string) => setWins((ws) => ws.filter((w) => w.id !== id));

  // Say hello on larger screens by opening the About window.
  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) open("about");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlight((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const touch = () => window.matchMedia("(pointer: coarse)").matches;

  return (
    <div className="desktop" onPointerDown={(e) => e.target === e.currentTarget && setSelected(null)}>
      <div className="wallpaper" aria-hidden="true" />

      <MenuBar open={open} closeAll={() => setWins([])} openSpotlight={() => setSpotlight(true)} mobile={mobile} />

      <h1 className="sr-only">Abhiyan Khanal, full-stack developer</h1>

      <ul className="icons" style={{ top: MENU_H + 12, bottom: dockH + 8 }} aria-label="Desktop">
        {desktopIcons.map((id) => {
          const app = appById[id];
          return (
            <li key={id}>
              <button
                className={`icon ${selected === id ? "selected" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(id);
                  if (touch()) open(id);
                }}
                onDoubleClick={() => open(id)}
                onKeyDown={(e) => e.key === "Enter" && open(id)}
              >
                {app.icon(mobile ? 56 : 48)}
                <span className="icon-label">{app.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {wins.map((w) => (
          <Window
            key={w.id}
            win={w}
            title={appById[w.id].title}
            focused={w.id === focusedId}
            mobile={mobile}
            bounds={{ top: MENU_H, bottom: mobile ? 0 : dockH }}
            onFocus={() => w.z !== topZ && update(w.id, { z: topZ + 1 })}
            onClose={() => close(w.id)}
            onMinimize={() => update(w.id, { minimized: true })}
            onToggleMaximize={() => update(w.id, { maximized: !w.maximized })}
            onMove={(x, y) => update(w.id, { x, y })}
            onResize={(nw, nh) => update(w.id, { w: nw, h: nh })}
          >
            {appById[w.id].render({ open, close: () => close(w.id) })}
          </Window>
        ))}
      </AnimatePresence>

      <Dock open={open} running={new Set(wins.map((w) => w.id))} size={dockSize} />

      {spotlight && <Spotlight open={open} onClose={() => setSpotlight(false)} />}
    </div>
  );
}
