"use client"

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Idea } from "../types";
import { IdeaDetailDialog } from "./IdeaDetailDialog";

interface IdeaboardTableProps {
  ideas: Idea[];
  featured?: boolean;
  emptyMessage?: string;
  hideDeadlineAndTime?: boolean;
}

export function IdeaboardTable({ 
  ideas, 
  featured = false, 
  emptyMessage = "No ideas found that match your filters. Try adjusting your filters to see more results.",
  hideDeadlineAndTime = false
}: IdeaboardTableProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper function to get type variant for badge
  const getTypeVariant = (type: string) => {
    return type === "Project" ? "default" : "secondary";
  };

  // Helper function to get type color class for the left border
  const getTypeBorderClass = (type: string) => {
    return type === "Project" 
      ? "border-l-4 border-l-indigo-500 dark:border-l-indigo-600" 
      : "border-l-4 border-l-purple-500 dark:border-l-purple-600";
  };

  // Helper function to get skill level variant for badge
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

  if (ideas.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 text-center border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm">
        <h4 className="text-lg font-bold mb-2 dark:text-white">No ideas found</h4>
        <p className="text-gray-600 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border-2 border-gray-300 dark:border-gray-700 rounded-md shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className={featured 
            ? "bg-indigo-600 text-white border-b-2 border-indigo-400" 
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-b-2 border-gray-300 dark:border-gray-700"}>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Skill Level</th>
            <th className="px-4 py-3 text-left">Skills Required</th>
            <th className="px-4 py-3 text-left">Reward</th>
            {!hideDeadlineAndTime && (
              <>
                <th className="px-4 py-3 text-left">Deadline</th>
                <th className="px-4 py-3 text-left">Time</th>
              </>
            )}
            <th className="px-4 py-3 text-left"></th>
          </tr>
        </thead>
        <tbody className={
          featured 
            ? "bg-white dark:bg-gray-900 border border-indigo-200 dark:border-indigo-900 rounded-b-lg" 
            : "bg-white dark:bg-gray-900"
        }>
          {ideas.map((idea: Idea) => (
            <tr key={idea.id} className={`border-t border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 ${getTypeBorderClass(idea.type)}`}>
              <td className="px-4 py-3 font-medium dark:text-white">
                <div className="flex items-start">
                  {idea.type === "Project" ? (
                    <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-xs mr-2 mt-0.5">P</div>
                  ) : (
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold text-xs mr-2 mt-0.5">B</div>
                  )}
                  <span>{idea.title}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge variant={getTypeVariant(idea.type)} className={`font-normal ${idea.type === "Project" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 hover:bg-indigo-200" : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400 hover:bg-purple-200"}`}>
                  {idea.type}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Badge variant={getSkillLevelVariant(idea.skillLevel)} className="font-normal">
                  {idea.skillLevel}
                </Badge>
              </td>
              <td className="px-4 py-3 dark:text-gray-300">{idea.skillsRequired.join(", ")}</td>
              <td className="px-4 py-3 font-medium text-indigo-600 dark:text-indigo-400">${idea.reward}</td>
              {!hideDeadlineAndTime && (
                <>
                  <td className="px-4 py-3 dark:text-gray-300">{formatDate(idea.deadline)}</td>
                  <td className="px-4 py-3 dark:text-gray-300">{idea.timeCommitment}</td>
                </>
              )}
              <td className="px-4 py-3">
                <IdeaDetailDialog idea={idea} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}