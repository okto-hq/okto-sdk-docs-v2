"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { ethers } from "ethers";
import { secp256k1 } from "@noble/curves/secp256k1";
import { keccak_256 } from "@noble/hashes/sha3";
import { v4 as uuidv4 } from "uuid";
import {
  encodeAbiParameters,
  encodePacked,
  fromHex,
  keccak256,
  parseAbiParameters,
  toHex,
  toBytes,
  type Hash,
  type Hex,
} from "viem";
import { signMessage } from "viem/accounts";
import { parse as uuidParse } from "uuid";
import { CopyIcon } from "lucide-react";
import Select from "@/components/ui/select";
import GoogleIdTokenGenerator from "./GoogleIdTokenGenerator";

export function nonceToBigInt(nonce: string): bigint {
  const uuidBytes = uuidParse(nonce); // Get the 16-byte array of the UUID
  let bigInt = BigInt(0);
  for (let i = 0; i < uuidBytes.length; i++) {
    if (uuidBytes[i] !== undefined) {
      bigInt = (bigInt << BigInt(8)) | BigInt(uuidBytes[i]!);
    }
  }
  return bigInt;
}

class SessionKey {
  priv;
  constructor(privKey: any) {
    if (privKey) {
      this.priv = Uint8Array.from(
        Buffer.from(privKey.replace("0x", ""), "hex")
      );
    } else {
      this.priv = secp256k1.utils.randomPrivateKey();
    }
  }
  get privateKey() {
    return this.priv;
  }
  get uncompressedPublicKey() {
    return secp256k1.getPublicKey(this.priv, false);
  }
  get compressedPublicKey() {
    return secp256k1.getPublicKey(this.priv, true);
  }
  get privateKeyHex() {
    return Buffer.from(this.priv).toString("hex");
  }
  get uncompressedPublicKeyHex() {
    return Buffer.from(this.uncompressedPublicKey).toString("hex");
  }
  get privateKeyHexWith0x() {
    return `0x${Buffer.from(this.priv).toString("hex")}`;
  }
  get uncompressedPublicKeyHexWith0x() {
    return `0x${Buffer.from(this.uncompressedPublicKey).toString("hex")}`;
  }
  get ethereumAddress() {
    const publicKeyWithoutPrefix = this.uncompressedPublicKey.slice(1);
    const hash = keccak_256(publicKeyWithoutPrefix);
    return `0x${Buffer.from(hash.slice(-20)).toString("hex")}`;
  }
  static create() {
    return new SessionKey(null);
  }
  static fromPrivateKey(privateKey: any) {
    return new SessionKey(privateKey);
  }
  verifySignature({ payload, signature }: any) {
    return secp256k1.verify(payload, signature, this.uncompressedPublicKey);
  }
}

export async function generatePaymasterData(
  address: Hex,
  privateKey: Hex,
  nonce: string,
  validUntil: Date | number | bigint,
  validAfter: Date | number | bigint
) {
  if (validUntil instanceof Date) {
    validUntil = Math.floor(validUntil.getTime() / 1000);
  } else if (typeof validUntil === "bigint") {
    validUntil = parseInt(validUntil.toString());
  }
  if (validAfter instanceof Date) {
    validAfter = Math.floor(validAfter.getTime() / 1000);
  } else if (typeof validAfter === "bigint") {
    validAfter = parseInt(validAfter.toString());
  } else if (validAfter === void 0) {
    validAfter = 0;
  }
  const paymasterDataHash = keccak256(
    encodePacked(
      ["bytes32", "address", "uint48", "uint48"],
      [
        toHex(nonceToBigInt(nonce), { size: 32 }),
        address,
        validUntil,
        validAfter,
      ]
    )
  );
  const sig = await signMessage({
    message: {
      raw: fromHex(paymasterDataHash, "bytes"),
    },
    privateKey: privateKey,
  });

  const paymasterData = encodeAbiParameters(
    parseAbiParameters("address, uint48, uint48, bytes"),
    [address, validUntil, validAfter, sig]
  );
  return paymasterData;
}

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

