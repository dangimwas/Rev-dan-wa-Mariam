import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import ministry1 from '@/assets/ministry-1.jpg';
import ministry2 from '@/assets/ministry-2.jpg';
import ministry3 from '@/assets/ministry-3.jpg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: 'Ministry Activities' },
    { src: gallery2, alt: 'Special Church Events' },
    { src: ministry1, alt: 'Congregation Worship' },
    { src: ministry2, alt: 'Bible Study Teaching' },
    { src: ministry3, alt: 'Spiritual Counseling' },
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