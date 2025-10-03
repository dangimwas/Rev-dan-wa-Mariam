import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { checkAdminRole } from '@/lib/auth';
import { Loader2 } from 'lucide-react';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [heroContent, setHeroContent] = useState({ title: '', subtitle: '' });
  const [aboutContent, setAboutContent] = useState({ title: '', description: '' });
  const [contactContent, setContactContent] = useState({ email: '', phone: '' });
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        toast({
          title: "Access Denied",
          description: "Please login to access this page",
          variant: "destructive",
        });
        navigate('/auth');
        return;
      }

      const adminStatus = await checkAdminRole(session.user.id);
      
      if (!adminStatus) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges",
          variant: "destructive",
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
      await loadContent();
    };

    checkAuth();
  }, [navigate, toast]);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*');

      if (error) throw error;

      data?.forEach((item) => {
        if (item.section === 'hero') setHeroContent(item.content as any);
        if (item.section === 'about') setAboutContent(item.content as any);
        if (item.section === 'contact') setContactContent(item.content as any);
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (section: string, content: any) => {
    setSaving(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase
        .from('site_content')
        .update({ 
          content,
          updated_by: session?.user?.id 
        })
        .eq('section', section);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              View Site
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription>Update the main hero section content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Title</Label>
              <Input
                id="hero-title"
                value={heroContent.title}
                onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Input
                id="hero-subtitle"
                value={heroContent.subtitle}
                onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
              />
            </div>
            <Button onClick={() => handleSave('hero', heroContent)} disabled={saving}>
              {saving ? 'Saving...' : 'Save Hero Content'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Section</CardTitle>
            <CardDescription>Update the about section content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="about-title">Title</Label>
              <Input
                id="about-title"
                value={aboutContent.title}
                onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="about-description">Description</Label>
              <Textarea
                id="about-description"
                rows={6}
                value={aboutContent.description}
                onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
              />
            </div>
            <Button onClick={() => handleSave('about', aboutContent)} disabled={saving}>
              {saving ? 'Saving...' : 'Save About Content'}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Update contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={contactContent.email}
                onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="contact-phone">Phone</Label>
              <Input
                id="contact-phone"
                value={contactContent.phone}
                onChange={(e) => setContactContent({ ...contactContent, phone: e.target.value })}
              />
            </div>
            <Button onClick={() => handleSave('contact', contactContent)} disabled={saving}>
              {saving ? 'Saving...' : 'Save Contact Info'}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
