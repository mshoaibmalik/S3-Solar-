import React from 'react';

const variants = {
  primary: 'bg-maroon-700 text-white border-maroon-700 hover:bg-maroon-800 active:bg-maroon-900 shadow-xs hover:scale-[1.02]',
  accent: 'bg-gold-500 text-slate-950 border-gold-500 hover:bg-gold-600 active:bg-gold-700 shadow-xs hover:scale-[1.02]',
  secondary: 'bg-white text-slate-700 border-slate-250 hover:bg-slate-50 active:bg-slate-100 shadow-xs',
  ghost: 'bg-transparent text-slate-700 border-transparent hover:bg-slate-100 active:bg-slate-150',
};

const sizes = {
  sm: 'h-6 px-2.5 text-2xs',
  md: 'h-8 px-3.5 text-sm',
  lg: 'h-10 px-4.5 text-sm',
};

export function Button({ variant = 'primary', size = 'md', fullWidth, className = '', children, ...rest }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-md border transition-all duration-fast ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? 'w-full' : ''} disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}