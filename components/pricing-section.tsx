"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Free Trial',
    description: 'Perfect for trying out our services',
    icon: Star,
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Basic consultation (1 hour)',
      'Project estimation',
      'Technology recommendations',
      'Basic UI/UX audit',
      'Email support'
    ],
    limitations: [
      'Limited to 1 project consultation',
      'No ongoing support',
      'Basic features only'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Standard',
    description: 'Great for small to medium businesses',
    icon: Zap,
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    features: [
      'Custom web development',
      'Mobile-responsive design',
      'Basic SEO optimization',
      '3 months maintenance',
      'Priority email support',
      'Source code ownership',
      'Basic analytics setup',
      '2 revision rounds'
    ],
    limitations: [
      'Up to 10 pages',
      'Basic integrations only',
      'Standard hosting'
    ],
    popular: true,
    cta: 'Choose Standard'
  },
  {
    name: 'Pro',
    description: 'Advanced features for growing companies',
    icon: Crown,
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    features: [
      'Everything in Standard',
      'Advanced web applications',
      'Custom API development',
      'Database design & setup',
      '6 months maintenance',
      '24/7 phone & chat support',
      'Advanced analytics & reporting',
      'Unlimited revisions',
      'Performance optimization',
      'Security audit included',
      'Multi-platform deployment',
      'Team training sessions'
    ],
    limitations: [
      'Premium support response time',
      'Advanced integrations included'
    ],
    popular: false,
    cta: 'Choose Pro'
  }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include our commitment 
            to quality, timely delivery, and ongoing support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Save 20%
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full relative overflow-hidden ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-border hover:shadow-lg'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
                )}
                
                <CardHeader className="text-center pb-8 relative">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <div className={`w-full h-full rounded-2xl ${
                      plan.popular ? 'bg-primary' : 'bg-muted'
                    } flex items-center justify-center`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.popular ? 'text-primary-foreground' : 'text-foreground'
                      }`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-space-grotesk mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        ₹{isYearly ? (plan.yearlyPrice / 12).toFixed(0) : plan.monthlyPrice.toLocaleString()}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-muted-foreground ml-2">
                          /{isYearly ? 'month' : 'month'}
                        </span>
                      )}
                    </div>
                    {isYearly && plan.yearlyPrice > 0 && (
                      <p className="text-sm text-muted-foreground">
                        Billed annually (₹{plan.yearlyPrice.toLocaleString()})
                      </p>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative">
                  <div>
                    <h4 className="font-semibold mb-4 text-primary">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    No setup fees • Cancel anytime • 30-day money back guarantee
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              For enterprise-level projects or unique requirements, we offer customized packages 
              tailored to your specific needs and budget.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}