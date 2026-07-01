import React from 'react';

export function Select({ label, options = [], value, onChange, className = '' }) {
  return (
    <div>
      {label && <label className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`w-full h-10 px-3 text-sm text-slate-700 bg-white border border-slate-250 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-maroon-200 focus:border-maroon-600 ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23626B78' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          backgroundSize: '12px 8px',
        }}
      >
        {options.map((opt) => {
          const val = typeof opt === 'string' ? opt : opt.value;
          const lab = typeof opt === 'string' ? opt : opt.label;
          return <option key={val} value={val}>{lab}</option>;
        })}
      </select>
    </div>
  );
}