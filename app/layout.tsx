"use client";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import { useEffect, type ReactNode } from "react";
import { Providers } from "./providers";
import NavbarComponent from "./components/Navbar";
import AskCookbook from "./components/AskCookbook";
// import SOABanner from "./components/SOABanner";
import Script from "next/script";
// import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/docs") {
      const hideLink = () => {
        document.querySelectorAll("#nd-sidebar a").forEach((a: any) => {
          if (a.textContent.trim().toLowerCase() === "← back to home") {
            a.style.display = "none";
          }
        });
      };

      hideLink();

      const sidebar = document.querySelector("#nd-sidebar");
      if (sidebar) {
        const observer = new MutationObserver(hideLink);
        observer.observe(sidebar, { childList: true, subtree: true });

        return () => observer.disconnect(); // Cleanup
      }
    }
  }, [pathname]);

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WLDDSGTX');
        `}</Script>
        <link rel="icon" href="/logo/okto-icon.png" sizes="any" />
        <meta name="algolia-site-verification" content="DE6E97334C938277" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLDDSGTX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <RootProvider
          search={{
            enabled: false,
          }}
        >
          <Providers>
            <div className="min-h-screen flex flex-col">
              <NavbarComponent />
              {/* <SOABanner /> */}
              <main className="flex-1">{children}</main>
              {/* <Footer /> */}
            </div>
          </Providers>
        </RootProvider>
        {/* <AskCookbook /> */}
      </body>
    </html>
  );
}
