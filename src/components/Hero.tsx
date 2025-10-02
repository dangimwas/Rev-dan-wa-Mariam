import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DynamicText from './DynamicText';
import heroImage from '/lovable-uploads/e8b0aeb2-1a63-480e-8189-f2e22caeb576.png';
import ministry1 from '/lovable-uploads/fe512d65-7277-491c-954e-b7f1752adf57.png';
import ministry2 from '/lovable-uploads/40107bb2-f83a-4aea-9cca-8ba171aa597b.png';
import ministry3 from '/lovable-uploads/34d7548f-b0e0-460c-aae9-31b42ecedbf8.png';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 gradient-hero">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image on Left */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={heroImage} 
                alt="Reverend Dan professional photo" 
                className="w-full h-96 md:h-[450px] object-contain"
              />
            </div>
          </div>
          
          {/* Content on Right */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Welcome to My Ministry
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Spreading God's love and serving our community with faith, hope, and compassion
            </p>
            <Button 
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Learn More About Me
            </Button>
          </div>
        </div>

        {/* Ministry Photos - Grid on desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16 place-items-center">
          <div className="relative group">
            <img 
              src={ministry1} 
              alt="Congregation during worship" 
              className="w-full h-48 object-contain bg-muted rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Worship Service</span>
            </div>
          </div>
          <div className="relative group">
            <img 
              src={ministry2} 
              alt="Bible study session" 
              className="w-full h-48 object-cover object-top rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Bible Study</span>
            </div>
          </div>
          <div className="relative group">
            <img 
              src={ministry3} 
              alt="Spiritual counseling" 
              className="w-full h-48 object-contain bg-muted rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Counseling</span>
            </div>
          </div>
        </div>

        {/* Ministry Photos - Carousel on mobile */}
        <div className="md:hidden mb-16">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative group">
                  <img 
                    src={ministry1} 
                    alt="Congregation during worship" 
                    className="w-full h-48 object-contain bg-muted rounded-lg shadow-[var(--shadow-card)] gallery-image"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">Worship Service</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative group">
                  <img 
                    src={ministry2} 
                    alt="Bible study session" 
                    className="w-full h-48 object-cover object-top rounded-lg shadow-[var(--shadow-card)] gallery-image"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">Bible Study</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative group">
                  <img 
                    src={ministry3} 
                    alt="Spiritual counseling" 
                     className="w-full h-48 object-contain bg-muted rounded-lg shadow-[var(--shadow-card)] gallery-image"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">Counseling</span>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Dynamic Text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <DynamicText />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Called to serve God and His people through multiple ministries, 
            bringing hope, healing, and spiritual growth to our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;