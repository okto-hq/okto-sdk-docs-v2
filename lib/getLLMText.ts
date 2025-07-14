import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import { source } from './source';
import type { InferPageType } from 'fumadocs-core/source';
import fs from 'fs/promises';
import path from 'path';

const processor = remark()
  .use(remarkMdx)
  .use(remarkGfm);

export async function getLLMText(page: InferPageType<typeof source>) {
  // Get the file path from the page object
  const filePath = page.file.path;
  // The file path is relative to content directory, so we need to prepend 'docs/'
  const fullPath = path.join(process.cwd(), 'content', 'docs', filePath);

  // Read the raw MDX content
  const rawContent = await fs.readFile(fullPath, 'utf-8');

  const processed = await processor.process({
    path: fullPath,
    value: rawContent,
  });

  return `# ${page.data.title}
URL: ${page.url}

${page.data.description}

${processed.value}`;
}
