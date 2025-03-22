"use client"

import React from "react";
import Link from "next/link";
import { IdeaboardSection } from "../components/IdeaboardSection";
import { IdeasLoader } from "../components/IdeasLoader";
import { SummerBanner } from "../components/SummerBanner";

export default function IdeaboardPage() {
  return (
    <>
      <SummerBanner />
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

          <div className="mb-8 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-indigo-700 dark:text-indigo-400">Note: </span>
              The ideas presented in this idea board are just suggestions to help you get started. We welcome proposals for any kind of idea that can help the Okto ecosystem grow. Whether you're a builder, content creator, community manager, or have a different skill set entirely, we encourage you to apply with your innovative and interesting concepts. The Summer of Abstraction program is open to everyone with a passion for Web3 and a vision for improving the Okto ecosystem. Don't feel limited by what you see here – we're excited to see your unique proposals!
            </p>
          </div>

          {/* Ideaboard Section */}
          <IdeasLoader>
            <IdeaboardSection />
          </IdeasLoader>
        </div>
      </div>
    </>
  );
}