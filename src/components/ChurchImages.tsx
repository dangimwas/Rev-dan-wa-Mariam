import churchInterior from '/lovable-uploads/church-interior.png';
import churchExteriorBlue from '/lovable-uploads/church-exterior-blue.png';
import churchSign from '/lovable-uploads/church-sign.png';

const ChurchImages = () => {
  const churchImages = [
    {
      src: churchInterior,
      alt: 'Church Interior with Beautiful Altar',
      caption: 'Our Sanctuary'
    },
    {
      src: churchExteriorBlue,
      alt: 'Church Building Exterior',
      caption: 'Church Building'
    },
    {
      src: churchSign,
      alt: 'Bethsaida Victory & Hope Church Sign',
      caption: 'Welcome Sign'
    }
  ];

  return (
    <section id="church" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Church</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our church community - our home, our fellowship, and the 
            place where we gather to worship and grow together in faith.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {churchImages.map((image, index) => (
            <div key={index} className="text-center">
              <div className="relative group overflow-hidden rounded-lg shadow-[var(--shadow-card)] mb-4">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover gallery-image"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {image.caption}
              </h3>
              <p className="text-muted-foreground">
                {index === 0 && "Our beautiful sanctuary with hand-painted walls and sacred altar where we worship."}
                {index === 1 && "The exterior of our beloved church building serving the community."}
                {index === 2 && "Welcome to Bethsaida Victory & Hope Church - our spiritual home."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchImages;