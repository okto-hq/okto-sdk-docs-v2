"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { ethers } from "ethers";

export async function generateClientSignature(
  data: Record<string, any>,
  client_private_key: string
): Promise<string> {
  const privateKey = client_private_key.startsWith("0x")
    ? client_private_key.slice(2)
    : client_private_key;
  const wallet = new ethers.Wallet(privateKey);
  const message = JSON.stringify(data);
  const signature = await wallet.signMessage(message);
  return signature;
}

async function generatePayload(fullPayload: any, client_private_key: string) {
  const payloadWithTimestamp = {
    ...fullPayload,
    timestamp: Date.now() - 1000, // Adjust timestamp to avoid clock skew issues
  };

  const signature = await generateClientSignature(
    payloadWithTimestamp,
    client_private_key
  );

  const requestBody = {
    data: payloadWithTimestamp,
    client_signature: signature,
    type: "ethsign",
  };

  console.log("Request Body:", requestBody);

  return requestBody;
}

export default function OktoAuthTool() {
  const [clientSWA, setClientSWA] = useState("");
  const [clientPrivateKey, setClientPrivateKey] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<any>();
  const [requestPayload, setRequestPayload] = useState<any>();
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerateSendOtpPayload = async () => {
    if (!clientSWA || !clientPrivateKey || !email) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Email."
      );
      return;
    }

    const data = {
      email: email, // Replace with the user's Email ID
      client_swa: clientSWA, // Replace with your client_swa
    };

    const requestPayload = await generatePayload(data, clientPrivateKey);
    setRequestPayload(requestPayload);
  };

  const handleSendOtp = async () => {
    if (!clientSWA || !clientPrivateKey || !email) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Email."
      );
      return;
    }

    const data = {
      email: email, // Replace with the user's Email ID
      client_swa: clientSWA, // Replace with your client_swa
    };

    try {
      const requestPayload = await generatePayload(data, clientPrivateKey);
      setRequestPayload(requestPayload);

      console.log("Calling sendOtp with payload");
      const response = await axios.post(
        "https://sandbox-api.okto.tech/api/oc/v1/authenticate/email",
        requestPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("OTP Sent:", response.data);
      setResponse(response.data);
      setError("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error (sendOTP):", error.response?.data);
        setError(
          error.response?.data?.error.message ||
            "An error occurred while sending the OTP."
        );
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred while sending the OTP.");
      }
    }
  };

  const copyToClipboard = (data: string) => {
    navigator.clipboard.writeText(data);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <Label htmlFor="okto-client-swa">Okto Client SWA</Label>
        <Input
          id="okto-client-swa"
          type="text"
          placeholder="Enter Okto Client SWA"
          value={clientSWA}
          onChange={(e) => setClientSWA(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="okto-client-private-key">Okto Client Private Key</Label>
        <Input
          id="okto-client-private-key"
          type="text"
          placeholder="Enter Okto Client Private Key"
          value={clientPrivateKey}
          onChange={(e) => setClientPrivateKey(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button
        type="button"
        className="mx-2"
        onClick={handleGenerateSendOtpPayload}
      >
        Generate Payload
      </Button>
      <Button type="button" onClick={handleSendOtp}>
        Send OTP
      </Button>
      {requestPayload && (
        <div className="mt-4">
          <div>
            <h3>Request Payload</h3>
            <div
              className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto"
              style={{ maxHeight: "300px", overflowY: "scroll" }}
            >
              {JSON.stringify(requestPayload)}
            </div>
            <Button
              type="button"
              onClick={() => copyToClipboard(JSON.stringify(requestPayload))}
            >
              {isCopied ? "Copied!" : "Copy Request Payload to Clipboard"}
            </Button>
          </div>
        </div>
      )}
      {response && (
        <div className="mt-4">
          <h3>Response</h3>
          <div
            className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto"
            style={{ maxHeight: "300px", overflowY: "scroll" }}
          >
            {JSON.stringify(response)}
          </div>
          <Button
            type="button"
            onClick={() => copyToClipboard(JSON.stringify(response))}
          >
            {isCopied ? "Copied!" : "Copy Response to Clipboard"}
          </Button>
        </div>
      )}
    </div>
  );
}
