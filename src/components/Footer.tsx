'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'OpenTable',
    href: 'https://opentable.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-16 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Arc Browser Split pattern */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={28} />
              <span className="font-display text-lg font-medium tracking-wide text-ivory">
                Midnight<span className="text-gradient-gold">Ember</span>
              </span>
            </div>
            <p className="text-sm text-ivory-muted font-light max-w-xs leading-relaxed">
              Contemporary flame-crafted cuisine.<br />
              <span className="text-gold/70">14 East 58th St, New York, NY 10022</span>
            </p>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer navigation">
            {footerLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="footer-link"
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory-muted tracking-wide">
            © 2026 MidnightEmber. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks?.map((s) => (
              <a
                key={s?.label}
                href={s?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s?.label}
                className="text-ivory-muted hover:text-gold transition-colors duration-300"
              >
                {s?.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}