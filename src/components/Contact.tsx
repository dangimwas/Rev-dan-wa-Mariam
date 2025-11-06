import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [wordCount, setWordCount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const MAX_WORDS = 100;
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

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

    // Clear error when user starts typing
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    setTouched({
      name: true,
      email: true,
      message: true
    });

    // Stop if there are errors
    if (nameError || emailError || messageError) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }
    
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

      setShowSuccessModal(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({
        name: '',
        email: '',
        message: ''
      });
      setTouched({
        name: false,
        email: false,
        message: false
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
    <>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-scale-in">
              <CheckCircle2 className="h-10 w-10 text-primary animate-fade-in" />
            </div>
            <DialogTitle className="text-center text-2xl">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Thank you for reaching out. Your message has been delivered to Reverend Dan, 
              and you can expect a response within 24-48 hours.
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setShowSuccessModal(false)}
            className="w-full mt-4"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

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
                      onBlur={handleBlur}
                      required
                      className={`mt-1 bg-input text-foreground ${
                        touched.name && errors.name 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : 'border-border'
                      }`}
                      placeholder="Your full name"
                    />
                    {touched.name && errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`mt-1 bg-input text-foreground ${
                        touched.email && errors.email 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : 'border-border'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {touched.email && errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
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
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`mt-1 bg-input text-foreground resize-none ${
                      touched.message && errors.message 
                        ? 'border-destructive focus-visible:ring-destructive' 
                        : 'border-border'
                    }`}
                    placeholder="How can I help you on your spiritual journey?"
                  />
                  {touched.message && errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
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
    </>
  );
};

export default Contact;