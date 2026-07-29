import type { Metadata } from "next";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Outreach | Trojan SUITS 2027",
  description:
    "Trojan SUITS' community and industry engagement mission — and how industry, government, and academic partners can connect with us.",
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
            Engagement Plan worth 20 of the proposal&apos;s 100 points — our
            outreach work is not an afterthought, it&apos;s core to the
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
            We also run the team&apos;s public presence: social media,
            press outreach, video documentation, and this website — plus the
            point-of-view documentation that feeds our final video
            deliverable to NASA.
          </p>
          <p>
            If you represent an industry partner, a government agency, or an
            academic institution and want to explore a connection —
            sponsorship, mentorship, a facility tour, a guest talk, or
            something else — we&apos;d love to hear from you.
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
        <div className="panel-border max-w-2xl rounded-lg p-6">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
