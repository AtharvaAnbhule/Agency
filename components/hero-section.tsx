"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className= "relative min-h-screen flex items-center justify-center overflow-hidden" >
    {/* Video Background */ }
    < div className = "absolute inset-0 z-0 w-full h-full" >
      <video
          autoPlay
  muted
  loop
  playsInline
  className = "w-full h-full object-cover"
  poster = "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
    >
    <source
            src="https://player.vimeo.com/external/424640395.sd.mp4?s=ff9cc3b4b6b4b54db2b8c1e1bb6c7925aab8cb4a&profile_id=164&oauth2_token_id=57447761"
  type = "video/mp4"
    />
    </video>
    < div className = "absolute inset-0 bg-black/40" />
      </div>

  {/* Hero Content */ }
  <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28" >
    <motion.div
          initial={ { y: 50, opacity: 0 } }
  animate = {{ y: 0, opacity: 1 }
}
transition = {{ duration: 0.8 }}
className = "space-y-8"
  >
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-space-grotesk" >
    Empowering Digital Growth
      < br />
      <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent" >
              with Scalable Tech
  </span>
  </h1>

  < p className = "text-lg sm:text-xl md:text-2xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed" >
    Transform your business with cutting - edge AI solutions, premium development services,
      and innovative digital strategies that deliver measurable results.
          </p>

        < div className = "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center" >
          <Button
              size="lg"
className = "bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
asChild
  >
  <Link href="#contact" className = "flex items-center space-x-2" >
    <span>Schedule a Demo </span>
      < ArrowRight className = "w-5 h-5" />
        </Link>
        </Button>

        < Button
variant = "outline"
size = "lg"
className = "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
asChild
  >
  <Link href="#services" className = "flex items-center space-x-2" >
    <Play className="w-5 h-5" />
      <span>Explore Services </span>
        </Link>
        </Button>
        </div>

        < motion.div
initial = {{ y: 30, opacity: 0 }}
animate = {{ y: 0, opacity: 1 }}
transition = {{ delay: 0.5, duration: 0.8 }}
className = "pt-8"
  >
  <p className="text-gray-300/80 text-sm mb-4" > Trusted by innovative companies worldwide </p>
    < div className = "flex flex-wrap justify-center items-center gap-4 text-white/70 text-xl font-semibold" >
      <div>Google </div>
      < div > Microsoft </div>
      < div > Amazon </div>
      < div > Netflix </div>
      </div>
      </motion.div>
      </motion.div>
      </div>

{/* Featured Video Section */ }
{/* Featured Video Section */ }



{/* Scroll Indicator */ }
<motion.div
        initial={ { opacity: 0 } }
animate = {{ opacity: 1 }}
transition = {{ delay: 1.5, duration: 0.5 }}
className = "absolute bottom-4 right-4 sm:right-8 z-10"
  >
  <div className="animate-bounce" >
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center" >
      <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
        </div>
        </motion.div>
        </section>
  );
}
