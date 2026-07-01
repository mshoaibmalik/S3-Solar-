import React from 'react';

export function Input({ label, prefix, placeholder, value, onChange, className = '' }) {
  const id = React.useId();
  return (
    <div>
      {label && <label htmlFor={id} className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>}
      <div className="flex items-center border border-slate-250 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-maroon-200 focus-within:border-maroon-600">
        {prefix && (
          <span className="flex items-center px-3 h-10 text-sm font-mono text-slate-500 bg-slate-50 border-r border-slate-200">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-10 px-3 text-sm text-slate-700 bg-white outline-none"
        />
      </div>
    </div>
  );
}