"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
  { name: 'Feedback', href: '/feedback' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial= {{ y: -100 }
}
animate = {{ y: 0 }}
className = {
  cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled
      ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
  )
}
  >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
    <div className="flex justify-between items-center h-16" >
      {/* Logo */ }
      < motion.div
whileHover = {{ scale: 1.05 }}
className = "flex items-center space-x-2"
  >
  <div className="relative" >
    <Zap className="w-8 h-8 text-primary" />
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
        </div>
        < span className = "font-space-grotesk font-bold text-xl" >
          Stratix Co.
            </span>
            </motion.div>

{/* Desktop Navigation */ }
<div className="hidden md:flex items-center space-x-8" >
{
  navigation.map((item) => (
    <Link
                key= { item.name }
                href = { item.href }
                className = "text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
    >
    { item.name }
    </Link>
  ))
}
  </div>

{/* Desktop Actions */ }
<div className="hidden md:flex items-center space-x-4" >
  <Button
              variant="ghost"
size = "icon"
onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
className = "rounded-full"
  >
  { theme === 'dark' ? (
    <Sun className= "w-5 h-5" />
              ) : (
  <Moon className= "w-5 h-5" />
              )}
</Button>
  < Button asChild className = "bg-primary hover:bg-primary/90" >
    <Link href="#contact" > Get Started </Link>
      </Button>
      </div>

{/* Mobile menu button */ }
<div className="md:hidden flex items-center space-x-2" >
  <Button
              variant="ghost"
size = "icon"
onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
className = "rounded-full"
  >
  { theme === 'dark' ? (
    <Sun className= "w-5 h-5" />
              ) : (
  <Moon className= "w-5 h-5" />
              )}
</Button>
  < Button
variant = "ghost"
size = "icon"
onClick = {() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
  {
    isMobileMenuOpen?(
                <X className = "w-6 h-6" />
              ): (
        <Menu className = "w-6 h-6" />
              )}
</Button>
  </div>
  </div>
  </div>

{/* Mobile Navigation */ }
{
  isMobileMenuOpen && (
    <motion.div
          initial={ { opacity: 0, height: 0 } }
  animate = {{ opacity: 1, height: 'auto' }
}
exit = {{ opacity: 0, height: 0 }}
className = "md:hidden bg-background/95 backdrop-blur-md border-b border-border"
  >

  <div className="px-4 py-4 space-y-3" >
  {
    navigation.map((item) => (
      <Link
                key= { item.name }
                href = { item.href }
                className = "block text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick = {() => setIsMobileMenuOpen(false)}
    >
    { item.name }
    </Link>
            ))}
<Button asChild className = "w-full mt-4" >
  <Link href="#contact" onClick = {() => setIsMobileMenuOpen(false)}>
    Get Started
      </Link>
      </Button>

      </div>
      </motion.div>
      )}
</motion.nav>
  );
}