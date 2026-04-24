import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function StorySection() {
  return (
    <section
      id="story"
      className="py-28 md:py-40 bg-charcoal relative overflow-hidden"
      aria-labelledby="story-heading">
      
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,29,29,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Chef Image with decorative frame */}
          <div className="relative reveal-left">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 image-reveal">
              <div className="image-reveal-overlay" aria-hidden="true" />
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_184e7cdb6-1772536399573.png"
                alt="Head Chef Marcus Webb at MidnightEmber kitchen, plating a signature dish"
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              {/* Decorative border */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 pointer-events-none"
                aria-hidden="true" />
              
            </div>

            {/* Chef credential card */}
            <div className="absolute -bottom-6 right-0 lg:-right-8 glass-panel px-6 py-5 max-w-[220px]">
              <p className="font-display text-2xl font-medium text-ivory mb-0.5">Marcus Webb</p>
              <p className="text-xs text-gold uppercase tracking-widest">Executive Chef</p>
              <div className="gold-line my-3" aria-hidden="true" />
              <p className="text-xs text-ivory/50 leading-relaxed">James Beard Nominee · Le Cordon Bleu Paris</p>
            </div>

            {/* Atmospheric restaurant image */}
            <div className="relative mt-16 w-3/4 ml-auto aspect-[4/3] rounded-sm overflow-hidden reveal-left">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1a921bb4b-1772055070370.png"
                alt="Midnight Ember intimate dining room with warm candlelight and elegant table settings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority={false}
                sizes="(max-width: 768px) 100vw, 33vw" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(124,29,29,0.15) 0%, transparent 60%)' }}
                aria-hidden="true" />
            </div>
          </div>

          {/* Right: Story text */}
          <div className="reveal-right">
            <span className="section-label block mb-6">Our Story</span>

            <h2
              id="story-heading"
              className="font-display font-medium text-ivory leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              
              Born from the<br />
              <span className="italic text-gradient-gold">philosophy of fire.</span>
            </h2>

            <div className="space-y-5 text-ivory/60 font-light leading-relaxed">
              <p>
                MidnightEmber was conceived in 2019 when Chef Marcus Webb returned from three years in San Sebastián, carrying an obsession with open-fire cooking and the Japanese philosophy of <em className="text-ivory/80 not-italic">ma</em> — the art of meaningful space.
              </p>
              <p>
                Every dish begins with a single question: what does this ingredient become when it meets flame? The answer changes with the season, the harvest, and the mood of the kitchen. No two tasting menus are identical.
              </p>
              <p>
                Our dining room seats just 38 guests. We believe intimacy is the rarest luxury of all.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/8">
              {[
              { value: '38', label: 'Seats only' },
              { value: '7', label: 'Course tasting' },
              { value: '200+', label: 'Wine labels' }]?.
              map((stat) =>
              <div key={stat?.label}>
                  <p className="font-display text-3xl font-medium text-gold mb-1">{stat?.value}</p>
                  <p className="text-xs text-ivory/40 uppercase tracking-wider leading-tight">{stat?.label}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="#reservations"
              onClick={(e) => {e?.preventDefault();document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });}}
              className="inline-flex items-center gap-3 mt-10 text-sm font-medium text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300 group">
              
              Reserve your experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>);

}