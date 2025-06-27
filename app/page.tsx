import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ProductsSection from '@/components/products-section';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials-section';
import BlogSection from '@/components/blog-section';
import NewsletterSection from '@/components/newsletter-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Feedback from '@/components/feedback';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <ServicesSection />
      <ProductsSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogSection /> 
      
      <NewsletterSection /> 
      <ContactSection />
      <Footer />
    </main>
  );
}