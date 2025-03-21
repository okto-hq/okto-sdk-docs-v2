// types.ts
export type IdeaType = "Project" | "Bounty";
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
export type TimeCommitment = "Low" | "Medium" | "High";
export type Status = "Open" | "In Progress" | "Completed";
export type ContributionField = "Development" | "Content" | "Community";

export interface Idea {
  id: string;
  title: string;
  type: IdeaType;
  field: ContributionField; 
  description: string;
  skillLevel: SkillLevel;
  skillsRequired: string[];
  reward: number;
  deadline: string;
  timeCommitment: TimeCommitment;
  status: Status;
  featured: boolean;
  outcomes: string[];
  successCriteria: string[];
  prerequisites: string[];
  timeline: {
    milestone: string;
    date: string;
    description: string;
  }[];
  mentor: {
    name: string;
    title: string;
    contactHours: string;
    email: string;
  };
  applicationUrl: string;
}