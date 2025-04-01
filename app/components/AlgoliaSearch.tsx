import React, { useEffect, useRef, Fragment, createElement, useState, useCallback } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Link from 'next/link';
import '@algolia/autocomplete-theme-classic';
import { createRoot, Root } from 'react-dom/client';
import {
    autocomplete,
    getAlgoliaResults,
    AutocompleteComponents,
    AutocompleteState,
    AutocompleteSource,
} from '@algolia/autocomplete-js';
import algoliasearch, { SearchClient } from 'algoliasearch/lite';

// --- Configuration ---
const ALGOLIA_CONFIG = {
    appId: 'ME6QM8CWYI',
    apiKey: 'f45ba172bf00603a4d12479afb0b7665',
    indexName: 'docsv2_staging_okto_tech_me6qm8cwyi_pages',
};

// --- Constants ---
const STRINGS = {
    searchPlaceholder: 'Search',
    onThisPage: 'ON THIS PAGE',
    searchBy: 'Search by',
    navigateHint: 'to navigate',
    selectHint: 'to select',
    closeHint: 'to close',
};

const KEYBOARD_HINTS = [
    { keys: ['↑', '↓'], label: STRINGS.navigateHint },
    { keys: ['Enter'], label: STRINGS.selectHint },
    { keys: ['Esc'], label: STRINGS.closeHint },
];

// --- Types ---
interface AlgoliaHit {
    objectID: string;
    url?: string;
    path: string;
    title: string;
    description?: string;
    headers?: string[];
    [key: string]: any;
}

interface AutocompleteContext {
    preview?: AlgoliaHit;
    isMobile?: boolean;
    [key: string]: any;
}

// --- Algolia Client ---
const searchClient: SearchClient = algoliasearch(
    ALGOLIA_CONFIG.appId,
    ALGOLIA_CONFIG.apiKey
);

// --- Helper Functions ---
const renderBreadcrumbs = (path: string) => {
    const crumbs = (path || '').split('/')
        .filter(Boolean)
        .filter((crumb, index) => !(index === 0 && crumb.toLowerCase() === 'docs'));

    return crumbs.map((crumb, index, array) => (
        <Fragment key={index}>
            <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors cursor-pointer">
                {crumb.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
            </span>
            {index < array.length - 1 && (
                <span className="text-gray-400 dark:text-gray-600 mx-2">›</span>
            )}
        </Fragment>
    ));
};

// --- Sub-Components ---
const HitItem = ({ item, components }: { item: AlgoliaHit; components: AutocompleteComponents }) => {
    // Check if we're on mobile
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    return (
        <Link
            className="flex items-start gap-3 py-3 px-1 rounded-md group transition-colors"
            href={item.path || '#'}
        >
            <div className="flex-shrink-0 mt-1">
                <IoDocumentTextOutline size={18} className="text-gray-400 dark:text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                    <components.Highlight hit={item} attribute="title" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {renderBreadcrumbs(item.path)}
                </div>
                
                {/* Description - shown on mobile */}
                {isMobile && item.description && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-normal">
                        <components.Highlight hit={item} attribute="description" />
                    </div>
                )}
            </div>
        </Link>
    );
};

const PreviewPane = ({ preview, components }: { preview?: AlgoliaHit; components: AutocompleteComponents }) => {
    if (!preview) {
        return (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Select an item to see the preview.
            </div>
        );
    }

    return (
      <div className="p-6 relative h-full flex flex-col">
          <div className="flex items-center mb-4">
              <div className="flex-shrink-0 mr-2">
                  <IoDocumentTextOutline size={18} className="text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
                  {renderBreadcrumbs(preview.path)}
              </div>
          </div>

          <h1 className="text-2xl leading-tight font-semibold text-gray-900 dark:text-white mb-4">
              <components.Highlight hit={preview} attribute="title" />
          </h1>

          {preview.description && (
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  <components.Highlight hit={preview} attribute="description" />
              </div>
          )}

          <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {STRINGS.onThisPage}
              </h3>
              <ul className="space-y-3">
                  {(preview.headers && preview.headers.length > 0) ? (
                      preview.headers.map((header, index) => {
                          const cleanHeader = header.replace(/^\d+\.\s*/, '');
                          const slug = cleanHeader.toLowerCase().replace(/\s+/g, '-').replace(/[.?]/g, '');
                          return (
                              <li key={index} className="flex items-start">
                                  <span className="text-sm text-gray-400 dark:text-gray-500 font-medium w-6 text-right mr-3">
                                      {index + 1}.
                                  </span>
                                  <Link
                                      href={`${preview.path}#${slug}`}
                                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-1"
                                  >
                                      {cleanHeader}
                                  </Link>
                              </li>
                          );
                      })
                  ) : (
                      [
                          "General tips for writing solid prompts",
                          "Concrete tips to improve your prompts",
                          "Further reading"
                      ].map((item, idx) => (
                          <li key={idx} className="flex items-start">
                              <span className="text-sm text-gray-400 dark:text-gray-500 font-medium w-6 text-right mr-3">
                                  {idx + 1}.
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-1">
                                  {item}
                              </span>
                          </li>
                      ))
                  )}
              </ul>
          </div>
      </div>
  );
};

