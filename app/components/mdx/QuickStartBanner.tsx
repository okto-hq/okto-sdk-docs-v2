import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";

export default function QuickStartBanner() {
  const baseButtonStyles = "relative group no-underline p-3 rounded-md border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-zinc-700/90 dark:hover:border-zinc-500";
  const baseIconStyles = "transition-transform transition-colors duration-200 ease-in-out group-hover:scale-110";
  
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 mb-8 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-sm">
      <div className="flex-1 pr-4 mb-6 lg:mb-0">
        <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-2 mt-2">
          Quick Start Guides
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 m-0">
          Get straight to building your Okto-powered app with our Quickstart Guides.
        </p>
      </div>
      <div className="flex gap-6 items-center flex-wrap justify-center">
        <Link
          href="/docs/react-sdk"
          className={baseButtonStyles}
        >
          <FaReact
            size={36}
            className={`${baseIconStyles} text-[#61dafb] opacity-80 group-hover:opacity-100`}
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            React Quickstart
          </span>
        </Link>

        <Link
          href="/docs/nextjs-sdk"
          className={baseButtonStyles}
        >
          <TbBrandNextjs
            size={36}
            className={`${baseIconStyles} text-black dark:text-white opacity-80 group-hover:opacity-100`}
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Next.js Quickstart
          </span>
        </Link>

        {/* <Link
          href="/docs/react-native-sdk"
          className={baseButtonStyles}
        >
          <TbBrandReactNative
            size={36}
            className={`${baseIconStyles} text-purple-500 opacity-80 group-hover:opacity-100`}
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            React Native Quickstart
          </span>
        </Link> */}

        <Link
          href="/docs/typescript-sdk"
          className={baseButtonStyles}
        >
          <SiTypescript
            size={36}
            className={`${baseIconStyles} text-[#3178c6] opacity-80 group-hover:opacity-100`}
          />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            TypeScript Quickstart
          </span>
        </Link>
      </div>
    </div>
  );
}