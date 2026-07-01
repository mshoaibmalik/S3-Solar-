import React from 'react';

export function Switch({ label, defaultChecked, checked, onChange, className = '' }) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!on);
    onChange?.(!on);
  };
  return (
    <label className={`inline-flex items-center gap-2.5 cursor-pointer ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={toggle}
        className={`relative inline-flex h-5 w-9 rounded-pill transition-colors duration-fast ${
          on ? 'bg-maroon-700' : 'bg-slate-300'
        }`}
      >
        <span className={`inline-block w-3.5 h-3.5 rounded-full bg-white shadow-xs transform transition-transform duration-fast mt-0.5 ml-0.5 ${
          on ? 'translate-x-4' : 'translate-x-0'
        }`} />
      </button>
      {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
    </label>
  );
}