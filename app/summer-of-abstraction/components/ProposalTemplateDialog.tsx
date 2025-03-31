"use client"

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SUBMISSION_URLS } from "../utils/constants";

interface ProposalTemplateDialogProps {
  children: React.ReactNode;
  linkClassName?: string;
}

export function ProposalTemplateDialog({ children, linkClassName }: ProposalTemplateDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className={linkClassName || "cursor-pointer hover:underline"}>
          {children}
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
            Proposal Template
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-indigo dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Program Details</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md mb-6">
            <p className="italic">
              This template adapts to different types of proposals, allowing you to effectively present your vision. Complete the relevant sections based on your proposal type—whether it's content creation, community workshops, development work, or other initiatives. Focus on the fields that best communicate your specific project goals and deliverables. Try to make your proposal as detailed as possible to help us evaluate it properly. The team will be in touch with you during the review process if clarifications or edits are needed.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">1. Applicant Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Full Name:</strong></li>
            <li><strong>Email Address:</strong></li>
            <li><strong>Funding Address (Polygon):</strong></li>
            <li><strong>Telegram:</strong></li>
            <li><strong>Twitter/X:</strong></li>
            <li><strong>GitHub:</strong></li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Team Members (if applicable)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Name:</strong></li>
            <li><strong>Email:</strong></li>
            <li><strong>Bio:</strong></li>
            <li><strong>Telegram Handle:</strong></li>
            <li><strong>Okto App Wallet Address:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">2. Project Overview</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Project Name:</strong></li>
            <li><strong>Project Category:</strong> (Development, Content, Community, etc.)</li>
            <li><strong>Project Summary:</strong> (150-250 words)</li>
            <li><strong>Details:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">3. Problem Statement</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>What problem are you solving?</strong></li>
            <li><strong>Why is this problem significant in Web3?</strong></li>
            <li><strong>Who are the target users?</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">4. Proposed Solution</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>How does your project address the problem?</strong></li>
            <li><strong>How does it leverage Okto SDK or chain abstraction?</strong></li>
            <li><strong>What makes your solution unique?</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">5. Technical Details</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tech Stack & Dependencies:</strong></li>
            <li><strong>Architecture Overview:</strong></li>
            <li><strong>Any Existing Work or Prototypes:</strong></li>
            <li><strong>Integration Plan with Okto SDK:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">6. Milestones & Timeline</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md mb-4">
            <p className="italic">
              Note: Token disbursement is milestone-based. Regular communication and updates are required throughout the project duration. Tokens will be released upon successful completion and verification of each milestone.
            </p>
          </div>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Milestone</th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Tentative Start Date</th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Expected Completion Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Total Points Requested</h3>
          <p className="mb-2">_________________</p>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Budget Breakdown</h3>
          <p className="mb-2">_________________</p>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">7. Impact & Community Benefit</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>How does your project contribute to Web3 adoption?</strong></li>
            <li><strong>How will you measure success?</strong></li>
            <li><strong>Potential user base & community engagement plans:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">8. Additional Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Have you received funding from other grants?</strong></li>
            <li><strong>Any relevant links (GitHub, Website, Demo, etc.)</strong></li>
            <li><strong>Other comments or special considerations:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">9. Terms & Conditions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Are you available for periodic reviews and updates?</strong> (Yes/No)</li>
            <li><strong>Are you open to collaboration and mentorship?</strong> (Yes/No)</li>
            <li><strong>Do you agree to abide by Okto's program guidelines?</strong> (Yes/No)</li>
            <li><strong>How did you hear about SOA?</strong></li>
          </ul>

          <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
            Please fill out all required fields before submitting. If a field is not applicable, enter 'N/A' or '-' as placeholder.
          </p>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-6">Submission Instructions:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href={SUBMISSION_URLS.Project} className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">Submit your proposal here.</a></li>
            <li>Ensure your proposal is complete and follows the guidelines.</li>
            <li>Proposals will be reviewed based on feasibility, innovation, impact, and execution potential.</li>
          </ul>

          <p className="mt-6 font-bold text-indigo-600 dark:text-indigo-400">
            We look forward to your submission and supporting your journey in Web3! 🚀
          </p>

          <div className="mt-6 flex justify-center">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
              onClick={() => {
                // Generate the proposal template as text
                const template = `# Proposal Template for Summer of Abstraction

## Program Details

This template adapts to different types of proposals, allowing you to effectively present your vision. Complete the relevant sections based on your proposal type—whether it's content creation, community workshops, development work, or other initiatives. Focus on the fields that best communicate your specific project goals and deliverables. Try to make your proposal as detailed as possible to help us evaluate it properly. The team will be in touch via Telegram during the review process if clarifications or edits are needed.

## 1. Applicant Information

- **Full Name:**
- **Email Address:**
- **Funding Address (Polygon):**
- **Telegram:**
- **Twitter/X:**
- **GitHub:**

### Team Members (if applicable)

- **Name:**
- **Email:**
- **Bio:**
- **Telegram Handle:**
- **Okto App Wallet Address:**

## 2. Project Overview

- **Project Name:**
- **Project Category:** (Development, Content, Community, etc.)
- **Project Summary:** (150-250 words)
- **Details:**

## 3. Problem Statement

- **What problem are you solving?**
- **Why is this problem significant in Web3?**
- **Who are the target users?**

## 4. Proposed Solution

- **How does your project address the problem?**
- **How does it leverage Okto SDK or chain abstraction?**
- **What makes your solution unique?**

## 5. Technical Details

- **Tech Stack & Dependencies:**
- **Architecture Overview:**
- **Any Existing Work or Prototypes:**
- **Integration Plan with Okto SDK:**

## 6. Milestones & Timeline

Note: Token disbursement is milestone-based. Regular communication and updates are required throughout the project duration. Tokens will be released upon successful completion and verification of each milestone.

| Milestone | Tentative Start Date | Expected Completion Date |
| --- | --- | --- |
|  |  |  |
|  |  |  |

**Total Points Requested:**

**Budget Breakdown:**

## 7. Impact & Community Benefit

- **How does your project contribute to Web3 adoption?**
- **How will you measure success?**
- **Potential user base & community engagement plans:**

## 8. Additional Information

- **Have you received funding from other grants?**
- **Any relevant links (GitHub, Website, Demo, etc.)**
- **Other comments or special considerations:**

## 9. Terms & Conditions

- **Are you available for periodic reviews and updates?** (Yes/No)
- **Are you open to collaboration and mentorship?** (Yes/No)
- **Do you agree to abide by Okto's program guidelines?** (Yes/No)
- **How did you hear about SOA?**

Please fill out all required fields before submitting. If a field is not applicable, enter 'N/A' or '-' as placeholder.

### Submission Instructions:

- Submit your proposal here: ${SUBMISSION_URLS.Project}
- Ensure your proposal is complete and follows the guidelines.
- Proposals will be reviewed based on feasibility, innovation, impact, and execution potential.

**We look forward to your submission and supporting your journey in Web3! 🚀**`;

                // Create a Blob from the text
                const blob = new Blob([template], { type: 'text/markdown' });
                
                // Create a URL for the Blob
                const url = URL.createObjectURL(blob);
                
                // Create a temporary link element
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Okto_Proposal_Template.md';
                
                // Trigger a click on the link to start the download
                document.body.appendChild(a);
                a.click();
                
                // Clean up
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              Download Template
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}