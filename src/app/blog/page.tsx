import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import AuthorAvatar from "@/components/AuthorAvatar";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Trojan SUITS 2027",
  description:
    "Updates from Trojan SUITS, USC's team for the NASA SUITS challenge.",
};

export default function BlogPage() {
  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Updates
        </h1>
      </Section>

      <Section className="pb-24">
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="panel-border flex gap-4 rounded-lg p-6">
              <AuthorAvatar name={post.author} />
              <div>
                <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-hud text-sm text-foreground">
                    {post.author}
                  </span>
                  <span className="font-hud text-sm uppercase tracking-wide text-gold/80">
                    {post.date}
                  </span>
                </div>
                <div className="space-y-4 text-lg text-foreground-muted">
                  {post.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
