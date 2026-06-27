import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('[v0] Missing Supabase credentials', { supabaseUrl, supabaseAnonKey });
      throw new Error('Missing Supabase credentials');
    }

    console.log('[v0] Creating Supabase client with URL:', supabaseUrl);

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });

    const category = request.nextUrl.searchParams.get('category');
    console.log('[v0] Fetching gallery images with category:', category);

    let query = supabase.from('gallery_images').select('*').order('created_at', { ascending: false });

    if (category && category !== 'All') {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('[v0] Supabase error details:', { error, code: error.code, message: error.message });
      return NextResponse.json({ error: error.message || 'Failed to fetch gallery' }, { status: 400 });
    }

    console.log('[v0] Successfully fetched gallery images:', data?.length || 0);
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('[v0] Fetch error:', error);
    return NextResponse.json(
      { error: 'Fetch failed: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';
