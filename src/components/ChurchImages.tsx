import churchEvent from '/lovable-uploads/ddbee17c-b384-465e-8a34-0b3b12c77ba7.png';
import churchCeremony from '/lovable-uploads/da38524a-102a-40f5-8fd2-c6730d84e1cb.png';
import churchBaptism from '/lovable-uploads/6cc2814e-1ba8-415b-8b04-737ab8da7367.png';
import churchService from '/lovable-uploads/6fc23f88-3dba-4eff-9a96-756f1624e9cd.png';

const ChurchImages = () => {
  const churchImages = [
    {
      src: churchEvent,
      alt: 'Church Community Event with Congregation and Clergy',
      caption: 'Community Gathering'
    },
    {
      src: churchCeremony,
      alt: 'Religious Ceremony with Church Leaders',
      caption: 'Sacred Ceremony'
    },
    {
      src: churchBaptism,
      alt: 'Baptism Ceremony with Water Blessing',
      caption: 'Baptism Service'
    },
    {
      src: churchService,
      alt: 'Indoor Church Service with Congregation',
      caption: 'Sunday Service'
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
                {index === 0 && "Our vibrant community gathering where we celebrate faith and fellowship together."}
                {index === 1 && "Sacred ceremonies and blessings led by our devoted church leaders."}
                {index === 2 && "Holy baptism services where new believers are welcomed into our faith family."}
                {index === 3 && "Our Sunday worship services filled with prayer, praise, and community spirit."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchImages;