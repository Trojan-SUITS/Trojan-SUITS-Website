import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { NasaTimeline, PhaseTimeline } from "@/components/Timeline";
import RosterOrb from "@/components/RosterOrb";
import { nasaSchedule, internalPhases } from "@/data/timeline";
import { roster } from "@/data/roster";

export const metadata: Metadata = {
  title: "Info | Trojan SUITS 2027",
  description:
    "Project info, timeline, and current roster for Trojan SUITS — USC's team for the NASA SUITS challenge.",
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
        <SectionTitle>What We&apos;re Building</SectionTitle>
        <div className="space-y-4 text-lg leading-relaxed text-foreground-muted">
          <p>
            Trojan SUITS is USC&apos;s student team for NASA SUITS
            (Spacesuit User Interface Technologies for Students) — an annual
            national challenge where university teams design and build
            mixed-reality interfaces for astronauts during spacewalks.
          </p>
          <p>
            We&apos;re developing a mixed-reality heads-up display (HUD)
            paired with a hands-free voice assistant and a rover/drone
            commanding interface, so an astronaut can monitor telemetry,
            follow procedures, and direct autonomous assets during an EVA
            without breaking focus on the physical task in front of them.
            Teams are scored on technical excellence, human-in-the-loop
            (HITL) testing, and public outreach — then the top teams travel
            to NASA&apos;s Johnson Space Center to demo their systems live to
            NASA engineers.
          </p>
          <p>
            USC fielded a team in 2022 that reached the top-10 finalist
            round. We&apos;re reviving that effort at the graduate level with
            a more ambitious technical concept, co-located multiplayer HMD
            support, and a faculty advisor who co-advised the 2022 finalist
            team.
          </p>
        </div>
      </Section>

      <Section id="timeline">
        <Eyebrow>Timeline</Eyebrow>
        <SectionTitle>Two-Part Project Timeline</SectionTitle>
        <p className="mb-10 max-w-3xl text-foreground-muted">
          Part one is the official NASA SUITS schedule; part two is our own
          pre-season plan through post-Test-Week. All NASA dates are sourced
          from last season and are subject to change once 2026-27 guidelines
          are formally published (late August 2026).
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-hud text-xl uppercase tracking-wide text-foreground">
              NASA SUITS Official Schedule
            </h3>
            <NasaTimeline items={nasaSchedule} />
          </div>
          <div>
            <h3 className="mb-6 font-hud text-xl uppercase tracking-wide text-foreground">
              Trojan SUITS Internal Plan
            </h3>
            <PhaseTimeline items={internalPhases} />
          </div>
        </div>
      </Section>

      <Section id="roster">
        <Eyebrow>Current Roster</Eyebrow>
        <SectionTitle>Who&apos;s on the Team</SectionTitle>
        <div className="flex flex-wrap gap-10">
          {roster.map((member) => (
            <RosterOrb key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
