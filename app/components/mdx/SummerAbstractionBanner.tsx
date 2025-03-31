'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SummerAbstractionBanner() {
  return (
    <div className="not-prose w-full my-10 rounded-xl overflow-hidden border border-indigo-300 dark:border-indigo-700 shadow-lg transition-all hover:shadow-xl">
      {/* Banner layout */}
      <div className="flex flex-col w-full h-64"> {/* Increased height from 56 to 64 */}
        {/* Banner image at top 30% */}
        <div className="w-full h-[30%] relative">
          <Image 
            src="/images/soabanner.png"
            alt="Summer of Abstraction"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        
        {/* Content area in remaining 70% */}
        <div className="w-full h-[70%] relative shadow-inner">
          {/* Static gradient background (no animation) */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          
          {/* Grid overlay for retro effect */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '-1px -1px',
            }}
          />
          
          {/* Content container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-full md:w-[95%] px-4 md:px-6 text-center"> {/* Adjusted width and padding */}
              <p className="text-white text-sm md:text-base lg:text-lg opacity-90 drop-shadow-md max-w-none mx-auto leading-relaxed"> {/* Added leading-relaxed and adjusted text size */}
                Build, learn, and earn with Okto! Summer of Abstraction welcomes developers, creators, and community builders to join the Okto ecosystem and contribute to the future of Web3.
              </p>
              
              <div className="mt-3 flex flex-wrap justify-center gap-6">
                <Link 
                  href="/summer-of-abstraction"
                  className="inline-block bg-white text-indigo-700 font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105" /* Reduced py from 3 to 2.5 */
                >
                  Learn More
                </Link>
                <Link 
                  href="/summer-of-abstraction/ideaboard"
                  className="inline-block bg-indigo-900 bg-opacity-40 hover:bg-opacity-60 text-white font-bold px-6 py-2.5 rounded-full border border-white border-opacity-40 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105" /* Reduced py from 3 to 2.5 */
                >
                  View Ideaboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}