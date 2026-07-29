# Trojan SUITS 2027 — Website

Recruiting and information site for USC's team competing in the NASA SUITS
challenge. Built with Next.js 16 (App Router, Turbopack), TypeScript, and
Tailwind CSS v4.

## Pages

- **/** — Landing page (mission summary, project scopes, project lead & advisor)
- **/info** — Project info, two-part timeline (NASA schedule + internal phase
  plan), current roster
- **/roles** — Eligibility, the eight project-scope cards, faculty/industry
  advisor card, and an open-role card. Each card expands into an interest
  form. Student-role forms require a `@usc.edu` email (enforced client-side
  and server-side); the advisor form accepts any email domain.
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

Both the role-interest forms and the outreach contact form are Server
Actions (`src/app/actions.ts`) that validate input with `zod` and, for
student roles, enforce the `@usc.edu` domain server-side regardless of what
the client sends.

To actually receive submissions by email, copy `.env.example` to `.env.local`
and set:

- `RESEND_API_KEY` — an API key from [resend.com](https://resend.com)
- `RECRUITING_EMAIL` — the inbox that should receive submissions
- `EMAIL_FROM` — a verified sender address/domain in Resend

Without `RESEND_API_KEY` set, submissions still validate correctly but are
only logged to the server console (`[email not configured] ...`) — useful
for local development, but set the key before this goes live.

## Deployment

This is a standard Next.js app with Server Actions, so it deploys cleanly to
Vercel (recommended) or any Node hosting that supports Next.js. Set the same
environment variables listed above in your hosting provider's dashboard.