const AlgoliaFooter = ({ isMobile }: { isMobile: boolean }) => (
    <div className="flex items-center justify-between p-3 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {/* Keyboard Hints - Hidden on mobile */}
        {!isMobile && (
            <div className="flex items-center gap-4">
                {KEYBOARD_HINTS.map((hint, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <div className="flex">
                            {hint.keys.map((key, kIndex) => (
                                <kbd key={kIndex} className={`px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-600 dark:text-gray-300 ${kIndex > 0 ? 'ml-1' : ''}`}>
                                    {key}
                                </kbd>
                            ))}
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">{hint.label}</span>
                    </div>
                ))}
            </div>
        )}

        {/* Algolia Branding - Always displayed */}
        <div className={`flex items-center ${isMobile ? 'ml-auto' : ''}`}>
            <span>{STRINGS.searchBy}</span>
            <img src="/images/algolia_logo.svg" alt="Algolia" className="h-4 ml-2" />
        </div>
    </div>
);

const SearchResultsPanel = ({ children, state, components }: { children: React.ReactNode; state: AutocompleteState<AlgoliaHit>; components: AutocompleteComponents }) => {
    const { preview, isMobile } = (state.context as AutocompleteContext) || {};
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    // Determine if we're on mobile based on window width
    const isSmallScreen = windowWidth <= 768;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg overflow-hidden flex-1">
                {/* Search Results Column */}
                <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                    {children}
                </div>
                {/* Preview Column - Hidden on mobile */}
                {!isSmallScreen && (
                    <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh]" id="preview-section">
                        <PreviewPane preview={preview} components={components} />
                    </div>
                )}
            </div>
            <div className="mt-auto">
                <AlgoliaFooter isMobile={isSmallScreen} />
            </div>
        </div>
    );
};

// --- Main Component ---
export default function AlgoliaSearch() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const panelRootRef = useRef<Root | null>(null);
    const rootRef = useRef<HTMLElement | null>(null);
    const autocompleteInstanceRef = useRef<any>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Memoize the resize handler to prevent unnecessary re-renders
    const handleResize = useCallback(() => {
        const isMobileView = window.innerWidth <= 768;
        if (isMobile !== isMobileView) {
            setIsMobile(isMobileView);
        }
    }, [isMobile]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleResize();
            const debouncedResize = debounce(handleResize, 200);
            window.addEventListener('resize', debouncedResize);
            return () => window.removeEventListener('resize', debouncedResize);
        }
    }, [handleResize]);

    // Debounce function to limit resize event handling
    function debounce(fn: Function, ms = 300) {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function(...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), ms);
        };
    }

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        let isUnmounting = false;

        // Initialize Algolia Autocomplete
        const instance = autocomplete<AlgoliaHit>({
            container: containerRef.current,
            renderer: { createElement, Fragment, render: () => { } },
            render: ({ children, state, Fragment, components }, root) => {
                if (isUnmounting) return;

                // Safely handle the root updates
                try {
                    if (!panelRootRef.current || rootRef.current !== root) {
                        rootRef.current = root;
                        // Safely unmount previous root if it exists
                        setTimeout(() => {
                            if (panelRootRef.current && !isUnmounting) {
                                try {
                                    panelRootRef.current.unmount();
                                } catch (e) {
                                    console.warn("Error unmounting panel root", e);
                                }
                                panelRootRef.current = createRoot(root);
                                renderContent();
                            } else if (!isUnmounting) {
                                panelRootRef.current = createRoot(root);
                                renderContent();
                            }
                        }, 0);
                    } else {
                        renderContent();
                    }

                    function renderContent() {
                        if (isUnmounting || !panelRootRef.current) return;
                        
                        // Set mobile context
                        if (state.context) {
                            (state.context as AutocompleteContext).isMobile = isMobile;
                        }

                        try {
                            panelRootRef.current.render(
                                <SearchResultsPanel state={state} components={components}>
                                    {children}
                                </SearchResultsPanel>
                            );
                        } catch (e) {
                            console.warn("Error rendering search panel", e);
                        }
                    }
                } catch (e) {
                    console.warn("Error in Algolia render function", e);
                }
            },
            placeholder: STRINGS.searchPlaceholder,
            detachedMediaQuery: '',
            defaultActiveItemId: 0,
            getSources({ query }) {
                if (!query) {
                    return [];
                }

                return [
                    {
                        sourceId: 'hits',
                        getItems() {
                            return getAlgoliaResults<AlgoliaHit>({
                                searchClient,
                                queries: [
                                    {
                                        indexName: ALGOLIA_CONFIG.indexName,
                                        query,
                                        params: {
                                            hitsPerPage: 10,
                                            attributesToSnippet: ['description:15'],
                                            snippetEllipsisText: '...',
                                            attributesToHighlight: ['title', 'description'],
                                        },
                                    },
                                ],
                            });
                        },
                        getItemUrl({ item }) {
                            return item.path;
                        },
                        onActive({ item, setContext }) {
                            setContext({ 
                                preview: item,
                                isMobile: window.innerWidth <= 768
                            } as AutocompleteContext);
                        },
                        templates: {
                            item({ item, components }) {
                                return <HitItem item={item} components={components} />;
                            },
                            noResults() {
                                return <div className="p-4 text-sm text-gray-500">No results found.</div>;
                            }
                        },
                    },
                ];
            }
        });

        autocompleteInstanceRef.current = instance;

        return () => {
            isUnmounting = true;
            
            // Safe cleanup: use setTimeout to avoid race conditions
            setTimeout(() => {
                try {
                    if (autocompleteInstanceRef.current) {
                        autocompleteInstanceRef.current.destroy();
                        autocompleteInstanceRef.current = null;
                    }
                } catch (e) {
                    console.warn("Error destroying autocomplete instance", e);
                }
                
                try {
                    if (panelRootRef.current) {
                        panelRootRef.current.unmount();
                        panelRootRef.current = null;
                    }
                } catch (e) {
                    console.warn("Error unmounting panel root", e);
                }
            }, 0);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            id="autocomplete-container" 
            className="w-full"
            data-mobile={isMobile ? 'true' : 'false'}
        />
    );
}