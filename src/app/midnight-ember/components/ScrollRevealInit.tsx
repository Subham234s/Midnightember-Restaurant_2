'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const revealClasses = ['reveal-up', 'reveal-fade', 'reveal-left', 'reveal-right'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(revealClasses?.map((c) => `.${c}`)?.join(', '));
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return null;
}