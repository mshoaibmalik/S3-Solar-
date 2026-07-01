import React from 'react';

export function Tabs({ tabs = [], value, onChange, className = '' }) {
  return (
    <div className={`flex gap-0 border-b border-slate-200 ${className}`}>
      {tabs.map((tab) => {
        const val = tab.value || tab;
        const lab = tab.label || tab;
        const on = value === val;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange(val)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors duration-fast whitespace-nowrap ${
              on
                ? 'border-maroon-700 text-maroon-700'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {lab}
          </button>
        );
      })}
    </div>
  );
}