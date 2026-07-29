export type RosterMember = {
  name: string;
  role: string;
  photo?: string;
};

export const roster: RosterMember[] = [
  { name: "Brian Lim", role: "Project Lead" },
  { name: "Prof. David Barnhart", role: "Faculty Advisor" },
];
