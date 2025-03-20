"use client"


import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

interface SubmissionGuideDialogProps {
  children: React.ReactNode;
  linkClassName?: string;
}

export function SubmissionGuideDialog({ children, linkClassName }: SubmissionGuideDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className={linkClassName || "cursor-pointer hover:underline"}>
          {children}
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-700 dark:text-purple-400">
            Bounty Submission Guide
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-purple dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-4">Bounty Submission Process</h2>
          <p>
            The <strong>Bounty Track</strong> of the Okto Summer of Abstraction program allows you to start working immediately without going through a proposal review process. Bounties cover a wide range of tasks - both technical and non-technical - giving everyone an opportunity to contribute based on their skills.
          </p>

          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-6">Types of Bounties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
            <div className="border border-purple-200 dark:border-purple-800 rounded-md p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">Technical Bounties</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Code implementation</li>
                <li>UI components</li>
                <li>Developer tooling</li>
                <li>Technical integrations</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            
            <div className="border border-purple-200 dark:border-purple-800 rounded-md p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">Non-Technical Bounties</h3>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Content creation</li>
                <li>Documentation</li>
                <li>Design assets</li>
                <li>Community building</li>
                <li>Educational materials</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-6">Key Steps</h2>
          
          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-4">1. Choose a Bounty</h3>
          <p>
            Browse the Ideaboard and select a bounty that matches your skills and interests. Each bounty has clearly defined success criteria and requirements.
          </p>

          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-4">2. Start Working</h3>
          <p>
            Unlike projects, bounties don't require a proposal. You can begin work immediately after reviewing the bounty details.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Review the bounty description thoroughly before starting</li>
            <li>Make sure you understand all success criteria</li>
            <li>Reach out to the mentor if you have any questions</li>
          </ul>

          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-4">3. Track Progress</h3>
          <p>
            While working on your bounty, track your progress and make sure you're meeting all the requirements:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For technical bounties: Keep your code organized and well-documented</li>
            <li>For content bounties: Follow style guidelines and maintain quality</li>
            <li>For design bounties: Provide source files along with final assets</li>
            <li>Document your process and any challenges you encountered</li>
            <li>Prepare demos, examples, or samples as appropriate</li>
          </ul>

          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-4">4. Submit Your Work</h3>
          <p>
            When your bounty work is complete, submit it via our submission platform:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Prepare your submission</strong> based on the bounty type:
              <ul className="list-disc pl-6 mt-1">
                <li><strong>Technical bounties:</strong> Create a GitHub repository with your code</li>
                <li><strong>Content bounties:</strong> Provide documents, articles, or videos</li>
                <li><strong>Design bounties:</strong> Submit design files and assets</li>
                <li><strong>Community bounties:</strong> Document activities and impact</li>
              </ul>
            </li>
            <li><strong>Include clear documentation</strong> with:
              <ul className="list-disc pl-6 mt-1">
                <li>Project description</li>
                <li>Setup/usage instructions (for technical submissions)</li>
                <li>Screenshots, examples, or demos</li>
                <li>How your submission meets the bounty requirements</li>
              </ul>
            </li>
            <li><strong>Fill out the submission form</strong> with:
              <ul className="list-disc pl-6 mt-1">
                <li>Your name and contact information</li>
                <li>Bounty ID and title</li>
                <li>Links to your work (repository, files, etc.)</li>
                <li>Brief summary of your submission</li>
                <li>Any additional notes for reviewers</li>
              </ul>
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-6">Review Process</h2>
          <p>
            All bounty submissions go through a monthly review cycle:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Submissions are reviewed by Okto experts and mentors</li>
            <li>All bounties are evaluated against the provided success criteria</li>
            <li>Multiple submissions may be accepted for the same bounty</li>
            <li>Winning submissions receive the full bounty reward</li>
            <li>Exceptional submissions may receive additional recognition</li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md mt-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">Review Timeline</h3>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Submissions are reviewed on the 1st Wednesday of each month</li>
              <li>Review process typically takes 1-2 weeks</li>
              <li>Results are announced by the 15th of each month</li>
              <li>Payments are processed within 7 business days after announcement</li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-6">Tips for Successful Submissions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-purple-200 dark:border-purple-800 rounded-md p-4 bg-white dark:bg-gray-800">
              <h4 className="font-medium text-purple-700 dark:text-purple-400">Do:</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Submit before the deadline</li>
                <li>Follow all submission guidelines</li>
                <li>Include clear documentation</li>
                <li>Provide examples of your work</li>
                <li>Address all success criteria</li>
              </ul>
            </div>
            
            <div className="border border-purple-200 dark:border-purple-800 rounded-md p-4 bg-white dark:bg-gray-800">
              <h4 className="font-medium text-purple-700 dark:text-purple-400">Don't:</h4>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Submit incomplete work</li>
                <li>Ignore the bounty requirements</li>
                <li>Submit without proper documentation</li>
                <li>Wait until the last minute</li>
                <li>Submit work that doesn't meet criteria</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-6">Contact and Support</h2>
          <p>
            If you have questions during your bounty work, you can:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reach out to the bounty mentor during their office hours</li>
            <li>Join our Discord community for general support</li>
            <li>Check our FAQ page for common questions</li>
            <li>Please raise a ticket on <Link href="https://discord.gg/W9KzcjUBNy">Discord</Link> if you face any issues</li>
          </ul>

          <p className="mt-6 font-medium">
            We're excited to see what you create! Good luck with your bounty submission.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}