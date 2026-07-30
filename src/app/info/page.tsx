import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { PhaseComparisonTimeline } from "@/components/Timeline";
import { phaseGroups } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Info | Trojan SUITS 2027",
  description:
    "Project info, timeline, and current roster for Trojan SUITS, USC's team for the NASA SUITS challenge.",
};

export default function InfoPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Info</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Project Info
        </h1>
      </Section>

      <Section id="project-info" className="panel-border rounded-lg">
        <SectionTitle>What We're Building</SectionTitle>
        <div className="space-y-4 text-lg leading-relaxed text-foreground-muted">
          <p>
            Trojan SUITS is USC's student team for NASA SUITS, 
            an annual national design challenge where university teams design and build
            mixed-reality interfaces for astronauts during spacewalks.
          </p>
          <p>
            We're developing a mixed-reality heads-up display
            to make it easy for an astronaut to monitor telemetry,
            follow procedures, and direct autonomous assets during an EVA
            without breaking focus on the physical task in front of them.
          </p>
          <p>
            Prospect teams put forward a design plan & proposal which is scored on 
            technical excellence, human-in-the-loop test planning, and public outreach.
            This culminates in a test week where the top teams travel
            to NASA's Johnson Space Center to demo their systems in-person to
            NASA engineers.
          </p>
          <p>
            USC fielded a team in 2022 that was selected to participate and demo in Houston, Texas. 
            We're reviving that effort and are looking for all types of students & advisors to 
            braintstorm and develop ideas for how we can use mixed reality technology to support
            astronauts during space walks and communicate with robots/rovers. 
          </p>
        </div>
      </Section>

      <Section id="timeline">
        <Eyebrow>Timeline</Eyebrow>
        <p className="mb-10 max-w-3xl text-foreground-muted">
          All NASA dates are sourced from the FY2026 NASA SUITS season and are subject to change 
          once the FY2027 guidelines are formally published in late August, 2026.
        </p>
        <PhaseComparisonTimeline groups={phaseGroups} />
      </Section>
    </>
  );
}
