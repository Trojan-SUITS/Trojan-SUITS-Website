import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import AuthorAvatar from "@/components/AuthorAvatar";
import { blogPosts, type BlogPost } from "@/data/blog";
import { formatPostDate, monthLabel, monthSlug } from "@/lib/blogDate";

export const metadata: Metadata = {
  title: "Blog | Trojan SUITS 2027",
  description:
    "Updates from Trojan SUITS, USC's team for the NASA SUITS challenge.",
};

function groupByMonth(posts: BlogPost[]) {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const groups: { label: string; slug: string; posts: BlogPost[] }[] = [];

  for (const post of sorted) {
    const label = monthLabel(post.date);
    const last = groups[groups.length - 1];
    if (last?.label === label) {
      last.posts.push(post);
    } else {
      groups.push({ label, slug: monthSlug(post.date), posts: [post] });
    }
  }

  return groups;
}

export default function BlogPage() {
  const months = groupByMonth(blogPosts);

  return (
    <>
      <Section className="pt-16 md:pt-20">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="font-display text-3xl text-foreground md:text-5xl">
          Updates
        </h1>
      </Section>

      <Section className="pb-24">
        <div className="mb-10 flex flex-wrap gap-2">
          {months.map((month) => (
            <a
              key={month.slug}
              href={`#${month.slug}`}
              className="rounded-full border border-space-border-bright px-4 py-2 font-hud text-sm uppercase tracking-wide text-foreground transition-colors hover:border-hud-cyan hover:text-gold"
            >
              {month.label}
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {months.map((month) => (
            <div key={month.slug} id={month.slug} className="scroll-mt-24">
              <h2 className="mb-4 font-hud text-sm uppercase tracking-wide text-foreground-muted">
                {month.label}
              </h2>
              <div className="space-y-4">
                {month.posts.map((post) => (
                  <div
                    key={post.id}
                    className="panel-border flex gap-4 rounded-lg p-6"
                  >
                    <AuthorAvatar name={post.author} />
                    <div>
                      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-hud text-sm text-foreground">
                          {post.author}
                        </span>
                        <span className="font-hud text-sm uppercase tracking-wide text-gold/80">
                          {formatPostDate(post.date)}
                        </span>
                      </div>
                      <div className="space-y-4 text-lg text-foreground-muted">
                        {post.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
