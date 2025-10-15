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
  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 100;
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      const currentWordCount = value.trim() === '' ? 0 : words.length;
      
      if (currentWordCount > MAX_WORDS) {
        return; // Don't update if exceeds limit
      }
      
      setWordCount(currentWordCount);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("Submitting contact form", formData);
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      console.log("send-contact-email response", { data, error });

      if (error) throw error;

      toast({
        title: "Message sent to Reverend Dan",
        description: "Your message has been delivered successfully.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setWordCount(0);
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Message not sent",
        description: error?.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
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
                    <span className="text-foreground">ngugidang@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">0705499200</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Ruiru Watalam</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-primary mb-3">Bethsaida Victory & Hope Church</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-primary">Sunday Services:</p>
                  <p>8:00 AM - 9:30 AM: English Service</p>
                  <p>10:00 AM - 3:00 PM: Kikuyu Service</p>
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
                  <div className="flex items-center justify-between mb-1">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <span className={`text-sm ${wordCount > MAX_WORDS * 0.9 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {wordCount}/{MAX_WORDS} words
                    </span>
                  </div>
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
            © 2024 Bethsaida Victory & Hope Church. All rights reserved. | 
            <span className="text-primary"> Spreading God's love through faithful service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;