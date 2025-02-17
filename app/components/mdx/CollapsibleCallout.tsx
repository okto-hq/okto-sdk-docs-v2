"use client";
import React, { useState } from "react";
import { ChevronRight, Info, AlertTriangle, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleCalloutProps {
  title: string;
  type?: "info" | "warning" | "tip" | "note";
  children: React.ReactNode;
}

const typeStyles: { [key: string]: string } = {
  info: "border-blue-500/20 bg-blue-50/50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300",
  warning: "border-yellow-500/20 bg-yellow-50/50 text-yellow-700 dark:border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-300",
  tip: "border-green-500/20 bg-green-50/50 text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300",
  note: "border-gray-500/20 bg-gray-50/50 text-gray-700 dark:border-gray-500/30 dark:bg-gray-500/10 dark:text-gray-300",
};

const typeIcons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  note: BookOpen,
};

const typeTitles = {
  info: "Info",
  warning: "Warning",
  tip: "Tip",
  note: "Note",
};

export default function CollapsibleCallout({
  title,
  type = "info",
  children,
}: CollapsibleCalloutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const Icon = typeIcons[type];

  return (
    <div className={cn(
      "border rounded-lg transition-all duration-200",
      "my-2 overflow-hidden",
      `border-${type === 'info' ? 'blue' : type === 'warning' ? 'yellow' : type === 'tip' ? 'green' : 'gray'}-500/20 dark:border-${type === 'info' ? 'blue' : type === 'warning' ? 'yellow' : type === 'tip' ? 'green' : 'gray'}-500/30`
    )}>
      <div
        className={cn(
          "flex justify-between items-center cursor-pointer py-2 px-3 select-none",
          typeStyles[type]
        )}
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-1.5">
          <ChevronRight 
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "transform rotate-90"
            )} 
          />
          <Icon className="h-3.5 w-3.5" />
          <span className="text-sm font-medium">{typeTitles[type]}:</span>
          <span className="text-sm">{title}</span>
        </div>
        <span className="text-xs opacity-60">
          {isOpen ? "Hide" : "Show"}
        </span>
      </div>
      <div className={cn(
        "transition-all duration-200 overflow-hidden bg-white dark:bg-zinc-900",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-3 pb-2 text-sm text-zinc-800 dark:text-zinc-200">
          {children}
        </div>
      </div>
    </div>
  );
}