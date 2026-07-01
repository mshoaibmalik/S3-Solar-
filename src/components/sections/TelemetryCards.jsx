import React from 'react';
import { Stat } from '../ui/Stat';
import { useInView } from '../../hooks/useInView';

const items = [
  { value: '18.42', unit: 'MW', label: 'Megawatts Installed', delta: '+2.1 MW this quarter' },
  { value: '2,140', label: 'Systems Commissioned', delta: '+96 this month' },
  { value: '99.2', unit: '%', label: 'Fleet Uptime', deltaTone: 'neutral', delta: '90-day trailing' },
  { value: '4.8', unit: 'yr', label: 'Avg Payback', deltaTone: 'neutral', delta: 'Residential' },
];

export function TelemetryCards() {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`bg-white border-y border-slate-200 animate-inview ${visible ? 'visible' : ''}`}>
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-150">
          {items.map((it, i) => (
            <div key={i} className={`px-6 py-8 md:px-8 md:py-10 animate-inview ${visible ? 'visible' : ''} animate-stagger-${i + 1}`}>
              <Stat {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
