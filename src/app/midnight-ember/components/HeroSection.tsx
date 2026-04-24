'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef?.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden noise-texture"
      aria-label="Hero — Ignite Your Senses">
      
      {/* Background: parallax image simulating video */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%] parallax-bg"
        aria-hidden="true">
        
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1da9344fe-1772468846316.png"
          alt="Flame-grilled cuisine at MidnightEmber"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.55) contrast(1.1) saturate(1.2)' }} />
        
      </div>
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 hero-video-overlay" aria-hidden="true" />
      {/* Ember glow accent */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,29,29,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        aria-hidden="true" />
      
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
        aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 lg:pb-32 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 reveal-fade">
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <span className="section-label">New York City · Est. 2019</span>
          </div>

          {/* Main headline — single H1 */}
          <h1
            className="font-display font-medium italic text-ivory leading-[0.88] mb-6 reveal-up"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)' }}>
            
            Ignite Your<br />
            <span className="not-italic text-gradient-gold">Senses.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-light text-ivory/60 max-w-lg leading-relaxed mb-12 reveal-up delay-200">
            Contemporary cuisine in an intimate atmosphere —<br className="hidden md:block" />
            where every dish tells a story of fire and craft.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 reveal-up delay-300">
            <a
              href="#reservations"
              onClick={(e) => {e?.preventDefault();document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });}}
              className="btn-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-charcoal rounded-full inline-flex items-center gap-3 group">
              
              Reserve a Table
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#menu"
              onClick={(e) => {e?.preventDefault();document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });}}
              className="btn-ghost px-8 py-4 text-sm font-medium text-ivory/80 rounded-full inline-flex items-center gap-2">
              
              Explore Menu
            </a>
          </div>

          {/* Credibility strip */}
          <div className="flex flex-wrap items-center gap-6 mt-12 reveal-fade delay-500">
            {[
            { value: '18+', label: 'Years of craft' },
            { value: '4.9★', label: 'Guest rating' },
            { value: 'Michelin', label: 'Recommended 2025' }]?.
            map((stat) =>
            <div key={stat?.label} className="flex items-center gap-3">
                <span className="font-display text-xl font-medium text-gold">{stat?.value}</span>
                <span className="text-xs text-ivory/40 uppercase tracking-wider">{stat?.label}</span>
                <span className="w-px h-4 bg-white/10 last:hidden" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-3 z-10" aria-hidden="true">
        <span className="text-[9px] tracking-[0.5em] uppercase text-ivory/30 rotate-90 mb-2">Scroll</span>
        <div className="w-px h-14 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gold scroll-line-inner" />
        </div>
      </div>
    </section>);

}