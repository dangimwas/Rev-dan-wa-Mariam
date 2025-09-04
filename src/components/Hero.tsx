import { Button } from '@/components/ui/button';
import DynamicText from './DynamicText';
import heroImage from '@/assets/hero-image.jpg';
import ministry1 from '@/assets/ministry-1.jpg';
import ministry2 from '@/assets/ministry-2.jpg';
import ministry3 from '@/assets/ministry-3.jpg';

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
        {/* Hero Banner */}
        <div className="relative mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
            <img 
              src={heroImage} 
              alt="Reverend Dan in church sanctuary" 
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Welcome to My Ministry
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
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
          </div>
        </div>

        {/* Ministry Photos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <img 
              src={ministry1} 
              alt="Congregation during worship" 
              className="w-full h-64 object-cover rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Worship Service</span>
            </div>
          </div>
          <div className="relative group">
            <img 
              src={ministry2} 
              alt="Bible study session" 
              className="w-full h-64 object-cover rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Bible Study</span>
            </div>
          </div>
          <div className="relative group">
            <img 
              src={ministry3} 
              alt="Spiritual counseling" 
              className="w-full h-64 object-cover rounded-lg shadow-[var(--shadow-card)] gallery-image"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Counseling</span>
            </div>
          </div>
        </div>

        {/* Dynamic Text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I am a <DynamicText />
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