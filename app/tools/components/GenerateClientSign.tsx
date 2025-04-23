/** @format */

"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GenerateClientSign() {
  const [privateKey, setPrivateKey] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleSign = async () => {
    try {
      const wallet = new ethers.Wallet(privateKey.trim());
      const signedMessage = await wallet.signMessage(message);
      setSignature(signedMessage);
      setError("");
    } catch (err: any) {
      setError("Failed to sign message. Make sure the private key is valid.");
      setSignature("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(signature);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="privateKey">Client Private Key</Label>
        <Input
          id="privateKey"
          type="text"
          placeholder="Enter your private key"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message to Sign</Label>
        <Textarea
          id="message"
          className="h-[100px]"
          placeholder="Enter the message you want to sign"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button onClick={handleSign} disabled={!privateKey || !message}>
        Generate Signature
      </Button>

      {signature && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            Generated Signature
          </h2>
          <div className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto">
            {signature}
          </div>
          <Button onClick={handleCopy}>
            {isCopied ? "Copied!" : "Copy Signature to Clipboard"}
          </Button>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
