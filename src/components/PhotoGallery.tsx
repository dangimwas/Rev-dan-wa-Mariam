import { useState } from 'react';
import { X } from 'lucide-react';
import churchEvent from '/lovable-uploads/ddbee17c-b384-465e-8a34-0b3b12c77ba7.png';
import churchCeremony from '/lovable-uploads/da38524a-102a-40f5-8fd2-c6730d84e1cb.png';
import churchBaptism from '/lovable-uploads/6cc2814e-1ba8-415b-8b04-737ab8da7367.png';
import churchService from '/lovable-uploads/6fc23f88-3dba-4eff-9a96-756f1624e9cd.png';
import ministryEvent from '/lovable-uploads/9c2d2ab6-09b3-4b92-9918-6be86a4bc69e.png';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: churchEvent, alt: 'Church Community Event with Congregation and Clergy' },
    { src: churchCeremony, alt: 'Religious Ceremony with Church Leaders' },
    { src: ministryEvent, alt: 'Special Ministry Gathering and Worship' },
    { src: churchBaptism, alt: 'Baptism Ceremony with Water Blessing' },
    { src: churchService, alt: 'Indoor Church Service with Congregation' },
  ];

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Photo Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments from our ministry - capturing the joy, faith, and community spirit 
            that defines our spiritual journey together.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-[var(--shadow-card)]"
              onClick={() => openImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover gallery-image"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">View Image</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;