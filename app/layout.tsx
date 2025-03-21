import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import NavbarComponent from "./components/Navbar";
// import AskCookbook from "./components/AskCookbook";
import SOABanner from "./components/SOABanner";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
        <meta name="algolia-site-verification"  content="315BD3BB6CEAFB7A" />
      </head>
      <body>
        <RootProvider>
          <Providers> 
            <NavbarComponent />
            <SOABanner />
            {children}
          </Providers>
        </RootProvider>
        {/* <AskCookbook /> */}
      </body>
    </html>
  );
}
