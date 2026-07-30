import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";

const OUTREACH_FORM_URL = "https://forms.gle/aEWrf1DGPxjMwCFJ8";

export const metadata: Metadata = {
  title: "Outreach | Trojan SUITS 2027",
  description:
    "Trojan SUITS' community and industry engagement mission, and how industry, government, and academic partners can connect with us.",
};

export default function OutreachPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Outreach</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Outreach &amp; Partnerships
        </h1>
      </Section>

      <Section id="mission" className="panel-border rounded-lg">
        <SectionTitle>Our Mission</SectionTitle>
        <div className="space-y-4 text-lg leading-relaxed text-foreground-muted">
          <p>
            NASA SUITS grades every team on an Education/Community & Industry
            Engagement Plan. We plan and execute at least four documented engagement
            events each year, with at least one education/community event and one
            industry event.
          </p>
          <p>
            On the education side, that means presentations and workshops at
            academic institutions, Maker Faire boothing, and library workshops
            aimed at getting K-12 and undergraduate students excited about
            human spaceflight or mixed-reality technology. On the industry side, it means company
            tours, design reviews, and mentorship sessions with industry leaders.
          </p>
          <p>
            Our outreach team is also responsible for running social media,
            press outreach, video documentation, and this website, plus the
            point-of-view documentation that feeds our final video
            deliverable to NASA.
          </p>
          <p>
            If you represent an company, a government agency, the press, or an
            academic institution and want to explore a connection:
            sponsorship, mentorship, a facility tour, a guest talk, or
            something else, we'd love to hear from you.
          </p>
        </div>
      </Section>

      <Section id="contact" className="pb-24">
        <Eyebrow>Get In Touch</Eyebrow>
        <SectionTitle>Contact Us</SectionTitle>
        <a
          href={OUTREACH_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-cardinal-bright bg-cardinal px-6 py-3 font-hud text-lg uppercase tracking-wide text-white transition-colors hover:bg-cardinal-bright"
        >
          Open Contact Form <ExternalLink className="h-4 w-4" />
        </a>
      </Section>
    </>
  );
}
