import { FaTools, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function DevTools() {
  return (
    <div className="not-prose flex flex-col lg:flex-row items-center justify-between px-6 py-4 mb-8 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-sm">
      <div className="flex-1 pr-4 mb-6 lg:mb-0">
        <div className="flex items-center gap-2 mb-2">
          <FaTools size={24} className="text-[#3178c6] flex-shrink-0" />
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 m-0">
            Dev Tools Available!
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 m-0">
          For quick testing purposes, we provide development tools like the Okto Auth Token Generator. This tool helps you generate authentication tokens instantly, making it easier to test our APIs.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/tools"
          className="relative group no-underline px-6 py-3 rounded-md border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-zinc-700/90 dark:hover:border-zinc-500"
        >
          <span className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium">
            <FaTools size={20} />
            Session & OAuth Token Generator
          </span>
        </Link>
        <Link
          href="https://github.com/okto-hq/okto-sdkv2-ts-template/blob/main/src/api_template.ts"
          className="relative group no-underline px-6 py-3 rounded-md border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-zinc-700/90 dark:hover:border-zinc-500"
          target="_blank">
          <span className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium justify-center">
            <FaGithub size={20} />
            Github API Template
          </span>
        </Link>
      </div>
    </div>
  );
}