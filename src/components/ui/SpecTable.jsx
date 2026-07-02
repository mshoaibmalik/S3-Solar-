import React from 'react';

export function SpecTable({ columns = [], rows = [], caption, highlightCol = null, className = '' }) {
  return (
    <div className={`border border-slate-200 rounded-xl overflow-x-auto ${className}`}>
      <table className="w-full border-collapse font-body text-md">
        {caption && (
          <caption className="caption-top text-left px-4 py-3 text-sm text-slate-500 bg-slate-50">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            <th scope="col" className={`text-left px-4 py-2.5 text-2xs font-bold uppercase tracking-wider ${
              highlightCol === 1 ? 'bg-maroon-700 text-white' : 'bg-slate-100 text-slate-500'
            } border-b border-slate-200`}>
              {columns[0]?.header ?? ''}
            </th>
            {columns.slice(1).map((c, i) => (
              <th key={i} scope="col" className={`px-4 py-2.5 text-2xs font-bold uppercase tracking-wider ${
                highlightCol === i + 1 ? 'bg-maroon-700 text-white' : 'bg-slate-100 text-slate-500'
              } border-b border-slate-200`} style={{ textAlign: c.align || 'right' }}>
                {c.header}
                {c.sub && <span className="block font-normal text-2xs text-slate-400 uppercase tracking-normal mt-0.5">{c.sub}</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={ri % 2 ? 'bg-slate-50' : 'bg-white'}>
              <th scope="row" className="text-left px-4 py-2.5 font-semibold text-slate-900 border-t border-slate-150 whitespace-nowrap">
                {r.label}
                {r.hint && <span className="block font-normal text-2xs text-slate-400">{r.hint}</span>}
              </th>
              {r.cells.map((cell, ci) => (
                <td key={ci} className={`px-4 py-2.5 border-t border-slate-150 tabular-nums ${
                  highlightCol === ci + 1 ? 'bg-maroon-50 font-semibold text-slate-900' : 'text-slate-700'
                }`} style={{ textAlign: columns[ci + 1]?.align || 'right', fontFamily: 'JetBrains Mono, monospace' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}