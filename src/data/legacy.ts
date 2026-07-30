export type LegacyTeam = {
  id: string;
  year: string;
  teamName: string;
  photo?: string;
  description: string;
  pressReleaseUrl?: string;
};

export const legacyTeams: LegacyTeam[] = [
  {
    id: "fy2022",
    year: "FY2022",
    teamName: "Team Aegis",
    photo: "/legacy/nasa-suits-2022.jpeg",
    description:
      "Team Aegis built an augmented reality interface on Microsoft HoloLens 2 to help lunar astronauts track their location and rover position without GPS, and monitor vital signs like oxygen levels and heart rate, directly in their field of view. The interdisciplinary team, drawing from astronautical engineering, computer science, geology, and anthropology, reached the finalist round and tested their system at NASA's Johnson Space Center in May 2022.",
    pressReleaseUrl:
      "https://viterbischool.usc.edu/news/2022/04/usc-and-ua-students-are-developing-an-ar-interface-to-inform-lunar-astronauts-of-location-vitals/",
  },
  {
    id: "fy2027",
    year: "FY2027",
    teamName: "Trojan SUITS",
    description:
      "Trojan SUITS is USC's new team for FY2027, reviving the school's NASA SUITS effort at the graduate level. We're currently participating in this year's challenge, building a mixed-reality HUD, voice assistant, and rover interface for astronauts.",
  },
];
