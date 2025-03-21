"use client"


import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Idea } from "../types";
import { ProposalGuidelinesDialog } from "./ProposalGuidelinesDialog";
import { ProposalTemplateDialog } from "./ProposalTemplateDialog";
import { SubmissionGuideDialog } from "./SubmissionGuideDialog";
import { SUBMISSION_URLS } from "../utils/constants";

interface IdeaDetailDialogProps {
  idea: Idea;
}

export function IdeaDetailDialog({ idea }: IdeaDetailDialogProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get type variant for badge styling
  const getTypeVariant = (type: string) => {
    return type === "Project" ? "default" : "secondary";
  };

  // Get type specific styling
  const getTypeStyles = (type: string) => {
    if (type === "Project") {
      return {
        badgeClass: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
        iconBgClass: "bg-indigo-100 dark:bg-indigo-900/40",
        iconTextClass: "text-indigo-600 dark:text-indigo-400",
        headerClass: "border-l-4 border-l-indigo-500 dark:border-l-indigo-600 pl-3",
        actionText: "Submit a Proposal",
        actionDesc: "Requires proposal review (1-2 weeks)",
        actionBgClass: "bg-indigo-600 hover:bg-indigo-700"
      };
    } else {
      return {
        badgeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
        iconBgClass: "bg-purple-100 dark:bg-purple-900/40",
        iconTextClass: "text-purple-600 dark:text-purple-400",
        headerClass: "border-l-4 border-l-purple-500 dark:border-l-purple-600 pl-3",
        actionText: "Start Building",
        actionDesc: "No proposal needed, submit when ready",
        actionBgClass: "bg-purple-600 hover:bg-purple-700"
      };
    }
  };

  // Get skill level variant for badge styling
  const getSkillLevelVariant = (level: string) => {
    switch (level) {
      case "Beginner":
        return "outline";
      case "Intermediate":
        return "secondary";
      case "Advanced":
        return "destructive";
      default:
        return "outline";
    }
  };

  // Get mentor initials for avatar
  const getMentorInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const typeStyles = getTypeStyles(idea.type);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          size="sm"
          className={idea.type === "Project" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-purple-600 hover:bg-purple-700"}
        >
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold flex items-center ${typeStyles.headerClass}`}>
            {idea.type === "Project" ? (
              <div className={`w-8 h-8 ${typeStyles.iconBgClass} ${typeStyles.iconTextClass} rounded-full flex items-center justify-center font-bold mr-3`}>P</div>
            ) : (
              <div className={`w-8 h-8 ${typeStyles.iconBgClass} ${typeStyles.iconTextClass} rounded-full flex items-center justify-center font-bold mr-3`}>B</div>
            )}
            {idea.title}
          </DialogTitle>
        </DialogHeader>

        {/* Idea Header */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-6 border border-gray-300 dark:border-gray-700 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge 
              variant={getTypeVariant(idea.type)} 
              className={`px-3 py-1 ${typeStyles.badgeClass}`}
            >
              {idea.type}
            </Badge>
            <Badge
              variant={getSkillLevelVariant(idea.skillLevel)}
              className="px-3 py-1"
            >
              {idea.skillLevel}
            </Badge>
            <Badge
              variant="outline"
              className={
                idea.status === "Open"
                  ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                  : idea.status === "In Progress"
                  ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                  : "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
              }
            >
              {idea.status}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="dark:text-white">
              <strong>Reward:</strong> {idea.reward} $OKTO
            </div>
            <div className="dark:text-white">
              <strong>Deadline:</strong> {formatDate(idea.deadline)}
            </div>
            <div className="dark:text-white">
              <strong>Time Commitment:</strong> {idea.timeCommitment}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Overview</h3>
          <p className="dark:text-gray-300">{idea.description}</p>
        </div>

        {/* Skills Required */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Skills Required</h3>
          <div className="flex flex-wrap gap-2">
            {idea.skillsRequired.map((skill: string) => (
              <Badge key={skill} variant="outline" className="bg-gray-50 border-gray-300 dark:bg-gray-800 dark:text-gray-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Expected Outcomes</h3>
          <ul className="space-y-2">
            {idea.outcomes.map((outcome: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className={`${typeStyles.iconTextClass} font-bold mr-2`}>✓</span>
                <span className="dark:text-gray-300">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Success Criteria */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Success Criteria</h3>
          <div className="border-2 border-gray-300 dark:border-gray-700 rounded-md overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-200">
                    Criteria
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-200">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {idea.successCriteria.map((criterion: string, index: number) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="px-4 py-2 dark:text-gray-300">{criterion}</td>
                    <td className="px-4 py-2 dark:text-gray-300">Required for successful completion</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Prerequisites</h3>
          <ul className="space-y-2">
            {idea.prerequisites.map((prerequisite: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className={`${typeStyles.iconTextClass} font-bold mr-2`}>•</span>
                <span className="dark:text-gray-300">{prerequisite}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Timeline & Milestones</h3>
          <div className="border-2 border-gray-300 dark:border-gray-700 rounded-md overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-200">
                    Milestone
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-200">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-200">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {idea.timeline.map((milestone: { milestone: string; date: string; description: string }, index: number) => (
                  <tr key={index} className="border-t border-gray-300 dark:border-gray-700">
                    <td className="px-4 py-2 dark:text-gray-300">{milestone.milestone}</td>
                    <td className="px-4 py-2 dark:text-gray-300">{formatDate(milestone.date)}</td>
                    <td className="px-4 py-2 dark:text-gray-300">{milestone.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mentor */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Mentor Support</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold dark:text-white border border-gray-300 dark:border-gray-600">
                {getMentorInitials(idea.mentor.name)}
              </div>
              <div>
                <h4 className="font-bold dark:text-white">{idea.mentor.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{idea.mentor.title}</p>
                <p className="text-sm dark:text-gray-300">
                  <strong>Office Hours:</strong> {idea.mentor.contactHours}
                </p>
                <p className="text-sm dark:text-gray-300">
                  <strong>Contact:</strong> {idea.mentor.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps Based on Type */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 dark:text-white">Next Steps</h3>
          <div className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-md border ${idea.type === "Project" ? "border-indigo-200 dark:border-indigo-800" : "border-purple-200 dark:border-purple-800"}`}>
            {idea.type === "Project" ? (
              <div>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Project Participation</h4>
                <ol className="list-decimal pl-5 dark:text-gray-300 space-y-1 mb-3">
                  <li>Write a proposal following our guidelines</li>
                  <li>Submit your proposal for review (1-2 weeks review period)</li>
                  <li>If accepted, begin building with periodic check-ins</li>
                  <li>Receive payments based on agreed deliverables</li>
                </ol>
                <div className="mt-2 text-sm flex space-x-4">
                  <ProposalGuidelinesDialog linkClassName="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
                    View our proposal guidelines for more information
                  </ProposalGuidelinesDialog>
                  <ProposalTemplateDialog linkClassName="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
                    Get proposal template
                  </ProposalTemplateDialog>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Bounty Participation</h4>
                <ol className="list-decimal pl-5 dark:text-gray-300 space-y-1 mb-3">
                  <li>Start building right away - no proposal needed</li>
                  <li>Submit your completed work before the deadline</li>
                  <li>Submissions are reviewed in monthly cycles</li>
                  <li>Winners receive payouts after review</li>
                </ol>
                <div className="mt-2 text-sm">
                  <SubmissionGuideDialog linkClassName="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">
                    View our submission guide for more information
                  </SubmissionGuideDialog>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex flex-col justify-center mt-6">
        <a 
          href={SUBMISSION_URLS[idea.type]}
          target="_blank"
          rel="noopener noreferrer"
          className={`${typeStyles.actionBgClass} text-white px-6 py-3 rounded-md font-bold text-center`}
        >
          {typeStyles.actionText}
        </a>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            {typeStyles.actionDesc}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}