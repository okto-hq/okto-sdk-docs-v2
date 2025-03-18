'use client';

import { Sun } from 'lucide-react';
import Link from 'next/link';

export default function SOABanner() {
  return (
    <div className="px-4 py-2 bg-gradient-to-r from-green-50/90 to-green-100/90 dark:from-green-950/30 dark:to-green-900/30 border-b border-green-200 dark:border-green-800/30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-2">
        <Sun className="h-4 w-4 text-green-600 dark:text-green-500 flex-shrink-0" />
        <p className="text-sm text-green-700 dark:text-green-300">
          Check out {' '}
          <Link
            href="/summer-of-abstraction"
            className="font-medium text-green-800 dark:text-green-200 hover:text-green-900 dark:hover:text-green-100 underline underline-offset-4"
          >
            Okto Summer of Abstraction
          </Link>
          {' '}to contribute to Okto and earn Okto points.
        </p>
      </div>
    </div>
  );
}