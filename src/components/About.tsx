import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import profilePhoto from '/lovable-uploads/f0840f1c-644f-40db-a5e6-046148a61fb5.png';

const About = () => {
  const handleViewCV = () => {
    // This would open the CV in a new tab
    window.open('/cv.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    // This would trigger the download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Reverend_Dan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src={profilePhoto} 
                  alt="Reverend Dan professional headshot" 
                  className="w-80 h-80 object-cover rounded-full shadow-[var(--shadow-orange)] border-4 border-primary/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-foreground">
                <p className="text-lg leading-relaxed">
                  I am Reverend Dan, called by God to serve His people through ministry, teaching, 
                  and spiritual guidance. For over two decades, I have dedicated my life to 
                  spreading the Gospel, nurturing faith communities, and providing comfort to 
                  those in need.
                </p>
                <p className="text-lg leading-relaxed">
                  My mission is to bridge the gap between spiritual teachings and everyday life, 
                  helping individuals discover their God-given purpose while building stronger, 
                  more compassionate communities. Through preaching, counseling, and mentorship, 
                  I strive to be a beacon of hope and a vessel of God's love.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether leading worship services, conducting Bible studies, or offering 
                  spiritual counseling, my goal is always the same: to help others grow in 
                  their faith and find peace, purpose, and joy in their relationship with God.
                </p>
              </div>

              {/* CV Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  onClick={handleViewCV}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View CV
                </Button>
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;