
"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  // State to track active section for navigation
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Adding offset for better UX

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation click handler
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="lg:w-3/4 lg:pr-8">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">Summer of Abstraction</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Join Okto's community engagement program and be part of something extraordinary.
            </p>
            <p className="mb-4 dark:text-gray-300">
            Explore exciting project ideas for the Okto Summer of Abstraction program. Build innovative Web3 applications, create educational content, or lead community initiatives with support from Okto.
            </p>
          </div>

          {/* Banner Image */}
          <div className="w-full mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/summer-of-abstraction-banner.jpg" 
              alt="Summer of Abstraction - Retrowave themed banner with palm trees and grid"
              width={1200}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* About Section */}
          <section id="about" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">About the Program</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <p className="mb-4 dark:text-gray-300">
                Summer of Abstraction is Okto's community engagement initiative that brings together developers and non-developers alike. 
                Contribute to exciting projects, solve interesting challenges, and earn rewards while building your portfolio.
              </p>
              <p className="dark:text-gray-300">
                This program is designed to foster innovation, encourage collaboration, and create meaningful opportunities for contributors at all skill levels. 
                Whether you're looking to sharpen your technical skills or contribute your non-technical talents, we have something for you.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Participate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Build Your Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work on real-world projects that you can showcase to potential employers or clients. Add meaningful contributions to your resume and stand out from the crowd.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Earn Rewards</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete bounties and earn recognition for your work. Rewards range from cash prizes to exclusive Okto merchandise and community recognition.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
                <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Connect with Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a vibrant community of like-minded individuals. Network, collaborate, and build relationships that extend beyond the program.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Program Timeline</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <div className="relative">
                {/* Vertical line connecting all events */}
                <div className="absolute top-2 bottom-2 left-6 w-1 bg-indigo-400 dark:bg-indigo-700"></div>
                
                {/* Kickoff */}
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-2 border-indigo-300 dark:border-indigo-700 shadow-md z-10"></div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold dark:text-white">Kickoff</h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-1">June 1, 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">Program launch, project announcements</p>
                  </div>
                </div>
                
                {/* Contribution Period */}
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-2 border-indigo-300 dark:border-indigo-700 shadow-md z-10"></div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold dark:text-white">Contribution Period</h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-1">June 15 - August 15, 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">Active project development and bounty submissions</p>
                  </div>
                </div>
                
                {/* Evaluation */}
                <div className="flex items-start mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-2 border-indigo-300 dark:border-indigo-700 shadow-md z-10"></div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold dark:text-white">Evaluation</h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-1">August 16-30, 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">Review of contributions</p>
                  </div>
                </div>
                
                {/* Awards & Celebration */}
                <div className="flex items-start">
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-2 border-indigo-300 dark:border-indigo-700 shadow-md z-10"></div>
                    </div>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold dark:text-white">Awards & Celebration</h3>
                    <p className="text-indigo-700 dark:text-indigo-400 font-medium mb-1">September 5, 2025</p>
                    <p className="text-gray-600 dark:text-gray-300">Recognition of top contributors</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Getting Started</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <ol className="list-decimal pl-5 space-y-4 dark:text-gray-300">
                <li>
                  <strong>Explore Ideas</strong> - Browse through our 
                  <Link href="/summer-of-abstraction/ideaboard" className="text-indigo-600 dark:text-indigo-400 hover:underline"> ideaboard </Link> 
                  to find projects and bounties that match your interests and skills.
                </li>
                <li>
                  <strong>Apply</strong> - For projects, submit a proposal. For bounties, start building right away!
                </li>
                <li>
                  <strong>Connect</strong> - Join our community Discord channel to connect with mentors and other participants.
                </li>
                <li>
                  <strong>Contribute</strong> - Start working on your chosen idea, with guidance from your mentor.
                </li>
                <li>
                  <strong>Submit</strong> - Complete your work and submit it for review by the stated deadline.
                </li>
              </ol>
            </div>
          </section>

          {/* Call to Action */}
          <section id="cta" className="mb-12 text-center">
            <div className="bg-indigo-600 dark:bg-indigo-700 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
              <p className="mb-6">Don't miss this opportunity to be part of something extraordinary!</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/summer-of-abstraction/ideaboard" 
                  className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-md font-bold"
                >
                  View Ideaboard
                </Link>
                <a 
                  href="#" 
                  className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-md font-bold"
                >
                  Join Discord Community
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side Navigation */}
        <div className="hidden lg:block lg:w-1/4">
          <div className="sticky top-24 bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-bold mb-4 dark:text-white">On This Page</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleNavClick("about")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "about" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    About the Program
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("benefits")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "benefits" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Why Participate?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("timeline")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "timeline" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Program Timeline
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("getting-started")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "getting-started" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Getting Started
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("cta")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "cta" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Ready to Join?
                  </button>
                </li>
                <li className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    href="/summer-of-abstraction/ideaboard" 
                    className="block px-3 py-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View Ideaboard →
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}