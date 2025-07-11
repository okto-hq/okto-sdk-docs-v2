import { type NextRequest, NextResponse } from 'next/server';
import { getLLMText } from '@/lib/getLLMText';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;

  // Strip .md or .mdx extension from the last segment if present
  let cleanSlug = slug;
  if (slug && slug.length > 0) {
    const lastSegment = slug[slug.length - 1];
    const cleanLastSegment = lastSegment.replace(/\.(md|mdx)$/, '');
    cleanSlug = [...slug.slice(0, -1), cleanLastSegment];
  }

  const page = source.getPage(cleanSlug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page)); // Return content without metadata
}

export function generateStaticParams() {
  return source.generateParams();
}
