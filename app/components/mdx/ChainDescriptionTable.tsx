"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const chains = [
    { logo: "/images/HL-icon.png", name: "HyperEVM", type: "EVM", mainnet: true, testnet: true, section: "hyperevm"},
    { logo: "/images/polygon-logo.svg", name: "Polygon", type: "EVM", mainnet: true, testnet: true, section: "polygon" },
    { logo: "/images/base-icon.svg", name: "Base", type: "EVM", mainnet: true, testnet: true, section: "base" },
    { logo: "/images/sol-icon.svg", name: "Solana", type: "Solana", mainnet: false, testnet: false, section: "solana" },
    { logo: "/images/aptos-icon.svg", name: "Aptos", type: "Aptos", mainnet: true, testnet: true, section: "aptos" },
    { logo: "/images/avalanche-icon.svg", name: "Avalanche", type: "EVM", mainnet: true, testnet: false, section: "avalanche" },
    { logo: "/images/arbitrum-icon.png", name: "Arbitrum", type: "EVM", mainnet: true, testnet: false, section: "arbitrum" },
    { logo: "/images/bsc-icon.png", name: "BSC", type: "EVM", mainnet: true, testnet: false, section: "bsc" },
    { logo: "/images/eth-icon.svg", name: "Ethereum", type: "EVM", mainnet: true, testnet: false, section: "ethereum" },
    { logo: "/images/fantom-icon.svg", name: "Fantom", type: "EVM", mainnet: true, testnet: false, section: "fantom" },
    { logo: "/images/linea-icon.svg", name: "Linea", type: "EVM", mainnet: true, testnet: false, section: "linea" },
    { logo: "/images/metis-icon.png", name: "Metis", type: "EVM", mainnet: true, testnet: false, section: "metis" },
    { logo: "/images/optimism-icon.jpg", name: "Optimism", type: "EVM", mainnet: true, testnet: false, section: "optimism" },
];

export default function ChainDescriptionTable() {
  const router = useRouter();

  const handleRowClick = (section: any) => {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = section;
    }
  };

  // Helper function to render the appropriate icon based on chain type
  const renderChainTypeIcon = (type: string) => {
    if (type === "EVM") {
      return <img src="https://cdn3.emoji.gg/emojis/3031-ethereum.png" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="Ethereum" />;
    } else if (type === "Solana") {
      return <img src="/images/sol-icon.svg" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="Solana" />;
    } else if (type === "Aptos") {
      return <img src="/images/aptos-icon.svg" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="Aptos" />;
    }
    return type; // Fallback to text if no icon available
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-gray-500">
            <th className="text-left"></th>
            <th className="text-left">Name</th>
            <th className="text-center">Type*</th>
            <th className="text-center">Mainnet</th>
            <th className="text-center">Testnet</th>
          </tr>
        </thead>
        <tbody>
          {chains.map((chain, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(chain.section)}
              className="cursor-pointer hover:bg-[#F5F6FE] hover:dark:bg-[#121212] border-t border-gray-100 dark:border-gray-700"
            >
              <td className="w-20 px-2">
                <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center p-1 transition-all">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </td>
              <td className="text-gray-700 dark:text-white">{chain.name}</td>
              <td className="text-gray-700 dark:text-white text-center">
                {renderChainTypeIcon(chain.type)}
              </td>
              <td className="text-center">
                {chain.mainnet ? 
                  <span className="text-green-500">✅</span> : 
                  <span className="text-red-500">❌</span>
                }
              </td>
              <td className="text-center">
                {chain.testnet ? 
                  <span className="text-green-500">✅</span> : 
                  <span className="text-red-500">❌</span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}