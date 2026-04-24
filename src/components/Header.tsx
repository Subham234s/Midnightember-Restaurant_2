'use client';

import React, { useState, useEffect, useCallback } from 'react';
import FireLogo from '@/components/ui/FireLogo';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel py-3 border-b border-gold/10' :'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
            aria-label="MidnightEmber — scroll to top"
          >
            <FireLogo
              size={38}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-display text-lg font-medium tracking-wide text-ivory hidden sm:block">
              Midnight<span className="text-gradient-gold">Ember</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-sm font-medium tracking-wide text-ivory/70 hover:text-ivory transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#reservations')}
            className="hidden md:block btn-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-charcoal rounded-full"
          >
            Reserve Table
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(13,13,13,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`font-display text-4xl font-light italic text-ivory/80 hover:text-gold transition-colors duration-300`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#reservations')}
            className="btn-gold mt-4 px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-charcoal rounded-full"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </>
  );
}