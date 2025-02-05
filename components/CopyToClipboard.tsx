'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyToClipboardProps {
  text: string;
  className?: string;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700" />
      )}
    </button>
  );
};