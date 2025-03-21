// utils/csv-parser.ts
import { Idea, IdeaType, SkillLevel, TimeCommitment, ContributionField } from "../types";
import Papa from 'papaparse';
import { SUBMISSION_URLS } from './constants';

export const parseIdeasFromCSV = (csvText: string): Idea[] => {
  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true
  });

  if (results.errors && results.errors.length > 0) {
    console.error("CSV parsing errors:", results.errors);
  }

  // Filter out any instruction rows
  const validRows = (results.data as any[]).filter((row: any) => {
    const isInstructionRow = 
      !row.title || 
      row.title.includes('*') || 
      /^(optional|text|format|leave blank|comma-separated)/i.test(row.title);
      
    return !isInstructionRow;
  });

  // Generate sequential IDs for the ideas
  return validRows.map((row: any, index: number) => {
    try {
      // Generate a sequential ID if not provided
      const id = row.id || `idea-${index + 1}`;
      
      // Parse arrays (split by commas)
      const skillsRequired = row.skillsRequired ? row.skillsRequired.split(',').map((s: string) => s.trim()) : [];
      const outcomes = row.outcomes ? row.outcomes.split(',').map((s: string) => s.trim()) : [];
      const successCriteria = row.successCriteria ? row.successCriteria.split(',').map((s: string) => s.trim()) : [];
      const prerequisites = row.prerequisites ? row.prerequisites.split(',').map((s: string) => s.trim()) : [];
      
      // Parse timeline
      const timeline = row.timeline ? row.timeline.split(';').map((item: string) => {
        const [milestone, date, description] = item.split(':');
        return { milestone, date, description };
      }) : [];
      
      // Parse mentor
      const mentorParts = row.mentor ? row.mentor.split(':') : ['', '', '', ''];
      
      // Get the appropriate URL based on type
      const type = (row.type as IdeaType) || "Project";
      const applicationUrl = SUBMISSION_URLS[type];
      
      return {
        id,
        title: row.title || "Untitled Idea",
        type,
        field: (row.field as ContributionField) || "Development",
        description: row.description || "",
        skillLevel: (row.skillLevel as SkillLevel) || "Intermediate",
        skillsRequired,
        reward: parseInt(row.reward) || 0,
        deadline: row.deadline || new Date().toISOString().split('T')[0],
        timeCommitment: (row.timeCommitment as TimeCommitment) || "Medium",
        status: "Open", // Default status
        featured: false, // Not featuring any ideas
        outcomes,
        successCriteria,
        prerequisites,
        timeline,
        mentor: {
          name: mentorParts[0] || "TBD",
          title: mentorParts[1] || "Mentor",
          contactHours: mentorParts[2] || "TBD",
          email: mentorParts[3] || "contact@example.com"
        },
        applicationUrl
      };
    } catch (error) {
      console.error("Error parsing CSV row:", row, error);
      throw error;
    }
  });
};