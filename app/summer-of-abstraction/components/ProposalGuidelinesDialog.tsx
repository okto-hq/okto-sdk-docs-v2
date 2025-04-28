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
            The <strong>Okto Summer of Abstraction</strong> program   <strong>empowers builders, developers, content creators, and community leaders</strong> in Web3 to explore, innovate and contribute to the growth of the Okto ecosystem through funding, mentorship, and collaborative support. Our vision is to <strong>advance chain abstraction</strong> and make Web3 <strong>more accessible, seamless, and developer-friendly</strong>. We seek to fund projects that drive innovation, foster adoption, and create long-term impact within the Web3 ecosystem.
          </p>

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Project Focus Areas</h2>
          <p>We encourage proposals in the following areas:</p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">1. Building dApps with Okto SDK</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Create applications that leverage Okto's SDK and tools to deliver cross-chain functionality. This includes cross-chain wallets, decentralized finance solutions, multi-chain gaming, social applications, and novel use-cases like decentralized identity or AI-powered blockchain solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">2. Developer Tooling & Infrastructure</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Build tools that make it easier for developers to work with Okto and chain abstraction, such as cross-chain indexers, multi-chain bridges, or account abstraction tools.
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">3. Building Tools for the Okto Ecosystem</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Create utilities that enhance the Okto ecosystem for both developers and users. Examples include integration utilities, gamified contribution experiences, reputation systems, simple analytics dashboards, and governance tools. These tools should make the ecosystem more accessible, engaging, and community-driven.
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">4. Ecosystem Projects</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Initiatives that strengthen or expand the overall functionality, reach, or community utility of Okto. These projects create shared tools, platforms, or infrastructure beneficial to multiple developers, users, or communities. They typically require longer-term efforts (2-3 months) for building and continued maintenance.
              </p>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">5. Technical Content & Education</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Develop educational resources that help developers and users understand and implement Okto's chain abstraction capabilities. This includes tutorials, code samples, implementation guides, YouTube series, technical blogs, documentation improvements, and university blockchain courses. Focus on creating content that lowers the barrier to entry for new developers.
              </p>
              
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Bounty Amounts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">Most content falls under the Bounty model, except when proposing a series with measurable engagement milestones.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs mr-2">$</span>
                    <span className="text-sm"><span className="font-medium text-gray-700 dark:text-gray-300">Tutorials or Code-alongs:</span> <span className="text-indigo-600 dark:text-indigo-400">Up to $100</span></span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs mr-2">$</span>
                    <span className="text-sm"><span className="font-medium text-gray-700 dark:text-gray-300">Thought Leadership Videos:</span> <span className="text-indigo-600 dark:text-indigo-400">Up to $100</span> <span className="text-gray-500 dark:text-gray-400">(based on production quality)</span></span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs mr-2">$</span>
                    <span className="text-sm"><span className="font-medium text-gray-700 dark:text-gray-300">Animated Explanation Videos:</span> <span className="text-indigo-600 dark:text-indigo-400">Up to $100</span> <span className="text-gray-500 dark:text-gray-400">(based on production quality)</span></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">6. Non-technical Content & Education</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Create engaging, accessible content that introduces Okto and chain abstraction to wider audiences. This includes visual explainers, memes, graphic designs, short-form videos, social media content, and creative storytelling about use cases. The goal is to simplify complex concepts and build awareness among non-technical users and potential adopters.
              </p>
              
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Bounty Amounts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">Most content falls under the Bounty model, except when proposing a series with measurable engagement milestones.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs mr-2">$</span>
                    <span className="text-sm"><span className="font-medium text-gray-700 dark:text-gray-300">Roadmap Discussions, Community Calls:</span> <span className="text-indigo-600 dark:text-indigo-400">Up to $100</span> <span className="text-gray-500 dark:text-gray-400">(based on quality)</span></span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 text-xs mr-2">$</span>
                    <span className="text-sm"><span className="font-medium text-gray-700 dark:text-gray-300">Content Bounties:</span> <span className="text-indigo-600 dark:text-indigo-400">$100 pool monthly</span> <span className="text-gray-500 dark:text-gray-400">(for top 3 viral graphics, memes, videos, threads, blogs)</span></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium text-indigo-600 dark:text-indigo-400">7. Community Growth Initiatives</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Organize and run events that strengthen the Okto community and onboard new users and developers. These initiatives should foster collaboration and build a thriving ecosystem around Okto.
              </p>
              
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Virtual Events</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Online workshops</li>
                    <li>Twitter/X spaces</li>
                    <li>Virtual hackathons</li>
                    <li>Webinars and panels</li>
                    <li>Discord community events</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">In-Person Events</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Local meetups</li>
                    <li>Conference booths/talks</li>
                    <li>In-person hackathons</li>
                    <li>Developer workshops</li>
                    <li>University workshops</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <p className="italic mt-4">
            … and much more, feel free to submit any idea you think would be a great fit for the entire ecosystem.
          </p>
          
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/30 p-3 rounded-lg border-l-[6px] border border-indigo-300 dark:border-indigo-700 border-l-indigo-600 dark:border-l-indigo-400 mt-4 shadow-md">
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              <span className="font-bold text-indigo-800 dark:text-indigo-300">🔑 Key Focus:</span> Okto's support is specifically intended to encourage meaningful use of its SDK and related developer-facing components, with an emphasis on showcasing Okto's capabilities and the value of Chain Abstraction. Please note that this support is not intended to fund entire projects, but to promote integrations that highlight and advance the use of Okto's tools.
            </p>
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Criteria for Project Proposals</h2>
          <p>Project applications will be <strong>evaluated based on the following criteria:</strong></p>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">1. Feasibility & Execution</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Is the project <strong>practical and achievable</strong>?</li>
            <li>Does the team have the <strong>necessary skills and resources</strong> to execute the project?</li>
            <li>Does the proposal have a <strong>clear roadmap with defined milestones</strong>?</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">2. Innovation & Uniqueness</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Is the project <strong>introducing a novel solution</strong> or significantly improving an existing one?</li>
            <li>Does it showcase <strong>Okto SDK and chain abstraction</strong> effectively?</li>
            <li>For non-technical projects:</li>
              <ol type="i" className="pl-6 space-y-1">
                <li>Does it <strong>promote Okto SDK & chain abstraction</strong> effectively?</li>
                <li>Does it <strong>invite more contributions</strong> to the Okto ecosystem?</li>
              </ol>
            <li>How does it promote <strong>ecosystem growth for Okto</strong>?</li>
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

          {/* <hr className="my-6 border-gray-300 dark:border-gray-700" />

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
          </ul> */}

          <hr className="my-6 border-gray-300 dark:border-gray-700" />

          <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Approval & Reward Process</h2>
          
          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Milestone-Based Payment Process</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>All rewards are distributed based on <strong>clearly defined, verifiable milestones</strong> rather than time periods.</li>
            <li>Each milestone must include <strong>measurable outcomes</strong> (e.g., working demo, specific functionality, user metrics) for objective evaluation.</li>
            <li>Rewards are only disbursed upon <strong>successful verification</strong> of each milestone by designated Okto reviewers.</li>
            <li>A portion of rewards (typically 10-20%) may be reserved for release <strong>3 months after product launch</strong> to ensure sustained integration.</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Verification & Quality Standards</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>All submissions undergo <strong>technical review</strong> to ensure they meet Okto's quality standards.</li>
            <li>Reviewers assess both <strong>completeness and quality</strong>, including technical soundness, usability, and alignment with Okto's goals.</li>
            <li>Projects are expected to include a <strong>clear roadmap toward production</strong> deployment.</li>
          </ul>

          <h3 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mt-4">Reward Distribution</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">$OKTO:</span> For successfully completed projects and bounties, $OKTO tokens shall be airdropped post TGE to the Okto wallet, provided all the project requirements have been met.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Dollar worth of $OKTO tokens at TGE:</span> All rewards are calculated in USD-equivalent and paid in $OKTO tokens at TGE.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Community recognition:</span> Top contributors may receive social recognition, features in community calls, and invites to future contributor programs.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              Okto's support is specifically intended to <strong>encourage meaningful use</strong> of Okto SDK and related components, not to fund entire projects.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              Support is provided based on project scope, complexity, and potential ecosystem impact.
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              All proposals will be <strong>reviewed by Okto mentors</strong>, and selected applicants may be invited for a <strong>follow-up discussion</strong>.
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}