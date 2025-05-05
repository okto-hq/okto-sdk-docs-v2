"use client"

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProposalPreparationDialogProps {
  children: React.ReactNode;
  linkClassName?: string;
}

export function ProposalPreparationDialog({ children, linkClassName }: ProposalPreparationDialogProps) {
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
            Proposal Preparation Guidelines
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-indigo dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            To help you craft a successful proposal, we've outlined specific guidelines and considerations for different project types. Please review the relevant section below based on your project category.
          </p>

          {/* Community Events Guidelines */}
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6 mb-4">Community Events</h3>
          
          <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Event Categories & Durations</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
              <h5 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Virtual Events</h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>&lt; 3 hours:</strong> Twitter spaces, LinkedIn events, podcasts, online workshops, livestreams, speaker sessions</li>
                <li><strong>&lt; 1 day:</strong> Online workshops, conferences, bootcamps, lectures</li>
                <li><strong>2+ days:</strong> Hackathon workshops, online hackerhouses, multi-day conferences, lecture series</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
              <h5 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">In-Person Events</h5>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>&lt; 3 hours:</strong> Panel discussions, regional meetups, speaker sessions, workshops</li>
                <li><strong>&lt; 1 day:</strong> Workshops, conferences, bootcamps, regional events</li>
                <li><strong>2+ days:</strong> Workshops, hackathons, hackerhouses, conferences, bootcamps</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-200 dark:border-yellow-800 mb-6">
            <h5 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">Important Considerations</h5>
            <ul className="list-disc pl-5 space-y-1 text-yellow-700 dark:text-yellow-300">
              <li>We support events that highlight Okto or include dedicated Okto segments</li>
              <li>Only Okto-relevant portions are eligible for rewards (e.g., specific bounties, dedicated talks, workshops)</li>
              <li>Rewards focus on high-ROI contributions that promote Okto tools and SDK usage</li>
              <li>Payments are processed after successful event completion and verification</li>
              <li>Social media and Discord engagement tracking continues for 30 days post-event</li>
            </ul>
          </div>

          {/* DApps Guidelines */}
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">DApp Projects</h3>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800 mb-4">
            <h5 className="font-medium text-indigo-700 dark:text-indigo-400 mb-2">Milestone Structure</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Define clear, measurable milestones based on verifiable outcomes</li>
              <li>Include quantifiable metrics (e.g., user numbers) or demonstrable outputs (e.g., working demos)</li>
              <li>Avoid vague milestone descriptions</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-200 dark:border-blue-800 mb-6">
            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Sustainability & Roadmap</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Include a clear roadmap toward production deployment</li>
              <li>Note that a portion of rewards may be reserved for 3 months post-launch</li>
              <li>This ensures sustained integration and long-term value of Okto tools</li>
            </ul>
          </div>

          {/* Ecosystem Projects Guidelines */}
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">Ecosystem Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md border border-green-200 dark:border-green-800">
              <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Project Goals</h5>
              <ul className="list-disc pl-5 space-y-1 text-green-700 dark:text-green-300">
                <li>Create shared tools for multiple developers</li>
                <li>Provide long-term value to the ecosystem</li>
                <li>Drive community growth and tooling</li>
                <li>Align with Okto's roadmap</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md border border-purple-200 dark:border-purple-800">
              <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Requirements</h5>
              <ul className="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-300">
                <li>6-month maintenance commitment</li>
                <li>Open-source, well-documented output</li>
                <li>Periodic check-ins with Okto team</li>
                <li>Utility beyond single use cases</li>
              </ul>
            </div>
          </div>

          {/* Content Projects Guidelines */}
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-8 mb-4">Content Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md border border-amber-200 dark:border-amber-800">
              <h5 className="font-medium text-amber-700 dark:text-amber-400 mb-2">Content Guidelines</h5>
              <ul className="list-disc pl-5 space-y-1 text-amber-700 dark:text-amber-300">
                <li>Original, accurate content</li>
                <li>Correct Okto SDK references</li>
                <li>Clear distribution plan</li>
                <li>Defined engagement milestones</li>
              </ul>
            </div>
            
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-md border border-rose-200 dark:border-rose-800">
              <h5 className="font-medium text-rose-700 dark:text-rose-400 mb-2">For Long-form Series</h5>
              <ul className="list-disc pl-5 space-y-1 text-rose-700 dark:text-rose-300">
                <li>Topic & content calendar</li>
                <li>Distribution channels</li>
                <li>Engagement metrics (views, shares)</li>
                <li>Quality over quantity approach</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700 mb-6">
            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Content Types & Rewards</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Tech Tutorials</p>
                <p className="text-gray-600 dark:text-gray-400">Up to $100</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Thought Leadership</p>
                <p className="text-gray-600 dark:text-gray-400">Up to $100</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Animated Explainers</p>
                <p className="text-gray-600 dark:text-gray-400">Up to $100</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Content Series</p>
                <p className="text-gray-600 dark:text-gray-400">Up to $250</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Monthly Bounties</p>
                <p className="text-gray-600 dark:text-gray-400">$100 pool/month</p>
              </div>
            </div>
          </div>

          {/* Key Reminders */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/20 p-4 rounded-lg border border-indigo-300 dark:border-indigo-700 mt-6">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Remember</h4>
            <p className="text-gray-700 dark:text-gray-300">
              All projects should meaningfully integrate and showcase Okto's capabilities. Support is provided to encourage the use of Okto SDK and tools, and not to fund entire projects. Participants should focus on creating high-quality contributions that demonstrate the value of Okto's technology.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}