import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { teams } from "@/data/teams";
import RosterOrb from "@/components/RosterOrb";
import { roster } from "@/data/roster";

const NASA_SUITS_URL =
  "https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/";

const majors = [
  "Computer Science",
  "Game Development",
  "Astronautical Engineering",
  "Electrical Engineering",
  "Materials Science",
  "Psychology / Cognitive Science",
  "Design",
  "Journalism / Communications",
  "Business / Marketing",
  "Mechanical / Systems Engineering",
];

export default function Home() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cardinal-bright/50 bg-cardinal/15 px-4 py-1.5 font-hud text-sm uppercase tracking-wide text-foreground">
          🚀 Now Recruiting: All USC disciplines welcome
        </div>
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-foreground text-glow-gold md:text-6xl">
          Trojan <span className="text-cardinal-bright">SUITS</span> 2027
        </h1>
        <p className="mt-4 max-w-2xl font-hud text-xl text-gold">
          USC's Student Team for the NASA SUITS Challenge
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
          We are building a mixed reality interface to support astronauts and communicate with robots. 
          If selected, we demo at NASA's Johnson Space Center in Houston.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 rounded border border-cardinal-bright bg-cardinal px-6 py-3 font-hud text-lg uppercase tracking-wide text-white transition-colors hover:bg-cardinal-bright"
          >
            Explore Roles <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/info"
            className="inline-flex items-center gap-2 rounded border border-space-border-bright px-6 py-3 font-hud text-lg uppercase tracking-wide text-foreground transition-colors hover:border-hud-cyan hover:text-gold"
          >
            Project Info
          </Link>
        </div>
      </Section>

      <Section className="panel-border rounded-lg">
        <Eyebrow>What is NASA SUITS?</Eyebrow>
        <div className="space-y-4">
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            <a
              href={NASA_SUITS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              NASA SUITS
            </a>{" "}
            (Spacesuit User Interface Technologies for Students) is
            an annual national challenge where university teams design and
            build mixed-reality interfaces for astronauts during spacewalks.
            Teams are scored on technical excellence, human-in-the-loop
            testing, and public outreach. 
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            While the general idea is to design
            a user interface for an augmented reality HMD, teams are expected
            to put their own spin and this can range from developing an AI assistant
            to utilizing third-party/in-house fabricated hardware.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            In addition to the technical side of the project, we're exptected to do
            outreach events with educational institutions and industry to spread the word
            about NASA's mission and learn how professionals are approaching these
            same challenges.
          </p>
          <p className="flex items-center gap-2 text-foreground-muted">
            <span className="text-gold">•</span>
            USC fielded a team in 2022 that reached the top-10 finalist round.
            We are reviving that effort with a more ambitious concept.
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Project Scopes</Eyebrow>
        <SectionTitle>Eight teams, one mission</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/roles#${team.slug}`}
              className="panel-border group rounded-lg p-5 transition-colors hover:border-hud-cyan"
            >
              <div className="mb-2 text-2xl">{team.emoji}</div>
              <div className="font-hud text-lg text-foreground group-hover:text-gold">
                {team.name}
              </div>
              <div className="mt-1 text-sm text-foreground-muted">
                {team.tagline}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Who We're Looking For</Eyebrow>
        <p className="mb-6 max-w-3xl text-lg text-foreground-muted">
          Some majors that would be a good fit for this project include but aren't limited to...
        </p>
        <div className="flex flex-wrap gap-">
          {majors.map((major) => (
            <span
              key={major}
              className="rounded-full border border-space-border-bright px-4 py-2 font-hud text-sm text-foreground"
            >
              {major}
            </span>
          ))}
        </div>
      </Section>

      <Section id="roster">
        <Eyebrow>Roster</Eyebrow>
        <div className="space-y-10">
          <div>
            <SectionTitle>Advisors</SectionTitle>
            <div className="flex flex-wrap justify-center gap-10">
              {roster
                .filter((member) => member.tier === "advisor")
                .map((member) => (
                  <RosterOrb key={member.name} member={member} />
                ))}
            </div>
          </div>
          <div>
            <SectionTitle>Students</SectionTitle>
            <div className="flex flex-wrap justify-center gap-10">
              {roster
                .filter((member) => member.tier === "student")
                .map((member) => (
                  <RosterOrb key={member.name} member={member} />
                ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
