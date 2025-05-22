'use client';

import React, { useState } from 'react';
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
  IoSettingsOutline, 
  IoCheckmarkCircle 
} from "react-icons/io5";
import { FaReact, FaUnity, FaRainbow } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiTypescript, SiWagmi, SiFlutter } from "react-icons/si";
import TechnologyCard from "./TechnologyCard";
import FeatureCard from "./FeatureCard";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isComingSoon?: boolean;
  content?: React.ReactNode;
}

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  isComingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  isActive, 
  onClick, 
  isComingSoon 
}) => (
  <div
    onClick={!isComingSoon ? onClick : undefined}
    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
      isComingSoon 
        ? 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 cursor-not-allowed opacity-60' 
        : isActive 
          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/20 shadow-lg' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
    }`}
  >
    {isActive && !isComingSoon && (
      <div className="absolute top-2 right-2 text-blue-600">
        <IoCheckmarkCircle size="1.2rem" />
      </div>
    )}
    <div className={`mb-2 ${isActive && !isComingSoon ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
      {icon}
    </div>
    <h3 className={`font-bold text-base mb-1 ${isActive && !isComingSoon ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-gray-100'}`}>
      {title}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
    {isComingSoon && (
      <div className="mt-1 text-xs text-gray-500 font-medium">Coming Soon</div>
    )}
  </div>
);

const ProductsToggle: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState('sdk');

  const products: Product[] = [
    {
      id: 'wallet',
      title: 'Okto Wallet',
      subtitle: 'Self Custody DeFi Trading Wallet',
      icon: <IoWalletOutline size="1.5rem" />,
      content: (
        <div className="space-y-4">
          <p className="text-base text-gray-700 dark:text-gray-300">
            <strong>Okto Wallet</strong> is the flagship fully featured DeFi application built on Okto. Available on the Play Store and App Store, it highlights the power of end-to-end chain abstraction with features that would be nearly impossible to implement without Okto's infrastructure.
          </p>
          
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
          
          <div className="flex justify-center pt-2">
            <TechnologyCard
              icon={<IoWalletOutline size={"1.5rem"} />}
              title="Download Okto Wallet"
              subtitle="Experience the future of DeFi trading"
              link="https://okto.tech"
            />
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
            The <strong>Okto SDK</strong> is a comprehensive suite of developer tools designed to provide end-to-end chain abstraction. It allows developers to embed powerful, multi-chain wallet functionalities directly into their applications, offering users an experience as familiar as any modern web or mobile app, while preserving decentralization and transparency.
          </p>
          
          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm">
              <strong className="text-blue-900 dark:text-blue-100">Note:</strong> Okto Wallet and Okto SDK are independent offerings: Okto Wallet is a standalone DeFi app, while Okto SDK is a developer tool for building Web3 applications.
            </p>
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
          
          <div className="flex justify-center pt-2">
            <TechnologyCard
              icon={<IoCodeSlashOutline size={"1.5rem"} />}
              title="Explore Okto SDK"
              subtitle="Comprehensive SDK documentation and guides"
              link="/docs/okto-sdk"
            />
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
            <strong>External Wallet Adapters</strong> provide seamless integration with popular Web3 frontend libraries, allowing you to add Okto's embedded smart contract wallets to existing dApps without architectural changes.
          </p>
          
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
          
          <div className="flex justify-center pt-2">
            <TechnologyCard
              icon={<IoLayersOutline size={"1.5rem"} />}
              title="External Wallet Adapters"
              subtitle="Integrate with existing Web3 libraries"
              link="/docs/external-wallet-adapters"
            />
          </div>
        </div>
      )
    },
    {
      id: 'trade',
      title: 'Trade Service',
      subtitle: 'Seamless Cross-chain swaps',
      icon: <IoSwapHorizontalOutline size="1.5rem" />,
      content: (
        <div className="space-y-4">
          <p className="text-base text-gray-700 dark:text-gray-300">
            Built on Okto's <strong>Unified Liquidity Layer (ULL)</strong>, the <strong>Trade Service</strong> enables seamless cross-chain token swaps through a powerful API suite that eliminates traditional bridging complexity.
          </p>
          
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
              <strong className="text-blue-900">Perfect for:</strong> Applications requiring cross-chain token swaps, DeFi platforms, aggregators, and any service needing seamless token exchange functionality.
            </p>
          </div>
          
          <div className="flex justify-center pt-2">
            <TechnologyCard
              icon={<IoSwapHorizontalOutline size={"1.5rem"} />}
              title="Trade Service"
              subtitle="Powerful APIs for cross-chain token swaps"
              link="/docs/trade-service"
            />
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

  const currentProduct = products.find(p => p.id === activeProduct);

  return (
    <div className="my-6 not-prose">
      {/* Product Toggle Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            icon={product.icon}
            title={product.title}
            subtitle={product.subtitle}
            isActive={activeProduct === product.id}
            isComingSoon={product.isComingSoon}
            onClick={() => setActiveProduct(product.id)}
          />
        ))}
      </div>

      {/* Product Details */}
      {currentProduct && currentProduct.content && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{currentProduct.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{currentProduct.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{currentProduct.subtitle}</p>
            </div>
          </div>
          
          <div className="border-t dark:border-gray-800 pt-4">
            {currentProduct.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsToggle;