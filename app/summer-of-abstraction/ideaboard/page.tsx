// File: /app/summer-of-abstraction/ideaboard/page.tsx
import React from 'react';
import { IdeaboardSection } from "../components/IdeaboardSection";
import { ProposalGuidelinesDialog } from "../components/ProposalGuidelinesDialog";
import { ProposalTemplateDialog } from "../components/ProposalTemplateDialog";
import { SubmissionGuideDialog } from "../components/SubmissionGuideDialog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IdeaboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/summer-of-abstraction"
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to Summer of Abstraction</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Idea Board</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Browse available projects and bounties in the Summer of Abstraction program.
          </p>
        </div>

        {/* Ideaboard List Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Browse Ideas</h2>
          <IdeaboardSection />
        </section>
      </div>
    </div>
  );
}