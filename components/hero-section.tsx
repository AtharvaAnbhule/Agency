"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
        >
          <source
            src="https://player.vimeo.com/external/424640395.sd.mp4?s=ff9cc3b4b6b4b54db2b8c1e1bb6c7925aab8cb4a&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Built with Love Ribbon */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-20 right-4 z-10"
      >
       
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white leading-tight">
            Empowering Digital Growth
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              with Scalable Tech
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions, premium development services, 
            and innovative digital strategies that deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="#contact" className="flex items-center space-x-2">
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full"
              asChild
            >
              <Link href="#services" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-12"
          >
            <p className="text-gray-300/80 text-sm mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">Netflix</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Video Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 shadow-2xl">
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="TechFlow Solutions Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 right-8 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}