"use client";

import React, { useEffect, useRef, useState, createElement, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as ULink,
  Image,
  Chip,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ChevronDown } from "lucide-react";
import { FaRainbow, FaReact } from "react-icons/fa6";
import { TbBrandReactNative, TbApi, TbRobot, TbPlugConnected } from "react-icons/tb";
import { SiAxios, SiFlutter, SiNextdotjs, SiWagmi } from "react-icons/si";
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { FaUnity } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { useTheme } from "next-themes";
import GitHubButton from "./GithubButton";
import DiscordButton from "./DiscordButton";
import { Button as SCButton } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import AlgoliaSearch from "./AlgoliaSearch";

const poppins = Poppins({ subsets: ["latin"], weight: "500", display: "swap" });
const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});
// const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });

export default function NavbarComponent() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const navItems = [
    {
      href: "https://www.okto.tech/blog",
      label: "Blog",
      subpath: "",
      external: true
    },
    { href: "/showcase", label: "Showcase", subpath: "", external: true },
    // { href: "/summer-of-abstraction", label: "Summer of Abstraction", subpath: "", external: true },
    { href: "/docs", label: "SDK Docs", subpath: "", external: false }
  ];

  const sdkOptions = [
    {
      href: "/docs/react-sdk",
      label: "React",
      subpath: "/",
      icons: <FaReact />
    },
    {
      href: "/docs/nextjs-sdk",
      label: "NextJS",
      subpath: "/",
      icons: <SiNextdotjs />
    },
    {
      href: "/docs/react-native-sdk",
      label: "React Native",
      subpath: "/",
      icons: <TbBrandReactNative />
    },
    {
      href: "/docs/unity-sdk",
      label: "Unity",
      subpath: "/",
      icons: <FaUnity />
    },
    {
      href: "/docs/typescript-sdk",
      label: "Typescript",
      subpath: "/",
      icons: <SiTypescript />
    },
    {
      href: "/docs/external-wallet-adapters/wagmi/setup",
      label: "Wagmi",
      subpath: "/",
      icons: <SiWagmi />
    },
    {
      href: "/docs/external-wallet-adapters/rainbowkit/setup",
      label: "RainbowKit",
      subpath: "/",
      icons: <FaRainbow />
    },
    {
      href: "/docs/trade-service",
      label: "Trade Service",
      subpath: "/",
      icons: <IoSwapHorizontalOutline />
    },
    {
      href: "/docs/okto-eliza-plugin",
      label: "Eliza Plugin",
      subpath: "/",
      icons: <TbPlugConnected />
    },
    {
      href: "/docs/openapi",
      label: "API References",
      subpath: "/",
      icons: <SiAxios />
    }
  ];

  const getFrameworkLabel = () => {
    if (pathname.startsWith("/docs/react-sdk")) return "React";
    if (pathname.startsWith("/docs/nextjs-sdk")) return "NextJS";
    if (pathname.startsWith("/docs/typescript-sdk")) return "Typescript";
    if (pathname.startsWith("/docs/react-native-sdk")) return "React Native";
    if (pathname.startsWith("/docs/unity-sdk")) return "Unity";
    if (pathname.startsWith("/docs/external-wallet-adapters/wagmi/setup")) return "Wagmi";
    if (pathname.startsWith("/docs/external-wallet-adapters/rainbowkit/setup")) return "RainbowKit";
    if (pathname.startsWith("/docs/trade-service")) return "Trade Service";
    if (pathname.startsWith("/docs/okto-eliza-plugin")) return "Eliza Plugin";
    if (pathname.startsWith("/docs/openapi")) return "API References";
    return "SDKs";
  };

  useEffect(() => {
    const updateActiveItem = () => {
      const activeNavItem = [...navItems, ...sdkOptions].find(
        (item) => pathname.startsWith(item.href) || (item.href === "/docs" && pathname.startsWith("/docs/"))
      );
      setActiveItem(activeNavItem ? activeNavItem.href : "");
    };

    updateActiveItem();
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFrameworkSelected = sdkOptions.some((option) => pathname.startsWith(option.href));
  return (
    <Navbar
      isBordered
      className="nav-spacing border-b border-gray-200 dark:border-gray-700 flex sticky top-0"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
      <NavbarBrand className={`${poppins.className} gap-20 flex items-center`}>
        <ULink href="/docs" color="foreground" className="no-underline">
          <NavbarItem className="flex gap-2 items-center">
            <Image src="/logo/okto-icon.png" alt="Okto Logo" width={30} height={30} className="display-logo" />
            <p className="text-2xl">okto</p>
            <Chip className="bg-[#F5F6FE] dark:bg-gray-700 text-[#5166EE] dark:text-[#7C8FFF] h-[22px] w-[55px] text-[14px]">Docs</Chip>
          </NavbarItem>
        </ULink>
        {/* Desktop Nav */}
        <NavbarContent className="hidden sm:flex gap-8" justify="start">
          {navItems.map((item, index) => {
            if (item.label === "SDK Docs") {
              return (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild className="border-0">
                    <SCButton
                      variant="ghost"
                      className={`text-md border-0 flex hover:bg-transparent hover:text-inherit items-center gap-1 p-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-none ${
                        isFrameworkSelected || pathname.startsWith("/docs/")
                          ? "text-blue-600 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]"
                          : `${poppinsLight.className} hover:text-inherit`
                      }`}
                    >
                      {getFrameworkLabel()} <ChevronDown className="h-5 w-5 font-normal" />
                    </SCButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 rounded-lg p-2">
                    {sdkOptions.map((option) => (
                      <DropdownMenuItem key={option.label} asChild>
                        <Link href={`${option.href}${option.subpath}`} className="flex items-center gap-1 cursor-pointer">
                          {option.icons}
                          <span className="pl-2">{option.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else {
              return (
                <NavbarItem key={item.href}>
                  <ULink
                    href={`${item.href}${item.subpath}`}
                    color="foreground"
                    className={`text-md ${pathname.startsWith(item.href) ? "text-blue-600" : `${poppinsLight.className}`} pb-1`}
                    target={item.external ? "_blank" : "_self"}
                  >
                    {item.label}
                  </ULink>
                </NavbarItem>
              );
            }
          })}
        </NavbarContent>
        {/* End Desktop Nav */}
      </NavbarBrand>

      <NavbarContent justify="end">
        <AlgoliaSearch />
        <NavbarItem className="hidden sm:flex">
          <DiscordButton />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <GitHubButton />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SCButton
            variant="outline"
            className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]"
          >
            <Link href="https://dashboard.okto.tech/home" target="_blank">
              Dashboard
            </Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        <NavbarItem>
          {mounted && (
            <SCButton variant="outline" size="icon" onClick={toggleTheme} className="border-none hover:bg-[#F5F6FE] dark:hover:bg-gray-700">
              {resolvedTheme === "light" ? <Sun className="hover:text-[#5166EE]" /> : <Moon className="hover:text-[#7C8FFF]" />}
            </SCButton>
          )}
        </NavbarItem>
      </NavbarContent>
      {/* Mobile Menu */}
      <NavbarMenu>
        {navItems.map((item, index) => {
          if (item.label === "SDK Docs") {
            return (
              <Fragment key={item.href}>
                <NavbarMenuItem className="font-semibold text-gray-700 dark:text-gray-200 text-lg">SDKs</NavbarMenuItem>
                {sdkOptions.map((option) => (
                  <NavbarMenuItem key={option.label}>
                    <Link href={`${option.href}${option.subpath}`} className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      {option.icons}
                      <span>{option.label}</span>
                    </Link>
                  </NavbarMenuItem>
                ))}
              </Fragment>
            );
          } else {
            return (
              <NavbarMenuItem key={item.href}>
                <Link
                  href={`${item.href}${item.subpath}`}
                  color="foreground"
                  className="w-full"
                  target={item.external ? "_blank" : "_self"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          }
        })}
        <NavbarMenuItem>
          <Link
            href="https://dashboard.okto.tech/home"
            target="_blank"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard <MdOutlineArrowOutward size={".9rem"} />
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <DiscordButton />
          <GitHubButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
