"use client"


import React, { useState } from "react";
import { IdeaboardTable } from "./IdeaboardTable";
import { ideasData } from "../data/ideas-data";
import { Idea, IdeaType, SkillLevel, TimeCommitment } from "../types";

export function IdeaboardSection() {
  // State for filters
  const [filters, setFilters] = useState({
    type: "all",
    skillLevel: "all",
    timeCommitment: "all",
  });

  // Apply filters to ideas
  const filteredIdeas = ideasData.filter((idea: Idea) => {
    const typeMatch = 
      filters.type === "all" || 
      idea.type === filters.type;
    
    const skillMatch = 
      filters.skillLevel === "all" || 
      idea.skillLevel === filters.skillLevel;
    
    const timeMatch = 
      filters.timeCommitment === "all" || 
      idea.timeCommitment === filters.timeCommitment;
    
    return typeMatch && skillMatch && timeMatch;
  });

  // Get featured ideas
  const featuredIdeas = filteredIdeas.filter(
    (idea: Idea) => idea.featured
  );

  // Handle filter changes
  const handleFilterChange = (
    filterType: "type" | "skillLevel" | "timeCommitment",
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
      skillLevel: "all",
      timeCommitment: "all",
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

          {/* Skill Level Filter */}
          <div>
            <label htmlFor="skill-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Skill Level:
            </label>
            <select
              id="skill-filter"
              value={filters.skillLevel}
              onChange={(e) => handleFilterChange("skillLevel", e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Time Commitment Filter */}
          <div>
            <label htmlFor="time-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Time Commitment:
            </label>
            <select
              id="time-filter"
              value={filters.timeCommitment}
              onChange={(e) => handleFilterChange("timeCommitment", e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">Any Commitment</option>
              <option value="Low">Low (0-5 hrs/week)</option>
              <option value="Medium">Medium (5-10 hrs/week)</option>
              <option value="High">High (10+ hrs/week)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Ideas */}
      {featuredIdeas.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4 dark:text-white">Featured Ideas</h3>
          <IdeaboardTable ideas={featuredIdeas} featured={true} />
        </div>
      )}

      {/* Type-specific sections */}
      {filters.type === "all" && (
        <>
          {/* Projects Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold mr-2">P</div>
              <h3 className="text-xl font-bold dark:text-white">Projects</h3>
            </div>
            <div className="mb-2 pl-10">
              <p className="text-gray-600 dark:text-gray-300">
                Projects require a proposal and go through an approval process. They typically have a longer timeframe and periodic payments.
              </p>
            </div>
            <IdeaboardTable 
              ideas={filteredIdeas.filter((idea: Idea) => idea.type === "Project")}
              emptyMessage="No projects match your current filters. Try adjusting them to see more options."
            />
          </div>

          {/* Bounties Section */}
          <div>
            <div className="flex items-center mb-4 mt-8">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold mr-2">B</div>
              <h3 className="text-xl font-bold dark:text-white">Bounties</h3>
            </div>
            <div className="mb-2 pl-10">
              <p className="text-gray-600 dark:text-gray-300">
                Bounties can be worked on immediately with no proposal required. Winners are selected and paid in monthly review cycles.
              </p>
            </div>
            <IdeaboardTable 
              ideas={filteredIdeas.filter((idea: Idea) => idea.type === "Bounty")}
              emptyMessage="No bounties match your current filters. Try adjusting them to see more options."
            />
          </div>
        </>
      )}

      {/* All Ideas when filtered */}
      {filters.type !== "all" && (
        <div>
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {filters.type === "Project" ? "Projects" : "Bounties"}
          </h3>
          <IdeaboardTable ideas={filteredIdeas} />
        </div>
      )}
    </div>
  );
}