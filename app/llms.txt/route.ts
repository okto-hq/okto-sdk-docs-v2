import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  const lines = pages.map(page => {
    // Remove leading '/docs/' from page.url for the llm route
    const llmUrl = '/llm' + page.url.replace(/^\/docs/, '');
    const absoluteUrl = `https://docs.okto.tech${llmUrl}.md`;
    return `Title: ${page.data.title} | URL: ${absoluteUrl} | Description: ${page.data.description || 'No description available'}`;
  });
  return new Response(lines.join('\n'));
}
