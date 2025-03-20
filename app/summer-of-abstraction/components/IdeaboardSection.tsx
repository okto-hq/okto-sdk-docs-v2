"use client"

import React, { useState, useMemo, useEffect } from "react";
import { IdeaboardTable } from "./IdeaboardTable";
import { ideasData } from "../data/ideas-data";
import { Idea } from "../types";

// Define contribution fields and their associated skills
const CONTRIBUTION_FIELDS = {
  all: "All Fields",
  development: "Development",
  content: "Content",
  community: "Community"
};

// Map skills to specific contribution fields
const FIELD_SKILLS_MAP = {
  development: [
    "React", "TypeScript", "JavaScript", "Node.js", "Go", "UI/UX", 
    "Component Design", "Data Visualization", "API Integration", 
    "CLI Development", "DevOps"
  ],
  content: [
    "Technical Writing", "Video Production", "Technical Communication", 
    "Content Creation", "Documentation", "Educational Design"
  ],
  community: [
    "Community Building", "Workshop Facilitation", "Event Planning", 
    "Social Media", "Community Management", "User Research"
  ]
};

export function IdeaboardSection() {
  // State for filters
  const [filters, setFilters] = useState({
    type: "all",
    field: "all",
    skill: "all"
  });

  // Skills based on selected field
  const [availableSkills, setAvailableSkills] = useState<string[]>([]);

  // Update available skills when field changes
  useEffect(() => {
    if (filters.field === "all") {
      setAvailableSkills([]);
    } else {
      setAvailableSkills(FIELD_SKILLS_MAP[filters.field as keyof typeof FIELD_SKILLS_MAP] || []);
    }
    // Reset skill selection when field changes
    setFilters(prev => ({ ...prev, skill: "all" }));
  }, [filters.field]);

  // Determine if an idea belongs to a specific field
  const getIdeaField = (idea: Idea): string => {
    const skillsSet = new Set(idea.skillsRequired);
    
    // Check if any development skills are present
    if (FIELD_SKILLS_MAP.development.some(skill => skillsSet.has(skill))) {
      return "development";
    }
    
    // Check if any content skills are present
    if (FIELD_SKILLS_MAP.content.some(skill => skillsSet.has(skill))) {
      return "content";
    }
    
    // Check if any community skills are present
    if (FIELD_SKILLS_MAP.community.some(skill => skillsSet.has(skill))) {
      return "community";
    }
    
    return "other";
  };

  // Apply filters to ideas
  const filteredIdeas = ideasData.filter((idea: Idea) => {
    const typeMatch = 
      filters.type === "all" || 
      idea.type === filters.type;
    
    const fieldMatch = 
      filters.field === "all" || 
      getIdeaField(idea) === filters.field;
    
    const skillMatch = 
      filters.skill === "all" || 
      idea.skillsRequired.includes(filters.skill);
    
    return typeMatch && fieldMatch && skillMatch;
  });

  // Handle filter changes
  const handleFilterChange = (
    filterType: "type" | "field" | "skill",
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      type: "all",
      field: "all",
      skill: "all",
    });
  };

  // Calculate counts for each type
  const projectCount = ideasData.filter((idea: Idea) => idea.type === "Project").length;
  const bountyCount = ideasData.filter((idea: Idea) => idea.type === "Bounty").length;

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-lg font-bold mb-2 md:mb-0 dark:text-white">Filter Ideas</h3>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md text-sm font-medium"
          >
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Type Filter */}
          <div>
            <label htmlFor="type-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Type:
            </label>
            <select
              id="type-filter"
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Types ({ideasData.length})</option>
              <option value="Project">Projects ({projectCount})</option>
              <option value="Bounty">Bounties ({bountyCount})</option>
            </select>
          </div>

          {/* Field of Contribution Filter */}
          <div>
            <label htmlFor="field-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Field of Contribution:
            </label>
            <select
              id="field-filter"
              value={filters.field}
              onChange={(e) => handleFilterChange("field", e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Fields</option>
              <option value="development">Development</option>
              <option value="content">Content</option>
              <option value="community">Community</option>
            </select>
          </div>

          {/* Specific Skills Filter */}
          <div>
            <label htmlFor="skill-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Skill:
            </label>
            <select
              id="skill-filter"
              value={filters.skill}
              onChange={(e) => handleFilterChange("skill", e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              disabled={filters.field === "all"}
            >
              <option value="all">
                {filters.field === "all" ? "Select a field first" : "All Skills"}
              </option>
              {availableSkills.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Unified Ideas Table */}
      <div>
        <h3 className="text-xl font-bold mb-4 dark:text-white">Available Opportunities</h3>
        <div className="mb-2">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredIdeas.length} available ideas matching your filters. Click on any idea to view details.
          </p>
        </div>
        <IdeaboardTable 
          ideas={filteredIdeas}
          emptyMessage="No ideas match your current filters. Try adjusting them to see more options."
          hideDeadlineAndTime={true}
        />
      </div>
    </div>
  );
}