import type { ReactNode } from "react";

export type BlogPost = {
  id: string;
  date: string; // ISO format, e.g. "2026-07-30" — powers both the display date and the month grouping
  author: string; // must match a `name` in src/data/roster.ts
  content: ReactNode; // plain text, or full JSX: <img>, custom classNames, etc.
};

export const blogPosts: BlogPost[] = [
  {
    id: "2026-07-30-recruiting",
    date: "2026-07-30",
    author: "Brian Lim",
    content: (
      <p>
        Hey everyone! My name is Brian Lim, and I'm an MSCS student at USC.
        I'm the lead for this project and I'm excited to kick off this
        year's iteration of NASA SUITS. We are currently recruiting students
        and advisors from a whole variety of departments and need to get the
        word out! If you know anyone who might be interested in joining our
        team, feel free to share this website. For anyone external checking
        this project out, we welcome you and invite you to follow along as
        we make robots, develop user interfaces, and research how we could
        feasibly put our ideas into space.
      </p>
    ),
  },
];
