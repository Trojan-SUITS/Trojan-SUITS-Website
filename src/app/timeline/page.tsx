import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { PhaseComparisonTimeline } from "@/components/Timeline";
import { phaseGroups } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline | Trojan SUITS 2027",
  description:
    "The NASA SUITS schedule alongside Trojan SUITS' internal plan.",
};

export default function TimelinePage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Timeline</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          FY2027
        </h1>
      </Section>

      <Section>
        <p className="mb-10 max-w-3xl text-foreground-muted">
          All NASA dates are sourced from the FY2026 NASA SUITS season and are subject to change
          once the FY2027 guidelines are formally published in late August, 2026.
        </p>
        <PhaseComparisonTimeline groups={phaseGroups} />
      </Section>
    </>
  );
}
