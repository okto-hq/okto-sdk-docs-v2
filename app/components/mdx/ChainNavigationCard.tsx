'use client';

import React from 'react';

interface Chain {
  name: string;
  icon: string;
  testnet?: string;
}

export default function ChainNavigationCard() {
  const supportedMainnets = [
    { name: "Polygon", icon: "/images/polygon-logo.svg" },
    { name: "Base", icon: "/images/base-icon.svg" },
    { name: "Avalanche", icon: "/images/avalanche-icon.svg" },
    { name: "Arbitrum", icon: "/images/arbitrum-icon.png" },
    { name: "BSC", icon: "/images/bsc-icon.png" },
    { name: "Ethereum", icon: "/images/eth-icon.svg" },
    { name: "Fantom", icon: "/images/fantom-icon.svg" },
    { name: "Linea", icon: "/images/linea-icon.svg" },
    { name: "Metis", icon: "/images/metis-icon.png" },
    { name: "Optimism", icon: "/images/optimism-icon.jpg" }
  ];

  const supportedTestnets = [
    { name: "HyperEVM", icon: "/images/HL-icon.png", testnet: "HyperEVM Testnet" },
    { name: "Base", icon: "/images/base-icon.svg", testnet: "Base Sepolia Testnet" },
    { name: "Polygon", icon: "/images/polygon-logo.svg", testnet: "Polygon Amoy Testnet" }
  ];

  const scrollToChain = (chainName: string) => {
    const element = document.getElementById(chainName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#F5F6FE] dark:bg-[#121212] rounded-xl p-3 [&_*]:m-0">
      {/* Mainnets */}
      <div className="bg-white dark:bg-[#0D0D0D] rounded-lg p-3">
        <h3 className="text-sm font-medium mb-2 mt-0">Supported Mainnets</h3>
        <div className="flex flex-wrap gap-1.5">
          {supportedMainnets.map((chain) => (
            <button
              key={chain.name}
              onClick={() => scrollToChain(chain.name)}
              className="relative group"
            >
              <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center p-1 hover:ring-2 hover:ring-blue-500 transition-all">
                <img
                  src={chain.icon}
                  alt={chain.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {chain.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Testnets */}
      <div className="bg-white dark:bg-[#0D0D0D] rounded-lg p-3">
        <h3 className="text-sm font-medium mb-2 mt-0">Supported Testnets</h3>
        <div className="flex flex-wrap gap-1.5">
          {supportedTestnets.map((chain) => (
            <button
              key={chain.name}
              onClick={() => scrollToChain(chain.name)}
              className="relative group"
            >
              <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center p-1 hover:ring-2 hover:ring-blue-500 transition-all">
                <img
                  src={chain.icon}
                  alt={chain.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {chain.testnet}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 