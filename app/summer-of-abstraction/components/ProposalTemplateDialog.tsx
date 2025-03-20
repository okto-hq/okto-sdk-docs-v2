"use client"


import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
          <p className="italic text-gray-600 dark:text-gray-400">
            <strong>Note:</strong> The template can be customized based on your project type. Different projects may require different formats—for example, a content creation request, a community workshop proposal, or a developer product plan might each have unique requirements. Adjust the template as needed to best fit your proposal.
          </p>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">1. Applicant Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Full Name:</strong></li>
            <li><strong>Email Address:</strong></li>
            <li><strong>GitHub/Twitter/LinkedIn (if applicable):</strong></li>
            <li><strong>Project/Team Name (if applicable):</strong></li>
            <li><strong>Number of Team Members:</strong></li>
            <li><strong>Location:</strong></li>
            <li><strong>Previous Web3 Experience (if any):</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">2. Project Title & Summary</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Project Title:</strong></li>
            <li><strong>Project Summary (150-250 words):</strong></li>
            <li><strong>Key Features & Functionality:</strong></li>
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
            <li><strong>Any Existing Work or Prototypes? (Include links if available)</strong></li>
            <li><strong>Integration Plan with Okto SDK (if applicable):</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">6. Milestones & Timeline</h2>
          <div className="overflow-x-auto mt-3">
            <table className="min-w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Milestone</th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Expected Completion Date</th>
                  <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-left">Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">Milestone 1</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Date]</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Deliverable]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">Milestone 2</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Date]</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Deliverable]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">Milestone 3</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Date]</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Deliverable]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">Final Submission</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Date]</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">[Deliverable]</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">7. Requested Funding</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Total Points Request (5k - 300k):</strong></li>
            <li><strong>Budget Breakdown:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Development Costs:</li>
                <li>Infrastructure & Tools:</li>
                <li>Design & UX:</li>
                <li>Marketing & Outreach:</li>
                <li>Miscellaneous:</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">8. Impact & Community Benefit</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>How does your project contribute to Web3 adoption?</strong></li>
            <li><strong>How will you measure success?</strong></li>
            <li><strong>Potential user base & community engagement plans:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">9. Additional Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Have you received funding from other grants? (Yes/No, please specify)</strong></li>
            <li><strong>Any relevant links (GitHub, Website, Demo, etc.)</strong></li>
            <li><strong>Other comments or special considerations:</strong></li>
          </ul>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">10. Terms & Commitments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Are you available for monthly reviews and updates? (Yes/No)</strong></li>
            <li><strong>Are you open to collaboration and mentorship? (Yes/No)</strong></li>
            <li><strong>Do you agree to abide by Okto's program guidelines? (Yes/No)</strong></li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-6">Submission Instructions:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://questbook.app/proposal_form/?grantId=67ab0aaf75ceaec6d645dd48&chainId=10" className="text-indigo-600 dark:text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">Submit your proposal here.</a></li>
            <li>Ensure your proposal is complete and follows the guidelines.</li>
            <li>Proposals will be reviewed based on feasibility, innovation, impact, and execution potential.</li>
          </ul>

          <p className="mt-6 font-bold text-indigo-600 dark:text-indigo-400">
            We look forward to your submission and supporting your journey in Web3! 🚀
          </p>

          <div className="mt-6 flex justify-center">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              onClick={() => {
                // Generate the proposal template as text
                const template = `# Proposal Template

**Note:** The template can be customized based on your project type. Different projects may require different formats—for example, a content creation request, a community workshop proposal, or a developer product plan might each have unique requirements. Adjust the template as needed to best fit your proposal.

# **1. Applicant Information**

- **Full Name:**
- **Email Address:**
- **GitHub/Twitter/LinkedIn (if applicable):**
- **Project/Team Name (if applicable):**
- **Number of Team Members:**
- **Location:**
- **Previous Web3 Experience (if any):**

## **2. Project Title & Summary**

- **Project Title:**
- **Project Summary (150-250 words):**
- **Key Features & Functionality:**

## **3. Problem Statement**

- **What problem are you solving?**
- **Why is this problem significant in Web3?**
- **Who are the target users?**

## **4. Proposed Solution**

- **How does your project address the problem?**
- **How does it leverage Okto SDK or chain abstraction?**
- **What makes your solution unique?**

## **5. Technical Details**

- **Tech Stack & Dependencies:**
- **Architecture Overview:**
- **Any Existing Work or Prototypes? (Include links if available)**
- **Integration Plan with Okto SDK (if applicable):**

## **6. Milestones & Timeline**

| **Milestone** | **Expected Completion Date** | **Deliverables** |
| --- | --- | --- |
| Milestone 1 | [Date] | [Deliverable] |
| Milestone 2 | [Date] | [Deliverable] |
| Milestone 3 | [Date] | [Deliverable] |
| Final Submission | [Date] | [Deliverable] |

## **7. Requested Funding**

- **Total Points Request (5k - 300k):**
- **Budget Breakdown:**
    - Development Costs:
    - Infrastructure & Tools:
    - Design & UX:
    - Marketing & Outreach:
    - Miscellaneous:

## **8. Impact & Community Benefit**

- **How does your project contribute to Web3 adoption?**
- **How will you measure success?**
- **Potential user base & community engagement plans:**

## **9. Additional Information**

- **Have you received funding from other grants? (Yes/No, please specify)**
- **Any relevant links (GitHub, Website, Demo, etc.)**
- **Other comments or special considerations:**

## **10. Terms & Commitments**

- **Are you available for monthly reviews and updates? (Yes/No)**
- **Are you open to collaboration and mentorship? (Yes/No)**
- **Do you agree to abide by Okto's program guidelines? (Yes/No)**

### **Submission Instructions:**

- [Submit your proposal here.](https://questbook.app/proposal_form/?grantId=67ab0aaf75ceaec6d645dd48&chainId=10)
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