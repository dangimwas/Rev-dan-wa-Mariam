'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Trash2, Upload, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GalleryImage {
  id: string
  url: string
  title: string
  category: string
  created_at: string
}

const CATEGORIES = ['All', 'Wedding', 'Church', 'Burial', 'Ruracio', 'Party', 'Live Performance', 'Corporate', 'Studio']

export function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [uploadForm, setUploadForm] = useState({ file: null as File | null, title: '', category: 'Wedding' })

  useEffect(() => {
    fetchImages()
  }, [selectedCategory])

  const fetchImages = async () => {
    try {
      setLoading(true)
      const query = selectedCategory === 'All' ? '' : `?category=${selectedCategory}`
      const response = await fetch(`/api/gallery${query}`)
      const data = await response.json()
      setImages(data)
    } catch (error) {
      console.error('Failed to fetch images:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadForm.file) return

    try {
      setUploading(true)
      const formData = new FormData()
      formData.append('file', uploadForm.file)
      formData.append('title', uploadForm.title)
      formData.append('category', uploadForm.category)

      console.log('[v0] Starting upload with file:', uploadForm.file.name)

      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      })

      console.log('[v0] Upload response status:', response.status)
      
      if (!response.ok) {
        const text = await response.text()
        console.log('[v0] Upload response text:', text)
        try {
          const data = JSON.parse(text)
          throw new Error(data.error || `Upload failed: ${response.statusText}`)
        } catch (e) {
          throw new Error(`Upload failed: ${response.statusText || 'Unknown error'}`)
        }
      }

      const data = await response.json()
      console.log('[v0] Upload successful:', data)

      setImages([data, ...images])
      setUploadForm({ file: null, title: '', category: 'Wedding' })
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      if (fileInput) fileInput.value = ''
    } catch (error) {
      console.error('[v0] Upload error:', error)
      alert(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      setDeleting(id)
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Delete failed')

      setImages(images.filter(img => img.id !== id))
    } catch (error) {
      console.error('Delete error:', error)
      alert('Failed to delete image')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Upload Section */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Upload New Image</h3>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setUploadForm({ ...uploadForm, file: e.target.files?.[0] || null })}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  placeholder="Image title"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <select
                value={uploadForm.category}
                onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                {CATEGORIES.filter(c => c !== 'All').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              disabled={uploading || !uploadForm.file}
              className="w-full"
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Category Filter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Gallery</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images in this category yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map(image => (
                <div key={image.id} className="group relative rounded-lg overflow-hidden border border-border bg-card">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <button
                      onClick={() => handleDelete(image.id)}
                      disabled={deleting === image.id}
                      className="p-2 bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 rounded-full transition-colors"
                      title="Delete image"
                    >
                      {deleting === image.id ? (
                        <Loader2 className="h-5 w-5 animate-spin text-white" />
                      ) : (
                        <Trash2 className="h-5 w-5 text-white" />
                      )}
                    </button>
                    <p className="text-white text-sm text-center px-2">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