async function generateAuthPayload(
  authData: any,
  sessionKey: any,
  clientSWA: any,
  clientPriv: any
) {
  // STEP 1: Generate a unique UUID-based nonce
  const nonce = uuidv4();
  // STEP 2: Construct a UserOp authenticate payload
  const payload: any = {};
  payload.authData = authData;
  payload.sessionData = {};
  payload.sessionData.nonce = nonce;
  payload.sessionData.clientSWA = clientSWA;
  payload.sessionData.sessionPk = sessionKey.uncompressedPublicKeyHexWith0x;
  payload.sessionData.maxPriorityFeePerGas = "0xBA43B7400"; // constant on okto chain
  payload.sessionData.maxFeePerGas = "0xBA43B7400"; // constant on okto chain
  payload.sessionData.paymaster = "0x74324fA6Fa67b833dfdea4C1b3A9898574d076e3"; // okto testnet paymaster address
  payload.sessionData.paymasterData = await generatePaymasterData(
    clientSWA,
    clientPriv,
    nonce,
    new Date(Date.now() + 6 * 60 * 60 * 1000), // hours in milliseconds
    0
  );

  // STEP 3: Create a message, sign it and add signatures to the user op. The message is signed using the client's private key and session private key to symbolize both the user and client signatures
  const message = {
    raw: toBytes(
      keccak256(
        encodeAbiParameters(parseAbiParameters("address"), [
          sessionKey.ethereumAddress,
        ])
      )
    ),
  };
  payload.sessionPkClientSignature = await signMessage({
    message,
    privateKey: clientPriv,
  });
  payload.sessionDataUserSignature = await signMessage({
    message,
    privateKey: sessionKey.privateKeyHexWith0x,
  });
  console.log("signed payload: ", payload);
  // Sample Response:
  // signed payload:  {
  //   authData: {
  //     idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1ZjgyMTE3MTM3ODhiNjE0NTQ3NGI1MDI5YjAxNDFiZDViM2RlOWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDkyMTQzNTM1ODE3MDMyMTg5MTUiLCJoZCI6ImNvaW5kY3guY29tIiwiZW1haWwiOiJvdmlhLnNlc2hhZHJpQGNvaW5kY3guY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJJR2ZIMUdBM0ozRjVCa0RocFR3UW9nIiwiaWF0IjoxNzQxMjYyMjcyLCJleHAiOjE3NDEyNjU4NzJ9.tmm4Cq15L2uq6QyfgvaLx4hZw474gUBeBlrvlRdmpsakzTi4jXfk_E2E6CgrVw1LD5tkplrt6WP07hH03UyH0arlX-6jJB2Ddr3xBz7UY37hMbJGDXSGoQwHIHJFBIs2NSXL1ID2Kg_-_knvVGySw1_4B_Y-HEZgiNa1hh-fj6t6z3YkASAbwd76Un_4gCQV3GjPN4tNuacMXVczDv0oMJ3wDLPzk8t3XdpLbFgdS4caond2MaqLLWhe61eJ7AzFd1URKvHkNpWIhXFFBYuOCPzWZMXTlA9LC4qfD-ts7pH33fBaT1DytW0OSY0yoGK3_57hbpjmVtQNoGqDCqlylg',
  //     provider: 'google'
  //   },
  //   sessionData: {
  //     nonce: '4bbc7b27-2ba5-4a6f-8cd6-be88e61cbf09',
  //     clientSWA: '0x71c6ac62752acea820C55de730C24805A200e1CE',
  //     sessionPk: '0x042039f2f0f910c474abfef29ad2ce80bf89a54f6e20b8281b454136b6ba8628505f8e1f09e51b8e55f113a76ee794643d8207fcaca926d32a00a36acc7beeb69f',
  //     maxPriorityFeePerGas: '0xBA43B7400',
  //     maxFeePerGas: '0xBA43B7400',
  //     paymaster: '0x5408fAa7F005c46B85d82060c532b820F534437c',
  //     paymasterData: '0x00000000000000000000000071c6ac62752acea820c55de730c24805a200e1ce0000000000000000000000000000000000000000000000000000000067c9e9830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000418bf70d043e0f6bf76cff39946dcf59d0c3610bd4a6dbcc4f70a6898e14ef6c0140e05f25e5975f944289f38d1ddbe586d6adbfd78e103c53991f8fb848996e2b1b00000000000000000000000000000000000000000000000000000000000000'
  //   },
  //   sessionPkClientSignature: '0xe8fbb34e90b25f6a822ec8056d89983bd5e0e0edfc2a586a0afe95181ae9734e1b78b5270a09e5edaa0a5da7f559a385f1d3f445fea2e97f8ffff136b4db3a821b',
  //   sessionDataUserSignature: '0xa7bf7e7e70840951dadb6970f6cfd88ff7baf1c4533cef1a8c280cd4747fc72c592cbf23163219e4cf65c0eccf8d6a5edc9ed65f89382304b36adbd03a0b1c591b'
  // }
  // response.data.result {
  //   userSWA: '0xb8Db5F3B00997339f1FE4aD62c7a6f7467d3a8f5',
  //   nonce: '0x000000000000000000000000000000004bbc7b272ba54a6f8cd6be88e61cbf09',
  //   clientSWA: '0x71c6ac62752acea820C55de730C24805A200e1CE',
  //   sessionExpiry: 1742128164
  // }

  return payload;
}

