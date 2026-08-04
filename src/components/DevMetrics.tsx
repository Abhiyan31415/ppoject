import { devMetrics } from "@/lib/data";
import Reveal from "./Reveal";

const groups: { label: string; items: string[] }[] = [
  { label: "Languages", items: devMetrics.languages },
  { label: "Focus", items: devMetrics.focus },
  { label: "Currently Learning", items: devMetrics.learning },
];

export default function DevMetrics() {
  return (
    <section className="py-8">
      <div className="section-shell">
        <Reveal>
          <div className="card-surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                Developer Metrics
              </h3>
              <span className="font-mono text-[11px] text-warm">
                updated continuously
              </span>
            </div>
            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {groups.map((group) => (
                <div key={group.label} className="p-6">
                  <p className="mb-3 font-mono text-xs text-warm">
                    {group.label}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-sm text-warm/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
