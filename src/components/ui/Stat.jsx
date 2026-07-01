import React from 'react';

export function Stat({ value, unit, label, delta, deltaTone = 'positive', icon, size = 'md', align = 'left', className = '' }) {
  const valSizes = { sm: 'text-2xl', md: 'text-4xl', lg: 'text-5xl' };
  const deltaColors = { positive: 'text-green-600', negative: 'text-red-600', neutral: 'text-slate-500' };
  return (
    <div className={`flex flex-col gap-1 ${align === 'center' ? 'items-center text-center' : 'items-start'} ${className}`}>
      {icon && <span className="text-gold-600 mb-0.5 inline-flex">{icon}</span>}
      <div className="flex items-baseline gap-1">
        <span className={`font-display font-bold ${valSizes[size]} tracking-tighter text-slate-900 tabular-nums leading-none`}>{value}</span>
        {unit && <span className="font-mono text-base font-medium text-maroon-700">{unit}</span>}
      </div>
      {label && <span className="font-body text-xs font-medium tracking-wider uppercase text-slate-500">{label}</span>}
      {delta && <span className={`font-mono text-xs font-semibold ${deltaColors[deltaTone]}`}>{delta}</span>}
    </div>
  );
}