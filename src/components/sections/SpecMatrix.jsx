import React from 'react';
import { Tabs } from '../ui/Tabs';
import { SpecTable } from '../ui/SpecTable';
import { useInView } from '../../hooks/useInView';

export function SpecMatrix() {
  const [tab, setTab] = React.useState('inv');
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`py-14 md:py-20 bg-slate-50 animate-inview ${visible ? 'visible' : ''}`}>
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="font-mono text-2xs tracking-wider uppercase text-gold-600">Technical specifications</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-slate-900 mt-2">
            Hardware performance matrix
          </h2>
        </div>

        <Tabs
          tabs={[
            { value: 'inv', label: 'Inverter Profiles' },
            { value: 'pan', label: 'Panel Efficiency' },
          ]}
          value={tab}
          onChange={setTab}
          className="mb-6"
        />

        <div className="max-w-3xl mx-auto">
          {tab === 'inv' && (
            <SpecTable
              highlightCol={2}
              columns={[
                { header: 'Spec' },
                { header: 'Pro 8kW', sub: 'Hybrid' },
                { header: 'Max 12kW', sub: '3-Phase' },
                { header: 'Ultra 20kW', sub: 'C&I' },
              ]}
              rows={[
                { label: 'Efficiency', cells: ['97.6%', '98.4%', '98.8%'] },
                { label: 'MPPT Trackers', cells: ['2', '3', '4'] },
                { label: 'Max DC Input', cells: ['10.4 kW', '15.6 kW', '26 kW'] },
                { label: 'Battery Ready', cells: ['Yes — Li-ion', 'Yes — Li-ion', 'Yes — Li-ion'] },
                { label: 'Warranty', cells: ['10 yr', '12 yr', '15 yr'] },
              ]}
            />
          )}
          {tab === 'pan' && (
            <SpecTable
              highlightCol={2}
              columns={[
                { header: 'Spec' },
                { header: 'Mono 590W', sub: 'Tier-1' },
                { header: 'TOPCon 620W', sub: 'N-Type' },
                { header: 'Bifacial 650W', sub: 'Dual Glass' },
              ]}
              rows={[
                { label: 'Efficiency', cells: ['21.3%', '22.6%', '23.1%'] },
                { label: 'Degradation/yr', cells: ['0.55%', '0.40%', '0.35%'] },
                { label: 'Temp Coefficient', cells: ['-0.35%/°C', '-0.30%/°C', '-0.28%/°C'] },
                { label: 'Cell Type', cells: ['Mono PERC', 'N-Type TOPCon', 'Bifacial N-Type'] },
                { label: 'Warranty', cells: ['25 yr', '30 yr', '30 yr'] },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
}