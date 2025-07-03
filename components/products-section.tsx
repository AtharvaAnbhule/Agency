"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const products = [ 
  {
  title: 'Workeloo CRM',
  description: 'A powerful, modular customer relationship management system built to streamline sales, automate workflows, manage leads, and deliver a fully integrated business experience.',
  image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
  techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
  features: [
    'Lead Management',
    'Project & Employee Tracking',
    'Attendance & Payroll',
    'Email Automation',
    'Custom Dashboards',
  ],
  caseStudyUrl: '#',
  demoUrl: 'http://www.workeloo.com'
}
,
  {
    title: 'AI Analytics Dashboard',
    description: 'Comprehensive business intelligence platform powered by machine learning algorithms for real-time insights and predictive analytics.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    features: ['Real-time Analytics', 'ML Predictions', 'Custom Dashboards', 'API Integration'],
    caseStudyUrl: '#',
    demoUrl: '#'
  },
  
  {
    title: 'E-Commerce Platform',
    description: 'Scalable, multi-vendor e-commerce solution with advanced inventory management, payment processing, and customer analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    techStack: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    features: ['Multi-vendor Support', 'Payment Gateway', 'Inventory Management', 'Mobile Responsive'],
    caseStudyUrl: '#',
    demoUrl: '#'
  },
  {
  title: 'Companion Way: AI Travel Buddy',
  description: 'Emotion-aware AI travel companion that detects your mood and provides personalized interactions, conversations, music, and travel recommendations for a joyful solo journey.',
  image: 'https://s.abcnews.com/images/Business/ai-car-rf-gty-bb-240319_1710852036445_hpMain_16x9_1600.jpg', // You can change this to your actual project image URL
  techStack: ['React Native', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
  features: [
    'Real-time Emotion Detection',
    'Mood-based Voice Interaction',
    'Personalized Travel Suggestions',
    'Music & Wellness Recommendations',
    'Offline Companion Mode',
  ],
  caseStudyUrl: '#', // Replace with your case study or GitHub page if available
  demoUrl: '#' // Replace with a live demo or YouTube video link if available
},
{
  title: 'Myra Crystals',
  description: 'A spiritual e-commerce platform selling authentic crystals, chakra kits, and wellness products with real-time astrology recommendations.',
  image: 'https://i.etsystatic.com/42707547/r/il/779dd9/5883628784/il_340x270.5883628784_dnst.jpg',
  techStack: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
  features: [
    'Crystal Shop & Astrology Sync',
    'Cart & Checkout with Razorpay/Stripe',
    'Admin Dashboard for Inventory & Orders',
    'Spiritual Quote Carousel',
    'Mobile Responsive UI',
  ],
  caseStudyUrl: '#',
  demoUrl: 'https://myra-crystals.vercel.app'
},
{
  title: 'ServiSwift',
  description: 'On-demand salon service booking platform connecting customers with nearby salons based on services, availability, and ratings.',
  image: 'https://simplybook.me/build/images/trial-section/beauty-wellness.09220816.png',
  techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
  features: [
    'User & Salon Panel with JWT Auth',
    'Salon Availability & Slot Booking',
    'Integrated Payment (COD + Razorpay)',
    'Admin Control Panel for Management',
    'Notification & Review System',
  ],
  caseStudyUrl: '#',
  demoUrl: '#'
},


  {
    title: 'Project Management Suite',
    description: 'Collaborative project management tool with Kanban boards, time tracking, team collaboration, and advanced reporting features.',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
    techStack: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
    features: ['Kanban Boards', 'Time Tracking', 'Team Collaboration', 'Advanced Reports'],
    caseStudyUrl: '#',
    demoUrl: '#'
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative SaaS solutions and digital products designed to streamline operations, 
            enhance productivity, and drive business growth across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-space-grotesk mb-2">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={product.caseStudyUrl}>
                        Case Study
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={product.demoUrl}>
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}