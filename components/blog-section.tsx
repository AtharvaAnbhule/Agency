"use client";

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development: Trends to Watch in 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'AI & Technology',
    tags: ['AI', 'Web Development', 'Future Tech'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Building Scalable Mobile Apps: Best Practices and Architecture',
    excerpt: 'Learn the essential strategies for creating mobile applications that can handle millions of users while maintaining performance.',
    author: 'Michael Rodriguez',
    date: '2024-01-12',
    category: 'Mobile Development',
    tags: ['Mobile Apps', 'Architecture', 'Scalability'],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Cybersecurity in the Cloud: Protecting Your Digital Assets',
    excerpt: 'A comprehensive guide to securing cloud infrastructure and implementing robust security measures for modern applications.',
    author: 'Emma Thompson',
    date: '2024-01-10',
    category: 'Cybersecurity',
    tags: ['Security', 'Cloud', 'Best Practices'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'UI/UX Design Trends That Will Dominate 2024',
    excerpt: 'Discover the latest design trends and principles that are shaping user experiences across digital platforms.',
    author: 'David Park',
    date: '2024-01-08',
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', '2024'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'Digital Marketing Strategies for Tech Startups',
    excerpt: 'Effective marketing approaches specifically tailored for technology companies looking to scale and reach their target audience.',
    author: 'Lisa Johnson',
    date: '2024-01-05',
    category: 'Digital Marketing',
    tags: ['Marketing', 'Startups', 'Growth'],
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'The Rise of Progressive Web Apps: Why Your Business Needs One',
    excerpt: 'Understanding the benefits of PWAs and how they bridge the gap between web and mobile app experiences.',
    author: 'Alex Kumar',
    date: '2024-01-03',
    category: 'Web Development',
    tags: ['PWA', 'Web Apps', 'Mobile'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    readTime: '7 min read'
  }
];

const categories = ['All', 'AI & Technology', 'Web Development', 'Mobile Development', 'Design', 'Cybersecurity', 'Digital Marketing'];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on technology trends, 
            best practices, and innovative solutions shaping the digital landscape.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-space-grotesk line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
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
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}