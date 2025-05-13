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
    // If it's already "Rolling Deadline", return as-is
    if (dateString === "Rolling Deadline") {
      return dateString;
    }
    
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

  // Helper function to get type color class
  const getTypeColorClass = (type: string) => {
    return type === "Project" 
      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 hover:bg-indigo-200" 
      : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400 hover:bg-purple-200";
  };

  

  // Helper function to get field color classes
  const getFieldColorClass = (field: string) => {
    switch (field) {
      case "Development":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400";
      case "Content":
        return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400";
      case "Community":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-400";
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
            <th className="px-4 py-3 text-left">Field</th>
            <th className="px-4 py-3 text-left">Skills Required</th>
            {!hideDeadlineAndTime && (
              <th className="px-4 py-3 text-left">Deadline</th>
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
            <tr 
              key={idea.id} 
              className={`px-4 py-3 font-medium dark:text-white ${
                idea.type === "Project" 
                  ? "border-l-4 border-indigo-500 dark:border-indigo-600" 
                  : "border-l-4 border-purple-500 dark:border-purple-600"
              } pl-5 rounded-l-md`}>
                
              <td className="px-4 py-3 font-medium dark:text-white">
                
                <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                  <span>{idea.title}</span>
                  <Badge 
                    variant={getTypeVariant(idea.type)} 
                    className={`font-normal ${getTypeColorClass(idea.type)}`}
                  >
                    {idea.type}
                  </Badge>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {idea.fields.map(field => (
                    <Badge 
                      key={field}
                      variant="outline" 
                      className={`font-normal ${getFieldColorClass(field)}`}
                    >
                      {field}
                    </Badge>
                  ))}
                </div>
              </td>
              
              <td className="px-4 py-3 dark:text-gray-300">{idea.skillsRequired.join(", ")}</td>
              {!hideDeadlineAndTime && (
                <td className="px-4 py-3 dark:text-gray-300">{formatDate(idea.deadline)}</td>
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