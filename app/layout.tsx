import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import NavbarComponent from "./components/Navbar";
import AskCookbook from "./components/AskCookbook";
import SOABanner from "./components/SOABanner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MHRLR04DWL"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MHRLR04DWL');
          `}
        </Script>
        <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
        <meta name="algolia-site-verification" content="DE6E97334C938277" />
      </head>
      <body>
        <RootProvider search={{
           enabled: false,
        }}>
          <Providers>
            <NavbarComponent />
            <SOABanner />
            {children}
          </Providers>
        </RootProvider>
        <AskCookbook />
      </body>
    </html>
  );
}
