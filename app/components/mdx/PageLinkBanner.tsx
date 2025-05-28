import {
  FaDownload,
} from "react-icons/fa6";
import Link from "next/link";

interface PageLinkBannerProps {
  title: string;
  description?: string;
  link: string;
  titleIcon: JSX.Element;
  buttonIcon: JSX.Element;
  buttonText: string;
}

export default function PageLinkBanner({
  title,
  description,
  link,
  titleIcon,
  buttonIcon,
  buttonText
}: PageLinkBannerProps) {
  return (
    <div className="not-prose flex flex-col lg:flex-row items-center justify-between px-6 py-4 mb-8 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-sm">
      <div className="flex-1 pr-4 mb-6 lg:mb-0">
        <div className="flex items-center gap-2 mb-2">
          {titleIcon}
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 m-0">
            {title}
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 m-0">{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={link}
          className="relative group no-underline px-6 py-3 rounded-md border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-zinc-700/90 dark:hover:border-zinc-500"
        >
          <span
            className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium"
          >
            {buttonIcon}
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
}
