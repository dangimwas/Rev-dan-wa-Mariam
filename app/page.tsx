import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServicesSection } from "@/components/services-section"
import { EquipmentGallery } from "@/components/equipment-gallery"
import { PhotoGallery } from "@/components/photo-gallery"
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
      <PhotoGallery />
      <ContactSection />
    </main>
  )
}
