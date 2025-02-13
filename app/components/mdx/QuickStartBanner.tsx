import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import Link from 'next/link';

export default function QuickStartBanner() {
  return (
    <div className="flex items-center justify-between px-4 mb-8 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all">
      <div className="flex-1 pr-4">
        <p className="text-zinc-800 dark:text-zinc-200">
        Get straight to building your Okto-powered app with our Quickstart Guides.
        </p>
      </div>
      <div className="flex gap-6 items-center">
        <Link 
          href="/docs/react-sdk/quickstart/new-okto-react-setup" 
          className="no-underline p-2 rounded-md border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
        >
          <FaReact size={32} className="text-zinc-600 dark:text-zinc-400" />
        </Link>
        <Link 
          href="/docs/react-sdk/quickstart/new-okto-nextjs-setup" 
          className="no-underline p-2 rounded-md border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
        >
          <TbBrandNextjs size={32} className="text-zinc-600 dark:text-zinc-400" />
        </Link>
        <Link 
          href="/docs/typescript-sdk/quickstart" 
          className="no-underline p-2 rounded-md border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
        >
          <SiTypescript size={32} className="text-zinc-600 dark:text-zinc-400" />
        </Link>
      </div>
    </div>
  );
}