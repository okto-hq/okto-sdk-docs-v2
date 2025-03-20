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
          <h1 className="text-4xl font-bold mb-4 dark:text-white">Ideaboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Browse available projects and bounties in the Summer of Abstraction program.
          </p>
        </div>

        {/* Participation Paths Explanation */}
        <div className="mb-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">How to Participate</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mr-3 font-bold text-xl">P</div>
                  <h3 className="text-xl font-semibold dark:text-white">Projects</h3>
                </div>
                <p className="mb-4 dark:text-gray-300">
                  Longer-term initiatives that involve building new features, creating content, or developing tools.
                </p>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">How to participate:</h4>
                  <ol className="list-decimal pl-5 dark:text-gray-300 space-y-2">
                    <li>Pick a project from our ideaboard or propose your own</li>
                    <li>Write a proposal following the guidelines</li>
                    <li>Submit your proposal for review (1-2 weeks review period)</li>
                    <li>Once accepted, begin building with periodic check-ins</li>
                    <li>Receive payments based on agreed deliverables</li>
                  </ol>
                </div>
                <div className="flex justify-end space-x-4">
                  <ProposalGuidelinesDialog linkClassName="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer text-sm font-medium">
                    View Proposal Guidelines →
                  </ProposalGuidelinesDialog>
                  <ProposalTemplateDialog linkClassName="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer text-sm font-medium">
                    View Proposal Template →
                  </ProposalTemplateDialog>
                </div>
              </div>
              
              <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mr-3 font-bold text-xl">B</div>
                  <h3 className="text-xl font-semibold dark:text-white">Bounties</h3>
                </div>
                <p className="mb-4 dark:text-gray-300">
                  Smaller, well-defined tasks with clear deliverables and specific rewards.
                </p>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-2 dark:text-white">How to participate:</h4>
                  <ol className="list-decimal pl-5 dark:text-gray-300 space-y-2">
                    <li>Pick from the bounties listed on our ideaboard</li>
                    <li>Start building immediately - no proposal needed</li>
                    <li>Submit your work once complete</li>
                    <li>Entries are reviewed in monthly cycles</li>
                    <li>Winners receive payouts after review</li>
                  </ol>
                </div>
                <div className="flex justify-end">
                  <SubmissionGuideDialog linkClassName="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer text-sm font-medium">
                    View Submission Guide →
                  </SubmissionGuideDialog>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Visualization */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Participation Process</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Projects Flow */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">Project Path</h3>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800 -translate-x-1/2 z-0"></div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">1</div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center border border-indigo-200 dark:border-indigo-800">
                      <p className="font-medium dark:text-white">Write a proposal</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Following guidelines</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">2</div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center border border-indigo-200 dark:border-indigo-800">
                      <p className="font-medium dark:text-white">Submit proposal</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">1-2 weeks review period</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">3</div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center border border-indigo-200 dark:border-indigo-800">
                      <p className="font-medium dark:text-white">Proposal review</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Accept, modify, or reject</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">4</div>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 text-center border border-indigo-200 dark:border-indigo-800">
                      <p className="font-medium dark:text-white">Build & deliver</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">With periodic payments</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <ProposalTemplateDialog linkClassName="inline-block px-4 py-2 border border-indigo-300 dark:border-indigo-700 rounded-md shadow-sm font-medium text-indigo-700 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer">
                    Get Proposal Template
                  </ProposalTemplateDialog>
                </div>
              </div>
              
              {/* Bounties Flow */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">Bounty Path</h3>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 -translate-x-1/2 z-0"></div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-500 dark:border-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">1</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-200 dark:border-purple-800">
                      <p className="font-medium dark:text-white">Select a bounty</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">From the ideaboard</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-500 dark:border-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">2</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-200 dark:border-purple-800">
                      <p className="font-medium dark:text-white">Start working</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">No proposal required</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-500 dark:border-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">3</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-200 dark:border-purple-800">
                      <p className="font-medium dark:text-white">Submit your work</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Monthly review cycle</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 border-2 border-purple-500 dark:border-purple-700 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">4</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center border border-purple-200 dark:border-purple-800">
                      <p className="font-medium dark:text-white">Receive rewards</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Payouts for winners</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <SubmissionGuideDialog linkClassName="inline-block px-4 py-2 border border-purple-300 dark:border-purple-700 rounded-md shadow-sm font-medium text-purple-700 dark:text-purple-400 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                    View Submission Guide
                  </SubmissionGuideDialog>
                </div>
              </div>
            </div>
          </div>
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