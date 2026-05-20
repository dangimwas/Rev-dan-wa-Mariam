import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const category = request.nextUrl.searchParams.get('category');

    let query = supabase.from('gallery_images').select('*').order('created_at', { ascending: false });

    if (category && category !== 'All') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Fetch failed' },
      { status: 500 }
    );
  }
}
