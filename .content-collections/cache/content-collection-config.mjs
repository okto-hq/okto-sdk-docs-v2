// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import {
  createDocSchema,
  transformMDX
} from "@fumadocs/content-collections/configuration";
var blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: transformMDX
});
var content_collections_default = defineConfig({
  collections: [blogs]
});
export {
  content_collections_default as default
};
