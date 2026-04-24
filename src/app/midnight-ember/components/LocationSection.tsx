'use client';

import React, { useState } from 'react';

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '6:00 PM – 10:30 PM' },
  { day: 'Friday – Saturday', time: '5:30 PM – 11:00 PM' },
  { day: 'Sunday', time: '5:30 PM – 10:00 PM' },
];

export default function LocationSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — backend connection point
    setSubmitted(true);
  };

  return (
    <>
      {/* Reservations Section */}
      <section
        id="reservations"
        className="py-28 md:py-40 bg-charcoal relative overflow-hidden"
        aria-labelledby="reservations-heading"
      >
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left: Info */}
            <div className="lg:col-span-5 reveal-left">
              <span className="section-label block mb-6">Reservations</span>
              <h2
                id="reservations-heading"
                className="font-display font-medium text-ivory leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Secure your<br />
                <span className="italic text-gradient-gold">table tonight.</span>
              </h2>
              <p className="text-ivory/55 font-light leading-relaxed mb-10 text-sm max-w-sm">
                We recommend booking at least two weeks in advance. Same-week availability is rare — we seat just 38 guests per service.
              </p>

              {/* Hours */}
              <div className="space-y-1 mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Hours</p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2.5 border-b border-white/6"
                  >
                    <span className="text-sm text-ivory/60 font-light">{h.day}</span>
                    <span className={`text-sm font-medium ${h.time === 'Closed' ? 'text-ivory/30' : 'text-ivory'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Contact</p>
                <a href="tel:+12125550182" className="flex items-center gap-3 text-sm text-ivory/60 hover:text-ivory transition-colors group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold/60 group-hover:text-gold transition-colors">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                  </svg>
                  (212) 555-0182
                </a>
                <a href="mailto:reservations@midnightembers.com" className="flex items-center gap-3 text-sm text-ivory/60 hover:text-ivory transition-colors group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold/60 group-hover:text-gold transition-colors">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  reservations@midnightember.com
                </a>
                <p className="flex items-center gap-3 text-sm text-ivory/60">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold/60">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  14 East 58th Street, New York, NY 10022
                </p>
              </div>
            </div>

            {/* Right: Reservation form */}
            <div className="lg:col-span-7 reveal-right">
              {submitted ? (
                <div className="glass-panel p-12 text-center flex flex-col items-center gap-6" style={{ borderRadius: '2px' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center ember-glow" style={{ background: 'rgba(124,29,29,0.2)', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ivory">Request Received</h3>
                  <p className="text-ivory/55 font-light text-sm max-w-sm leading-relaxed">
                    Thank you. Our reservations team will confirm your table within 2 hours. We look forward to welcoming you.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-panel p-10 md:p-12"
                  style={{ borderRadius: '2px' }}
                  aria-label="Reservation request form"
                >
                  <h3 className="font-display text-xl font-medium text-ivory mb-8">Request a Reservation</h3>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mb-8">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-name">Full Name</label>
                      <input
                        id="res-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Alexandra Chen"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-ivory/20"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-email">Email Address</label>
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-ivory/20"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-phone">Phone</label>
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="(212) 555-0000"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-ivory/20"
                      />
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-guests">Party Size</label>
                      <select
                        id="res-guests"
                        name="guests"
                        value={formState.guests}
                        onChange={handleChange}
                        className="w-full bg-charcoal border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors"
                        style={{ appearance: 'none' }}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={String(n)} className="bg-charcoal">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="9+" className="bg-charcoal">9+ Guests (Private Event)</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-date">Preferred Date</label>
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        required
                        value={formState.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-time">Preferred Time</label>
                      <select
                        id="res-time"
                        name="time"
                        value={formState.time}
                        onChange={handleChange}
                        className="w-full bg-charcoal border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors"
                        style={{ appearance: 'none' }}
                      >
                        <option value="" className="bg-charcoal">Select time</option>
                        {['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map((t) => (
                          <option key={t} value={t} className="bg-charcoal">{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Occasion */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-widest text-ivory/40 mb-2" htmlFor="res-occasion">Special Occasion (optional)</label>
                      <input
                        id="res-occasion"
                        name="occasion"
                        type="text"
                        value={formState.occasion}
                        onChange={handleChange}
                        placeholder="Anniversary, birthday, business dinner..."
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-ivory focus:outline-none focus:border-gold transition-colors placeholder:text-ivory/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 text-sm font-semibold uppercase tracking-widest text-charcoal rounded-full mt-2"
                  >
                    Request Reservation
                  </button>

                  <p className="text-xs text-ivory/25 text-center mt-4 font-light">
                    A $50 per person deposit is required to confirm. Cancellations accepted up to 48 hours prior.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section
        id="contact"
        className="bg-charcoal-mid"
        aria-labelledby="location-heading"
      >
        <div className="gold-line" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <span className="section-label block mb-2 reveal-fade">Find Us</span>
              <h2
                id="location-heading"
                className="font-display text-2xl font-medium text-ivory reveal-up"
              >
                14 East 58th Street, New York
              </h2>
            </div>
            <div className="text-sm text-ivory/50 font-light reveal-fade delay-200">
              <p>Between Madison & Park Avenue</p>
              <p className="text-gold/70">Nearest subway: N/R/W at 5th Ave–59th St</p>
            </div>
          </div>

          {/* Map embed */}
          <div className="map-container w-full h-[380px] overflow-hidden reveal-fade delay-300" style={{ borderRadius: '2px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2277595455!2d-73.97318!3d40.76348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6011c92b6c0e9!2s14%20E%2058th%20St%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MidnightEmber location map — 14 East 58th Street, New York"
            />
          </div>
        </div>
      </section>
    </>
  );
}