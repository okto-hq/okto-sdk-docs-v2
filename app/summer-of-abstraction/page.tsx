"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProposalGuidelinesDialog } from "./components/ProposalGuidelinesDialog";
import { ProposalTemplateDialog } from "./components/ProposalTemplateDialog";
import { SubmissionGuideDialog } from "./components/SubmissionGuideDialog";
import { SummerBanner } from "./components/SummerBanner";

export default function Page() {
  // State to track active section for navigation
  const [activeSection, setActiveSection] = useState("");
  
  const [activePath, setActivePath] = useState('developer');

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

  // Add this to the useEffect in your Page component
  useEffect(() => {
    // Function to measure heights and set CSS variables
    const setHeightVariables = () => {
      // Measure navbar height (adjust selector to match your navbar)
      const navbar = document.querySelector('nav') || document.querySelector('header');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 64;
      
      // Measure banner height
      const banner = document.querySelector('[data-banner="summer"]');
      const bannerHeight = banner ? banner.getBoundingClientRect().height : 120;
      
      // Set CSS variables
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
    };
  
  // Run immediately and on resize
  setHeightVariables();
  window.addEventListener('resize', setHeightVariables);
  
  return () => {
    window.removeEventListener('resize', setHeightVariables);
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
    <>
    <SummerBanner />
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="lg:w-3/4 lg:pr-8">
          {/* Header Section */}
          <div className="text-center mb-6">
            {/* <h1 className="text-4xl font-bold mb-4 dark:text-white">Summer of Abstraction</h1> */}
            {/* <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Join Okto's community engagement program and be part of something extraordinary.
            </p> */}
            <p className="mb-4 dark:text-gray-300">
            Explore exciting project ideas for the Okto Summer of Abstraction program. Build innovative Web3 applications, create educational content, or lead community initiatives with support from Okto.
            </p>
          </div>

          {/* Banner Image */}
          {/* <div className="w-full mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/summer-of-abstraction-banner.jpg" 
              alt="Summer of Abstraction - Retrowave themed banner with palm trees and grid"
              width={1200}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div> */}

          {/* About Section */}
          <section id="about" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">About the Program</h2>
            <div className="w-full mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/who-is-it-for.jpg" 
              alt="who-is-it-for banner"
              width={1200}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
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
                  Complete bounties and earn recognition for your work. Rewards range from $OKTO tokens, Stablecoin prizes to exclusive Okto merchandise and community recognition.
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

          {/* How to Participate Section (moved from ideaboard page) */}
          <section id="how-to-participate" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">How to Participate</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <div className="relative">
                {/* Vertical line connecting all events - Fixed position */}
                <div className="absolute left-6 w-1 bg-indigo-400 dark:bg-indigo-700" style={{ top: "24px", bottom: "24px" }}></div>
                
                {/* Browse */}
                <div className="flex items-start mb-10 relative">
                  <div className="min-w-[48px] z-10">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-md flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white">Browse Ideas or Propose Your Own</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Browse through our <Link href="/summer-of-abstraction/ideaboard" className="text-indigo-600 dark:text-indigo-400 hover:underline"> Idea Board </Link> to find projects and bounties that match your interests and skills. Filter by type to find the perfect fit. 
                      Or if you have an idea of your own where okto is used, propose it to us for a project collab.
                    </p>
                  </div>
                </div>
                
                {/* Choose */}
                <div className="flex items-start mb-10 relative">
                  <div className="min-w-[48px] z-10">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-md flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white">Choose Your Path</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Decide whether you want to work on a project (requires proposal acceptence) or a bounty (start immediately). Each has different requirements and timelines.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-md border border-indigo-100 dark:border-indigo-800 cursor-pointer">
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-1">Projects</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Requires a proposal, review and acceptence process. Longer-term commitments with structured milestones and payments.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <ProposalGuidelinesDialog linkClassName="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1.5 px-3 rounded-md transition-colors">
                            View proposal guidelines
                          </ProposalGuidelinesDialog>
                          <ProposalTemplateDialog linkClassName="inline-block bg-indigo-300 hover:bg-indigo-500 text-indigo-700 dark:bg-indigo-900/60 dark:hover:bg-indigo-900/80 dark:text-indigo-300 text-sm py-1.5 px-3 rounded-md transition-colors border border-indigo-200 dark:border-indigo-800">
                            Get proposal template
                          </ProposalTemplateDialog>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-md border border-purple-100 dark:border-purple-800 cursor-pointer">
                        <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-1">Bounties</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Start immediately without approval. Submit when ready, winners are selected in fixed or periodic review cycles.
                        </p>
                        <div className="mt-3">
                          <SubmissionGuideDialog linkClassName="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm py-1.5 px-3 rounded-md transition-colors">
                            View submission guide
                          </SubmissionGuideDialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Apply/Start */}
                <div className="flex items-start mb-10 relative">
                  <div className="min-w-[48px] z-10">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-md flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white">Apply or Start Building</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      For projects, submit a proposal using our template. For bounties, start working right away on your implementation.
                    </p>
                  </div>
                </div>
                
                {/* Submit */}
                <div className="flex items-start relative">
                  <div className="min-w-[48px] z-10">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-md flex items-center justify-center">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white">Submit Your Work</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Complete your project or bounty according to the requirements and submit for review by the stated deadline.
                    </p>
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
                  <Link href="/summer-of-abstraction/ideaboard" className="text-indigo-600 dark:text-indigo-400 hover:underline"> Idea Board </Link> 
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
              <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-indigo-700 dark:text-indigo-400">Note: </span>
                The ideas presented in this idea board are just suggestions to help you get started. We welcome proposals for any kind of idea that can help the Okto ecosystem grow. Whether you're a builder, content creator, community manager, or have a different skill set entirely, we encourage you to apply with your innovative and interesting concepts. The Summer of Abstraction program is open to everyone with a passion for Web3 and a vision for improving the Okto ecosystem. Don't feel limited by what you see here – we're excited to see your unique proposals!
              </p>
            </div>
            </div>
          </section>

          {/* Grow with Okto Section */}
          <section id="grow-with-okto" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Grow with Okto</h2>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <p className="mb-4 dark:text-gray-300">
                The Summer of Abstraction offers clear growth paths for contributors in different domains. As you progress, you'll unlock more benefits and opportunities!
              </p>
              
              {/* Growth Paths Tabs */}
              <div className="mt-8">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="-mb-px flex space-x-2 overflow-x-auto">
                    <button 
                      onClick={() => setActivePath('developer')}
                      className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium ${activePath === 'developer' ? 'border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}
                    >
                      Developer/Builder Path
                    </button>
                    <button 
                      onClick={() => setActivePath('content')}
                      className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium ${activePath === 'content' ? 'border-green-500 dark:border-green-400 text-green-600 dark:text-green-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}
                    >
                      Content Creator Path
                    </button>
                    <button 
                      onClick={() => setActivePath('community')}
                      className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium ${activePath === 'community' ? 'border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}
                    >
                      Community Path
                    </button>
                  </nav>
                </div>
                
                {/* Path Content - Developer */}
                {activePath === 'developer' && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">1. Developer/Builder Path</h3>
                    
                    {/* Level 1: Builder */}
                    <div className="mb-8 border-l-4 border-indigo-200 dark:border-indigo-800 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center rounded-full font-bold mr-2">L1</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 1: Builder</h4>
                        <span className="ml-3 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-full">First 3 months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Complete at least 1 bounty or project contribution</li>
                            <li>Build a project on Okto SDK</li>
                            <li>Actively participate in developer community discussions</li>
                            <li>Submit quality code that passes review</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Complete at least 3 accepted contributions within 3 months or build a well-designed and fully functional project on Okto SDK with a roadmap to production.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Access to dedicated developer channels</li>
                            <li>Points/rewards for completed bounties and projects</li>
                            <li>Mentor support and technical guidance</li>
                            <li>Basic Okto developer swag (stickers, digital badges)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 2: Core Builder */}
                    <div className="mb-8 border-l-4 border-indigo-300 dark:border-indigo-700 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-indigo-200 dark:bg-indigo-800/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center rounded-full font-bold mr-2">L2</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 2: Core Builder</h4>
                        <span className="ml-3 text-sm bg-indigo-200 dark:bg-indigo-800/40 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full">Months 3-6</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements (in addition to the previous level):</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Maintain regular contributions (at least 1 per month)</li>
                            <li>Help review other developers' contributions</li>
                            <li>Participate in technical discussions and provide solutions</li>
                            <li>Demonstrate a deep understanding of Okto's architecture</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Complete at least 5 significant contributions and assist with at least 3 peer reviews.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Early access to new Okto SDK features and APIs</li>
                            <li>Increased points/rewards for contributions</li>
                            <li>Recognition in Okto's developer community</li>
                            <li>Premium Okto merchandise (t-shirts, hoodies)</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 3: Dev Ambassador */}
                    <div className="mb-2 border-l-4 border-indigo-500 dark:border-indigo-600 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-indigo-500 dark:bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold mr-2">L3</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 3: Dev Ambassador</h4>
                        <span className="ml-3 text-sm bg-indigo-500 dark:bg-indigo-600 text-white px-3 py-1 rounded-full">After 6+ months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements (in addition to the previous level):</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Create significant technical impact through contributions</li>
                            <li>Help onboard and mentor new builders</li>
                            <li>Represent Okto at developer events (virtual or in-person)</li>
                            <li>Contribute to technical discussions about Okto's future</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Opportunities to speak at Okto events and conferences</li>
                            <li>Direct channel to Okto's development team</li>
                            <li>Highest tier of recognition and rewards</li>
                            <li>Exclusive ambassador-only events and retreats</li>
                            <li>Potential for paid contributions and sponsored projects</li>
                            <li>Potential to get full-time working roles with Okto</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Path Content - Content Creator */}
                {activePath === 'content' && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-6">2. Content Creator Path</h3>
                    
                    {/* Level 1: Contributor */}
                    <div className="mb-8 border-l-4 border-green-200 dark:border-green-800 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center rounded-full font-bold mr-2">L1</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 1: Contributor</h4>
                        <span className="ml-3 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">First 3 months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Create at least 2 content pieces (articles, tutorials, videos)</li>
                            <li>Regular social media posts on contributions to Okto</li>
                            <li>Interaction with Okto's content on various platforms</li>
                            <li>Demonstrate understanding of Okto concepts</li>
                            <li>Follow Okto's content guidelines and branding</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Publish at least 3 quality content pieces that meet guidelines.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Points/rewards for published content</li>
                            <li>Personal branding opportunity through Okto's channels</li>
                            <li>Basic Okto creator swag</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 2: Creator */}
                    <div className="mb-8 border-l-4 border-green-300 dark:border-green-700 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-green-200 dark:bg-green-800/60 text-green-700 dark:text-green-300 flex items-center justify-center rounded-full font-bold mr-2">L2</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 2: Creator</h4>
                        <span className="ml-3 text-sm bg-green-200 dark:bg-green-800/40 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">Months 3-6</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements (in addition to the previous level):</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Create regular content (minimum 2 pieces per month)</li>
                            <li>Help review other creators' content for accuracy</li>
                            <li>Engage with other communities to promote Okto's approach where relevant</li>
                            <li>Expand content reach across different formats or platforms</li>
                            <li>Expand the content to a collab between Okto and other protocols</li>
                            <li>Demonstrate expert knowledge of Okto features</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Publish 5+ high-quality content pieces with demonstrable engagement.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Increased visibility on Okto's official channels</li>
                            <li>Early access to product updates for content creation</li>
                            <li>Premium Okto merchandise</li>
                            <li>Increased points/rewards for published content</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 3: Leader/Educator */}
                    <div className="mb-2 border-l-4 border-green-500 dark:border-green-600 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-green-500 dark:bg-green-600 text-white flex items-center justify-center rounded-full font-bold mr-2">L3</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 3: Leader/Educator</h4>
                        <span className="ml-3 text-sm bg-green-500 dark:bg-green-600 text-white px-3 py-1 rounded-full">After 6+ months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Develop comprehensive educational materials</li>
                            <li>Lead content initiatives and collaborations</li>
                            <li>Help set content direction and standards</li>
                            <li>Mentor new content contributors</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Opportunities to create official Okto content</li>
                            <li>Potential sponsored content series</li>
                            <li>Leadership role in Okto's content community</li>
                            <li>Speaker opportunities at events</li>
                            <li>Exclusive access to Okto leadership</li>
                            <li>Potential for paid educational content creation</li>
                            <li>Potential to get full-time working roles with Okto</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Path Content - Community */}
                {activePath === 'community' && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-6">3. Community Path</h3>
                    
                    {/* Level 1: Moderator */}
                    <div className="mb-8 border-l-4 border-amber-200 dark:border-amber-800 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center rounded-full font-bold mr-2">L1</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 1: Moderator</h4>
                        <span className="ml-3 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full">First 3 months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Regularly participate in community discussions</li>
                            <li>Help moderate community channels</li>
                            <li>Assist new members with basic questions</li>
                            <li>Report issues and collect feedback</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Demonstrate consistent moderation.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Special moderator role in community channels</li>
                            <li>Points/rewards for active participation</li>
                            <li>Basic Okto community swag</li>
                            <li>Early access to community events</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 2: Event Organizer */}
                    <div className="mb-8 border-l-4 border-amber-300 dark:border-amber-700 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-amber-200 dark:bg-amber-800/60 text-amber-700 dark:text-amber-300 flex items-center justify-center rounded-full font-bold mr-2">L2</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 2: Event Organizer</h4>
                        <span className="ml-3 text-sm bg-amber-200 dark:bg-amber-800/40 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full">Months 3-6</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements (in addition to the previous level):</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Lead community discussions and initiatives</li>
                            <li>Organize small community events or meetups</li>
                            <li>Engage with other communities to promote Okto's approach where relevant</li>
                            <li>Help onboard and guide new moderators</li>
                            <li>Collect and synthesize community feedback</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 italic">
                            <strong>Advancement Criteria:</strong> Successfully lead 3+ community initiatives and demonstrate leadership.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Authority to lead specific community areas</li>
                            <li>Budget for community activities</li>
                            <li>Premium Okto merchandise</li>
                            <li>Monthly calls with Okto community team</li>
                            <li>Recognition as official community representative</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 3: Community Leader */}
                    <div className="mb-2 border-l-4 border-amber-500 dark:border-amber-600 pl-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-amber-500 dark:bg-amber-600 text-white flex items-center justify-center rounded-full font-bold mr-2">L3</div>
                        <h4 className="text-lg font-semibold dark:text-white">Level 3: Community Leader</h4>
                        <span className="ml-3 text-sm bg-amber-500 dark:bg-amber-600 text-white px-3 py-1 rounded-full">After 6+ months</span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Requirements (in addition to the previous level):</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Plan and execute larger community events</li>
                            <li>Represent Okto at external industry events</li>
                            <li>Build connections with other Web3 communities</li>
                            <li>Help shape Okto's community strategy</li>
                            <li>Dynamic NFT for the path+level</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2 dark:text-white">Incentives:</h5>
                          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
                            <li>Budget and resources for event organization</li>
                            <li>Travel support for representing Okto at events</li>
                            <li>Direct channel to Okto's marketing and community leadership</li>
                            <li>Exclusive ambassador-only retreats</li>
                            <li>Potential for paid community management opportunities</li>
                            <li>Potential to get full-time working roles with Okto</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Tab Navigation Buttons */}
                <div className="mt-10 flex justify-center">
                  <div className="inline-flex rounded-md shadow-sm">
                    <button 
                      onClick={() => setActivePath('developer')} 
                      className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:z-10 cursor-pointer ${
                        activePath === 'developer' 
                          ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300' 
                          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      Developer Path
                    </button>
                    <button 
                      onClick={() => setActivePath('content')} 
                      className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:z-10 cursor-pointer ${
                        activePath === 'content' 
                          ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      Content Creator Path
                    </button>
                    <button 
                      onClick={() => setActivePath('community')} 
                      className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:z-10 cursor-pointer ${
                        activePath === 'community' 
                          ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300' 
                          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      Community Path
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          {/* Prizes and Rewards Section */}
          <section id="prizes" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Prizes and Rewards</h2>
            
            {/* Banner placeholder - you can replace this with your actual banner */}
            <div className="w-full mb-10 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/Prizes.jpg" 
              alt="Prizes and Rewards Banner"
              width={1200}
              height={500}
              className="w-full object-cover"
              priority
            />
          </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900 border border-gray-300 dark:border-gray-700">
              <ul className="space-y-3 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">•</span>
                  <span><strong>25 Million Okto Points</strong> Pool (shared among participants based on contribution).</span>
                </li>
                <li>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">•</span>
                <span><strong>Mentorship and exclusive networking</strong> with industry experts, Web3 leaders, and Team Okto, giving you opportunities to work closely with leading Web3 professionals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">•</span>
                  <span><strong>Feature on Okto's Official Channels</strong> (Blogs, Twitter, Discord, etc.).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">•</span>
                  <span>Work from our <strong>Crypto Café</strong> at the CoinDCX Bengaluru office and brainstorm with our team.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold mr-2">•</span>
                  <span>And last of all, <strong>exclusive merch kits for everyone!</strong></span>
                </li>
              </ul>
              
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 dark:bg-yellow-900/20 dark:border-yellow-600">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 text-xl">💰</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-yellow-700 dark:text-yellow-400 italic">
                      We have also allocated a $10K cash pool to reward projects and contributions that exceed expectations and demonstrate exceptional quality.
                    </p>
                  </div>
                </div>
              </div>
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
                  View Idea Board
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
        <div 
              className="sticky mt-4 bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm"
              style={{ 
                top: 'calc(var(--navbar-height, 64px) + var(--banner-height, 120px) + 20px)',
                zIndex: 20 
              }}
        >
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
                    onClick={() => handleNavClick("how-to-participate")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "how-to-participate" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    How to Participate
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
                    onClick={() => handleNavClick("grow-with-okto")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "grow-with-okto" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Grow With Okto
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("prizes")} 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === "prizes" 
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-medium" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"}`}
                  >
                    Prizes and Rewards
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
                    View Idea Board →
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}