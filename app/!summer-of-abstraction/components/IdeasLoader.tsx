// components/IdeasLoader.tsx
"use client"

import { useEffect, useState } from 'react';
import { loadIdeasFromCSV } from '../data/ideas-data';

export function IdeasLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await loadIdeasFromCSV('/data/ideas.csv');
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load ideas data:', error);
        setError('Failed to load ideas data. Using default dataset.');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 dark:bg-yellow-900/20 dark:border-yellow-500">
          <div className="flex items-start">
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-400">{error}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}