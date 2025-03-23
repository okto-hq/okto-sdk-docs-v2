import { Idea, IdeaType, SkillLevel, Status, ContributionField } from "../types";
import Papa from 'papaparse';
import { SUBMISSION_URLS } from './constants';

// Special value for indicating a rolling deadline
const ROLLING_DEADLINE_VALUE = "rolling";

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
      
      // Parse fields - handle as an array
      const fields = row.fields ? 
        row.fields.split(',').map((f: string) => f.trim() as ContributionField) : 
        [row.field as ContributionField || "Development"]; // Fallback to single field if provided
      
      // Parse arrays (split by commas)
      const skillsRequired = row.skillsRequired 
        ? row.skillsRequired.split(',').map((s: string) => {
            const trimmed = s.trim();
            // Capitalize the first letter of each word
            return trimmed.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
            }) 
        : [];

      const outcomes = row.outcomes ? row.outcomes.split(',').map((s: string) => s.trim()) : [];
      const successCriteria = row.successCriteria ? row.successCriteria.split(',').map((s: string) => s.trim()) : [];
      const prerequisites = row.prerequisites ? row.prerequisites.split(',').map((s: string) => s.trim()) : [];
      
      // Parse timeline
      const timeline = row.timeline ? row.timeline.split(';').map((item: string) => {
        const [milestone, date, description] = item.split(':');
        return { milestone, date, description };
      }) : [];
      
      // Parse mentor (now without email)
      const mentorParts = row.mentor ? row.mentor.split(':') : ['', '', ''];
      
      // Get the appropriate URL based on type
      const type = (row.type as IdeaType) || "Project";
      const applicationUrl = SUBMISSION_URLS[type];

      // Process deadline - check for rolling deadline
      const deadlineValue = row.deadline?.toLowerCase().trim();
      const deadline = deadlineValue === ROLLING_DEADLINE_VALUE ? 
        "Rolling Deadline" : 
        row.deadline || new Date().toISOString().split('T')[0];
      
      return {
        id,
        title: row.title || "Untitled Idea",
        type,
        fields,
        description: row.description || "",
        skillsRequired,
        reward: parseInt(row.reward) || 0,
        deadline,
        status: (row.status as Status) || "Open",
        featured: row.featured === 'true' || false,
        outcomes,
        successCriteria,
        prerequisites,
        timeline,
        mentor: {
          name: mentorParts[0] || "TBD",
          title: mentorParts[1] || "Mentor",
          contactHours: mentorParts[2] || "TBD",
        },
        applicationUrl
      };
    } catch (error) {
      console.error("Error parsing CSV row:", row, error);
      throw error;
    }
  });
};