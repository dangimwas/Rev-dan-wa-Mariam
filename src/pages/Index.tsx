import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import PhotoGallery from '@/components/PhotoGallery';
import ChurchImages from '@/components/ChurchImages';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <PhotoGallery />
      <ChurchImages />
      <Contact />
    </div>
  );
};

export default Index;
