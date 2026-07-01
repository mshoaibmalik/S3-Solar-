import React from 'react';

const tones = {
  brand: 'bg-maroon-100 text-maroon-700 border-maroon-200',
  accent: 'bg-gold-100 text-gold-800 border-gold-200',
  positive: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-amber-100 text-amber-700 border-amber-200',
  neutral: 'bg-slate-100 text-slate-600 border-slate-200',
};

export function Badge({ tone = 'neutral', dot, variant = 'subtle', children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-2xs font-mono font-semibold uppercase tracking-wider rounded-pill border ${
      variant === 'solid' && tone === 'accent' ? 'bg-gold-500 text-slate-950 border-gold-500' :
      variant === 'solid' && tone === 'brand' ? 'bg-maroon-700 text-white border-maroon-700' :
      tones[tone]
    } ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}