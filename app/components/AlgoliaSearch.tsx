'use client';

import React, { useEffect, useRef, Fragment, createElement, ReactNode } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Link from 'next/link';
import '@algolia/autocomplete-theme-classic';
import { createRoot, Root } from 'react-dom/client';
import {
    autocomplete,
    getAlgoliaResults,
    AutocompleteComponents,
    AutocompleteRender,
    AutocompleteState,
    AutocompleteSource,
} from '@algolia/autocomplete-js';
import algoliasearch, { SearchClient } from 'algoliasearch/lite'; // Use lite client if only searching

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
    [key: string]: any; // Allow other properties
}

interface AutocompleteContext {
    preview?: AlgoliaHit;
    [key: string]: any; // Add index signature to match the expected type
}

// --- Algolia Client ---
const searchClient: SearchClient = algoliasearch(
    ALGOLIA_CONFIG.appId,
    ALGOLIA_CONFIG.apiKey
);

// --- Helper Functions ---

/**
 * Renders breadcrumbs based on a given path string.
 */
const renderBreadcrumbs = (path: string): ReactNode => {
    // Split, remove empty segments, filter out 'docs' if it's the first part
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

interface HitItemProps {
    item: AlgoliaHit;
    components: AutocompleteComponents;
}

/**
 * Renders a single search result item.
 */
const HitItem: React.FC<HitItemProps> = ({ item, components }) => (
    <Link
        className="flex items-start gap-3 py-3 px-1 rounded-md group transition-colors"
        href={item.path || '#'} // Use '#' as fallback
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
        </div>
    </Link>
);

interface PreviewPaneProps {
    preview: AlgoliaHit | undefined;
    components: AutocompleteComponents;
}

/**
 * Renders the preview section on the right side.
 */
const PreviewPane: React.FC<PreviewPaneProps> = ({ preview, components }) => {
    if (!preview) {
        // Optional: Render a placeholder when no item is active/previewed
        return (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                Select an item to see the preview.
            </div>
        );
    }

    return (
      <div className="p-6 relative h-full flex flex-col">
          {/* Icon and Breadcrumbs in one row */}
          <div className="flex items-center mb-4">
              <div className="flex-shrink-0 mr-2">
                  <IoDocumentTextOutline size={18} className="text-gray-500 dark:text-gray-400" />
              </div>
              <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
                  {renderBreadcrumbs(preview.path)}
              </div>
          </div>

          {/* Title - smaller size */}
          <h1 className="text-2xl leading-tight font-semibold text-gray-900 dark:text-white mb-4">
              <components.Highlight hit={preview} attribute="title" />
          </h1>

          {/* Description */}
          {preview.description && (
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  <components.Highlight hit={preview} attribute="description" />
              </div>
          )}

          {/* On This Page (Headers) always visible, pushed to bottom of container */}
          <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {STRINGS.onThisPage}
              </h3>
              <ul className="space-y-3">
                  {(preview.headers && preview.headers.length > 0) ? (
                      preview.headers.map((header, index) => {
                          const cleanHeader = header.replace(/^\d+\.\s*/, ''); // Remove leading numbers like "1. "
                          const slug = cleanHeader.toLowerCase().replace(/\s+/g, '-').replace(/[.?]/g, ''); // Basic slugify
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
                      // Placeholder content when no headers are available
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

/**
 * Renders the footer with keyboard hints and Algolia branding.
 */
const AlgoliaFooter: React.FC = () => (
    <div className="flex items-center justify-between p-3 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {/* Keyboard Hints */}
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

        {/* Algolia Branding */}
        <div className="flex items-center">
            <span>{STRINGS.searchBy}</span>
            {/* Ensure the image path is correct relative to your public directory */}
            <img src="/images/algolia_logo.svg" alt="Algolia" className="h-4 ml-2" />
        </div>
    </div>
);

interface SearchResultsPanelProps {
    children: ReactNode;
    state: AutocompleteState<AlgoliaHit>;
    components: AutocompleteComponents;
}

/**
 * Renders the main panel containing search results and the preview pane.
 */
const SearchResultsPanel: React.FC<SearchResultsPanelProps> = ({ children, state, components }) => {
    const { preview } = (state.context as AutocompleteContext) || {};

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                {/* Search Results Column */}
                <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                    {children}
                </div>
                {/* Preview Column */}
                <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh]" id="preview-section">
                    <PreviewPane preview={preview} components={components} />
                </div>
            </div>
            <AlgoliaFooter />
        </div>
    );
};


// --- Main Component ---

export default function AlgoliaSearch() {
    // Refs for DOM elements and React root management
    const containerRef = useRef<HTMLDivElement | null>(null);
    const panelRootRef = useRef<Root | null>(null); // For React 18 createRoot
    const rootRef = useRef<HTMLElement | null>(null); // To track the Algolia root element

    useEffect(() => {
        if (!containerRef.current) {
            console.warn("AlgoliaSearch: Container ref is not available.");
            return;
        }

        // Initialize Algolia Autocomplete
        const autocompleteInstance = autocomplete<AlgoliaHit>({
            container: containerRef.current,
            // Pass React's createElement and Fragment for rendering internally
            renderer: { createElement, Fragment, render: () => { } },
            // Custom render function to integrate with React's createRoot
            render: ({ children, state, Fragment, components }, root) => {
                // Manage React root for the panel
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;
                    panelRootRef.current?.unmount(); // Clean up previous root if exists
                    panelRootRef.current = createRoot(root);
                }

                // Render the panel structure using React components
                panelRootRef.current.render(
                    <SearchResultsPanel state={state} components={components}>
                        {children} {/* Algolia injects the list of items here */}
                    </SearchResultsPanel>
                );
            },

            placeholder: STRINGS.searchPlaceholder,
            detachedMediaQuery: '', // Keep detached mode always active or adjust as needed
            defaultActiveItemId: 0, // Automatically highlight the first result

            // Define how to get search results
            getSources({ query }): Array<AutocompleteSource<AlgoliaHit>> {
                // Don't perform search for empty query
                if (!query) {
                    return [];
                }

                return [
                    {
                        sourceId: 'hits',
                        // Fetch items from Algolia
                        getItems() {
                            return getAlgoliaResults<AlgoliaHit>({
                                searchClient,
                                queries: [
                                    {
                                        indexName: ALGOLIA_CONFIG.indexName,
                                        query,
                                        params: {
                                            hitsPerPage: 10, // Adjusted for potentially better UX
                                            attributesToSnippet: ['description:15'], // Optional: Snippet description
                                            snippetEllipsisText: '...',
                                        },
                                    },
                                ],
                            });
                        },
                        // Define URL for keyboard navigation (Enter key)
                        getItemUrl({ item }) {
                            return item.path; // Assuming 'path' is the correct URL field
                        },
                        // Update context when an item is highlighted (hover or arrow keys)
                        onActive({ item, setContext }) {
                            setContext({ preview: item } as AutocompleteContext);
                        },
                        // Define how each item in the results list is rendered
                        templates: {
                            item({ item, components }) {
                                return <HitItem item={item} components={components} />;
                            },
                            // Optional: Define a "no results" template
                            noResults() {
                                return <div className="p-4 text-sm text-gray-500">No results found.</div>;
                            }
                        },
                    },
                ];
            }
        });

        // Cleanup function to destroy the autocomplete instance
        return () => {
            autocompleteInstance.destroy();
            panelRootRef.current?.unmount(); // Unmount React root on cleanup
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    // Render the container div that Algolia Autocomplete will attach to
    return (
        <div ref={containerRef} id="autocomplete-container" className="w-full" />
        // Added id for clarity, though Algolia uses the ref primarily
    );
}