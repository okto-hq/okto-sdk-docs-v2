import { FaReact, FaUnity, FaRainbow } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative, TbApi, TbArrowsExchange } from "react-icons/tb";
import { SiTypescript, SiWagmi } from "react-icons/si";
import Link from "next/link";

export default function QuickStartBanner() {
  const baseButtonStyles = "relative group no-underline p-1.5 rounded-md border-2 border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:hover:bg-zinc-700/90 dark:hover:border-zinc-500";
  const baseIconStyles = "transition-transform transition-colors duration-200 ease-in-out group-hover:scale-110";
  const tooltipStyles = "pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50";
  const sectionTitleStyles = "text-base font-semibold text-zinc-700 dark:text-zinc-300 mb-2 text-center";

  return (
    <div className="not-prose flex flex-col items-center px-4 py-3 mb-6 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all shadow-sm">
      {/* Header Section - Centered */}
      <div className="text-center mb-3">
        <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-1">
          Quick Start Guides
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 m-0">
          Get straight to building your Okto-powered app with our Quickstart Guides.
        </p>
      </div>

      {/* Separator Line */}
      <div className="w-full max-w-4xl mx-auto mb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent"></div>
      </div>

      {/* Three Sections */}
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
        {/* Trade Service Section */}
        <div className="flex flex-col items-center lg:flex-[0.8] px-1">
          <h3 className={sectionTitleStyles}>Trade Service</h3>
          <div className="flex justify-center">
            <Link
              href="/docs/trade-service"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <TbArrowsExchange
                size={28}
                className={`${baseIconStyles} text-blue-500 opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                Trade Service
              </span>
            </Link>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-600 to-transparent self-stretch"></div>

        {/* Okto SDK Section */}
        <div className="flex flex-col items-center lg:flex-[2] px-3">
          <h3 className={sectionTitleStyles}>Okto SDK</h3>
          <div className="flex gap-2 flex-wrap justify-center">
            <Link
              href="/docs/react-sdk"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <FaReact
                size={28}
                className={`${baseIconStyles} text-[#61dafb] opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                React Quickstart
              </span>
            </Link>

            <Link
              href="/docs/nextjs-sdk"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <TbBrandNextjs
                size={28}
                className={`${baseIconStyles} text-black dark:text-white opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                Next.js Quickstart
              </span>
            </Link>

            <Link
              href="/docs/react-native-sdk"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <TbBrandReactNative
                size={28}
                className={`${baseIconStyles} text-purple-500 opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                React Native Quickstart
              </span>
            </Link>

            <Link
              href="/docs/typescript-sdk"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <SiTypescript
                size={28}
                className={`${baseIconStyles} text-[#3178c6] opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                TypeScript Quickstart
              </span>
            </Link>

            <Link
              href="/docs/unity-sdk"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <FaUnity
                size={28}
                className={`${baseIconStyles} text-black dark:text-white opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                Unity Quickstart
              </span>
            </Link>

            <Link
              href="/docs/openapi"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <TbApi
                size={28}
                className={`${baseIconStyles} text-green-500 opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                API Reference
              </span>
            </Link>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-600 to-transparent self-stretch"></div>

        {/* External Wallet Adapters Section */}
        <div className="flex flex-col items-center lg:flex-[0.8] px-3">
          <h3 className={sectionTitleStyles}>Wallet Adapters</h3>
          <div className="flex gap-2 justify-center">
            <Link
              href="/docs/external-wallet-adapters/wagmi/setup"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <SiWagmi
                size={28}
                className={`${baseIconStyles} text-pink-500 opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                Wagmi Integration
              </span>
            </Link>

            <Link
              href="/docs/external-wallet-adapters/rainbowkit/setup"
              className={`${baseButtonStyles} quickstart-banner-link-analytics-tracker`}
            >
              <FaRainbow
                size={28}
                className={`${baseIconStyles} text-white-500 opacity-80 group-hover:opacity-100`}
              />
              <span className={tooltipStyles}>
                RainbowKit Integration
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}