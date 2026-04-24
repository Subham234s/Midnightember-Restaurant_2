'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type Category = 'appetizers' | 'mains' | 'desserts';

const menuData: Record<Category, {id: number;name: string;description: string;price: string;image: string;alt: string;dietary?: string;}[]> = {
  appetizers: [
  {
    id: 1,
    name: 'Oyster & Champagne Granita',
    description: 'Kumamoto oyster, Champagne granita, Ossetra caviar, micro shiso',
    price: '$28',
    dietary: 'GF',
    image: "https://images.unsplash.com/photo-1529476498401-2d62bcfe433a",
    alt: 'Fresh Kumamoto oyster on ice with champagne granita and caviar pearls'
  },
  {
    id: 2,
    name: 'Burrata & Smoked Beet',
    description: 'House-smoked beet, Pugliese burrata, toasted hazelnut, aged balsamic',
    price: '$22',
    dietary: 'V',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14bcb2af6-1772057367747.png",
    alt: 'Creamy burrata cheese with smoked beet slices and toasted hazelnuts on dark slate'
  },
  {
    id: 3,
    name: 'Foie Gras Torchon',
    description: 'Hudson Valley foie gras, fig compote, brioche mouillette, Sauternes gel',
    price: '$38',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e804b76b-1772350223160.png",
    alt: 'Foie gras torchon with fig compote and golden brioche toast on elegant white plate'
  },
  {
    id: 4,
    name: 'Tuna Tataki',
    description: 'Bigeye tuna, ponzu, crispy garlic, sesame, daikon snow',
    price: '$32',
    dietary: 'GF',
    image: "https://images.unsplash.com/photo-1683028013157-e1a5c0d561e7",
    alt: 'Seared bigeye tuna tataki with ponzu sauce, crispy garlic and daikon garnish'
  }],

  mains: [
  {
    id: 5,
    name: 'Dry-Aged Duck Breast',
    description: '21-day dry-aged Moulard duck, cherry gastrique, black garlic purée, duck fat potato',
    price: '$58',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19837e1d5-1772212100494.png",
    alt: 'Perfectly cooked dry-aged duck breast with cherry gastrique and black garlic puree'
  },
  {
    id: 6,
    name: 'Ember-Charred Wagyu',
    description: 'A5 Kagoshima wagyu striploin, bone marrow butter, wild garlic ash, truffle jus',
    price: '$68',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d5f103c-1772177335954.png",
    alt: 'A5 Wagyu beef charred over open flame with truffle jus and bone marrow butter'
  },
  {
    id: 7,
    name: 'Flame-Kissed Halibut',
    description: 'Pacific halibut, saffron velouté, sea beans, crispy capers, lemon confit',
    price: '$54',
    dietary: 'GF',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_149db2484-1772177335958.png",
    alt: 'Pacific halibut fillet with golden saffron sauce, sea beans and lemon confit'
  },
  {
    id: 8,
    name: 'Roasted Cauliflower Steak',
    description: 'Whole-roasted cauliflower, miso butter, pomegranate, za\'atar, tahini',
    price: '$42',
    dietary: 'VG',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d286962-1772057371015.png",
    alt: 'Whole roasted cauliflower steak with miso glaze, pomegranate seeds and tahini'
  }],

  desserts: [
  {
    id: 9,
    name: 'Burnt Honey Tart',
    description: 'Caramelized honey custard, smoked sea salt, buckwheat crumble, thyme ice cream',
    price: '$24',
    dietary: 'V',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ea957d0-1772187432341.png",
    alt: 'Golden burnt honey custard tart with caramel glaze and buckwheat crumble'
  },
  {
    id: 10,
    name: 'Dark Chocolate & Miso',
    description: '72% Valrhona chocolate mousse, white miso caramel, cocoa soil, gold leaf',
    price: '$22',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6208549-1773380102968.png",
    alt: 'Dark chocolate mousse with miso caramel and cocoa soil garnished with gold leaf'
  },
  {
    id: 11,
    name: 'Yuzu Cheesecake',
    description: 'No-bake yuzu cheesecake, compressed mango, shiso sorbet, sesame tuile',
    price: '$20',
    dietary: 'V',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b6c2d17-1773021068260.png",
    alt: 'Yuzu cheesecake with compressed mango and shiso sorbet on elegant dessert plate'
  },
  {
    id: 12,
    name: 'Selection of Mignardises',
    description: 'Seasonal petit fours, house-made chocolates, candied citrus',
    price: '$16',
    dietary: 'V',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1350cc784-1772057244873.png",
    alt: 'Elegant selection of petit fours and house-made chocolates on marble surface'
  }]

};

const tabs: {key: Category;label: string;}[] = [
{ key: 'appetizers', label: 'Appetizers' },
{ key: 'mains', label: 'Mains' },
{ key: 'desserts', label: 'Desserts' }];


const dietaryColors: Record<string, string> = {
  GF: 'text-emerald-400',
  V: 'text-green-400',
  VG: 'text-lime-400'
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<Category>('mains');

  const items = menuData[activeTab];

  return (
    <section
      id="menu"
      className="py-28 md:py-40 bg-charcoal relative"
      aria-labelledby="menu-heading">
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-4 reveal-fade">The Menu</span>
          <h2
            id="menu-heading"
            className="font-display font-medium text-ivory leading-tight reveal-up"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            
            Seasonal. Intentional.
            <span className="italic text-gradient-gold block">Unforgettable.</span>
          </h2>
          <p className="text-ivory/50 font-light mt-4 max-w-md mx-auto text-sm leading-relaxed reveal-fade delay-200">
            Our menu evolves with the seasons. What you see today may transform tomorrow — that's the point.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex justify-center gap-10 mb-12 border-b border-white/8 pb-0 reveal-fade delay-300"
          role="tablist"
          aria-label="Menu categories">
          
          {tabs.map((tab) =>
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`menu-panel-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`menu-tab pb-4 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
            activeTab === tab.key ? 'active text-gold' : 'text-ivory/40 hover:text-ivory/70'}`
            }>
            
              {tab.label}
            </button>
          )}
        </div>

        {/* Menu items grid */}
        <div
          id={`menu-panel-${activeTab}`}
          role="tabpanel"
          aria-label={`${activeTab} menu items`}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {items.map((item, i) =>
          <article
            key={item.id}
            className="group dish-card glass-panel-light overflow-hidden cursor-pointer reveal-up"
            style={{ transitionDelay: `${i * 80}ms`, borderRadius: '2px' }}
            aria-label={`${item.name} — ${item.price}`}>
            
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.alt}
                fill
                className="dish-img object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ filter: 'brightness(0.8) saturate(1.1)' }} />
              
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" aria-hidden="true" />
                {item.dietary &&
              <span className={`absolute top-3 right-3 text-[10px] font-bold tracking-wider glass-panel px-2 py-0.5 ${dietaryColors[item.dietary]}`}>
                    {item.dietary}
                  </span>
              }
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-display text-base font-medium text-ivory leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-display text-base font-medium text-gold shrink-0 ml-1">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-ivory/45 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          )}
        </div>

        {/* Full menu CTA */}
        <div className="text-center mt-14 reveal-fade delay-400">
          <a
            href="#reservations"
            onClick={(e) => {e.preventDefault();document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });}}
            className="inline-flex items-center gap-3 text-sm font-medium text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors duration-300 group">
            
            Reserve to experience the full tasting menu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}