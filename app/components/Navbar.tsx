'use client';

import React, { useEffect, useRef, useState, createElement, Fragment } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as ULink, Image, Chip } from "@heroui/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ChevronDown } from 'lucide-react';
import { FaReact } from "react-icons/fa6";
import {
  TbBrandReactNative,
  TbApi,
  TbRobot,
  TbPlugConnected,
} from "react-icons/tb";
import { SiAxios, SiFlutter, SiNextdotjs, SiWagmi } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUnity } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { useTheme } from "next-themes";
import GitHubButton from "./GithubButton";
import DiscordButton from "./DiscordButton";
import { Button as SCButton } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import '@algolia/autocomplete-theme-classic';
import { createRoot } from "react-dom/client";
import {
  autocomplete,
  getAlgoliaResults,
  AutocompleteComponents
} from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";

const config = {
  appId: "ME6QM8CWYI",
  apiKey: "f45ba172bf00603a4d12479afb0b7665",
  indexName: "docsv2_staging_okto_tech_me6qm8cwyi_pages",
}

const searchClient = algoliasearch(
  config.appId,
  config.apiKey
)

const poppins = Poppins({ subsets: ["latin"], weight: "500", display: "swap" });
const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
// const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });

export default function NavbarComponent() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const containerRef = useRef<any>(null);
  const panelRootRef = useRef<any>(null);
  const rootRef = useRef<any>(null);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const navItems = [
    {
      href: "https://www.okto.tech/blog",
      label: "Blog",
      subpath: "",
      external: true,
    },
    { href: "/showcase", label: "Showcase", subpath: "", external: true },
    { href: "/summer-of-abstraction", label: "Summer of Abstraction", subpath: "", external: true },
    { href: "/docs", label: "SDK Docs", subpath: "", external: false },
  ];

  const sdkOptions = [
    {
      href: "/docs/react-sdk",
      label: "React",
      subpath: "/",
      icons: <FaReact />,
    },
    {
      href: "/docs/nextjs-sdk",
      label: "NextJS",
      subpath: "/",
      icons: <SiNextdotjs />,
    },
    {
      href: "/docs/react-native-sdk",
      label: "React Native",
      subpath: "/",
      icons: <TbBrandReactNative />,
    },
    {
      href: "/docs/unity-sdk",
      label: "Unity",
      subpath: "/",
      icons: <FaUnity />,
    },
    {
      href: "/docs/typescript-sdk",
      label: "Typescript",
      subpath: "/",
      icons: <SiTypescript />,
    },
    {
      href: "/docs/wagmi-integration",
      label: "Wagmi",
      subpath: "/",
      icons: <SiWagmi />,
    },
    {
      href: "/docs/okto-eliza-plugin",
      label: "Eliza Plugin",
      subpath: "/",
      icons: <TbPlugConnected />,
    },
    {
      href: "/docs/openapi",
      label: "API References",
      subpath: "/",
      icons: <SiAxios />,
    },
  ];

  const getFrameworkLabel = () => {
    if (pathname.startsWith("/docs/react-sdk")) return "React";
    if (pathname.startsWith("/docs/nextjs-sdk")) return "NextJS";
    if (pathname.startsWith("/docs/typescript-sdk")) return "Typescript";
    if (pathname.startsWith("/docs/react-native-sdk")) return "React Native";
    if (pathname.startsWith("/docs/unity-sdk")) return "Unity";
    if (pathname.startsWith("/docs/wagmi-integration")) return "Wagmi";
    if (pathname.startsWith("/docs/okto-eliza-plugin")) return "Eliza Plugin";
    if (pathname.startsWith("/docs/openapi")) return "API References";
    return "SDKs";
  };

  useEffect(() => {
    const updateActiveItem = () => {
      const activeNavItem = [...navItems, ...sdkOptions].find(
        (item) =>
          pathname.startsWith(item.href) ||
          (item.href === "/docs" && pathname.startsWith("/docs/"))
      );
      setActiveItem(activeNavItem ? activeNavItem.href : "");
    };

    updateActiveItem();
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

    if (!containerRef.current) {
      return undefined;
    }
    
    autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children, state, Fragment, components }, root) {
        const { preview }: any = state.context;
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }
      

        panelRootRef.current.render(
          <div className="w-full">
            <div className="grid grid-cols-2 p-4 bg-white rounded-lg shadow-lg">
              <div className="overflow-y-auto max-h-[500px] ">
                {children}
              </div>
              <div className="overflow-y-auto max-h-[500px] " id="preview-section">
                <div className="p-6 relative">
                  <div className="mb-4">
                    <IoDocumentTextOutline size={24} className="text-gray-600" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {preview?.path.split('/').filter(Boolean)
                      .filter((crumb: string, index: number) => !(index === 0 && crumb === 'docs'))
                      .map((crumb: string, index: number, array: string[]) => (
                        <React.Fragment key={index}>
                          <span className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer transition-colors">
                            {crumb.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
                          </span>
                          {index < array.length - 1 && (
                            <span className="text-gray-400 dark:text-gray-600 mx-3">›</span>
                          )}
                        </React.Fragment>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl leading-tight font-semibold text-gray-900 dark:text-white mb-6">
                    <components.Highlight hit={preview} attribute={["title"]} />
                  </h1>
                  
                  <div className="text-gray-600 leading-relaxed mb-8">
                    <components.Highlight hit={preview} attribute={["description"]} />
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                      ON THIS PAGE
                    </h3>
                    <ul className="space-y-3">
                      {preview?.headers.map((header: any, index: any) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                            {(index + 1).toString()}.
                          </span>
                          <Link 
                            href={`${preview.path}#${header.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                            className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {header.replace(/^\d+\.\s*/, '')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
      placeholder: "Search the Docs",
      detachedMediaQuery: '',
      defaultActiveItemId: 0,
      getSources({ query }) {
        if (!query) {
          return [];
        }

        return [
          {
            sourceId: 'hits',
            getItems({ query }) {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: config.indexName,
                    query,
                    params: {
                      hitsPerPage: 16,
                    },
                  },
                ],
              });
            },
            getItemUrl({ item }) {
              return item.url as string | undefined;
            },
            onActive({ item, setContext }) {
              setContext({ preview: item});
            },
            templates: {  
              item({ item, components }) {
                console.log("item", item);
                return (
                  <Link 
                    className="flex items-start gap-3 py-3 px-1 rounded-md group transition-colors" 
                    href={`${item.path}`}  
                  >
                    <div className="flex-shrink-0 mt-1">
                      <IoDocumentTextOutline size={18} className="text-gray-400 dark:text-gray-500 " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        <components.Highlight hit={item} attribute="title" />
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {(item.path as string).split('/').filter(Boolean)
                          .filter((crumb: string, index: number) => !(index === 0 && crumb === 'docs'))
                          .map((crumb: string, index: number, array: string[]) => (
                            <React.Fragment key={index}>
                              <span>
                                {crumb.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
                              </span>
                              {index < array.length - 1 && (
                                <span className="mx-2 text-gray-400 dark:text-gray-600">›</span>
                              )}
                            </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              },
            },
          },
        ];
      }
    });
  }, []);

  const isFrameworkSelected = sdkOptions.some((option) =>
    pathname.startsWith(option.href)
  );
  return (
    <Navbar
      isBordered
      className="nav-spacing border-b border-gray-200 dark:border-gray-700"
    >
          
      <NavbarBrand className={`${poppins.className} gap-20 flex items-center`}>
        <ULink href="/docs" color="foreground" className="no-underline">
          <NavbarItem className="flex gap-2 items-center">
            <Image
              src="/logo/okto-icon.png"
              alt="Okto Logo"
              width={30}
              height={30}
              className="display-logo"
            />
            <p className="text-2xl">okto</p>
            <Chip className="bg-[#F5F6FE] dark:bg-gray-700 text-[#5166EE] dark:text-[#7C8FFF] h-[22px] w-[55px] text-[14px]">
              DocsV2
            </Chip>
          </NavbarItem>
        </ULink>
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
                      {getFrameworkLabel()}{" "}
                      <ChevronDown className="h-5 w-5 font-normal" />
                    </SCButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 rounded-lg p-2">
                    {sdkOptions.map((option) => (
                      <DropdownMenuItem key={option.label} asChild>
                        <Link
                          href={`${option.href}${option.subpath}`}
                          className="flex items-center gap-1 cursor-pointer"
                        >
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
                    className={`text-md ${
                      pathname.startsWith(item.href)
                        ? "text-blue-600"
                        : `${poppinsLight.className}`
                    } pb-1`}
                    target={item.external ? "_blank" : "_self"}
                  >
                    {item.label}
                  </ULink>
                </NavbarItem>
              );
            }
          })}
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent justify="end">
      <div ref={containerRef} id="autocomplete" className="w-50 bg-black" />
        <NavbarItem>
          <DiscordButton />
        </NavbarItem>
        <NavbarItem>
          <GitHubButton />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <SCButton
            variant="outline"
            className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF] group relative"
          >
            <Link href="https://forms.gle/VN19AYHnvm7V5qe2A" target="_blank">
              Add Project
            </Link>
            <MdOutlineArrowOutward size={".9rem"} />
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-max px-2 py-1 text-xs text-white bg-zinc-900 dark:bg-zinc-200 dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Add your project to Okto's showcase
            </span>
          </SCButton>
        </NavbarItem> */}
        {/* <NavbarItem className="hidden lg:flex">
          <SCButton
            variant="outline"
            className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]"
          >
            <Link
              href="https://oktohq.notion.site/Okto-Grants-Program-13f8d0b09e5b8075a646d5dbaa394eeb"
              target="_blank"
            >
              Grants
            </Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem> */}
        {/* <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]">
            <Link href="https://dashboard.okto.tech/" target="_blank">Dashboard</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem> */}
        <NavbarItem className="hidden lg:flex">
          <SCButton
            variant="outline"
            className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]"
          >
            <Link href="https://testnet.okto.tech/" target="_blank">
              Explorer
            </Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
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
            <SCButton
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-none hover:bg-[#F5F6FE] dark:hover:bg-gray-700"
            >
              {resolvedTheme === "light" ? (
                <Sun className="hover:text-[#5166EE]" />
              ) : (
                <Moon className="hover:text-[#7C8FFF]" />
              )}
            </SCButton>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}