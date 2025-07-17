"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const chains = [
  { logo: "/images/HL-icon.png", name: "HyperEVM", type: "EVM", mainnet: true, testnet: true, section: "hyperevm" },
  { logo: "/images/polygon-logo.svg", name: "Polygon", type: "EVM", mainnet: true, testnet: true, section: "polygon" },
  { logo: "/images/base-icon.svg", name: "Base", type: "EVM", mainnet: true, testnet: true, section: "base" },
  { logo: "/images/sol-icon.svg", name: "Solana*", type: "Solana", mainnet: true, testnet: true, section: "solana" },
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
  const [showTooltip, setShowTooltip] = useState(false);

  const handleRowClick = (section: any) => {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = section;
    }
  };

  // Helper function to render the appropriate icon based on chain type
  const renderChainTypeIcon = (type: string) => {
    if (type === "EVM") {
      return <img src="https://cdn3.emoji.gg/emojis/3031-ethereum.png" className='not-prose chain-symbol' style={{ display: 'inline' }} width="20px" height="20px" alt="Ethereum" />;
    } else if (type === "Solana") {
      return <img src="/images/sol-icon.svg" className='not-prose chain-symbol' style={{ display: 'inline' }} width="20px" height="20px" alt="Solana" />;
    } else if (type === "Aptos") {
      return <img src="/images/aptos-icon.svg" className='not-prose chain-symbol' style={{ display: 'inline' }} width="20px" height="20px" alt="Aptos" />;
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
              className="hover:bg-[#F5F6FE] hover:dark:bg-[#121212] border-gray-100 dark:border-gray-700 border-t cursor-pointer"
            >
              <td className="px-2 w-20">
                <div className="flex justify-center items-center bg-white dark:bg-[#1a1a1a] p-1 rounded-full w-7 h-7 transition-all">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </td>
              <td className="text-gray-700 dark:text-white">
                {chain.name === "Solana*" ? (
                  <div 
                    className="inline-block relative"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    {chain.name}
                    {showTooltip && (
                      <div className="bottom-full left-0 z-10 absolute bg-gray-900 dark:bg-gray-800 shadow-lg mb-2 p-3 border border-gray-700 rounded-lg w-64 text-white text-sm">
                        <div className="font-semibold">For Solana Mainnet & Devnet:</div>
                        <div className="mt-1">Sponsorship is mandatory, and nonce wallets must be created manually.</div>
                        <div className="top-full left-4 absolute border-t-4 border-t-gray-900 border-transparent dark:border-t-gray-800 border-r-4 border-l-4 w-0 h-0"></div>
                      </div>
                    )}
                  </div>
                ) : (
                  chain.name
                )}
              </td>
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