"use client"

import { Music, Mic, Camera, Speaker, Guitar, Drum } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EquipmentGallery() {
  const equipment = [
    {
      name: "Yamaha PSR SX 900",
      category: "Piano/Keyboard",
      icon: Music,
      image: "/piano-900.webp",
    },
    {
      name: "BOMGE Wireless Microphones",
      category: "Audio Equipment",
      icon: Mic,
      image: "/microphones.jpg",
    },
    {
      name: "Gibson Electric Guitars",
      category: "String Instruments",
      icon: Guitar,
      image: "/gibson.webp",
    },
    {
      name: "Yamaha Drum Set",
      category: "Percussion",
      icon: Drum,
      image: "/drumset.jpg",
    },
    {
      name: "Professional Sound Mixer",
      category: "Audio Equipment",
      icon: Music,
      image: "/sound-mixer.jpg",
    },
    {
      name: "Power Amplifiers",
      category: "Audio Equipment",
      icon: Speaker,
      image: "/power-amps.jpg",
    },
    {
      name: "PA Speakers",
      category: "Sound System",
      icon: Speaker,
      image: "/professional-pa-speakers-sound-system.jpg",
    },
    {
      name: "Recording Camera",
      category: "Video Equipment",
      icon: Camera,
      image: "/professional-video-camera-for-live-recording.jpg",
    },
  ]

  return (
    <section id="equipment" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Professional Equipment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art sound systems and equipment to deliver exceptional quality for your events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 text-black hover:bg-white font-semibold shadow-lg border-0 w-full sm:w-auto"
                      onClick={() => {
                        window.open(item.image, "_blank")
                      }}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg w-full sm:w-auto"
                      onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 md:hidden p-3 bg-gradient-to-t from-black/80 to-transparent flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 text-black hover:bg-white font-semibold flex-1"
                      onClick={() => {
                        window.open(item.image, "_blank")
                      }}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold flex-1"
                      onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Book
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-8 h-8 mb-2" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All equipment is professionally maintained and available for your events across Kenya
          </p>
        </div>
      </div>
    </section>
  )
}
