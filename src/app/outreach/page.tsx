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
            NASA SUITS grades every team on a Community &amp; Industry
            Engagement Plan worth 20 of the proposal's 100 points, our
            outreach work is not an afterthought, it's core to the
            mission. We plan and execute at least four documented engagement
            events each year, with at least one community event and one
            industry event.
          </p>
          <p>
            On the education side, that means presentations and workshops at
            academic institutions, curriculum design, and library workshops
            aimed at getting K-12 and undergraduate students excited about
            human spaceflight. On the industry side, it means company
            tours, mentorship arrangements, and sponsor relationships with
            organizations like Anduril, Aerospace Corporation, and Arkisys.
          </p>
          <p>
            We also run the team's public presence: social media,
            press outreach, video documentation, and this website, plus the
            point-of-view documentation that feeds our final video
            deliverable to NASA.
          </p>
          <p>
            If you represent an industry partner, a government agency, or an
            academic institution and want to explore a connection:
            sponsorship, mentorship, a facility tour, a guest talk, or
            something else, we'd love to hear from you.
          </p>
        </div>
      </Section>

      <Section id="contact" className="pb-24">
        <Eyebrow>Get In Touch</Eyebrow>
        <SectionTitle>Contact Us</SectionTitle>
        <p className="mb-8 max-w-2xl text-foreground-muted">
          For industry, government agency, or academic connections. Any
          email domain is welcome here.
        </p>
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
