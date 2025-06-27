"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  Heart,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
});

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FeedbackForm = z.infer<typeof feedbackSchema>;
type NewsletterForm = z.infer<typeof newsletterSchema>;

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Careers', href: '/careers' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const services = [
  { name: 'UI/UX Design', href: '/services/ui-ux' },
  { name: 'Web Development', href: '/services/web-dev' },
  { name: 'Mobile Apps', href: '/services/mobile' },
  { name: 'Digital Marketing', href: '/services/marketing' },
  { name: 'Cloud Solutions', href: '/services/cloud' },
  { name: 'Cybersecurity', href: '/services/security' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export default function Footer() {
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const feedbackForm = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      feedback: '',
    },
  });

  const newsletterForm = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmitFeedback = async (data: FeedbackForm) => {
    setIsSubmittingFeedback(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Feedback:', data);
    toast.success('Thank you for your feedback!');
    feedbackForm.reset();
    setIsSubmittingFeedback(false);
  };

  const onSubscribeNewsletter = async (data: NewsletterForm) => {
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Newsletter subscription:', data);
    toast.success('Successfully subscribed!');
    newsletterForm.reset();
    setIsSubscribing(false);
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border"> 
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Company Info & Newsletter */}
            <div className="space-y-8">
              {/* Logo & Description */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 mb-6"
                >
                  <div className="relative">
                    <Zap className="w-10 h-10 text-primary" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  </div>
                  <span className="font-space-grotesk font-bold text-2xl">
                    TechFlow Solutions
                  </span>
                </motion.div>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                  Empowering businesses with cutting-edge AI solutions and innovative 
                  digital strategies. Transform your vision into reality with our expert team.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:hello@techflow-solutions.com" className="hover:text-primary transition-colors">
                      hello@techflow-solutions.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>100 Smith Street, Collingwood VIC 3066 AU</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card className="border-0 bg-background/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...newsletterForm}>
                    <form onSubmit={newsletterForm.handleSubmit(onSubscribeNewsletter)} className="flex gap-2">
                      <FormField
                        control={newsletterForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                className="h-10"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="sm" 
                        disabled={isSubscribing}
                        className="px-6"
                      >
                        {isSubscribing ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Links & Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold text-lg mb-6">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 TechFlow Solutions. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using AI</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}