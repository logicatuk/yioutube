import { NextRequest, NextResponse } from 'next/server';
import { searchLocalContent } from '@/lib/tmdb';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';

  if (q.trim().length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = searchLocalContent(q);
  return NextResponse.json({ results });
}
