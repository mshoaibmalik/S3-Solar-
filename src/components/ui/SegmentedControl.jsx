import React from 'react';

export function SegmentedControl({ value, onChange, options = [], fullWidth, className = '' }) {
  return (
    <div className={`inline-flex p-0.5 gap-0.5 bg-slate-100 border border-slate-200 rounded-md ${fullWidth ? 'w-full' : ''} ${className}`}>
      {options.map((opt) => {
        const val = typeof opt === 'string' ? opt : opt.value;
        const lab = typeof opt === 'string' ? opt : opt.label;
        const sub = opt.sublabel;
        const on = value === val;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange(val)}
            className={`flex-1 flex flex-col items-center gap-0 px-3.5 py-1.5 rounded-sm border transition-colors duration-fast ${
              on
                ? 'bg-white border-slate-200 shadow-xs'
                : 'bg-transparent border-transparent hover:bg-slate-50'
            }`}
          >
            <span className={`text-sm font-semibold leading-tight ${on ? 'text-maroon-700' : 'text-slate-500'}`}>{lab}</span>
            {sub && <span className="text-[9px] tracking-wider uppercase text-slate-400">{sub}</span>}
          </button>
        );
      })}
    </div>
  );
}