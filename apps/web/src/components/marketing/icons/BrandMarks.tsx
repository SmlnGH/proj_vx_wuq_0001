import React from 'react';

export function SectionDividerOrnament({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 1.8c3.8 3.2 6 6.2 6 9.2 0 3-2.2 5.9-6 9.2-3.8-3.3-6-6.2-6-9.2 0-3 2.2-6 6-9.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M11 5.2c2.4 2.1 3.7 4 3.7 5.8 0 1.8-1.3 3.7-3.7 5.8-2.4-2.1-3.7-4-3.7-5.8 0-1.8 1.3-3.7 3.7-5.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.85"
      />
    </svg>
  );
}

export function HeroBackgroundMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="760"
      height="340"
      viewBox="0 0 760 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="760" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" stopOpacity="0.16" />
          <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.12" />
          <stop offset="1" stopColor="#34d399" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      <path
        d="M-40 250C110 140 230 300 360 210C520 100 640 180 820 60"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M-20 290C140 180 250 320 380 240C540 120 650 200 820 100"
        stroke="url(#g)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="610" cy="120" r="3.2" fill="#0ea5e9" opacity="0.35" />
      <circle cx="640" cy="150" r="2.2" fill="#a78bfa" opacity="0.35" />
      <circle cx="250" cy="245" r="2.8" fill="#34d399" opacity="0.30" />
    </svg>
  );
}

export function CardGlyph({ variant = 'spark' }: { variant?: 'spark' | 'ring' | 'seal' }) {
  const color = 'currentColor';
  if (variant === 'ring') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 1.9c5 0 9.1 4.1 9.1 9.1S16 20.1 11 20.1 1.9 16 1.9 11 6 1.9 11 1.9Z" stroke={color} strokeWidth="1.2" opacity="0.7" />
        <path d="M11 6.1c2.7 0 4.9 2.2 4.9 4.9S13.7 15.9 11 15.9 6.1 13.7 6.1 11 8.3 6.1 11 6.1Z" stroke={color} strokeWidth="1.2" opacity="0.95" />
      </svg>
    );
  }
  if (variant === 'seal') {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 1.9 16 4.4v5.2c0 4.1-2.4 7.5-5 9.5-2.6-2-5-5.4-5-9.5V4.4L11 1.9Z" stroke={color} strokeWidth="1.2" opacity="0.7" />
        <path d="M9 11.2 10.4 12.6 13.6 9.4" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11 2.2l1.8 5.8h5.8l-4.7 3.4 1.8 5.8-4.7-3.4-4.7 3.4 1.8-5.8-4.7-3.4h5.8L11 2.2Z" stroke={color} strokeWidth="1.2" opacity="0.85" />
    </svg>
  );
}
