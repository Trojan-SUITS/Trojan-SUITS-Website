export type SocialLink = {
  platform: "github" | "linkedin" | "instagram" | "x" | "website" | string;
  url: string;
};

export type RosterTier = "advisor" | "student";

export type RosterMember = {
  name: string;
  role: string;
  tier: RosterTier;
  photo?: string;
  links?: SocialLink[];

};

export const roster: RosterMember[] = [
  { name: "David A. Barnhart",
    photo: "/roster/david_barnhart.jpg", 
    role: "USC Space Engineering Research Center Director", 
    tier: "advisor", 
    links: [
      { platform: "website", url: "https://viterbi.usc.edu/directory/faculty/Barnhart/David" },
    ],
  },
  { name: "Carter Slocum", 
    photo: "/roster/carter_slocum.jpg",
    role: "CS Professor  Mixed Reality Researcher", 
    tier: "advisor", 
    links: [
      { platform: "website", url: "https://viterbigradadmission.usc.edu/doctoral/faculty-research/profile/?lname=Slocum&fname=Carter" },
    ],
  },
  {
    name: "Brian Lim",
    photo: "/roster/brian_lim.jpg",
    role: "Project Lead",
    tier: "student",
    links: [
      { platform: "github", url: "https://github.com/lim-at-infinity" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/lim-at-infinity/"},
    ],
  }
];
