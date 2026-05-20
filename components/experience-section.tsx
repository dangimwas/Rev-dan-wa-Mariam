import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const experiences = [
  {
    year: "2024",
    title: "Church Pianist",
    location: "Local Church, Kenya",
    description:
      "Serving as the regular pianist for Sunday services, leading worship through music and accompanying the choir.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Special Events Performer",
    location: "Various Churches, Kenya",
    description:
      "Performed at weddings, burial ceremonies, and church conferences across different congregations in Kenya.",
    highlight: false,
  },
  {
    year: "2023",
    title: "Youth Ministry Music Leader",
    location: "Local Church, Kenya",
    description: "Led music sessions for youth gatherings and helped mentor young musicians in the church community.",
    highlight: false,
  },
  {
    year: "2022",
    title: "Community Events Pianist",
    location: "Kenya",
    description: "Provided piano music for private parties, Ruracio ceremonies, and other community celebrations.",
    highlight: true,
  },
  {
    year: "2022",
    title: "Church Choir Accompanist",
    location: "Local Church, Kenya",
    description: "Accompanied the church choir during rehearsals and performances for special church programs.",
    highlight: false,
  },
  {
    year: "2021",
    title: "Started Piano Ministry",
    location: "Kenya",
    description: "Began my journey as a church pianist, learning to serve through music and developing my skills.",
    highlight: true,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
                Musical <span className="text-primary">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                A timeline of performances, collaborations, and achievements that have shaped my musical journey
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card
                  className={`transition-all duration-300 hover:shadow-lg ${
                    experience.highlight ? "border-primary/50 bg-primary/5" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-3 sm:min-w-0 sm:flex-1">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full ${
                            experience.highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {experience.highlight ? <Star className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-primary">{experience.year}</span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {experience.location}
                            </div>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{experience.title}</h3>
                          <p className="text-muted-foreground text-pretty leading-relaxed">{experience.description}</p>
                        </div>
                      </div>
                    </div>
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
