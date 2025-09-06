import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Church, 
  GraduationCap, 
  Heart, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const services = [
    {
      icon: Church,
      title: 'Reverend',
      description: 'Leading worship, preaching the Gospel, and shepherding believers with passion and dedication to spiritual growth.'
    },
    {
      icon: Heart,
      title: 'Priest',
      description: 'Guiding people spiritually, administering sacraments, and offering prayer for healing, comfort, and divine connection.'
    },
    {
      icon: GraduationCap,
      title: 'Instructor',
      description: 'Teaching the Word of God through Bible study, mentorship, and training programs for spiritual development.'
    },
    {
      icon: MessageCircle,
      title: 'Counselor',
      description: 'Providing guidance, comfort, and spiritual advice to individuals and families through life\'s challenges.'
    },
    {
      icon: Sparkles,
      title: 'Motivator',
      description: 'Inspiring and encouraging people to grow in faith and achieve their God-given potential through divine purpose.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-in ${titleVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            God has equipped me to serve in multiple capacities, each designed to meet the 
            diverse spiritual needs of our community and foster growth in faith.
          </p>
        </div>

        <div ref={cardsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto scroll-fade-in ${cardsVisible ? 'animate' : ''}`}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="service-card bg-card border-border hover:border-primary/50 h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;