export default function AuthDebuggerTool() {
  const [authMethod, setAuthMethod] = useState<"email" | "google">("email");
  const [clientSWA, setClientSWA] = useState("");
  const [clientPrivateKey, setClientPrivateKey] = useState("");
  const [email, setEmail] = useState("");
  const [googleIdToken, setGoogleIdToken] = useState("");
  const [token, setToken] = useState("");
  const [otp, setOtp] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [response, setResponse] = useState<any>();
  const [status, setStatus] = useState("send_OTP");
  const [session, setSession] = useState<any>();
  const [oktoToken, setOktoToken] = useState<any>();
  const [requestPayload, setRequestPayload] = useState<any>();
  const [error, setError] = useState("");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleAuthMethodChange = (newAuthMethod: "email" | "google") => {
    setAuthMethod(newAuthMethod);
    setStatus(newAuthMethod === "google" ? "login_using_oauth" : "send_OTP");
    setToken("");
    setOtp("");
    setAuthToken("");
    setResponse(null);
    setError("");
    setRequestPayload(null);
    setSession(null);
    setOktoToken(null);
  };

  const copyToClipboard = (data: string, section: string) => {
    navigator.clipboard.writeText(data);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

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

  const handleGennerateVerifyOtpPayload = async () => {
    if (!token || !otp) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Email."
      );
      return;
    }

    const data = {
      email: email, // Replace with the user's Email ID
      token: token, // Replace with the user's Token
      otp: otp, // Replace with the user's OTP
      client_swa: clientSWA, // Replace with your client_swa
    };

    const requestPayload = await generatePayload(data, clientPrivateKey);
    setRequestPayload(requestPayload);
  };

  const handleLoginUsingOAuthPayload = async () => {
    if (authMethod === "email" && !authToken) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Auth Token."
      );
      return;
    }
    if (authMethod === "google" && !googleIdToken) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Google Id token"
      );
      return;
    }

    const data = {
      idToken: authMethod === "email" ? authToken : googleIdToken,
      provider: authMethod === "email" ? "okto" : "google",
    };

    const session = SessionKey.create();
    console.log("session: ", session);

    const authPayload = await generateAuthPayload(
      data,
      session,
      clientSWA,
      clientPrivateKey
    );
    setRequestPayload(authPayload);
  };

  const handleLoginUsingOAuth = async () => {
    if (authMethod === "email" && !authToken?.trim()) {
      setError("Please enter the auth token");
      return;
    }
    if (
      authMethod === "google" &&
      (!googleIdToken?.trim() ||
        !clientPrivateKey?.trim() ||
        !clientSWA?.trim())
    ) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key and Google Id token"
      );
      return;
    }

    const data = {
      idToken: authMethod === "email" ? authToken : googleIdToken,
      provider: authMethod === "email" ? "okto" : "google",
    };

    const session = SessionKey.create();
    console.log("session: ", session);

    const authPayload = await generateAuthPayload(
      data,
      session,
      clientSWA,
      clientPrivateKey
    );
    setRequestPayload(authPayload);

    console.log("Auth Payload:", authPayload);
    try {
      const response = await axios.post(
        "https://sandbox-api.okto.tech/api/oc/v1/authenticate",
        authPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const sessionConfig = {
        sessionPrivKey: session.privateKeyHexWith0x,
        sessionPubKey: session.uncompressedPublicKeyHexWith0x,
        userSWA: response.data.data.userSWA,
      };

      console.log("Authentication Response:", response.data);
      setResponse(response.data);
      setError("");
      setSession(sessionConfig);
      setStatus("generate_okto_auth_token");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error (authenticate):", error.response?.data);
        setError(
          error.response?.data?.error.message ||
            "An error occurred while authenticating."
        );
        setResponse(error.response?.data);
        setStatus("login_using_oauth");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred while authenticating.");
        setStatus("login_using_oauth");
      }
    }
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
      setStatus("verify_OTP");
    } catch (error) {
      console.log("some error in sendOtp .......");
      if (axios.isAxiosError(error)) {
        console.error("Axios error (sendOTP):", error.response?.data);
        setError(
          error.response?.data?.error.message ||
            "An error occurred while sending the OTP."
        );
        setResponse(error.response?.data);
        setStatus("send_OTP");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred while sending the OTP.");
        setStatus("send_OTP");
      }
    }
  };

  const handleVerifyOtp = async () => {
    if (!clientSWA || !clientPrivateKey || !email || !token || !otp) {
      setError(
        "Please enter all values - Okto Client SWA, Client Private Key, Email, Token and OTP."
      );
      return;
    }

    const data = {
      email: email, // Replace with the user's Email ID
      token: token, // Replace with the user's Token
      otp: otp, // Replace with the user's OTP
      client_swa: clientSWA, // Replace with your client_swa
    };

    try {
      const requestPayload = await generatePayload(data, clientPrivateKey);
      setRequestPayload(requestPayload);

      console.log("Calling verifyOtp with payload");
      const response = await axios.post(
        "https://sandbox-api.okto.tech/api/oc/v1/authenticate/email/verify",
        requestPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("OTP Verified:", response.data);
      setResponse(response.data);
      setError("");
      setStatus("login_using_oauth");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error (verifyOTP):", error.response?.data);
        setError(
          error.response?.data?.error.message ||
            "An error occurred while verifying the OTP."
        );
        setResponse(error.response?.data);
        setStatus("verify_OTP");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred while verifying the OTP.");
        setStatus("verify_OTP");
      }
    }
  };

  const getOktoAuthToken = async () => {
    if (!session) {
      setError("Please generate session first.");
      return;
    }

    const sessionPriv = session?.sessionPrivKey;
    const sessionPub = session?.sessionPubKey;
    if (sessionPriv === void 0 || sessionPub === void 0) {
      throw new Error("Session keys are not set");
    }
    const data = {
      expire_at: Math.round(Date.now() / 1e3) + 60 * 90,
      session_pub_key: sessionPub,
    };

    // Okto auth token is nothing but the session public key encrypted with the session private key
    const payload = {
      type: "ecdsa_uncompressed",
      data,
      data_signature: await signMessage({
        message: JSON.stringify(data),
        privateKey: sessionPriv,
      }),
    };
    const token = btoa(JSON.stringify(payload));
    setOktoToken(token);
    console.log("Okto Auth Token", oktoToken);
  };

  const handleEmailAction = async () => {
    try {
      if (status === "send_OTP") {
        await handleSendOtp();
        console.log("OTP sent:");
      } else if (status === "verify_OTP") {
        await handleVerifyOtp();
        console.log("OTP verified");
      } else if (status === "login_using_oauth") {
        await handleLoginUsingOAuth();
        console.log("Login using OAuth");
      } else if (status === "generate_okto_auth_token") {
        await getOktoAuthToken();
        console.log("Session and Token generated:");
      }
    } catch (err) {
      console.error("Email login error:", err);
    }
  };

  const handleGoogleAction = async () => {
    try {
      if (status === "login_using_oauth") {
        await handleLoginUsingOAuth();
        console.log("Login using OAuth");
      } else if (status === "generate_okto_auth_token") {
        await getOktoAuthToken();
        console.log("Session and Token generated:");
      }
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  const resetValues = () => {
    handleAuthMethodChange(authMethod);
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-2 flex flex-row items-center gap-4">
        <Label>Authentication Method</Label>
        <Select
          value={authMethod}
          onChange={(e) => {
            handleAuthMethodChange(e.target.value as "email" | "google");
          }}
          options={[
            { label: "Email", value: "email" },
            { label: "Google", value: "google" },
          ]}
          placeholder="Select authentication method"
          className="w-[200px] dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="okto-client-swa">Okto Client SWA</Label>
          <Input
            id="okto-client-swa"
            type="text"
            placeholder="Enter Okto Client SWA"
            value={clientSWA}
            onChange={(e) => {
              setClientSWA(e.target.value);
              resetValues();
            }}
          />
        </div>
        <div>
          <Label htmlFor="okto-client-private-key">
            Okto Client Private Key
          </Label>
          <Input
            id="okto-client-private-key"
            type="text"
            placeholder="Enter Okto Client Private Key"
            value={clientPrivateKey}
            onChange={(e) => {
              setClientPrivateKey(e.target.value);
              resetValues();
            }}
          />
        </div>
      </div>

      {authMethod === "email" ? (
        <>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                resetValues();
              }}
            />
          </div>

          {(status === "verify_OTP" ||
            status === "login_using_oauth" ||
            status === "generate_okto_auth_token") && (
            <div className="flex flex-col gap-4">
              <Label htmlFor="otp">OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <Label htmlFor="Token">Token</Label>
              <Input
                id="Token"
                type="text"
                placeholder="Enter Token (received in response)"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
          )}

          {(status === "login_using_oauth" ||
            status === "generate_okto_auth_token") && (
            <div>
              <Label htmlFor="authToken">Auth Token</Label>
              <Input
                id="authToken"
                type="text"
                placeholder="Enter Auth Token (received in response)"
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
              />
            </div>
          )}

          <Button
            type="button"
            className="mx-2"
            onClick={() => {
              if (status === "send_OTP") {
                handleGenerateSendOtpPayload();
              } else if (status === "verify_OTP") {
                handleGennerateVerifyOtpPayload();
              } else if (status === "login_using_oauth") {
                handleLoginUsingOAuthPayload();
              }
            }}
          >
            Generate Payload
          </Button>

          <Button type="button" onClick={handleEmailAction}>
            {status === "send_OTP"
              ? "Send OTP"
              : status === "verify_OTP"
                ? "Verify OTP"
                : status === "login_using_oauth"
                  ? "Login Using OAuth"
                  : "Generate Okto Auth Token"}
          </Button>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-1/2">
                <Label htmlFor="googleId">Google ID Token</Label>
                <Input
                  id="googleId"
                  type="text"
                  placeholder="Enter Google ID Token"
                  value={googleIdToken}
                  onChange={(e) => setGoogleIdToken(e.target.value)}
                />
              </div>
              <span className="text-sm text-gray-500 mt-4">or</span>
              <div className="mt-5">
                <GoogleIdTokenGenerator
                  onTokenReceived={(token) => setGoogleIdToken(token)}
                  showTokenDisplay={false}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  className="mx-2"
                  onClick={handleLoginUsingOAuthPayload}
                >
                  Generate Payload
                </Button>

                <Button type="button" onClick={handleGoogleAction}>
                  {status === "login_using_oauth"
                    ? "Login Using OAuth"
                    : "Generate Okto Auth Token"}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {session && (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {oktoToken && (
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Okto Auth Token</h3>
              <div
                className="flex-1 p-4 pr-8 bg-gray-100 dark:bg-slate-800 rounded-md overflow-auto relative"
                style={{ maxHeight: "400px" }}
              >
                <button
                  type="button"
                  className="absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => copyToClipboard(oktoToken, "token")}
                >
                  <CopyIcon className="h-4 w-4" />
                  {copiedSection === "token" && (
                    <span className="absolute -top-8 right-0 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                      Copied!
                    </span>
                  )}
                </button>
                <pre className="whitespace-pre-wrap break-words">
                  {oktoToken}
                </pre>
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">
              Session Configuration
            </h3>
            <div
              className="flex-1 p-4 bg-gray-100 dark:bg-slate-800 rounded-md overflow-auto relative"
              style={{ maxHeight: "400px" }}
            >
              <button
                type="button"
                className="absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                onClick={() =>
                  copyToClipboard(JSON.stringify(session, null, 2), "session")
                }
              >
                <CopyIcon className="h-4 w-4" />
                {copiedSection === "session" && (
                  <span className="absolute -top-8 right-0 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    Copied!
                  </span>
                )}
              </button>
              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}

      {requestPayload && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Request Payload</h3>
            <div
              className="flex-1 p-4 bg-gray-100 dark:bg-slate-800 rounded-md overflow-auto relative"
              style={{ maxHeight: "400px" }}
            >
              <button
                type="button"
                className="absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                onClick={() =>
                  copyToClipboard(
                    JSON.stringify(requestPayload, null, 2),
                    "request"
                  )
                }
              >
                <CopyIcon className="h-4 w-4" />
                {copiedSection === "request" && (
                  <span className="absolute -top-8 right-0 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    Copied!
                  </span>
                )}
              </button>
              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(requestPayload, null, 2)}
              </pre>
            </div>
          </div>

          {response && (
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Response</h3>
              <div
                className="flex-1 p-4 bg-gray-100 dark:bg-slate-800 rounded-md overflow-auto relative"
                style={{ maxHeight: "400px" }}
              >
                <button
                  type="button"
                  className="absolute top-2 right-2 p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() =>
                    copyToClipboard(
                      JSON.stringify(response, null, 2),
                      "response"
                    )
                  }
                >
                  <CopyIcon className="h-4 w-4" />
                  {copiedSection === "response" && (
                    <span className="absolute -top-8 right-0 bg-gray-800 text-white px-2 py-1 rounded text-sm">
                      Copied!
                    </span>
                  )}
                </button>
                <pre className="whitespace-pre-wrap break-words">
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
