import type { NasaMilestone, PhaseGroup } from "@/data/timeline";

function NasaMilestoneCard({
  timeframe,
  milestones,
}: {
  timeframe: string;
  milestones: NasaMilestone[];
}) {
  return (
    <div className="panel-border rounded-lg p-5">
      <div className="mb-3 font-hud text-sm uppercase tracking-wide text-gold/80">
        {timeframe}
      </div>
      <ul className="space-y-1.5 text-sm text-foreground-muted">
        {milestones.map((item) => (
          <li key={item.milestone} className="flex gap-2">
            <span className="text-hud-cyan">›</span>
            <span>
              <span className="text-foreground">{item.date}</span>:{" "}
              {item.milestone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PhaseComparisonTimeline({ groups }: { groups: PhaseGroup[] }) {
  // Both columns are subgridded into the same row tracks (one header row +
  // one row per phase group) so a tall card on either side pushes both
  // sides' rows to match, keeping the two timelines chronologically
  // aligned even though each keeps its own independent stem line.
  return (
    <div
      className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8"
      style={{ gridTemplateRows: `auto repeat(${groups.length}, auto)` }}
    >
      <div className="relative border-l border-cardinal-bright/40 pl-6 lg:row-span-full lg:grid lg:grid-rows-subgrid">
        <h3 className="mb-6 font-hud text-xl uppercase tracking-wide text-foreground lg:mb-0">
          Internal Timeline
        </h3>
        {groups.map(({ phase }) => (
          <div key={phase.id} className="mb-8 last:mb-0 lg:mb-0">
            <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-cardinal-bright shadow-[0_0_10px_rgba(196,0,0,0.7)]" />
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
                    <span className="text-cardinal-bright">›</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="relative border-l border-hud-cyan/40 pl-6 lg:row-span-full lg:grid lg:grid-rows-subgrid">
        <h3 className="mb-6 font-hud text-xl uppercase tracking-wide text-foreground lg:mb-0">
          NASA Timeline
        </h3>
        {groups.map(({ phase, nasaMilestones }) => (
          <div key={phase.id} className="mb-8 last:mb-0 lg:mb-0">
            {nasaMilestones.length > 0 && (
              <>
                <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-hud-cyan shadow-[0_0_10px_theme(colors.hud-cyan)]" />
                <NasaMilestoneCard
                  timeframe={phase.timeframe}
                  milestones={nasaMilestones}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
