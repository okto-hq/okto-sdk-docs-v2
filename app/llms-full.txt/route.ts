import { source } from '@/lib/source';
import { getLLMText } from '@/lib/getLLMText';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  const formattedPages = await Promise.all(
    pages.map(async (page) => {
      const content = await getLLMText(page); // include metadata and content
      return content + '\n\n---';
    })
  );
  return new Response(formattedPages.join('\n\n'));
}
