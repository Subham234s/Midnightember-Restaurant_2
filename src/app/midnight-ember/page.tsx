'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import SignatureDishesSection from './components/SignatureDishesSection';
import MenuSection from './components/MenuSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function MidnightEmberPage() {
  return (
    <main className="bg-charcoal min-h-screen overflow-x-hidden">
      <ScrollRevealInit />
      <Header />
      <HeroSection />
      <StorySection />
      <SignatureDishesSection />
      <MenuSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}