"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Mic, GraduationCap, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Music,
    title: "Live Performances",
    description:
      "Captivating live piano performances for concerts, recitals, and special events. From intimate solo pieces to grand orchestral collaborations.",
    features: [
      "Livestreaming",
      "Professional Photo & Video Coverage",
      "Custom Stage Setups",
      "Live Recording Package",
      "DJ / Playlist Transition",
      "Stage Lighting & Visual Effects",
    ],
    price: "From 70,000ksh",
  },
  {
    icon: Mic,
    title: "Studio Sessions",
    description:
      "Professional piano recording services for albums, soundtracks, and commercial projects. High-quality studio work with attention to detail.",
    features: ["Album Recording", "Soundtrack Work", "Commercial Projects", "Session Musician"],
    price: "From 30,000ksh",
  },
  {
    icon: GraduationCap,
    title: "Music Teaching",
    description:
      "Personalized piano lessons for students of all levels. From beginners to advanced players looking to refine their technique and artistry.",
    features: ["Private Lessons", "Group Classes", "Masterclasses", "Online Sessions"],
    price: "From 30,000ksh",
  },
  {
    icon: Calendar,
    title: "Event Services",
    description:
      "Elegant piano music for weddings, corporate events, and private parties. Creating the perfect musical atmosphere for your special occasions.",
    features: ["Weddings", "Burial Ceremonies", "Church Events", "Private Parties", "Ruracio"],
    price: "From 70,000ksh",
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
                Musical <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Professional piano services tailored to bring your musical vision to life
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 150}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-sm text-primary font-medium">{service.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={scrollToContact}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
