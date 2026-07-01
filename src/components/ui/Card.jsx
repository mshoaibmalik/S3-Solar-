import React from 'react';

export function Card({ accent, interactive, className = '', children, ...rest }) {
  return (
    <div
      className={`bg-white border ${accent ? 'border-gold-300' : 'border-slate-200'} rounded-xl ${
        interactive ? 'hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.01] cursor-pointer transition-all duration-fast' : 'shadow-sm'
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
