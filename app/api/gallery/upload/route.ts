import { put } from '@vercel/blob'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    console.log('[v0] Received upload request')
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const category = formData.get('category') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    console.log('[v0] File received:', file.name, 'size:', file.size)

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: 'public',
    })

    console.log('[v0] File uploaded to blob:', blob.url)

    // Save metadata to Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials: ' + (supabaseUrl ? 'missing key' : 'missing URL'))
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
    })

    const { data, error } = await supabase
      .from('gallery_images')
      .insert({
        url: blob.url,
        title: title || file.name,
        category: category || 'Other',
      })
      .select()

    if (error) {
      console.error('[v0] Supabase insert error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log('[v0] Image record created:', data[0].id)

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('[v0] Upload route error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Upload failed: ' + message },
      { status: 500 }
    )
  }
}
