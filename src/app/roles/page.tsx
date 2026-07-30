import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import TeamCard from "@/components/TeamCard";
import {
  teams,
  facultyAdvisorRole,
  industryAdvisorRole,
  openRole,
} from "@/data/teams";

const STUDENT_APPLY_FORM_URL = "https://forms.gle/oybiiuuYPEdegsYTA";

export const metadata: Metadata = {
  title: "Roles | Trojan SUITS 2027",
  description:
    "Eligibility and open roles across Trojan SUITS' eight project scopes, plus advisor and open-role positions.",
};

export default function RolesPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Roles</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Find Your Role
        </h1>
      </Section>

      <Section id="eligibility" className="panel-border rounded-lg">
        <Eyebrow>Who We're Looking For</Eyebrow>
        <p className="mb-6 text-lg leading-relaxed text-foreground-muted">
          Along with utilizing CS/Game-Dev skills to build this HUD,
          we're also seeking roboticists, scientists, and AI specialists
          to build a mock rover, create an AI assistant, assess the
          feasibility of bringing this technology into space, and might even
          try building our own space helmet/HMD! Additionally, we'll
          need education and business specialists to facilitate education &
          industry outreach events.
        </p>

        <SectionTitle>Eligibility</SectionTitle>
        <div className="space-y-3 text-foreground-muted">
          <p>
            All current USC students are eligible to join, regardless of
            year, school, or major. Student role applications require a{" "}
            <span className="text-foreground">valid @usc.edu email address</span>{" "}
            to submit interest.
          </p>
          <p>
            Advisor roles are open to USC faculty, outside academics, and
            industry professionals.
          </p>
          <p>
            Don't see a specialty that matches you? Use the{" "}
            <a href="#open-role" className="text-gold hover:underline">
              Open Role
            </a>{" "}
            card below.
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Project Scopes</Eyebrow>
        <SectionTitle>The Eight Teams</SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {teams.map((team) => (
            <TeamCard
              key={team.slug}
              {...team}
              applyUrl={STUDENT_APPLY_FORM_URL}
            />
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Advisors</Eyebrow>
        <SectionTitle>Faculty & Industry Advisors</SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TeamCard
            {...facultyAdvisorRole}
            accent="gold"
            applyUrl={STUDENT_APPLY_FORM_URL}
          />
          <TeamCard
            {...industryAdvisorRole}
            accent="gold"
            applyUrl="/outreach#contact"
          />
        </div>
      </Section>

      <Section className="pb-24">
        <Eyebrow>Still Looking?</Eyebrow>
        <SectionTitle>Open Role</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <TeamCard {...openRole} applyUrl={STUDENT_APPLY_FORM_URL} />
        </div>
      </Section>
    </>
  );
}
