import type { ComponentType, ReactNode } from "react";

type IconCmp = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

/** Aqua-style folder, drawn in SVG so it stays sharp at any size. */
export function FolderIcon({ color = "#5aa9f2", size = 52 }: { color?: string; size?: number }) {
  const id = color.replace("#", "f");
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-back`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.75" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.25" stopColor={color} stopOpacity="0.85" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
      <path d="M6 14a4 4 0 0 1 4-4h14l5 5h25a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" fill={`url(#${id}-back)`} />
      <rect x="6" y="20" width="52" height="32" rx="4" fill={`url(#${id}-front)`} />
      <rect x="6.5" y="20.5" width="51" height="31" rx="3.5" fill="none" stroke="#fff" strokeOpacity="0.5" />
    </svg>
  );
}

/** Rounded "app" tile with a glossy gradient, like an old Aqua dock icon. */
export function AppTile({
  icon: Icon,
  from,
  to,
  size = 52,
  children,
}: {
  icon?: IconCmp;
  from: string;
  to: string;
  size?: number;
  children?: ReactNode;
}) {
  return (
    <span
      className="app-tile"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.24,
        background: `linear-gradient(160deg, ${from}, ${to})`,
      }}
      aria-hidden="true"
    >
      {Icon ? <Icon size={size * 0.5} strokeWidth={1.8} /> : children}
    </span>
  );
}

/** A white page with a folded corner (for documents like the resume). */
export function DocIcon({ label = "PDF", size = 52 }: { label?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 4h26l12 12v42a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="#fff" stroke="#c9ced6" />
      <path d="M40 4v10a2 2 0 0 0 2 2h10" fill="#eef1f5" stroke="#c9ced6" />
      <rect x="18" y="24" width="24" height="2.5" rx="1" fill="#d5dae1" />
      <rect x="18" y="30" width="28" height="2.5" rx="1" fill="#d5dae1" />
      <rect x="18" y="36" width="20" height="2.5" rx="1" fill="#d5dae1" />
      <rect x="16" y="44" width="22" height="10" rx="2" fill="#e5484d" />
      <text x="27" y="51.6" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff" fontFamily="Helvetica, Arial, sans-serif">
        {label}
      </text>
    </svg>
  );
}
