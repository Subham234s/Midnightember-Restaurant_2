'use client';

import React from 'react';

interface FireLogoProps {
  size?: number;
  className?: string;
}

export default function FireLogo({ size = 36, className = '' }: FireLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <style>{`
        @keyframes flameCore {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          25% { transform: scaleY(1.08) scaleX(0.95); }
          50% { transform: scaleY(0.95) scaleX(1.05); }
          75% { transform: scaleY(1.05) scaleX(0.97); }
        }
        @keyframes flameLeft {
          0%, 100% { transform: rotate(-6deg) scaleY(1); opacity: 0.85; }
          33% { transform: rotate(-12deg) scaleY(1.1); opacity: 1; }
          66% { transform: rotate(-3deg) scaleY(0.92); opacity: 0.75; }
        }
        @keyframes flameRight {
          0%, 100% { transform: rotate(6deg) scaleY(1); opacity: 0.85; }
          33% { transform: rotate(3deg) scaleY(0.92); opacity: 0.75; }
          66% { transform: rotate(12deg) scaleY(1.1); opacity: 1; }
        }
        @keyframes emberGlow {
          0%, 100% { opacity: 0.6; r: 3; }
          50% { opacity: 1; r: 4.5; }
        }
        @keyframes flameTip {
          0%, 100% { transform: translateY(0px) scaleX(1); }
          40% { transform: translateY(-2px) scaleX(0.9); }
          70% { transform: translateY(1px) scaleX(1.05); }
        }
        .flame-core { 
          transform-origin: 50% 90%; 
          animation: flameCore 2.4s ease-in-out infinite; 
        }
        .flame-left { 
          transform-origin: 50% 90%; 
          animation: flameLeft 2.8s ease-in-out infinite; 
        }
        .flame-right { 
          transform-origin: 50% 90%; 
          animation: flameRight 3.1s ease-in-out infinite; 
        }
        .flame-tip { 
          transform-origin: 50% 100%; 
          animation: flameTip 1.9s ease-in-out infinite; 
        }
        .ember-glow { 
          animation: emberGlow 1.6s ease-in-out infinite; 
        }
      `}</style>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Midnight Ember fire logo"
      >
        <defs>
          <radialGradient id="emberBase" cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#CC1A1A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="flameGradCore" x1="20" y1="42" x2="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#CC1A1A" />
            <stop offset="45%" stopColor="#FF2D2D" />
            <stop offset="80%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="flameGradLeft" x1="12" y1="40" x2="10" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AA1515" />
            <stop offset="50%" stopColor="#E82020" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="flameGradRight" x1="28" y1="40" x2="30" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AA1515" />
            <stop offset="50%" stopColor="#E82020" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.5" />
          </linearGradient>
          <filter id="flameBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
          <filter id="glowFilter" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ember base glow */}
        <ellipse cx="20" cy="41" rx="10" ry="3" fill="url(#emberBase)" />

        {/* Left outer flame */}
        <g className="flame-left" filter="url(#flameBlur)">
          <path
            d="M13 40 C11 36 8 30 9 22 C10 16 13 12 14 8 C14 8 15 14 14 18 C16 14 17 10 18 6 C19 10 18 16 17 20 C19 16 21 12 20 8 C22 14 20 22 18 28 C20 24 22 20 21 16 C23 22 22 30 20 36 C18 38 15 40 13 40Z"
            fill="url(#flameGradLeft)"
            opacity="0.8"
          />
        </g>

        {/* Right outer flame */}
        <g className="flame-right" filter="url(#flameBlur)">
          <path
            d="M27 40 C29 36 32 30 31 22 C30 16 27 12 26 8 C26 8 25 14 26 18 C24 14 23 10 22 6 C21 10 22 16 23 20 C21 16 19 12 20 8 C18 14 20 22 22 28 C20 24 18 20 19 16 C17 22 18 30 20 36 C22 38 25 40 27 40Z"
            fill="url(#flameGradRight)"
            opacity="0.8"
          />
        </g>

        {/* Core flame */}
        <g className="flame-core" filter="url(#glowFilter)">
          <path
            d="M20 42 C15 40 11 35 11 28 C11 22 14 17 15 12 C16 8 16 4 16 4 C17 8 17 12 16 16 C18 12 19 7 20 3 C21 7 22 12 24 16 C23 12 23 8 24 4 C24 4 24 8 25 12 C26 17 29 22 29 28 C29 35 25 40 20 42Z"
            fill="url(#flameGradCore)"
          />
        </g>

        {/* Inner bright tip */}
        <g className="flame-tip">
          <path
            d="M20 28 C18 25 17 21 18 17 C19 14 20 11 20 8 C20 11 21 14 22 17 C23 21 22 25 20 28Z"
            fill="#FF8C00"
            opacity="0.7"
          />
        </g>

        {/* Ember sparks */}
        <circle className="ember-glow" cx="15" cy="38" r="2.5" fill="#FF4500" opacity="0.7" />
        <circle className="ember-glow" cx="25" cy="38" r="2.5" fill="#FF4500" opacity="0.7" style={{ animationDelay: '0.5s' }} />
        <circle className="ember-glow" cx="20" cy="40" r="3" fill="#FF6B00" opacity="0.8" style={{ animationDelay: '0.25s' }} />
      </svg>
    </div>
  );
}
