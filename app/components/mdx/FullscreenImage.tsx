"use client"
import React, { useState } from 'react';

interface FullscreenImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt, className }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <img 
        src={src} 
        alt={alt || 'Image'} 
        className={`cursor-pointer ${className || ''}`} 
        onClick={openFullscreen}
      />
      
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeFullscreen}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeFullscreen();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={src}
              alt={alt || 'Fullscreen image'}
              className="max-h-[calc(100vh-16px)] max-w-[calc(100vw-16px)] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FullscreenImage;