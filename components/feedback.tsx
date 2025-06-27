   
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
import { ArrowBigLeftIcon } from 'lucide-react';
import { useRouter } from "next/navigation" ; 
const feedbackSchema = z.object({
      name: z.string().min(2, 'Name must be at least 2 characters'),
      email: z.string().email('Please enter a valid email address'),
      feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
    });
   type FeedbackForm = z.infer<typeof feedbackSchema>;
   function Feedback() {
      const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
      const router = useRouter() ; 
       const feedbackForm = useForm<FeedbackForm>({
          resolver: zodResolver(feedbackSchema),
          defaultValues: {
            name: '',
            email: '',
            feedback: '',
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
    

     return (
        <div className="p-[50px]"> 
        <Button onClick={()=>router.push("/")} ><ArrowBigLeftIcon /> Back</Button>
        {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="border-0 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Share Your Feedback</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...feedbackForm}>
                  <form onSubmit={feedbackForm.handleSubmit(onSubmitFeedback)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={feedbackForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={feedbackForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={feedbackForm.control}
                      name="feedback"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Feedback</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your thoughts..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmittingFeedback}
                      className="w-full md:w-auto"
                    >
                      {isSubmittingFeedback ? 'Sending...' : 'Send Feedback'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          </div>
     )
   }
   
   export default Feedback ; 
  