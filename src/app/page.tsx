import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { teams } from "@/data/teams";

const majors = [
  "Computer Science (Games, AI)",
  "Cinematic Arts / Game Design (IMGD)",
  "Astronautical Engineering",
  "Electrical & Computer Engineering",
  "Psychology / Cognitive Science",
  "Design",
  "Journalism / Communications",
  "Business / Marketing",
  "Mechanical / Systems Engineering",
];

const gains = [
  "Travel to NASA Johnson Space Center, Houston to demo live to NASA engineers (May 2027)",
  "Real engineering credit — a working system submitted to and evaluated by NASA",
  "Cross-disciplinary collaboration across Viterbi, Cinematic Arts, Annenberg, Marshall, Dornsife, and more",
  "Co-authorship on a technical white paper submitted to NASA at challenge completion",
  "Industry connections — mentorship from aerospace companies, AR/MR firms, and JPL",
  "A portfolio-defining project — built for NASA, documented, and publicly presentable",
];

export default function Home() {
  return (
    <>
      <Section className="pt-20 md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cardinal-bright/50 bg-cardinal/15 px-4 py-1.5 font-hud text-sm uppercase tracking-wide text-foreground">
          🚀 Now Recruiting — All USC disciplines welcome
        </div>
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-foreground text-glow-gold md:text-6xl">
          Trojan <span className="text-cardinal-bright">SUITS</span> 2027
        </h1>
        <p className="mt-4 max-w-2xl font-hud text-xl text-gold">
          USC&apos;s Student Team for the NASA SUITS Challenge
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
          We are building a real mixed-reality heads-up display for NASA
          astronauts. If selected, we demo at NASA Johnson Space Center in
          Houston in May 2027.
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
        <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
          NASA SUITS (Spacesuit User Interface Technologies for Students) is
          an annual national challenge where university teams design and
          build mixed-reality interfaces for astronauts during spacewalks.
          Teams are scored on technical excellence, human-in-the-loop
          testing, and public outreach — then travel to NASA&apos;s Johnson
          Space Center to demo their systems live to NASA engineers.
        </p>
        <p className="mt-4 flex items-center gap-2 text-foreground-muted">
          <MapPin className="h-4 w-4 text-gold" />
          USC fielded a team in 2022 that reached the top-10 finalist round.
          We are reviving that effort with a more ambitious concept.
        </p>
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
        <Eyebrow>Who We&apos;re Looking For</Eyebrow>
        <SectionTitle>Not a CS-only project</SectionTitle>
        <p className="mb-6 max-w-3xl text-lg text-foreground-muted">
          NASA scores us on human testing, design, and community engagement
          — not just the code. We are actively recruiting across:
        </p>
        <div className="flex flex-wrap gap-3">
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

      <Section>
        <Eyebrow>What Students Gain</Eyebrow>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {gains.map((gain) => (
            <li
              key={gain}
              className="panel-border flex gap-3 rounded-lg p-4 text-foreground-muted"
            >
              <span className="text-gold">◆</span>
              {gain}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="panel-border rounded-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>Project Lead</Eyebrow>
            <h3 className="mb-2 font-hud text-xl text-foreground">
              Brian Lim
            </h3>
            <p className="text-foreground-muted">
              Incoming M.S. Computer Science student at USC. Competed in and
              led NASA SUITS teams from 2017–2019 at Riverside City College
              and Norco College — experience that earned him two internships
              at NASA JPL. He is reviving the USC SUITS effort at the
              graduate level with a more ambitious technical concept.
            </p>
          </div>
          <div>
            <Eyebrow>Faculty Advisor</Eyebrow>
            <h3 className="mb-2 font-hud text-xl text-foreground">
              Prof. David Barnhart
            </h3>
            <p className="text-foreground-muted">
              Research Professor, Astronautical Engineering; Director, USC
              Space Engineering Research Center (SERC). Co-advised the 2022
              USC finalist team.{" "}
              <a
                href="mailto:barnhart@isi.edu"
                className="text-gold hover:underline"
              >
                barnhart@isi.edu
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <SectionTitle>Interested? Get in touch.</SectionTitle>
        <p className="mx-auto mb-8 max-w-xl text-foreground-muted">
          All USC students welcome, open to all years and programs. Advisors,
          industry, and academic partners — we&apos;d love to connect too.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/roles"
            className="rounded border border-cardinal-bright bg-cardinal px-6 py-3 font-hud text-lg uppercase tracking-wide text-white hover:bg-cardinal-bright"
          >
            Browse Roles
          </Link>
          <Link
            href="/outreach"
            className="rounded border border-space-border-bright px-6 py-3 font-hud text-lg uppercase tracking-wide text-foreground hover:border-hud-cyan hover:text-gold"
          >
            Outreach & Partnerships
          </Link>
        </div>
      </Section>
    </>
  );
}
