/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0D0D0D',
          mid: '#181818',
          light: '#242424',
          lighter: '#2E2E2E',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          muted: '#8A7035',
          dim: '#5A4A22',
        },
        ember: {
          DEFAULT: '#7C1D1D',
          bright: '#A52020',
          dim: '#4A1010',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          dim: '#C8C0B0',
          muted: '#8A8070',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 12vw, 9rem)',
        'display': 'clamp(2.5rem, 7vw, 6rem)',
        'section': 'clamp(2rem, 5vw, 4rem)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #8A7035 0%, #C9A84C 50%, #8A7035 100%)',
        'ember-gradient': 'linear-gradient(135deg, #4A1010 0%, #7C1D1D 50%, #A52020 100%)',
      },
      animation: {
        'ember-glow': 'emberGlow 3s ease-in-out infinite',
        'scroll-down': 'scrollDown 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        emberGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(124,29,29,0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(165,32,32,0.7)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(201, 168, 76, 0.25)',
        'gold-lg': '0 16px 48px rgba(201, 168, 76, 0.35)',
        'ember': '0 8px 32px rgba(124, 29, 29, 0.4)',
        'dark': '0 4px 24px rgba(0, 0, 0, 0.6)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
};