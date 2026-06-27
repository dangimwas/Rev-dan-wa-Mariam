"use client"

import { Button } from "@/components/ui/button"
import { Music, Play } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 })

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date("2021-01-01")
      const now = new Date()

      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      setExperience({ years, months, days })
    }

    calculateExperience()
    const interval = setInterval(calculateExperience, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with musical pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23a16207' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto grid-cols-1 lg:grid-cols-2">
          {/* Image Section - appears first on mobile */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full animate-spin-slow blur-sm group-hover:blur-md group-hover:animate-spin-fast transition-all duration-300"></div>
                <div className="relative bg-background rounded-full p-2 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cfc9196dadfdefb52779bdb7ab73df48_1.jpeg-ToxMPBd4ZCh8FX0QGier1L9GpdzeLD.webp"
                    alt="DANGI WA KINANDA - Professional Pianist"
                    width={400}
                    height={400}
                    className="rounded-full object-cover w-full h-auto max-w-sm aspect-square group-hover:brightness-110 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - appears second on mobile */}
          <div className="text-center lg:text-left order-last lg:order-first">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Music className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              <span className="text-primary">DANGI WA KINANDA</span>
              <br />
              Professional Pianist
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto lg:mx-0">
              Bringing musical excellence to life through passionate performances, professional studio work, and
              inspiring music education. Let's create something beautiful together.
            </p>

            {/* Experience Counter Display */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="inline-block">
                <div className="text-sm text-muted-foreground mb-2 text-center">Experience</div>
                <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl px-6 py-4 shadow-lg shadow-primary/5">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary animate-pulse">{experience.years}</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="h-12 w-px bg-border"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary animate-pulse">{experience.months}</div>
                    <div className="text-sm text-muted-foreground">Months</div>
                  </div>
                  <div className="h-12 w-px bg-border"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary animate-pulse">{experience.days}</div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToServices}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Play className="mr-2 h-5 w-5" />
                View Services
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
