import {
  FaReact,
  FaGithub,
  FaCode,
  FaRainbow,
  FaServer,
} from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative, TbArrowsExchange } from "react-icons/tb";
import { Si1And1, SiTypescript, SiUnity, SiWagmi } from "react-icons/si";
import Link from "next/link";

type SDKType =
  | "react"
  | "nextjs"
  | "react-native"
  | "typescript"
  | "eliza-okto-plugin"
  | "unity"
  | "wagmi-okto"
  | "rainbow-okto"
  | "api-reference"
  | "trade-service";

interface TemplateRepoBannerProps {
  sdk: SDKType;
  title?: string;
  description?: string;
  repoUrl?: string;
  templateUrl?: string;
}

const SDK_CONFIG = {
  react: {
    icon: (
      <FaReact
        size={24}
        className="flex-shrink-0 text-[#61dafb] animate-spin-slow"
      />
    ),
    defaultRepo: "https://github.com/okto-hq/okto-sdkv2-react-template-app",
    defaultTemplateUrl: "/docs/react-sdk/templateRepo",
  },
  nextjs: {
    icon: (
      <TbBrandNextjs
        size={24}
        className="flex-shrink-0 text-black dark:text-white"
      />
    ),
    defaultRepo: "https://github.com/okto-hq/okto-sdkv2-nextjs-template-app",
    defaultTemplateUrl: "/docs/nextjs-sdk/templateRepo",
  },
  "react-native": {
    icon: (
      <TbBrandReactNative
        size={24}
        className="flex-shrink-0 text-[#61dafb] animate-spin-slow"
      />
    ),
    defaultRepo:
      "https://github.com/okto-hq/okto-sdkv2-react-native-template-app",
    defaultTemplateUrl: "/docs/react-native-sdk/templateRepo",
  },
  typescript: {
    icon: <SiTypescript size={24} className="flex-shrink-0 text-[#3178c6]" />,
    defaultRepo: "https://github.com/okto-hq/okto-sdkv2-ts-template",
    defaultTemplateUrl: "https://github.com/okto-hq/okto-sdkv2-ts-template",
  },
  "eliza-okto-plugin": {
    icon: <FaCode size={24} className="flex-shrink-0 text-[#3178c6]" />,
    defaultRepo: "https://github.com/okto-hq/okto-sdk-eliza-agent-template",
    defaultTemplateUrl:
      "/docs/okto-eliza-plugin/integrating-into-dapp/eliza-okto-sample-agent",
  },
  unity: {
    icon: (
      <SiUnity size={24} className="flex-shrink-0 text-black dark:text-white" />
    ),
    defaultRepo: "https://github.com/okto-hq/okto-sdkv2-unity-template-app",
    defaultTemplateUrl: "/docs/unity-sdk/templateRepo",
  },
  "wagmi-okto": {
    icon: (
      <SiWagmi size={24} className="flex-shrink-0 text-black dark:text-white" />
    ),
    defaultRepo:
      "https://github.com/okto-hq/okto-sdkv2-external-adapter-template/tree/bmac-react-wagmi-okto",
    defaultTemplateUrl: "/docs/external-wallet-adapters/wagmi/templateRepo",
  },
  "rainbow-okto": {
    icon: (
      <FaRainbow
        size={24}
        className="flex-shrink-0 text-black dark:text-white"
      />
    ),
    defaultRepo:
      "https://github.com/okto-hq/okto-sdkv2-external-adapter-template/tree/bmac-react-rainbowkit-okto",
    defaultTemplateUrl: "/docs/external-wallet-adapters/rainbowkit/templateRepo",
  },
  "api-reference": {
    icon: (
      <FaServer
        size={24}
        className="flex-shrink-0 text-black dark:text-white"
      />
    ),
    defaultRepo: "https://github.com/okto-hq/okto-sdkv2-ts-template/tree/main/src/api-template",
    defaultTemplateUrl: "/docs/openapi/templateRepo",
  },
  "trade-service": {
    icon: (
      <TbArrowsExchange
        size={24}
        className="flex-shrink-0 text-black dark:text-white"
      />
    ),
    defaultRepo: "https://github.com/saakshiraut28/okto-sdkv2-trade-service-template-app/tree/main",
    defaultTemplateUrl: "/docs/trade-service/template-repository",
  },
};

export default function TemplateRepoBanner({
  sdk,
  title = "Quick Start Template Available!",
  description = "Skip the manual setup and get started in minutes with our template repository. Please note that this template is for development and testing purposes only. Be sure to customize and secure it before using in production.",
  repoUrl,
  templateUrl,
}: TemplateRepoBannerProps) {
  const config = SDK_CONFIG[sdk];
  const finalRepoUrl = repoUrl || config.defaultRepo;

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center bg-gradient-to-r from-zinc-50 dark:from-zinc-900 to-zinc-100 dark:to-zinc-800 shadow-sm mb-8 px-6 py-4 border-2 border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-lg transition-all not-prose">
      <div className="flex-1 mb-6 lg:mb-0 pr-4">
        <div className="flex items-center gap-2 mb-2">
          {config.icon}
          <h2 className="m-0 font-bold text-zinc-800 dark:text-zinc-200 text-xl">
            {title}
          </h2>
        </div>
        <p className="m-0 text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href={finalRepoUrl}
          target="_blank"
          className="group relative bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-700/90 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] px-6 py-3 border-2 border-zinc-200 dark:border-zinc-600 dark:hover:border-zinc-500 rounded-md no-underline hover:scale-105 transition-all"
        >
          <span
            id="view-template"
            className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200"
          >
            <FaGithub size={20} />
            View Template
          </span>
        </Link>
        {sdk !== "typescript" && (
          <Link
            href={templateUrl || config.defaultTemplateUrl}
            className="group relative bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-700/90 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_12px_-3px_rgba(0,0,0,0.6),0_4px_6px_-4px_rgba(0,0,0,0.5)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.4)] px-6 py-3 border-2 border-zinc-200 dark:border-zinc-600 dark:hover:border-zinc-500 rounded-md no-underline hover:scale-105 transition-all"
          >
            <span
              id="run-template"
              className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200"
            >
              <FaCode size={20} />
              Run Template
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
