"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime!',
    value: 'stratixcopvt@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Sun from 8am to 8pm',
    value: '+1 (555) 123-4567',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office HQ',
    value: 'JSPM RSCOE IIF Incubation center',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    description: 'Monday to Saturday',
    value: '8:00 AM - 6:00 PM EST',
    color: 'from-orange-500 to-red-500'
  }
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

   const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id= "contact" className = "py-24 bg-muted/30" >
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
    Get In < span className = "text-primary" > Touch </span>
      </h2>
      < p className = "text-xl text-muted-foreground max-w-3xl mx-auto" >
        Ready to transform your digital presence ? Let's discuss your project and create 
            something amazing together.We're here to help bring your vision to life.
  </p>
  </motion.div>

  < div className = "grid grid-cols-1 lg:grid-cols-2 gap-12" >
    {/* Contact Form */ }
    < motion.div
initial = {{ x: -50, opacity: 0 }}
whileInView = {{ x: 0, opacity: 1 }}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
          >
  <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm" >
    <CardHeader>
    <CardTitle className="text-2xl font-space-grotesk" >
      Send us a message
        </CardTitle>
        <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
  </CardDescription>
  </CardHeader>
  < CardContent >
  <Form { ...form } >
  <form onSubmit={ form.handleSubmit(onSubmit) } className = "space-y-6" >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
      <FormField
                        control={ form.control }
name = "name"
render = {({ field }) => (
  <FormItem>
  <FormLabel>Name </FormLabel>
  < FormControl >
  <Input placeholder= "Your full name" {...field } />
    </FormControl>
    < FormMessage />
    </FormItem>
                        )}
                      />
  < FormField
control = { form.control }
name = "email"
render = {({ field }) => (
  <FormItem>
  <FormLabel>Email </FormLabel>
  < FormControl >
  <Input placeholder= "your.email@example.com" {...field } />
    </FormControl>
    < FormMessage />
    </FormItem>
                        )}
                      />
  </div>

  < FormField
control = { form.control }
name = "subject"
render = {({ field }) => (
  <FormItem>
  <FormLabel>Subject </FormLabel>
  < FormControl >
  <Input placeholder= "What's this about?" {...field } />
    </FormControl>
    < FormMessage />
    </FormItem>
                      )}
                    />

  < FormField
control = { form.control }
name = "message"
render = {({ field }) => (
  <FormItem>
  <FormLabel>Message </FormLabel>
  < FormControl >
  <Textarea 
                              placeholder= "Tell us more about your project..."
className = "min-h-[120px]"
{...field } 
                            />
  </FormControl>
  < FormMessage />
  </FormItem>
                      )}
                    />

  < Button
type = "submit"
size = "lg"
className = "w-full bg-primary hover:bg-primary/90"
disabled = { isSubmitting }
  >
{
  isSubmitting?(
                        <motion.div
                          animate={{ rotate: 360 }}
transition = {{ duration: 1, repeat: Infinity, ease: "linear" }}
className = "w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
  />
                      ) : (
  <Send className= "w-4 h-4 mr-2" />
                      )}
{ isSubmitting ? 'Sending...' : 'Send Message' }
</Button>
  </form>
  </Form>
  </CardContent>
  </Card>
  </motion.div>

{/* Contact Information */ }
<motion.div
            initial={ { x: 50, opacity: 0 } }
whileInView = {{ x: 0, opacity: 1 }}
transition = {{ duration: 0.8 }}
viewport = {{ once: true }}
className = "space-y-6"
  >
{
  contactInfo.map((info, index) => (
    <motion.div
                key= { info.title }
                initial = {{ y: 30, opacity: 0 }}
whileInView = {{ y: 0, opacity: 1 }}
transition = {{ duration: 0.5, delay: index * 0.1 }}
viewport = {{ once: true }}
              >
  <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300" >
    <CardContent className="p-6" >
      <div className="flex items-start space-x-4" >
        <div className={ `w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-0.5` }>
          <div className="w-full h-full bg-background rounded-xl flex items-center justify-center" >
            <info.icon className="w-6 h-6 text-foreground" />
              </div>
              </div>
              < div className = "flex-1" >
                <h3 className="font-semibold text-lg mb-1" > { info.title } </h3>
                  < p className = "text-muted-foreground text-sm mb-2" > { info.description } </p>
                    < p className = "font-medium" > { info.value } </p>
                      </div>
                      </div>
                      </CardContent>
                      </Card>
                      </motion.div>
            ))}

{/* Map placeholder */ }
<motion.div
              initial={ { y: 30, opacity: 0 } }
whileInView = {{ y: 0, opacity: 1 }}
transition = {{ duration: 0.5, delay: 0.4 }}
viewport = {{ once: true }}
            >
  <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden" >
    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center" >
      <div className="text-center" >
        <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
          <p className="text-muted-foreground" > Interactive map coming soon </p>
            </div>
            </div>
            </Card>
            </motion.div>
            </motion.div>
            </div>
            </div>
            </section>
  );
}