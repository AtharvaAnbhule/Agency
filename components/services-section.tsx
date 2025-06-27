"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  Monitor, 
  Cloud, 
  Shield 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning user experiences that convert visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building scalable, high-performance web applications using cutting-edge technologies.',
    features: ['React/Next.js', 'Node.js', 'Python/Django', 'Full-Stack Solutions'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Creating native and cross-platform mobile apps that engage users across all devices.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that amplify your brand and drive measurable growth.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Analytics'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Settings,
    title: 'Website/App Maintenance',
    description: 'Ongoing support and maintenance to keep your digital assets running smoothly.',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Bug Fixes'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Monitor,
    title: 'Desktop App Development',
    description: 'Professional desktop applications built with modern frameworks and technologies.',
    features: ['Electron Apps', 'Native Windows', 'macOS Applications', 'Cross-Platform'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your growing business.',
    features: ['AWS/Azure/GCP', 'DevOps', 'Microservices', 'Containerization'],
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Consulting',
    description: 'Comprehensive security audits and solutions to protect your digital assets.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment'],
    color: 'from-red-500 to-pink-500'
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth 
            and establish your competitive advantage in the digital marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-20 blur-xl`}
                      />
                    )}
                  </div>
                  <CardTitle className="text-xl font-space-grotesk">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}