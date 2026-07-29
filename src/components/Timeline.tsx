import { Check } from "lucide-react";
import type { NasaMilestone, Phase } from "@/data/timeline";

export function NasaTimeline({ items }: { items: NasaMilestone[] }) {
  return (
    <ol className="relative border-l border-space-border-bright pl-6">
      {items.map((item, i) => (
        <li key={i} className="mb-8 last:mb-0">
          <span
            className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full ${
              item.done
                ? "bg-hud-cyan shadow-[0_0_10px_theme(colors.hud-cyan)]"
                : "border-2 border-space-border-bright bg-space-black"
            }`}
          >
            {item.done && <Check className="h-2.5 w-2.5 text-space-black" />}
          </span>
          <div className="font-hud text-sm uppercase tracking-wide text-gold/80">
            {item.date}
          </div>
          <div className="text-foreground">{item.milestone}</div>
        </li>
      ))}
    </ol>
  );
}

export function PhaseTimeline({ items }: { items: Phase[] }) {
  return (
    <ol className="relative border-l border-space-border-bright pl-6">
      {items.map((phase) => (
        <li key={phase.id} className="mb-10 last:mb-0">
          <span
            className={`absolute -left-[9px] h-4 w-4 rounded-full ${
              phase.current
                ? "bg-cardinal-bright shadow-[0_0_10px_rgba(196,0,0,0.7)]"
                : "border-2 border-space-border-bright bg-space-black"
            }`}
          />
          <div
            className={`panel-border rounded-lg p-5 ${
              phase.current ? "border-cardinal-bright/70" : ""
            }`}
          >
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="font-hud text-lg text-foreground">
                {phase.phase}
              </h3>
              {phase.current && (
                <span className="rounded-full bg-cardinal/30 px-2.5 py-0.5 font-hud text-xs uppercase tracking-wide text-foreground">
                  Current
                </span>
              )}
            </div>
            <div className="mb-3 font-hud text-sm uppercase tracking-wide text-gold/80">
              {phase.timeframe}
            </div>
            <ul className="space-y-1.5 text-sm text-foreground-muted">
              {phase.actions.map((action, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold">›</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
