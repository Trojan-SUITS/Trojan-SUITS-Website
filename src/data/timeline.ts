export type NasaMilestone = {
  date: string;
  milestone: string;
  done?: boolean;
};

// Sourced from nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students
// Based on last season's dates — subject to change once 2026-27 guidelines are formally
// published (late August 2026).
export const nasaSchedule: NasaMilestone[] = [
  { date: "Late Aug 2026", milestone: "Proposal Submission Opens / Guidelines Released", done: true },
  { date: "~Sep 11, 2026", milestone: "Info Session 1" },
  { date: "~Sep 17, 2026", milestone: "JSC Challenges Joint Info Session" },
  { date: "~Sep 23, 2026", milestone: "Info Session 2" },
  { date: "~Oct 2, 2026", milestone: "Info Session 3 + Letter of Intent Due" },
  { date: "~Oct 14, 2026", milestone: "Info Session 4" },
  { date: "~Oct 30, 2026", milestone: "Proposals Due via NASA STEM Gateway" },
  { date: "~Jan 2027", milestone: "Selection Announcement" },
  { date: "~Feb 2027", milestone: "Team Introduction Video Due" },
  { date: "~Mar 2027", milestone: "GitHub Upload" },
  { date: "~Apr 2027", milestone: "Virtual Software Design Review" },
  { date: "~May 2027", milestone: "Prototype Test Week — Johnson Space Center, Houston TX" },
];

export type Phase = {
  id: string;
  phase: string;
  timeframe: string;
  actions: string[];
  current?: boolean;
};

export const internalPhases: Phase[] = [
  {
    id: "phase-0",
    phase: "Phase 0 — Pre-Season",
    timeframe: "June 2026 – Aug 2026",
    current: true,
    actions: [
      "Contacted Prof. Barnhart (faculty advisor confirmed)",
      "Contacted NASA SUITS program",
      "Reach out to additional faculty (Reisman, Slocum, ICT MxR Lab, Desurvire)",
      "Set up team infrastructure: Notion workspace, Discord server, website",
      "Research HMD / tech stack options pending 2027 RFP",
      "Finalize project concept and team structure document",
    ],
  },
  {
    id: "phase-1",
    phase: "Phase 1 — Team Formation",
    timeframe: "Aug 2026 – Sep 2026",
    actions: [
      "RFP drops (late Aug) — read and scope immediately",
      "Hold interest meeting on campus (open to all departments)",
      "Aggressive cross-department recruiting via listservs, Discord, Reddit",
      "Lock remaining faculty advisors",
      "Finalize tech stack based on 2027 mission requirements",
      "Attend all NASA info sessions (Sept–Oct)",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2 — Proposal",
    timeframe: "Sep 2026 – Oct 2026",
    actions: [
      "Draft all proposal sections (Design Desc, AI, CONOPS, HITL, Feasibility, Engagement, Schedule)",
      "Secure institutional endorsement letter from dept. chair",
      "Secure ≥2 signed industry engagement commitments (Anduril, Aerospace Corp, Arkisys)",
      "Build conceptual UI wireframes for the proposal",
      "Submit Letter of Intent (~Oct 2, 2026)",
      "Submit full proposal via NASA STEM Gateway (~Oct 30, 2026)",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3 — Development",
    timeframe: "Nov 2026 – Apr 2027",
    actions: [
      "Team onboarding and sub-team orientation",
      "Prototype HUD build (Unity/Unreal, MRTK3, TSS telemetry pipeline)",
      "Co-located multiplayer prototype (shared spatial anchors proof-of-concept)",
      "AI voice assistant pipeline (Whisper → LLM → Piper)",
      "Submit Team Introduction Video (~Feb 2027)",
      "Submit GitHub Upload #1 (~Mar 2027)",
      "HITL test cycles — iterate with Design team",
      "Outreach events (K-12 visits, industry tours, AWE attendance)",
      "Virtual Software Design Review (~Apr 2027)",
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4 — Test Week",
    timeframe: "May 2027",
    actions: [
      "Travel to Johnson Space Center, Houston TX",
      "Live demo to NASA engineers and evaluators",
      "8 onsite: Brian (Project Lead) + 7 sub-team leads",
      "Faculty advisor (Prof. Barnhart) accompanies separately",
    ],
  },
  {
    id: "post-project",
    phase: "Post-Project",
    timeframe: "June 2027+",
    actions: [
      "Submit white paper (final technical report)",
      "Present at SIGGRAPH 2027 (Anaheim, CA) — August",
      "Submit to IEEE ISMAR, ACM CHI, or ACM/IEEE HRI based on HITL findings",
      "Begin planning for potential FY28 participation",
    ],
  },
];
