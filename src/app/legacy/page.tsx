import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import LegacyTabs from "@/components/LegacyTabs";
import { legacyTeams } from "@/data/legacy";

export const metadata: Metadata = {
  title: "Legacy | Trojan SUITS 2027",
  description:
    "USC's history of NASA SUITS teams, from FY2022's Team Aegis to Trojan SUITS.",
};

export default function LegacyPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Legacy</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Our Legacy
        </h1>
      </Section>

      <Section className="pb-24">
        <LegacyTabs teams={legacyTeams} />
      </Section>
    </>
  );
}
