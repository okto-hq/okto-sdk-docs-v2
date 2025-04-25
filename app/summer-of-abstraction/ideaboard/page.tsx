"use client"

import React from "react";
import Link from "next/link";
import { IdeaboardSection } from "../components/IdeaboardSection";
import { IdeasLoader } from "../components/IdeasLoader";
import { SummerBanner } from "../components/SummerBanner";
import { ProposalGuidelinesDialog } from "../components/ProposalGuidelinesDialog";
import { ProposalTemplateDialog } from "../components/ProposalTemplateDialog";
import { SUBMISSION_URLS } from "../utils/constants";

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
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <ProposalGuidelinesDialog linkClassName="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm hover:shadow cursor-pointer">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                        Proposal Guidelines
                    </span>
                </ProposalGuidelinesDialog>
                          
                <ProposalTemplateDialog linkClassName="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm hover:shadow cursor-pointer">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                        Proposal Template
                      </span>

                </ProposalTemplateDialog>
                          
                    <a 
                      href={SUBMISSION_URLS.Project}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm hover:shadow cursor-pointer"
                    >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                              Create a Proposal
                    </span>
                    </a>
            </div>
          </div>
          
          {/* Reward Info Box */}
          <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md border border-yellow-200 dark:border-yellow-800 text-sm">
            <p className="text-gray-800 dark:text-gray-300 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 text-yellow-600 dark:text-yellow-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>
                <span className="font-semibold">Note for Rewards:</span> All rewards are distributed based on clearly defined, verifiable milestones. Rewards are issued as <strong>Okto Points</strong> which will be converted to <strong>$OKTO tokens</strong> upon mainnet launch and TGE. Project rewards reflect their scope, complexity, and potential ecosystem impact. For certain projects, a portion (10-20%) may be reserved for release 3 months after product launch to ensure sustained integration.
              </span>
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