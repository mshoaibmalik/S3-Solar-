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
            { value: 'bat', label: 'Battery Systems' },
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
          {tab === 'bat' && (
            <SpecTable
              highlightCol={2}
              columns={[
                { header: 'Spec' },
                { header: 'Lithium 5.1', sub: 'Stackable' },
                { header: 'Lithium 10.2', sub: 'Tower' },
                { header: 'Deep-Cycle 200', sub: 'Lead-Acid' },
              ]}
              rows={[
                { label: 'Capacity', cells: ['5.1 kWh', '10.2 kWh', '4.8 kWh (200Ah)'] },
                { label: 'Depth of Discharge', cells: ['95%', '95%', '50%'] },
                { label: 'Cycle Life', cells: ['6,000', '6,000', '1,200'] },
                { label: 'Round-Trip Eff.', cells: ['95%', '95%', '85%'] },
                { label: 'Warranty', cells: ['10 yr', '10 yr', '3 yr'] },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
}