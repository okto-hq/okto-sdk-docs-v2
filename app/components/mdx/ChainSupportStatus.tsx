import React from 'react';

interface Chain {
  name: string;
  icon: string;
  mainnet?: boolean;
}

interface ChainSupportStatusProps {
  unsupportedChains: Array<string>;
}

export default function ChainSupportStatus({ unsupportedChains = [] }: ChainSupportStatusProps) {
  const allChains: Chain[] = [
    { name: "Ethereum", icon: "/images/eth-icon.svg", mainnet: true },
    { name: "Polygon", icon: "/images/polygon-logo.svg", mainnet: true },
    { name: "Solana", icon: "/images/sol-icon.svg", mainnet: true },
    { name: "Aptos", icon: "/images/aptos-icon.svg", mainnet: true },
    { name: "Avalanche", icon: "/images/avalanche-icon.svg", mainnet: true },
    { name: "Arbitrum", icon: "/images/arbitrum-icon.png", mainnet: true },
    { name: "BSC", icon: "/images/bsc-icon.png", mainnet: true },
    { name: "Fantom", icon: "/images/fantom-icon.svg", mainnet: true },
    { name: "Linea", icon: "/images/linea-icon.svg", mainnet: true },
    { name: "Metis", icon: "/images/metis-icon.png", mainnet: true },
    { name: "Optimism", icon: "/images/optimism-icon.jpg", mainnet: true },
    { name: "Base", icon: "/images/base-icon.svg", mainnet: true },
    { name: "Base Sepolia", icon: "/images/base-icon.svg" },
    { name: "HyperEVM Testnet", icon: "/images/HL-icon.png" },
    { name: "Polygon Amoy", icon: "/images/polygon-logo.svg" }
  ];

  const supportedChains = allChains.filter(
    chain => !unsupportedChains.includes(chain.name)
  );
  const unsupportedChainsList = allChains.filter(
    chain => unsupportedChains.includes(chain.name)
  );

  return (
    <div className="grid grid-cols-2 bg-[#F5F6FE] dark:bg-[#121212] rounded-lg border border-[#e2e8f0] dark:border-gray-700 overflow-hidden [&_*]:!m-0">
      <div className="p-2.5 border-r border-[#e2e8f0] dark:border-gray-700">
        <p className="font-medium text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 pb-2">Available on</p>
        <div className="flex flex-wrap gap-1.5">
          {supportedChains.map((chain) => (
            <div key={chain.name} className="relative group inline-flex mr-1.5 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center p-0.5">
                <img
                  src={chain.icon}
                  alt={chain.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-[10px] bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {chain.name}
              </span>
            </div>
          ))}
        </div>
        {supportedChains.length > 0 && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
            To enable these chains for your application, please configure them in the{' '}
            <a 
              href="https://dashboard.okto.tech/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5166EE] dark:text-[#7C8FFF] hover:underline"
            >
              Okto Dashboard
            </a>.
          </p>
        )}
      </div>

      <div className="p-2.5">
        <p className="font-medium text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 pb-2">Not available on</p>
        <div className="flex flex-wrap">
          {unsupportedChainsList.map((chain) => (
            <div key={chain.name} className="relative group inline-flex mr-1.5 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center p-0.5">
                <img 
                  src={chain.icon} 
                  alt={chain.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-[10px] bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {chain.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 