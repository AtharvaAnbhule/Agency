"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'InnovateTech Solutions',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    content: 'Stratix Co. Solutions transformed our entire digital presence. Their AI-powered approach and attention to detail resulted in a 300% increase in our online conversions. Absolutely exceptional work!'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataStream Analytics',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    rating: 5,
    content: 'The mobile app they developed for us exceeded all expectations. The user experience is seamless, and the performance is outstanding. Our customers love it, and so do we!'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthHack Pro',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
    content: 'Their digital marketing strategies are incredibly effective. We saw a 250% increase in qualified leads within the first quarter. The team is professional, creative, and results-driven.'
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'EcoSmart Solutions',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    rating: 5,
    content: 'Working with Stratix Co. was a game-changer for our startup. They delivered a robust e-commerce platform that scales with our growth. Highly recommend their services!'
  },
  {
    name: 'Lisa Park',
    role: 'Product Manager',
    company: 'CloudTech Innovations',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
    rating: 5,
    content: 'The cloud infrastructure they set up for us is incredibly reliable and secure. Our deployment time has been reduced by 70%, and our team productivity has skyrocketed.'
  }
];

export default function TestimonialsSection() {
  return (
    <section className= "py-24 bg-background" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <motion.div
          initial={ { y: 50, opacity: 0 } }
  whileInView = {{ y: 0, opacity: 1 }
}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
className = "text-center mb-16"
  >
  <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6" >
    What Our < span className = "text-primary" > Clients Say </span>
      </h2>
      < p className = "text-xl text-muted-foreground max-w-3xl mx-auto" >
        Dont just take our word for it.Heres what industry leaders and innovative 
            companies have to say about their experience working with us.
          </p>
</motion.div>

        {/* Desktop Grid Layout */ }
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
{
  testimonials.map((testimonial, index) => (
    <motion.div
              key= { testimonial.name }
              initial = {{ y: 50, opacity: 0 }}
whileInView = {{ y: 0, opacity: 1 }}
transition = {{ duration: 0.5, delay: index * 0.1 }}
viewport = {{ once: true }}
            >
  <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group" >
    <CardContent className="p-6 space-y-4" >
      <div className="flex items-center justify-between mb-4" >
        <div className="flex space-x-1" >
        {
          [...Array(testimonial.rating)].map((_, i) => (
            <Star
                          key= { i }
                          className = "w-4 h-4 fill-yellow-400 text-yellow-400"
            />
                      ))
        }
          </div>
          < Quote className = "w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
            </div>

            < p className = "text-muted-foreground leading-relaxed" >
              "{testimonial.content}"
              </p>

              < div className = "flex items-center space-x-3 pt-4" >
                <Avatar className="w-12 h-12" >
                  <AvatarImage src={ testimonial.avatar } alt = { testimonial.name } />
                    <AvatarFallback>
                    { testimonial.name.split(' ').map(n => n[0]).join('') }
                    </AvatarFallback>
                    </Avatar>
                    < div >
                    <p className="font-semibold" > { testimonial.name } </p>
                      < p className = "text-sm text-muted-foreground" >
                        { testimonial.role } at { testimonial.company }
</p>
  </div>
  </div>
  </CardContent>
  </Card>
  </motion.div>
          ))}
</div>

{/* Mobile Carousel */ }
<div className="md:hidden" >
  <div className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory" >
  {
    testimonials.map((testimonial, index) => (
      <motion.div
                key= { testimonial.name }
                initial = {{ x: 50, opacity: 0 }}
whileInView = {{ x: 0, opacity: 1 }}
transition = {{ duration: 0.5, delay: index * 0.1 }}
viewport = {{ once: true }}
className = "flex-shrink-0 w-80 snap-center"
  >
  <Card className="h-full border-0 bg-card/50 backdrop-blur-sm" >
    <CardContent className="p-6 space-y-4" >
      <div className="flex items-center justify-between mb-4" >
        <div className="flex space-x-1" >
        {
          [...Array(testimonial.rating)].map((_, i) => (
            <Star
                            key= { i }
                            className = "w-4 h-4 fill-yellow-400 text-yellow-400"
            />
                        ))
        }
          </div>
          < Quote className = "w-8 h-8 text-primary/20" />
            </div>

            < p className = "text-muted-foreground leading-relaxed" >
              "{testimonial.content}"
              </p>

              < div className = "flex items-center space-x-3 pt-4" >
                <Avatar className="w-12 h-12" >
                  <AvatarImage src={ testimonial.avatar } alt = { testimonial.name } />
                    <AvatarFallback>
                    { testimonial.name.split(' ').map(n => n[0]).join('') }
                    </AvatarFallback>
                    </Avatar>
                    < div >
                    <p className="font-semibold" > { testimonial.name } </p>
                      < p className = "text-sm text-muted-foreground" >
                        { testimonial.role } at { testimonial.company }
</p>
  </div>
  </div>
  </CardContent>
  </Card>
  </motion.div>
            ))}
</div>
  </div>

{/* Trust Indicators */ }
<motion.div
          initial={ { y: 30, opacity: 0 } }
whileInView = {{ y: 0, opacity: 1 }}
transition = {{ duration: 0.5, delay: 0.8 }}
viewport = {{ once: true }}
className = "mt-16 text-center"
  >
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8" >
    <div>
    <div className="text-3xl font-bold text-primary mb-2" > 500 + </div>
      < div className = "text-sm text-muted-foreground" > Projects Completed </div>
        </div>
        < div >
        <div className="text-3xl font-bold text-primary mb-2" > 98 % </div>
          < div className = "text-sm text-muted-foreground" > Client Satisfaction </div>
            </div>
            < div >
            <div className="text-3xl font-bold text-primary mb-2" > 50 + </div>
              < div className = "text-sm text-muted-foreground" > Team Members </div>
                </div>
                < div >
                <div className="text-3xl font-bold text-primary mb-2" > 24 / 7 </div>
                  < div className = "text-sm text-muted-foreground" > Support Available </div>
                    </div>
                    </div>
                    </motion.div>
                    </div>
                    </section>
  );
}