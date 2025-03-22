// components/SummerBanner.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function SummerBanner() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  // Measure the main navbar height when the component mounts
  useEffect(() => {
    // Adjust the selector to match your actual navbar element
    const navbar = document.querySelector('nav') || document.querySelector('header');
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <div 
      data-banner="summer"
      className="w-full relative"
      style={{ 
        position: 'sticky',
        top: `${navbarHeight}px`, // Position right below the main navbar
        zIndex: 30
      }}
    >
      <div className="relative w-full h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden">
        <Image 
          src="/images/SummerBanner.png" // Adjust path to your actual image
          alt="Summer of Abstraction Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}