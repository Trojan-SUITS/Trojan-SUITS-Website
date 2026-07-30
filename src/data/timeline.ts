export type NasaMilestone = {
  date: string;
  milestone: string;
  done?: boolean;
};

// Sourced from nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students
// Based on last season's dates, subject to change once 2026-27 guidelines are formally
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
  { date: "~May 2027", milestone: "Prototype Test Week @ Johnson Space Center, Houston TX" },
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
    phase: "Phase 0: Pre-Season",
    timeframe: "June 2026 – Aug 2026",
    current: true,
    actions: [
      "Recruit faculty advisors",
      "Build initial team infrastructure (Team Communication/Discord, Website, Google Drive, Notion/Task Manager)",
      "Officially become recognized as a USC/Viterbi/SERC affiliated organization",
      "Make some flyers and info-sheets to prepare for the upcoming recruitment drive",
    ],
  },
  {
    id: "phase-1",
    phase: "Phase 1: Team Formation",
    timeframe: "Aug 2026 – Sep 2026",
    actions: [
      "Scope out the new FY2027 NASA SUITS Design Challenge once it drops in late august",
      "Hold interest meeting on campus, table during Involvement Day",
      "Hold recruitment drive where we try to build out all our teams",
      "Reach out to more faculty related to different team scopes, see if any are interested in advising",
      "Finalize tech stack based on 2027 mission requirements",
      "Brainstorm ideas for the project",
      "Figure out what we want to build, what equipment we need, and how much it will cost",
      "Get the word out!!!",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2: Proposal",
    timeframe: "Sep 2026 – Oct 2026",
    actions: [
      "Draft all proposal sections (Technical Design, AI Involvment, CONOPS, HITL, Feasibility, Engagement, Schedule)",
      "Secure institutional endorsement letter from dept. chair",
      "Secure participation letters from all students & advisors",
      "Plan at least 2 educational outreach events & 2 industry outreach events",
      "Design conceptual UI wireframes for the proposal",
      "Submit Letter of Intent (~Oct 2, 2026)",
      "Submit full proposal via NASA STEM Gateway (~Oct 30, 2026)",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3: Development",
    timeframe: "Nov 2026 – Apr 2027",
    actions: [
      "Team onboarding and sub-team orientation",
      "Final brainstorming, lock in technical ideas and how we will accomplish them", 
      "Create milestones/deliverables for each sub-team)",
      "Develop HUD, AI assistant + other technical ideas born from brainstorming sessions",
      "Conduct HITL test cycles, bi-weekly design reviews with the team",
      "Conduct promised outreach events",
      "Submit Team Introduction Video (~Feb 2027)",
      "Submit GitHub Upload #1 (~Mar 2027)",
      "Virtual Software Design Review (~Apr 2027)",
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4: Test Week",
    timeframe: "May 2027",
    actions: [
      "Travel to Johnson Space Center, Houston TX",
      "Live demo to NASA engineers and evaluators",
      "Decide who the 8 onsite members will be + onsite advisor",
    ],
  },
  {
    id: "post-project",
    phase: "Post-Project",
    timeframe: "June 2027+",
    actions: [
      "Submit white paper (final technical report) to NASA",
      "Consider presenting at conferences or on-campus symposiums",
      "Submit whitepaper to scientific publications",
      "Begin planning for potential FY28 participation",
    ],
  },
];

export type PhaseGroup = {
  phase: Phase;
  nasaMilestones: NasaMilestone[];
};

// Maps each internal phase to the NASA milestones that fall within its
// timeframe, so the two timelines can be rendered side-by-side in aligned
// rows. Indices are positional against nasaSchedule/internalPhases above:
// re-check these slices if either array's entries change.
const nasaMilestonesByPhase: NasaMilestone[][] = [
  [], // Phase 0, Pre-Season: before the FY27 RFP drops
  nasaSchedule.slice(0, 4), // Phase 1 (Proposal Submission Opens .. Info Session 2)
  nasaSchedule.slice(4, 7), // Phase 2 (Info Session 3 + LOI .. Proposals Due)
  nasaSchedule.slice(7, 11), // Phase 3 (Selection Announcement .. Virtual SDR)
  nasaSchedule.slice(11, 12), // Phase 4 (Prototype Test Week)
  [], // Post-Project: after the official NASA schedule ends
];

export const phaseGroups: PhaseGroup[] = internalPhases.map((phase, i) => ({
  phase,
  nasaMilestones: nasaMilestonesByPhase[i] ?? [],
}));
