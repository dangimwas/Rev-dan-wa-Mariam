import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { EquipmentGallery } from "@/components/equipment-gallery"
import { GalleryManager } from "@/components/gallery-manager"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <EquipmentGallery />
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">My Work Gallery</h2>
          <GalleryManager />
        </div>
      </section>
      <ContactSection />
    </main>
  )
}
