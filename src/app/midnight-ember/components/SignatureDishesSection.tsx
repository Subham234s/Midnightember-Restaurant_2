'use client';

import React, { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const dishes = [
{
  id: 1,
  name: 'Ember-Charred Wagyu',
  description: 'A5 Kagoshima wagyu, bone marrow butter, wild garlic ash, truffle jus',
  tag: 'Signature',
  price: '$68',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d5f103c-1772177335954.png",
  alt: 'Perfectly seared A5 Wagyu beef with bone marrow butter and truffle jus on dark plate',
  span: 'lg:col-span-7 lg:row-span-2',
  aspect: 'aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]'
},
{
  id: 2,
  name: 'Scallop & Dashi Foam',
  description: 'Hokkaido scallop, yuzu kosho, dashi foam, caviar pearls',
  tag: 'Chef\'s Choice',
  price: '$42',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14c7a30a7-1773055793326.png",
  alt: 'Hokkaido scallop with dashi foam and caviar pearls on white ceramic',
  span: 'lg:col-span-5',
  aspect: 'aspect-[16/9]'
},
{
  id: 3,
  name: 'Black Truffle Risotto',
  description: 'Aged Carnaroli, 36-month Parmigiano, black Périgord truffle',
  tag: 'Seasonal',
  price: '$52',
  image: "https://images.unsplash.com/photo-1692348023709-47ff577f7277",
  alt: 'Creamy black truffle risotto with shaved Parmigiano and fresh truffle slices',
  span: 'lg:col-span-5',
  aspect: 'aspect-[16/9]'
},
{
  id: 4,
  name: 'Burnt Honey Tart',
  description: 'Caramelized honey custard, smoked sea salt, buckwheat crumble',
  tag: 'Dessert',
  price: '$24',
  image: "https://images.unsplash.com/photo-1717609433959-64861acbca0b",
  alt: 'Burnt honey custard tart with caramel glaze and buckwheat crumble on slate',
  span: 'lg:col-span-6',
  aspect: 'aspect-[4/3]'
},
{
  id: 5,
  name: 'Flame-Kissed Lobster',
  description: 'Maine lobster, saffron beurre blanc, charred leek, tarragon oil',
  tag: 'Market Price',
  price: '$MP',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18541521d-1773092252823.png",
  alt: 'Flame-grilled Maine lobster half with saffron butter sauce and charred leek garnish',
  span: 'lg:col-span-6',
  aspect: 'aspect-[4/3]'
}];


function TiltCard({ children, className }: {children: React.ReactNode;className?: string;}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -6;
    const rotateY = (x - centerX) / centerX * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.1s ease-out';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`tilt-card ${className || ''}`}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
      
      {children}
    </div>);

}

export default function SignatureDishesSection() {
  return (
    <section
      id="gallery"
      className="py-28 md:py-40 bg-charcoal-mid relative"
      aria-labelledby="dishes-heading">
      
      {/* Top gold line */}
      <div className="gold-line mb-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 pt-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <span className="section-label block mb-4 reveal-fade">Signature Dishes</span>
            <h2
              id="dishes-heading"
              className="font-display font-medium text-ivory leading-tight reveal-up"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              
              Crafted with<br />
              <span className="italic text-gradient-gold">obsessive precision.</span>
            </h2>
          </div>
          <p className="text-sm text-ivory/50 max-w-xs font-light leading-relaxed reveal-fade delay-200">
            Each plate is a collaboration between season, fire, and the hands that shaped it.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
          style={{ gridAutoRows: 'minmax(200px, auto)' }}
          role="list"
          aria-label="Signature dishes gallery">
          
          {dishes.map((dish, i) =>
          <TiltCard
            key={dish.id}
            className={`${dish.span} dish-card group cursor-pointer reveal-up`}
            style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}>
            
              <div
              className={`relative overflow-hidden ${dish.aspect} w-full h-full`}
              role="listitem"
              style={{ borderRadius: '2px' }}>
              
                <AppImage
                src={dish.image}
                alt={dish.alt}
                fill
                className="dish-img object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                style={{ filter: 'brightness(0.75) contrast(1.05)' }} />
              

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent group-hover:from-charcoal/70 transition-all duration-500" aria-hidden="true" />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="glass-panel px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {dish.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 tilt-card-inner">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-display text-xl font-medium text-ivory mb-1 leading-tight">
                        {dish.name}
                      </h3>
                      <p className="text-xs text-ivory/50 font-light leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0">
                        {dish.description}
                      </p>
                    </div>
                    <span className="font-display text-lg font-medium text-gold ml-4 shrink-0">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          )}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="gold-line mt-16" aria-hidden="true" />
    </section>);

}