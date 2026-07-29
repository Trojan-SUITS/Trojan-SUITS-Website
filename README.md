# Trojan SUITS 2027 — Website

Recruiting and information site for USC's team competing in the NASA SUITS
challenge. Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Pages

- **/** — Landing page (mission summary, project scopes, project lead & advisor)
- **/info** — Project info, two-part timeline (NASA schedule + internal phase
  plan), current roster
- **/roles** — Description of scopes/teams within the project, link to Google Form to apply to the project
- **/outreach** — Outreach mission plus a contact form for industry,
  government, and academic connections (any email domain)

## Content data

Team scopes, timeline milestones, and roster entries live in `src/data/` as
plain TypeScript objects — update those files to change copy without
touching page components. Roster photos can be added by dropping an image in
`public/` and setting the `photo` field in `src/data/roster.ts`; entries
without a photo fall back to an initials avatar.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Form submissions / email

Google Forms are used to collect applications and prevent non-USC emails from applying. This is primarily to safeguard against Discord bots and to collect member information necessary for the NASA proposal.