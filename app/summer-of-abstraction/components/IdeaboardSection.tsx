"use client"

import React, { useState, useEffect, useMemo } from "react";
import { IdeaboardTable } from "./IdeaboardTable";
import { ideasData } from "../data/ideas-data";
import { Idea, ContributionField } from "../types";

export function IdeaboardSection() {
  // State for filters
  const [filters, setFilters] = useState({
    type: "all",
  });
  
  // State for multi-select fields and skills
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
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
      idea.fields.forEach(field => {
        if (field in map) {
          idea.skillsRequired.forEach(skill => {
            map[field].add(skill);
          });
        }
      });
    });
    
    // Convert sets to sorted arrays
    return {
      Development: Array.from(map.Development).sort(),
      Content: Array.from(map.Content).sort(),
      Community: Array.from(map.Community).sort()
    };
  }, []);

  // Get all available fields
  const availableFields = useMemo(() => {
    return Object.keys(fieldSkillsMap);
  }, [fieldSkillsMap]);

  // Available skills based on selected fields
  const availableSkills = useMemo(() => {
    if (selectedFields.length === 0) {
      return [];
    }
    
    // Combine skills from all selected fields
    const skillsSet = new Set<string>();
    selectedFields.forEach(field => {
      // Use type assertion to tell TypeScript this is a valid key
      if (field in fieldSkillsMap) {
        const fieldKey = field as keyof typeof fieldSkillsMap;
        fieldSkillsMap[fieldKey]?.forEach((skill: string) => skillsSet.add(skill));
      }
    });
    
    return Array.from(skillsSet).sort();
  }, [selectedFields, fieldSkillsMap]);

  // Reset selected skills when selected fields change
  useEffect(() => {
    setSelectedSkills([]);
  }, [selectedFields]);

  // Apply filters to ideas
  const filteredIdeas = useMemo(() => {
    return ideasData.filter((idea: Idea) => {
      const typeMatch = 
        filters.type === "all" || 
        idea.type === filters.type;
      
      const fieldMatch = 
        selectedFields.length === 0 || 
        // Check if ANY of the idea's fields are in the selected fields
        idea.fields.some(field => selectedFields.includes(field));
      
      // Check if any of the selected skills match the idea's required skills
      const skillMatch = 
        selectedSkills.length === 0 || 
        idea.skillsRequired.some(skill => selectedSkills.includes(skill));
      
      return typeMatch && fieldMatch && skillMatch;
    });
  }, [filters.type, selectedFields, selectedSkills]);

  // Handle type filter change
  const handleTypeChange = (value: string) => {
    setFilters({ type: value });
  };

  // Toggle field selection
  const toggleField = (field: string) => {
    setSelectedFields(prev => {
      // If already selected, remove it
      if (prev.includes(field)) {
        return prev.filter(f => f !== field);
      }
      // Otherwise, add it
      return [...prev, field];
    });
  };

  // Toggle skill selection
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
    setFilters({ type: "all" });
    setSelectedFields([]);
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
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white h-10"
            >
              <option value="all">All Types ({ideasData.length})</option>
              <option value="Project">Projects ({projectCount})</option>
              <option value="Bounty">Bounties ({bountyCount})</option>
            </select>
          </div>

          {/* Field of Contribution Filter - Multi-select */}
          <div>
            <label htmlFor="fields-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
              Field of Contribution: {selectedFields.length > 0 ? `(${selectedFields.length} selected)` : ""}
            </label>
            <div 
              className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 h-10 flex items-center text-gray-500 dark:text-gray-300 cursor-pointer relative"
              onClick={() => {
                const dropdown = document.getElementById("fields-dropdown");
                if (dropdown) {
                  dropdown.classList.toggle("hidden");
                }
              }}
            >
              {selectedFields.length === 0 ? (
                "All Fields"
              ) : (
                selectedFields.join(", ")
              )}

              {/* Dropdown panel for field selection */}
              <div 
                id="fields-dropdown" 
                className="absolute left-0 top-full mt-1 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10 max-h-40 overflow-y-auto hidden"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing dropdown
              >
                {availableFields.map((field) => (
                  <div 
                    key={field} 
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center"
                    onClick={() => toggleField(field)}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedFields.includes(field)} 
                      onChange={() => {}} // Handled by parent click
                      className="mr-2"
                    />
                    {field}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Filter - Multi-select */}
            <div>
              <label htmlFor="skills-filter" className="block text-sm font-medium mb-1 dark:text-gray-300">
                Skill: {selectedSkills.length > 0 ? `(${selectedSkills.length} selected)` : ""}
              </label>
              <div 
                className="w-full border rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 h-10 flex items-center text-gray-500 dark:text-gray-300 cursor-pointer relative"
                onClick={() => {
                  // Only show the dropdown if fields are selected
                  if (selectedFields.length > 0) {
                    const dropdown = document.getElementById("skills-dropdown");
                    if (dropdown) {
                      dropdown.classList.toggle("hidden");
                    }
                  }
                }}
              >
                {selectedFields.length === 0 ? (
                  "Select a field first"
                ) : selectedSkills.length === 0 ? (
                  "Select skills"
                ) : (
                  <div className="flex items-center w-full">
                    <span className="truncate mr-2">
                      {`${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected`}
                    </span>
                    {selectedSkills.length > 0 && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSkills([]);
                        }} 
                        className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
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
                    <>
                      {/* Add a "Select All" and "Clear All" buttons */}
                      {availableSkills.length > 0 && (
                        <div className="flex justify-between px-2 py-1 border-b border-gray-200 dark:border-gray-600">
                          <button 
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                            onClick={() => setSelectedSkills([...availableSkills])}
                          >
                            Select All
                          </button>
                          <button 
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                            onClick={() => setSelectedSkills([])}
                          >
                            Clear All
                          </button>
                        </div>
                      )}
                      
                      {/* Filter search box */}
                      <div className="p-2 border-b border-gray-200 dark:border-gray-600">
                        <input 
                          type="text" 
                          placeholder="Filter skills..."
                          className="w-full p-1 text-sm border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                          onChange={(e) => {
                            const dropdown = document.getElementById("skills-dropdown");
                            const items = dropdown?.querySelectorAll('.skill-item');
                            if (items) {
                              const filter = e.target.value.toLowerCase();
                              items.forEach((item) => {
                                const text = item.textContent?.toLowerCase() || '';
                                if (text.includes(filter)) {
                                  (item as HTMLElement).style.display = '';
                                } else {
                                  (item as HTMLElement).style.display = 'none';
                                }
                              });
                            }
                          }}
                        />
                      </div>
                      
                      {availableSkills.map((skill) => (
                        <div 
                          key={skill} 
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center skill-item"
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
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Unified Ideas Table */}
      <div>
        <h3 className="text-xl font-bold mb-4 dark:text-white">Browse Ideas</h3>
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
          document.getElementById("fields-dropdown")?.classList.add("hidden");
          document.getElementById("skills-dropdown")?.classList.add("hidden");
          document.getElementById("click-outside-layer")?.classList.add("hidden");
        }}
      ></div>
    </div>
  );
}

// Add this code to handle closing the dropdowns when clicking outside
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const fieldsDropdown = document.getElementById("fields-dropdown");
    const skillsDropdown = document.getElementById("skills-dropdown");
    const clickOutsideLayer = document.getElementById("click-outside-layer");
    
    if (
      (fieldsDropdown && !fieldsDropdown.classList.contains("hidden")) ||
      (skillsDropdown && !skillsDropdown.classList.contains("hidden"))
    ) {
      clickOutsideLayer?.classList.remove("hidden");
    }
  });
}