export type DomainRestriction = "usc" | "any";

export type Team = {
  slug: string;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  specialties: string[];
  whoFitsHere: string;
  proposalSections?: string;
  domainRestriction: DomainRestriction;
};

export const teams: Team[] = [
  {
    slug: "hud",
    emoji: "🥽",
    name: "Heads-Up Display (HUD)",
    tagline: "Builds the AR application on the headset.",
    description:
      "Team in charge of developing the HUD system for the astronaut, addressing the main mission of the design challenge.",
    specialties: [
      "Virtual/Augmented/Mixed Reality",
      "Game Development",
      "Networking (multi-HMD scenarios)",
      "Backend / Telemetry",
    ],
    whoFitsHere:
      "Unity/Unreal developers, XR engineers, multiplayer/networking engineers, graphics programmers, backend devs",
    proposalSections: "Design Description (25 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "ai",
    emoji: "🤖",
    name: "AI",
    tagline: "Voice assistant and rover AI logic.",
    description:
      "Researches, plans, and develops ways to utilize AI/LLMs into the project. Collaborates with HUD & Robotics teams.",
    specialties: [
      "Voice Recognition / AI Voice Assistant",
      "Computer Vision",
      "LLM Utilization",
    ],
    whoFitsHere:
      "ML/AI engineers, NLP engineers, Python developers, robotics engineers (autonomy logic)",
    proposalSections: "AI Integration (15 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "robotics",
    emoji: "🦾",
    name: "Robotics",
    tagline: "Bridges astronauts and autonomous assets.",
    description:
      "Researches ways to utilize robotics in the project, collaborating with AI & HUD teams to bridge communication between astronauts/HMD users and robots/rovers/drones. May involve fabricating our own robots/rovers/drones.",
    specialties: [
      "Robotics Software",
      "Electronics",
      "Fabrication",
      "Human-to-Robot Communication",
    ],
    whoFitsHere:
      "Robotics engineers, computer vision developers, controls engineers, embedded/systems programmers",
    proposalSections: "Design Description (25 pts) + AI Integration (15 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "design",
    emoji: "🎨",
    name: "Design",
    tagline: "Visual language for the HUD, props, and brand.",
    description:
      "Constructs the design language across the HUD, physical props, team branding, and the website. Frees the development team to focus on technical scope; cross-team collaboration is expected. Mindful of human-factors — building UX that supports, not hinders, astronauts during missions.",
    specialties: [
      "HUD visual language: information hierarchy, typography, color, legibility",
      "Robot / suit aesthetics",
      "Team identity: logo, branding, color palette",
    ],
    whoFitsHere:
      "UX/interaction designers, visual/graphic designers, industrial designers, architects, fine arts students",
    proposalSections: "Wireframes/UI visuals in Design Description (25 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "space-feasibility",
    emoji: "🧑‍🚀",
    name: "Space Feasibility",
    tagline: "Real-world feasibility research for EVA use.",
    description:
      "Responsible for researching how feasible our system would be in real conditions in space, planning infrastructure that NASA could realistically implement to bring mixed reality/AI into space. Stretch goal: fabrication of a helmet/HMD hybrid capable of displaying a HUD or AR holograms while still operable in space.",
    specialties: [
      "EVA Environment Research",
      "Mixed Reality / HUD-HMD / Optics Research",
      "Materials",
      "Electronics",
      "Helmet Fabrication",
    ],
    whoFitsHere:
      "Astronautical engineering students, materials science, ECE (hardware/optics), mechanical engineering (prop fabrication), physics students",
    proposalSections: "Feasibility (10 pts) · CONOPS (10 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "science",
    emoji: "🧪",
    name: "Science",
    tagline: "Human-in-the-loop testing and research output.",
    description:
      "Human-in-the-loop testing and the written research output. Records how real people interact with our system, what we learn, and how that feeds back into design.",
    specialties: [
      "HITL Test Design: schedule, protocol, metrics/measures, subject pools, safety measures",
      "Development-Test Coordinator",
      "Technical Writer / Documentation",
      "CONOPS (Concept of Operations) Designer",
      "Researcher: finds papers relevant to the project",
    ],
    whoFitsHere:
      "Psychology/cognitive science students, human factors specialists, industrial & systems engineers, data analysts, strong technical writers",
    proposalSections:
      "HITL Testing Plan (10 pts) · CONOPS (10 pts) · Technical References (5 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "outreach",
    emoji: "📣",
    name: "Outreach",
    tagline: "Public presence and the community/industry engagement plan.",
    description:
      "The team's public presence and the graded engagement plan required by NASA. Plans at least 4 documented engagement events for the proposal (at least 1 community, at least 1 industry).",
    specialties: [
      "Education: presentations/workshops at academic institutions, curriculum design, library workshops",
      "Industry connect: company tours, mentorship arrangements, sponsor relationships",
      "Media: social media presence, press outreach, video documentation, website content",
    ],
    whoFitsHere:
      "Communications/journalism students, marketing/business students, education students, social media managers, documentary/film students",
    proposalSections: "Community & Industry Engagement (20 pts)",
    domainRestriction: "usc",
  },
  {
    slug: "project-management",
    emoji: "🧐",
    name: "Project Management",
    tagline: "Keeps the team on track toward every deliverable.",
    description:
      "Ensures the project goes smoothly and we meet deliverables at a consistent pace. Likely will have a lead picked from every team, with some members specializing solely in planning and coordination. Leads will not be selected until teams have grown and the proposal has been submitted.",
    specialties: [
      "Inter-Team Task Management",
      "Communication with Team Lead, Faculty, and Team Members",
      "Documentation & resource availability",
      "Recruitment drive support",
    ],
    whoFitsHere:
      "Organized communicators from any discipline — project management, business, or engineering backgrounds all fit",
    proposalSections: "Project Schedule (5 pts)",
    domainRestriction: "usc",
  },
];

export const advisorRole = {
  slug: "advisor",
  emoji: "🎓",
  name: "Faculty / Industry Advisor",
  tagline: "Guide the team with domain expertise.",
  description:
    "We're looking for additional faculty, research staff, and industry professionals to advise across our technical scopes — mixed reality, robotics, AI, human factors, and aerospace systems. Advisors can be USC faculty, outside academics, or industry professionals; any email domain is welcome.",
  specialties: [
    "Mixed Reality / AR-VR",
    "Robotics & Autonomy",
    "AI / Machine Learning",
    "Human Factors / HITL Research",
    "Aerospace & EVA Systems",
  ],
  whoFitsHere:
    "Faculty, research staff, and industry professionals willing to offer periodic mentorship, technical review, or connections",
  domainRestriction: "any" as DomainRestriction,
};

export const openRole = {
  slug: "open-role",
  emoji: "✨",
  name: "Open Role",
  tagline: "Not sure where you fit? Tell us anyway.",
  description:
    "This is not a CS-only project — NASA scores us on human testing, design, and community engagement, not just code. If you think you can contribute but don't see a specialty above that matches you, tell us what you bring and we'll help find a place for you.",
  specialties: [],
  whoFitsHere: "Any USC student, any year, any program",
  domainRestriction: "usc" as DomainRestriction,
};
