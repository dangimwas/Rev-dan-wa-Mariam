import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:dangimwas456@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer id="contact" className="py-20 gradient-section border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm here to serve and support you on your spiritual journey. 
            Reach out for spiritual guidance, counseling, or to learn more about our ministry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">dangimwas456@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Available for spiritual counsel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Serving our local community</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-primary mb-3">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Available after service</p>
                  <p className="text-sm text-primary mt-3">
                    *Emergency spiritual counsel available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-input border-border text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-input border-border text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 bg-input border-border text-foreground"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 bg-input border-border text-foreground resize-none"
                    placeholder="How can I help you on your spiritual journey?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-16 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Reverend Dan. All rights reserved. | 
            <span className="text-primary"> Spreading God's love through faithful service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;