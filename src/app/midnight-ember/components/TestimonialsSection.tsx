'use client';

import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'The wagyu course alone was worth crossing the Atlantic for. Marcus Webb has created something genuinely singular — not just a restaurant, but a philosophy made edible.',
    author: 'Claudia Renner',
    role: 'Food Critic, The New York Observer',
    rating: 5,
    initials: 'CR',
  },
  {
    id: 2,
    quote: 'We celebrated our anniversary at MidnightEmber and it became the benchmark against which we now judge every dining experience. The intimacy of 38 seats means every guest feels like the only guest.',
    author: 'James & Priya Okafor',
    role: 'Regular guests since 2021',
    rating: 5,
    initials: 'JP',
  },
  {
    id: 3,
    quote: "The scallop course made me stop mid-bite and actually close my eyes. I can't explain it better than that. Book the tasting menu, not the à la carte — it's a completely different journey.",
    author: 'Thomas Beaumont',
    role: 'Michelin Guide Inspector (Off-duty)',
    rating: 5,
    initials: 'TB',
  },
  {
    id: 4,
    quote: 'I brought our most discerning client here for a business dinner. The combination of exceptional food, impeccable service, and that intimate atmosphere closed the deal before dessert arrived.',
    author: 'Natasha Volkov',
    role: 'Managing Director, Apex Capital NYC',
    rating: 5,
    initials: 'NV',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="star-gold" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, isAutoPlaying]);

  return (
    <section
      className="py-28 md:py-40 bg-charcoal-mid relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(124,29,29,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4 reveal-fade">Guest Experiences</span>
          <h2
            id="testimonials-heading"
            className="font-display font-medium text-ivory leading-tight reveal-up"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What our guests say.
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative reveal-fade delay-200"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          aria-roledescription="carousel"
          aria-label="Guest testimonials"
        >
          {/* Testimonial card */}
          <div
            className="glass-panel p-10 md:p-14 relative overflow-hidden"
            style={{ borderRadius: '2px', minHeight: '280px' }}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${current + 1} of ${testimonials.length}`}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 font-display text-9xl text-gold/8 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              "
            </div>

            <div
              key={current}
              className="relative z-10"
              style={{ animation: 'fadeInSlide 0.5s cubic-bezier(0.16,1,0.3,1) both' }}
            >
              <StarRating count={testimonials[current].rating} />

              <blockquote className="mt-6 mb-8">
                <p className="font-display text-xl md:text-2xl font-light italic text-ivory/85 leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold text-charcoal"
                  style={{ background: 'linear-gradient(135deg, #8A7035, #C9A84C)' }}
                  aria-hidden="true"
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">{testimonials[current].author}</p>
                  <p className="text-xs text-ivory/40 font-light">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`h-px transition-all duration-400 ${
                    i === current ? 'w-8 bg-gold' : 'w-4 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => { prev(); setIsAutoPlaying(false); }}
                className="btn-ghost w-10 h-10 rounded-full flex items-center justify-center text-ivory/60 hover:text-gold"
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={() => { next(); setIsAutoPlaying(false); }}
                className="btn-ghost w-10 h-10 rounded-full flex items-center justify-center text-ivory/60 hover:text-gold"
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes for slide animation */}
      <style jsx>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}