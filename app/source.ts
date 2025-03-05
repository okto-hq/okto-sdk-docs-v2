import { docs, meta, blogs } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI } from "fumadocs-openapi/server";
import { attachFile } from 'fumadocs-openapi/server';
 
export const openapi = createOpenAPI();

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  }
});

export const blogSource = loader({
  baseUrl: '/blogs',
  source: createMDXSource(blogs, meta),
});