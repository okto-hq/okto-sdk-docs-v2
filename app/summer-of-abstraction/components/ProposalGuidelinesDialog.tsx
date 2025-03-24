"use client"


import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProposalGuidelinesDialogProps {
  children: React.ReactNode;
  linkClassName?: string;
}

export function ProposalGuidelinesDialog({ children, linkClassName }: ProposalGuidelinesDialogProps) {
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
            Vision and Criteria for Project Proposals
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-indigo dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-4">Vision</h2>
          <p>
            The <strong>Okto Summer of Abstraction</strong> program aims to <strong>empower builders, developers, content creators, and community leaders</strong> in Web3 by providing funding, mentorship, and ecosystem support. Our vision is to <strong>advance chain abstraction</strong> and make Web3 <strong>more accessible, seamless, and developer-friendly</strong>. We seek to fund projects that drive innovation, foster adoption, and create long-term impact within the Web3 ecosystem.
          </p>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Project Focus Areas</h2>
          <p>We encourage proposals in the following areas:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Building dApps with Okto SDK</strong> (e.g., cross-chain wallets, decentralized finance solutions, multi-chain gaming, social applications)</li>
            <li><strong>Developer Tooling & Infrastructure</strong> (e.g., cross-chain indexers, multi-chain bridges, account abstraction tools)</li>
            <li><strong>DeFi & On-chain Finance</strong> (e.g., cross-chain lending, multi-chain yield aggregators, decentralized exchanges)</li>
            <li><strong>Content & Education</strong> (e.g., tutorials, YouTube series, technical blogs, university blockchain courses)</li>
            <li><strong>Community Growth & IRL Events</strong> (e.g., hackathons, developer bootcamps, workshops, AMAs)</li>
            <li><strong>Novel Use Cases in Chain Abstraction</strong> (e.g., decentralized identity, AI-powered blockchain solutions, social reputation systems)</li>
          </ol>
          <p className="italic mt-2">
            … and much more, feel free to submit any idea you think would be a great fit for the entire ecosystem.
          </p>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Criteria for Project Proposals</h2>
          <p>Project applications will be <strong>evaluated based on the following criteria:</strong></p>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">1. Feasibility & Execution</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Is the project <strong>practical and achievable</strong> within the 16-week timeline?</li>
            <li>Does the team have the <strong>necessary skills and resources</strong> to execute the project?</li>
            <li>Does the proposal have a <strong>clear roadmap with defined milestones</strong>?</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">2. Innovation & Uniqueness</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Is the project <strong>introducing a novel solution</strong> or significantly improving an existing one?</li>
            <li>Does it leverage <strong>Okto SDK and chain abstraction</strong> effectively?</li>
            <li>How does it differentiate from similar projects in Web3?</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">3. Impact & Ecosystem Contribution</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Does the project <strong>align with Okto's mission</strong> to improve Web3 accessibility and usability?</li>
            <li>How many <strong>users, developers, or stakeholders</strong> will benefit from this?</li>
            <li>Will the project continue to provide value <strong>beyond the program period</strong>?</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">4. Community Engagement & Adoption</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Does the project have a plan to <strong>engage users, developers, or communities</strong>?</li>
            <li>Will it contribute to the <strong>growth of Web3 adoption</strong>?</li>
            <li>How will the project ensure long-term community support and sustainability?</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">5. Budget & Funding Justification</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Is the <strong>requested stipend reasonable</strong> for the scope of work?</li>
            <li>Is the <strong>budget well-documented</strong> and aligned with the milestones?</li>
            <li>Does the proposal clearly state how the funds will be <strong>used efficiently</strong>?</li>
          </ul>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Project Proposal Evaluation Rubric</h2>
          <p>Proposals will be scored on a <strong>scale of 0-5</strong> for each criterion:</p>

          <div className="overflow-x-auto mt-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">Criteria</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">0 (Poor)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">1-2 (Below Average)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">3 (Average)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">4-5 (Excellent)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">Feasibility & Execution</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">No clear roadmap, unclear execution</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Weak roadmap, team lacks necessary expertise</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Some milestones defined, team has basic capability</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Clear roadmap, strong execution plan, skilled team</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">Innovation & Uniqueness</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Common idea, lacks differentiation</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Minor improvements to existing concepts</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Somewhat unique but needs refinement</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Highly innovative, distinct, and valuable to Web3</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">Impact & Ecosystem Contribution</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">No clear impact on Web3</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Limited impact, lacks broad adoption potential</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Some potential for ecosystem growth</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Strong ecosystem fit, high potential for adoption</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">Community Engagement & Adoption</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">No plan for user adoption</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Weak engagement strategy</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Some outreach and adoption efforts</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Strong engagement, well-defined adoption roadmap</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-200">Budget & Funding Justification</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Unjustified or excessive funding request</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Budget unclear or lacks justification</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Budget aligns with work but could be optimized</td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Well-structured budget, cost-effective and realistic</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>Proposals with a <strong>high total score</strong> (above 18/25) are <strong>strong candidates for funding</strong>.</li>
            <li><strong>Borderline proposals</strong> (12-18/25) may receive conditional approval, pending improvements.</li>
            <li>Proposals scoring <strong>below 12/25</strong> are unlikely to be accepted.</li>
          </ul>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Approval & Reward Process</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>All proposals will be <strong>reviewed by Okto mentors</strong>.</li>
            <li>Selected applicants may be invited for a <strong>follow-up discussion</strong>.</li>
            <li>Okto Points will be <strong>awarded upon verified completion of each milestone</strong>.</li>
            <li>Initial project costs must be self-funded until the first milestone verification.</li>
            <li>All earned Okto Points will be <strong>converted to $OKTO tokens </strong>upon mainnet launch and TGE.</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}