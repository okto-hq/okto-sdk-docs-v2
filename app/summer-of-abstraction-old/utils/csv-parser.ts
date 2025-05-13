import { Idea, IdeaType, Status, ContributionField } from "../types";
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
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            }) 
        : [];

      const outcomes = row.outcomes ? row.outcomes.split(',').map((s: string) => s.trim()) : [];
      const successCriteria = row.successCriteria ? row.successCriteria.split(',').map((s: string) => s.trim()) : [];
      const prerequisites = row.prerequisites ? row.prerequisites.split(',').map((s: string) => s.trim()) : [];
      
      // Parse timeline
      const timeline = row.timeline 
        ? row.timeline.split(';').map((item: string) => {
            const parts = item.split(':');
            const milestone = parts[0]?.trim() || '';
            const rawDate = parts[1]?.trim() || '';
            const description = parts[2]?.trim() || '';
            
            return {
                milestone,
                date: rawDate, // Pass through the raw date string without parsing
                description
            };
            }) 
        : [];
      
      // Parse mentor (now without email)
      const mentorParts = row.mentor ? row.mentor.split(':') : ['', '', ''];
      
      // Get the appropriate URL based on type
      const type = (row.type as IdeaType) || "Project";
      const defaultApplicationUrl = SUBMISSION_URLS[type];

      // SIMPLIFIED DEADLINE HANDLING: 
      // Just use the raw deadline string or "Rolling Deadline" as fallback
      // No date parsing/formatting to avoid "Invalid Date" issues
      let deadline = "Rolling Deadline";
      
      if (row.deadline) {
        const rawDeadline = String(row.deadline).trim();
        if (rawDeadline && !rawDeadline.toLowerCase().includes('roll')) {
          deadline = rawDeadline; // Use the raw string as-is
        }
      }
      
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
        applicationUrl: row.applicationUrl || defaultApplicationUrl
      };
    } catch (error) {
      console.error("Error parsing CSV row:", row, error);
      throw error;
    }
  });
};