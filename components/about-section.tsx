import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
                About <span className="text-primary">DANGI WA KINANDA</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                A dedicated pianist serving churches and communities across Kenya
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={100}>
              <div className="space-y-6">
                <div className="relative inline-block mx-auto">
                  <div className="about-image-border absolute inset-0 rounded-full"></div>
                  <div className="relative p-2">
                    <img
                      src="/dangimwas-about-portrait.jpg"
                      alt="DANGI WA KINANDA - Professional Pianist"
                      className="about-image w-full aspect-square object-cover object-top rounded-full"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Musical Journey</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                    I am a passionate pianist based in Kenya, dedicated to serving my church and community through
                    music. My journey with the piano began with a love for worship music, and over the years, I have
                    grown to serve in various church services, weddings, burial ceremonies, and community events across
                    the country.
                  </p>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    I believe music is a powerful tool for worship, celebration, and bringing people together during
                    life's most important moments. Whether playing for Sunday services, accompanying choirs, or
                    providing live music for special occasions like Ruracio and weddings, I approach every performance
                    with dedication and a heart to serve. My goal is to make your event memorable through quality music
                    and professional service.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Passion</h4>
                      <p className="text-sm text-muted-foreground">Driven by worship & service</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Reliability</h4>
                      <p className="text-sm text-muted-foreground">Dependable & professional</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Community</h4>
                      <p className="text-sm text-muted-foreground">Serving Kenya nationwide</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
