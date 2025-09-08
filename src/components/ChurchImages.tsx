import churchInterior from '/lovable-uploads/151d74d1-e36a-4b24-9402-bfac5ed54c82.png';
import churchExteriorBlue from '/lovable-uploads/df10fbdb-c889-4955-a0fb-2ad27db2927a.png';
import churchSign from '/lovable-uploads/d29b45f8-bfdc-4b65-b120-6f3e50c8935b.png';
import churchAerial from '/lovable-uploads/93f3aa98-5e56-4218-9d36-e1b8679a1852.png';

const ChurchImages = () => {
  const churchImages = [
    {
      src: churchInterior,
      alt: 'Church Interior with Beautiful Altar and Painted Walls',
      caption: 'Our Sanctuary'
    },
    {
      src: churchExteriorBlue,
      alt: 'Bethsaida Victory & Hope Church Building Exterior',
      caption: 'Church Building'
    },
    {
      src: churchSign,
      alt: 'Bethsaida Victory & Hope Church Sign',
      caption: 'Welcome Sign'
    },
    {
      src: churchAerial,
      alt: 'Aerial View of Church Compound',
      caption: 'Church Compound'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                {index === 3 && "Aerial view of our church compound and surrounding community."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchImages;