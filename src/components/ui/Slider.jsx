import React from 'react';

export function Slider({ label, min = 0, max = 100, step = 1, value, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-slate-900">{label}</label>
        <span className="font-mono text-sm font-semibold text-maroon-700 tabular-nums">{format ? format(value) : value}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-maroon-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-maroon-700 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-sm"
        />
        <div className="absolute top-0 left-0 h-1.5 rounded-full pointer-events-none bg-maroon-700" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}