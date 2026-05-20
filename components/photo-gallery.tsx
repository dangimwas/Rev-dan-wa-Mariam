"use client"

import Image from "next/image"
import { useState } from "react"

const photos = [
  {
    id: 1,
    src: "/weading.jpeg",
    alt: "Wedding Ceremony",
    category: "Weddings",
  },
  {
    id: 2,
    src: "/church-service.jpg",
    alt: "Church Service",
    category: "Church Events",
  },
  {
    id: 3,
    src: "/burial.jpeg",
    alt: "Burial Ceremony",
    category: "Burial Ceremonies",
  },
  {
    id: 4,
    src: "/ruracio.jpeg",
    alt: "Ruracio Event",
    category: "Ruracio",
  },
  {
    id: 5,
    src: "/parties.jpeg",
    alt: "Private Party",
    category: "Private Parties",
  },
  {
    id: 6,
    src: "/live-performance.jpg",
    alt: "Live Performance",
    category: "Live Performances",
  },
  {
    id: 7,
    src: "/corporate-event.jpg",
    alt: "Corporate Event",
    category: "Corporate Events",
  },
  {
    id: 8,
    src: "/studio-session.jpg",
    alt: "Studio Session",
    category: "Studio Sessions",
  },
]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(photos.map((photo) => photo.category)))]

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Photo Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Moments captured from various events and performances across Kenya
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-foreground hover:bg-muted border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-lg">{photo.alt}</p>
                  <p className="text-primary text-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
