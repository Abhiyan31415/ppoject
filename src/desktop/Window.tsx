import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { motion } from "framer-motion";

export type WinState = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
};

type Props = {
  win: WinState;
  title: string;
  focused: boolean;
  mobile: boolean;
  bounds: { top: number; bottom: number };
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onMove: (x: number, y: number) => void;
  onResize: (w: number, h: number) => void;
  children: ReactNode;
};

const MIN_W = 320;
const MIN_H = 220;

export default function Window({
  win,
  title,
  focused,
  mobile,
  bounds,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onMove,
  onResize,
  children,
}: Props) {
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const resize = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

  const startDrag = (e: ReactPointerEvent) => {
    if (mobile || win.maximized || (e.target as HTMLElement).closest(".lights")) return;
    drag.current = { dx: e.clientX - win.x, dy: e.clientY - win.y };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onDrag = (e: ReactPointerEvent) => {
    if (!drag.current) return;
    const maxX = window.innerWidth - 80;
    const x = Math.min(Math.max(e.clientX - drag.current.dx, 80 - win.w), maxX);
    const y = Math.min(Math.max(e.clientY - drag.current.dy, bounds.top), window.innerHeight - 40);
    onMove(x, y);
  };

  const startResize = (e: ReactPointerEvent) => {
    e.stopPropagation();
    resize.current = { x: e.clientX, y: e.clientY, w: win.w, h: win.h };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onResizeMove = (e: ReactPointerEvent) => {
    if (!resize.current) return;
    const r = resize.current;
    onResize(Math.max(MIN_W, r.w + e.clientX - r.x), Math.max(MIN_H, r.h + e.clientY - r.y));
  };

  // Briefly turn on size/position transitions when maximizing or restoring,
  // so the window glides instead of jumping (but dragging stays instant).
  const [gliding, setGliding] = useState(false);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setGliding(true);
    const t = window.setTimeout(() => setGliding(false), 320);
    return () => window.clearTimeout(t);
  }, [win.maximized]);

  const full = mobile || win.maximized;
  // On phones a window covers the whole screen, including the dock.
  const z = mobile ? 8500 + win.z : win.z;
  const style = full
    ? { left: 0, top: bounds.top, width: "100%", height: `calc(100% - ${bounds.top + bounds.bottom}px)`, zIndex: z }
    : { left: win.x, top: win.y, width: win.w, height: win.h, zIndex: z };

  return (
    <motion.section
      role="dialog"
      aria-label={title}
      className={`window ${focused ? "focused" : ""} ${full ? "full" : ""} ${gliding ? "gliding" : ""}`}
      style={{ ...style, transformOrigin: "50% 100%", pointerEvents: win.minimized ? "none" : undefined }}
      initial={mobile ? { opacity: 0, y: 40 } : { opacity: 0, scale: 0.9, y: 16 }}
      animate={
        win.minimized
          ? {
              // Shrink down towards the dock, like the genie effect.
              opacity: 0,
              scale: 0.12,
              y: window.innerHeight - (full ? bounds.top : win.y),
              transition: { duration: 0.32, ease: [0.4, 0, 0.6, 1] },
              transitionEnd: { visibility: "hidden" },
            }
          : { opacity: 1, scale: 1, y: 0, visibility: "visible", transition: { type: "spring", stiffness: 380, damping: 30 } }
      }
      exit={
        mobile
          ? { opacity: 0, y: 40, transition: { duration: 0.18 } }
          : { opacity: 0, scale: 0.85, transition: { duration: 0.16, ease: "easeIn" } }
      }
      onPointerDown={onFocus}
    >
      <header
        className="titlebar"
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={() => (drag.current = null)}
        onDoubleClick={() => !mobile && onToggleMaximize()}
      >
        <div className="lights">
          <button className="light close" aria-label="Close window" onClick={onClose}>
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3.5 3.5l5 5M8.5 3.5l-5 5" />
            </svg>
          </button>
          {!mobile && (
            <>
              <button className="light min" aria-label="Minimize window" onClick={onMinimize}>
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 6h6" />
                </svg>
              </button>
              <button
                className="light max"
                aria-label={win.maximized ? "Restore window" : "Maximize window"}
                onClick={onToggleMaximize}
              >
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  {win.maximized ? <path d="M6.5 2.5v3h3M5.5 9.5v-3h-3" /> : <path d="M3 6h6M6 3v6" />}
                </svg>
              </button>
            </>
          )}
        </div>
        <h2 className="title">{title}</h2>
        {mobile && (
          <button className="mobile-done" onClick={onClose}>
            Done
          </button>
        )}
      </header>
      <div className="window-body">{children}</div>
      {!full && (
        <div
          className="resize-handle"
          onPointerDown={startResize}
          onPointerMove={onResizeMove}
          onPointerUp={() => (resize.current = null)}
          aria-hidden="true"
        />
      )}
    </motion.section>
  );
}
