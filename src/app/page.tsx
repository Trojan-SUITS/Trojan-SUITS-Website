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
  "Business",
  "Marketing",
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
            href="/timeline"
            className="inline-flex items-center gap-2 rounded border border-space-border-bright px-6 py-3 font-hud text-lg uppercase tracking-wide text-foreground transition-colors hover:border-hud-cyan hover:text-gold"
          >
            Timeline
          </Link>
        </div>
      </Section>

      <Section className="panel-border rounded-lg">
        <div className="-mt-6 md:-mt-8">
          <Eyebrow>What We're Building</Eyebrow>
        </div>
        <div className="space-y-4">
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            Trojan SUITS is USC's student team for{" "}
            <a
              href={NASA_SUITS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              NASA SUITS
            </a>
            , an annual national design challenge where university teams
            design and build mixed-reality interfaces for astronauts during
            spacewalks.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            We're developing a mixed-reality heads-up display to make it easy
            for an astronaut to monitor telemetry, follow procedures, and
            communicate with robots. Along with coding a user interface, we're researching
            & developing the hardware/infrastructure required to support
            a system like this for space travel. 
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            Prospect teams put forward a design plan & proposal which is
            scored on technical excellence, human-in-the-loop test planning,
            and public outreach. This culminates in a test week where the top
            teams travel to NASA's Johnson Space Center to demo their systems
            in-person to NASA engineers.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground-muted">
            USC fielded a team in 2022 that was selected to participate and
            demo in Houston, Texas. We're reviving that effort and are
            looking for all types of students/advisors to brainstorm ideas for how we can use mixed reality technology to
            support astronauts during spacewalks and communicate with
            robots/rovers.
          </p>
        </div>
      </Section>

      <Section id="outreach" className="panel-border rounded-lg mt-8 md:mt-10">
        <div className="-mt-6 md:-mt-8">
          <Eyebrow>Community & Industry Engagement</Eyebrow>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-foreground-muted">
          <p>
            NASA SUITS grades every team on an Education/Community & Industry
            Engagement Plan. We plan and execute at least four
            engagement events each year, with at least one education/community
            event and one industry event.
          </p>
          <p>
            On the education side, that means presentations and workshops at
            academic institutions, Maker Fair boothing, and workshops
            aimed at getting K-12 and undergraduate students excited about
            human spaceflight or mixed-reality technology. On the industry
            side, it means company tours, design reviews, and mentorship
            sessions with industry leaders.
          </p>
          <p>
            Our outreach team is also responsible for running social media,
            press outreach, video documentation, this website, and videos for
            the purposes of either vlogging or demoing. 
          </p>
          <p>
            More on our outreach mission, and how to get in touch, on the{" "}
            <a href="/outreach" className="text-gold hover:underline">
              Outreach
            </a>{" "}
            page.
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
