import React from 'react';
import Link from 'next/link';

interface MainSupportStatus {
  SDKs: string;
  'Wagmi Adapter': string;
  Chains: string[];
}

interface ReactSupportStatus {
  Status: string;
  Version: string;
  Chains: string[];
}

interface Feature {
  name: string;
  description: string;
  support: MainSupportStatus | ReactSupportStatus;
}

interface FeatureSupportTableProps {
  features: Feature[];
}

const isReactSupport = (support: MainSupportStatus | ReactSupportStatus): support is ReactSupportStatus => {
  return 'Status' in support && 'Version' in support;
};

const StatusIcon = ({ status, version }: { status: string; version?: string }) => {
  switch (status) {
    case '✅':
      return version ? (
        <span className="feature-supported-version">
          {version}
        </span>
      ) : (
        <span>✅</span>
      );
    case '🔜':
      return <span>🔜</span>;
    case '🔄':
      return <span>🔄</span>;
    case '🔌':
      return <span>🔌</span>;
    case '❌':
      return <span className="text-red-500">❌</span>;
    default:
      return <span>{status}</span>;
  }
};

const ChainIcon = ({ chain }: { chain: string }) => {
  switch (chain) {
    case 'EVM':
      return <img src="https://cdn3.emoji.gg/emojis/3031-ethereum.png" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="EVM" />;
    case 'Solana':
      return <img src="https://cdn3.emoji.gg/emojis/7187-solana.png" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="Solana" />;
    case 'Aptos':
      return <img src="/images/aptos-icon.png" className='not-prose chain-symbol' style={{display: 'inline'}} width="20px" height="20px" alt="Aptos" />;
    default:
      return null;
  }
};

export default function FeatureSupportTable({ features }: FeatureSupportTableProps) {
  const isReactFormat = features.length > 0 && isReactSupport(features[0].support);

  return (
    <div>
      <style>
{`
.feature-supported-version {
    display: inline-block;
    padding: 2px 8px;
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: bold;
    text-align: center;
}
`}
      </style>
      <div className="table-container">
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              {isReactFormat ? (
                <th>Supported in Version</th>
              ) : (
                <>
                  <th>SDKs and APIs</th>
                  <th>Wagmi Adapter</th>
                </>
              )}
              <th>Chain Types</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="font-medium">{feature.name}</td>
                <td className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</td>
                {isReactFormat ? (
                  <td>
                    <StatusIcon 
                      status={(feature.support as ReactSupportStatus).Status} 
                      version={(feature.support as ReactSupportStatus).Version}
                    />
                  </td>
                ) : (
                  <>
                    <td><StatusIcon status={(feature.support as MainSupportStatus).SDKs} /></td>
                    <td><StatusIcon status={(feature.support as MainSupportStatus)['Wagmi Adapter']} /></td>
                  </>
                )}
                <td>
                  {feature.support.Chains.map((chain, i) => (
                    <ChainIcon key={i} chain={chain} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 