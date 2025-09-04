import churchBuilding from '@/assets/church-building.jpg';
import sundayFellowship from '@/assets/sunday-fellowship.jpg';
import communityWorship from '@/assets/community-worship.jpg';

const ChurchImages = () => {
  const churchImages = [
    {
      src: churchBuilding,
      alt: 'Our Church Building',
      caption: 'Our Church Building'
    },
    {
      src: sundayFellowship,
      alt: 'Sunday Fellowship',
      caption: 'Sunday Fellowship'
    },
    {
      src: communityWorship,
      alt: 'Community Worship',
      caption: 'Community Worship'
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
                {index === 0 && "The sacred space where our community gathers for worship and prayer."}
                {index === 1 && "Sharing meals and building relationships that strengthen our faith community."}
                {index === 2 && "United in praise and worship, experiencing God's presence together."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchImages;