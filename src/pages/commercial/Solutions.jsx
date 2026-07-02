import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';
import CISolutionsPage from '../../assets/C&I-solutions-page.png';

export default function Solutions() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src={CISolutionsPage}
            alt="C&I solar solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">C&I Solutions</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Industrial-grade solar infrastructure
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Custom-engineered solar systems for commercial and industrial operations — Grid-Tied, Microgrids, and peak-shaving architectures.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Grid-Tied Systems', desc: 'Large-scale on-grid solar arrays that directly offset your industrial consumption under the NEPRA net-billing framework. Typical sizes: 100 kW – 1 MW+.', features: ['Export surplus at PKR 11/kWh', 'No battery required', 'Lowest cost per watt'] },
              { title: 'Custom Microgrids', desc: 'Self-contained power systems combining solar, battery storage, and backup generation. Operate independently from the grid during outages.', features: ['Island mode capability', 'Diesel hybrid integration', '99.9% uptime SLA'] },
              { title: 'Peak Shaving Systems', desc: 'Intelligent battery dispatch systems that discharge during peak tariff hours to reduce demand charges by 30–50%.', features: ['TOU tariff optimization', 'Real-time energy management', '10–15% OPEX reduction'] },
            ].map((s, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f, j) => (
                    <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold-500" /> {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}