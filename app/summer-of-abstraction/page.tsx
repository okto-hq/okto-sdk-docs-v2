'use client';

import React, { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Select from "@/components/ui/select";
import { TimeIcon } from "app/summer-of-abstraction/components/icons";
import { ideas, skillCategories as allSkillCategories, projectCategories as allProjectCategories, Idea } from "./data/ideas";
import { CalendarIcon, LinkLogo } from "app/summer-of-abstraction/components/icons";

// Define skill and project categories
const skillCategories = ["All Skills", ...allSkillCategories];
const projectCategories = ["All Projects", ...allProjectCategories];

export default function IdeaBoard() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [activeProjectType, setActiveProjectType] = useState<string>("All Projects");
  const [activeSkill, setActiveSkill] = useState<string>("All Skills");

  const handleOpen = (idea: Idea): void => {
    setSelectedIdea(idea);
    setOpenDialog(true);
  };

  const handleClose = (): void => {
    setOpenDialog(false);
    setSelectedIdea(null);
  };

  const handleProjectTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setActiveProjectType(e.target.value);
  };

  const handleSkillChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setActiveSkill(e.target.value);
  };

  // Convert categories to options format for Select component
  const projectOptions = projectCategories.map(category => ({
    label: category,
    value: category
  }));

  const skillOptions = skillCategories.map(skill => ({
    label: skill,
    value: skill
  }));

  // Filter ideas based on selected filters
  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesProjectType =
        activeProjectType === "All Projects" ||
        idea.category === activeProjectType;

      const matchesSkill =
        activeSkill === "All Skills" ||
        idea.skills.includes(activeSkill);

      return matchesProjectType && matchesSkill;
    });
  }, [activeProjectType, activeSkill]);

  return (
    <div className="min-h-screen bg-background mb-10">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-16 mt-20 gap-8">
        {/* Left Side: Heading and Description */}
        <div className="lg:max-w-2xl">
          <div className="text-4xl lg:text-6xl font-bold lg:whitespace-nowrap">
            Okto Summer of Abstraction ☀️
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Explore exciting project ideas for the Okto Summer of Abstraction program. Build
            innovative Web3 applications, create educational content, or lead community initiatives
            with support from Okto.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mx-4 lg:mx-16 mt-8">
        <div className="p-6 bg-muted/50 border rounded-lg">
          <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Program Timeline
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="p-3 bg-background rounded-lg border">
              <div className="font-medium">Application Period</div>
              <div className="text-sm text-muted-foreground">Feb 15 - Mar 15, 2025</div>
            </div>
            <div className="p-3 bg-background rounded-lg border">
              <div className="font-medium">Review & Approval</div>
              <div className="text-sm text-muted-foreground">Mar 15 - Mar 31, 2025</div>
            </div>
            <div className="p-3 bg-background rounded-lg border">
              <div className="font-medium">Building Phase</div>
              <div className="text-sm text-muted-foreground">Apr 1 - Jul 31, 2025</div>
            </div>
            <div className="p-3 bg-background rounded-lg border">
              <div className="font-medium">Final Rewards</div>
              <div className="text-sm text-muted-foreground">End of August 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mx-4 lg:mx-16 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Explore Project Ideas</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-60">
            <Select
              value={activeProjectType}
              onChange={handleProjectTypeChange}
              options={projectOptions}
              placeholder="Filter by project type"
            />
          </div>

          <div className="w-60">
            <Select
              value={activeSkill}
              onChange={handleSkillChange}
              options={skillOptions}
              placeholder="Filter by skill"
            />
          </div>
        </div>
      </div>

      {/* Ideas List */}
      <div className="mx-4 lg:mx-16 mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg bg-muted/50">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-medium text-left">Title</th>
              <th className="p-4 font-medium text-left">Type</th>
              {/* <th className="p-4 font-medium text-left">Skill Level</th> */}
              <th className="p-4 font-medium text-left">Reward</th>
              {/* <th className="p-4 font-medium text-left">Deadline</th> */}
              <th className="p-4 font-medium text-left">Time</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredIdeas.map((idea) => (
              <tr key={idea.id} className="group hover:bg-muted/30 transition-colors duration-200">
                <td className="p-4 font-medium">{idea.title}</td>
                <td className="p-4">{idea.bountyType}</td>
                {/* <td>Beginner</td> */} {/* Skill level data is not directly available */}
                <td className="p-4">{idea.pointsValue}</td>
                {/* <td>July 15, 2025</td> */} {/* Deadline data is not available */}
                <td className="p-4 flex items-center gap-1 text-muted-foreground">
                  <TimeIcon className="w-4 h-4" />
                  <span>{idea.estimatedTime.split(' ')[0]}</span>
                </td>
                <td className="p-4 text-right">
                  <Button size="sm" onClick={() => handleOpen(idea)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
            {filteredIdeas.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-muted-foreground">
                  No ideas match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Idea Details Modal */}
      {selectedIdea && (
        <Dialog open={openDialog} onOpenChange={handleClose}>
          <DialogContent className="max-w-3xl w-full bg-background rounded-3xl">
            <DialogHeader className="pb-2">
              <DialogTitle className="text-2xl font-bold">
                {selectedIdea.title}
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-6">
              {/* Category and Bounty Type */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {selectedIdea.bountyType}
                </div>
                <div className="px-3 py-1 bg-muted rounded-full text-sm">
                  {selectedIdea.category}
                </div>
                <div className="px-3 py-1 bg-muted/50 rounded-full text-sm flex items-center gap-1">
                  <TimeIcon className="w-4 h-4" />
                  {selectedIdea.estimatedTime}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">
                  {selectedIdea.details || selectedIdea.description}
                </p>
              </div>

              {/* Expected Output */}
              <div>
                <h3 className="text-lg font-medium mb-2">Expected Output</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {selectedIdea.expectedOutput.map((output, index) => (
                    <li key={index}>{output}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              {selectedIdea.requirements && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {selectedIdea.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Resources */}
              {selectedIdea.resources && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Resources</h3>
                  <div className="flex flex-col gap-2">
                    {selectedIdea.resources.map((resource, index) => (
                      <Link
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <LinkLogo className="w-4 h-4" />
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Points Value */}
              <div className="mt-2 flex justify-between items-center border-t pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Reward:</span>
                  <span className="font-medium text-primary">{selectedIdea.pointsValue}</span>
                </div>

                <Link
                  href="https://teamcoindcx.typeform.com/to/CvPAQNAU"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button className="rounded-full">Apply for this Project</Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

    </div>
  );
}