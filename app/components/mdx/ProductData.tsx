import { 
  IoCodeSlashOutline, 
  IoWalletOutline, 
  IoSwapHorizontalOutline, 
  IoLayersOutline, 
  IoAppsOutline, 
  IoShieldCheckmarkOutline, 
  IoFlashOutline, 
  IoTrendingUpOutline, 
  IoGameControllerOutline, 
  IoSettingsOutline
} from "react-icons/io5";
import { FaReact, FaUnity, FaRainbow } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiTypescript, SiWagmi, SiFlutter } from "react-icons/si";
import FeatureCard from "./FeatureCard";
import TechnologyCard from "./TechnologyCard";

export const productsData = [
  {
    id: 'wallet',
    title: 'Okto Wallet',
    subtitle: 'Leading Wallet for Everything Hyperliquid',
    icon: <IoWalletOutline size="1.5rem" />,
    content: (
      <div className="space-y-4">
        <p className="text-base text-gray-700 dark:text-gray-300">
          <strong>Okto Wallet</strong> is the flagship consumer application built on Okto SDK. It is a fully featured DeFi Trading Wallet built on the Okto Platform. Available on the Play Store and App Store, it is the premier mobile-native wallet specifically designed for the <strong>Hyperliquid</strong> ecosystem. Okto Wallet is the bridge that connects Hyperliquid's powerful DeFi infrastructure with intuitive, accessible user experiences.
        </p>
        <div className="flex justify-center pt-2">
          <TechnologyCard
            icon={<IoWalletOutline size={"1.5rem"} />}
            title="Download Okto Wallet"
            subtitle="Leading Wallet for Everything Hyperliquid"
            link="https://okto.tech"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FeatureCard
              icon={<IoFlashOutline size="1.2rem" />}
              title="1-Click Cross-Chain Swaps"
              description="Seamlessly trade assets across EVM chains, Solana, Aptos, and more"
              iconColor="text-blue-600"
            />
            <FeatureCard
              icon={<IoShieldCheckmarkOutline size="1.2rem" />}
              title="Gasless Transactions"
              description="Pay gas fees with any stable token you own, no native tokens needed"
              iconColor="text-purple-600"
            />
            <FeatureCard
              icon={<IoTrendingUpOutline size="1.2rem" />}
              title="DEX Futures with 50X Leverage"
              description="Trade derivatives across 100+ token pairs powered by Hyperliquid"
              iconColor="text-green-600"
            />
            <FeatureCard
              icon={<IoAppsOutline size="1.2rem" />}
              title="Unified Trading Interface"
              description="Trade across spot markets and derivatives from a single dashboard"
              iconColor="text-orange-600"
            />
          </div>
        </div>

      </div>
    )
  },
  {
    id: 'sdk',
    title: 'Okto SDK',
    subtitle: 'One SDK for all your Web3 needs',
    icon: <IoCodeSlashOutline size="1.5rem" />,
    content: (
      <div className="space-y-4">
        <p className="text-base text-gray-700 dark:text-gray-300">
          The <strong>Okto SDK</strong> is a powerful wallet infrastructure that simplifies on-chain interactions for developers. It abstracts away the complexities of chains, liquidity, and gas, allowing developers to easily embed powerful, multi-chain wallet functionalities into their applications, offering users an experience as familiar as any modern web or mobile app, while preserving decentralization and transparency.
          </p>

        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm">
          The power of Trade Service is also available through the SDK as intents, enabling seamless cross-chain swaps and liquidity management.
          </p>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm">
            <strong className="text-blue-900 dark:text-blue-100">Note:</strong> Okto Wallet and Okto SDK are independent offerings: Okto Wallet is a standalone DeFi app, while Okto SDK is a developer toolkit for building Chain Abstracted Web3 Applications.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <TechnologyCard
            icon={<IoCodeSlashOutline size={"1.5rem"} />}
            title="Explore Okto SDK"
            subtitle="Comprehensive SDK guides"
            link="/docs/okto-sdk"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-3">Platform Support</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FeatureCard
              icon={<FaReact size="1.2rem" />}
              title="React"
              description="For web"
              iconColor="text-blue-600"
              link="/docs/react-sdk"
            />
            <FeatureCard
              icon={<TbBrandNextjs size="1.2rem" />}
              title="Next.js"
              description="For web"
              iconColor="text-gray-900 dark:text-white"
              link="/docs/nextjs-sdk"
            />
            <FeatureCard
              icon={<TbBrandReactNative size="1.2rem" />}
              title="React Native"
              description="For mobile"
              iconColor="text-blue-600"
              link="/docs/react-native-sdk"
            />
            <FeatureCard
              icon={<SiTypescript size="1.2rem" />}
              title="TypeScript"
              description="For web"
              iconColor="text-blue-600"
              link="/docs/typescript-sdk"
            />
            <FeatureCard
              icon={<FaUnity size="1.2rem" />}
              title="Unity"
              description="For games"
              iconColor="text-gray-700 dark:text-gray-200"
              link="/docs/unity-sdk"
            />
            <FeatureCard
              icon={<SiFlutter size="1.2rem" />}
              title="Flutter (Coming Soon)"
              description="For mobile"
              iconColor="text-blue-500"
            />
          </div>
        </div>

      </div>
    )
  },
  {
    id: 'adapters',
    title: 'External Wallet Adapters',
    subtitle: 'Integrate with Web3 libraries',
    icon: <IoLayersOutline size="1.5rem" />,
    content: (
      <div className="space-y-4">
        <p className="text-base text-gray-700 dark:text-gray-300">
          <strong>External Wallet Adapters</strong> enable seamless integration with popular Web3 frontend libraries while keeping your existing external wallet flow completely unchanged. Okto Adapters simply add social login capabilities (such as Google Auth) to create Okto embedded wallets on the fly for users who aren't regular Web3 users - no code rewrite required. This allows your dApp to onboard and expand into an entirely new domain of Web2 users, enabling them to interact with your application without needing to understand the complexities of Web3 wallets or blockchain technology.
        </p>

        <div className="flex justify-center pt-2">
          <TechnologyCard
            icon={<IoLayersOutline size={"1.5rem"} />}
            title="External Wallet Adapters"
            subtitle="Integrate with Wagmi and RainbowKit"
            link="/docs/external-wallet-adapters"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-3">Integration Options</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FeatureCard
              icon={<SiWagmi size="1.2rem" />}
              title="Wagmi Adapter"
              description="Integration with Wagmi hooks ecosystem for React-based dApps"
              link="/docs/external-wallet-adapters/wagmi/setup"
            />
            <FeatureCard
              icon={<FaRainbow size="1.2rem" />}
              title="RainbowKit Adapter"
              description="Native integration through familiar RainbowKit modal interface"
              link="/docs/external-wallet-adapters/rainbowkit/setup"
            />
          </div>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm">
            <strong className="text-blue-900 dark:text-blue-100">Perfect for:</strong> Existing Web3 applications using Wagmi or RainbowKit that want to add social login and embedded wallet capabilities without major code changes.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'trade',
    title: 'Trade Service',
    subtitle: 'Seamless Cross-Chain swaps',
    icon: <IoSwapHorizontalOutline size="1.5rem" />,
    content: (
      <div className="space-y-4">
        <p className="text-base text-gray-700 dark:text-gray-300">
          Built on Okto's <strong>Unified Liquidity Layer (ULL)</strong>, the <strong>Trade Service</strong> enables seamless cross-chain swaps through a powerful API suite that eliminates traditional bridging complexity.
          <br />
          This service is completely independent of Okto embedded wallets and can be integrated with any Web3 application - simply use your own wallet to sign and send transactions.
        </p>

        <div className="flex justify-center pt-2">
          <TechnologyCard
            icon={<IoSwapHorizontalOutline size={"1.5rem"} />}
            title="Explore Trade Service"
            subtitle="Powerful APIs for seamless cross-chain swaps"
            link="/docs/trade-service"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-3">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FeatureCard
              icon={<IoSwapHorizontalOutline size="1.2rem" />}
              title="Any-to-Any Swaps"
              description="Swap any token for any other token across multiple chains"
              iconColor="text-orange-600"
            />
            <FeatureCard
              icon={<IoSettingsOutline size="1.2rem" />}
              title="Optimal Routing"
              description="Intelligent pathfinding for best price and execution efficiency"
              iconColor="text-blue-600"
            />
            <FeatureCard
              icon={<IoFlashOutline size="1.2rem" />}
              title="Fast Settlements"
              description="Rapid cross-chain liquidity provisioning"
              iconColor="text-green-600"
            />
          </div>
        </div>
        
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm">
            <strong className="text-blue-900 dark:text-blue-100">Perfect for:</strong> Applications requiring cross-chain token swaps, DeFi platforms, aggregators, and any service needing seamless token exchange functionality.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'oktokit',
    title: 'OktoKit',
    subtitle: 'Coming Soon',
    icon: <IoGameControllerOutline size="1.5rem" />,
    isComingSoon: true,
    content: null
  }
];