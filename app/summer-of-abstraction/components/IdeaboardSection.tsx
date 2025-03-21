"use client"

import React, { useState, useEffect, useMemo } from "react";
import { IdeaboardTable } from "./IdeaboardTable";
import { ideasData } from "../data/ideas-data";
import { Idea } from "../types";

export function IdeaboardSection() {
  // State for filters
  const [filters, setFilters] = useState({
    type: "all",
    field: "all",
  });

  // State for multi-select skills - now using a custom UI
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Calculate all available skills for each field dynamically from the idea data
  const fieldSkillsMap = useMemo(() => {
    const map: Record<string, Set<string>> = {
      Development: new Set(),
      Content: new Set(),
      Community: new Set()
    };
    
    // Populate the map based on actual ideas and their fields
    ideasData.forEach((idea: Idea) => {
      const field = idea.field;
      if (field in map) {
        idea.skillsRequired.forEach(skill => {
          map[field].add(skill);
        });
      }
    });
    
    // Convert sets to sorted arrays
    return {
      Development: Array.from(map.Development).sort(),
      Content: Array.from(map.Content).sort(),
      Community: Array.from(map.Community).sort()
    };
  }, []);

  // Available skills based on selected field
  const availableSkills = useMemo(() => {
    if (filters.field === "all") {
      return [];
    }
    return fieldSkillsMap[filters.field as keyof typeof fieldSkillsMap] || [];
  }, [filters.field, fieldSkillsMap]);

  // Reset selected skills when field changes
  useEffect(() => {
    setSelectedSkills([]);
  }, [filters.field]);

  // Apply filters to ideas
  const filteredIdeas = useMemo(() => {
    return ideasData.filter((idea: Idea) => {
      const typeMatch = 
        filters.type === "all" || 
        idea.type === filters.type;
      
      const fieldMatch = 
        filters.field === "all" || 
        idea.field === filters.field;
      
      // Check if any of the selected skills match the idea's required skills
      const skillMatch = 
        selectedSkills.length === 0 || 
        idea.skillsRequired.some(skill => selectedSkills.includes(skill));
      
      return typeMatch && fieldMatch && skillMatch;
    });
  }, [filters.type, filters.field, selectedSkills]);

  // Handle filter changes
  const handleFilterChange = (
    filterType: "type" | "field",
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Handle skill selection toggle
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => {
      // If already selected, remove it
      if (prev.includes(skill)) {
        return prev.filter(s => s !== skill);
      }
      // Otherwise, add it
      return [...prev, skill];
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      type: "all",
      field: "all",
    });
    setSelectedSkills([]);
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
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
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
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
            >
              <option value="all">All Fields</option>
              <option value="Development">Development</option>
              <option value="Content">Content</option>
              <option value="Community">Community</option>
            </select>
          </div>

          {/* Custom Skills Filter */}
          <div>
            <label htmlFor="skills-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Skill: {selectedSkills.length > 0 ? `(${selectedSkills.length} selected)` : ""}
            </label>
            <div 
              className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 h-10 flex items-center text-gray-500 dark:text-gray-300 cursor-pointer relative"
              onClick={() => {
                // Only show the dropdown if a field is selected
                if (filters.field !== "all") {
                  const dropdown = document.getElementById("skills-dropdown");
                  if (dropdown) {
                    dropdown.classList.toggle("hidden");
                  }
                }
              }}
            >
              {filters.field === "all" ? (
                "Select a field first"
              ) : selectedSkills.length === 0 ? (
                "Select skills"
              ) : (
                selectedSkills.join(", ")
              )}

              {/* Dropdown panel for skills selection */}
              <div 
                id="skills-dropdown" 
                className="absolute left-0 top-full mt-1 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 max-h-40 overflow-y-auto hidden"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing dropdown
              >
                {availableSkills.length === 0 ? (
                  <div className="p-2 text-gray-500 dark:text-gray-400">No skills available</div>
                ) : (
                  availableSkills.map((skill) => (
                    <div 
                      key={skill} 
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
                      onClick={() => toggleSkill(skill)}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedSkills.includes(skill)} 
                        onChange={() => {}} // Handled by parent click
                        className="mr-2"
                      />
                      {skill}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Ideas Table */}
      <div>
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

      {/* Close dropdown when clicking outside */}
      <div 
        className="fixed inset-0 z-0 hidden" 
        id="click-outside-layer"
        onClick={() => {
          const dropdown = document.getElementById("skills-dropdown");
          if (dropdown) {
            dropdown.classList.add("hidden");
          }
          document.getElementById("click-outside-layer")?.classList.add("hidden");
        }}
      ></div>
    </div>
  );
}

// Add this code to handle closing the dropdown when clicking outside
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById("skills-dropdown");
    const clickOutsideLayer = document.getElementById("click-outside-layer");
    
    if (dropdown && !dropdown.classList.contains("hidden")) {
      clickOutsideLayer?.classList.remove("hidden");
    }
  });
}