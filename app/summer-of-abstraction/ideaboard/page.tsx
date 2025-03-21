"use client"

import React from "react";
import Link from "next/link";
import { IdeaboardSection } from "../components/IdeaboardSection";
import { IdeasLoader } from "../components/IdeasLoader";

export default function IdeaboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-4">
          <Link 
            href="/summer-of-abstraction" 
            className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Summer of Abstraction
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Ideaboard</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse available projects and bounties for the Summer of Abstraction program.
            Filter by type, field, and skill to find the perfect opportunity.
          </p>
        </div>

        {/* Ideaboard Section */}
        <IdeasLoader>
          <IdeaboardSection />
        </IdeasLoader>
      </div>
    </div>
  );
}