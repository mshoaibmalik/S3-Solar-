import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { SpecTable } from '../../components/ui/SpecTable';
import { useInView } from '../../hooks/useInView';

const cases = [
  { name: '100kW Textile Mill', location: 'Faisalabad', pre: 'PKR 850,000/mo', post: 'PKR 310,000/mo', payback: '3.2 yr', size: '100 kW', type: 'Grid-Tied' },
  { name: '50kW Cold Storage', location: 'Lahore', pre: 'PKR 420,000/mo', post: 'PKR 145,000/mo', payback: '3.8 yr', size: '50 kW', type: 'Hybrid + Battery' },
  { name: '200kW Rice Mill', location: 'Gujranwala', pre: 'PKR 1.6 Cr/mo', post: 'PKR 580,000/mo', payback: '3.5 yr', size: '200 kW', type: 'Grid-Tied' },
  { name: '75kW Poultry Farm', location: 'Sheikhupura', pre: 'PKR 380,000/mo', post: 'PKR 120,000/mo', payback: '4.1 yr', size: '75 kW', type: 'Hybrid + Battery' },
  { name: '500kW Steel Mill', location: 'Sialkot', pre: 'PKR 3.2 Cr/mo', post: 'PKR 1.1 Cr/mo', payback: '3.0 yr', size: '500 kW', type: 'Grid-Tied' },
  { name: '30kW Commercial Plaza', location: 'Islamabad', pre: 'PKR 210,000/mo', post: 'PKR 68,000/mo', payback: '4.4 yr', size: '30 kW', type: 'Hybrid' },
];

export default function CaseStudies() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Case Studies</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Proven results across Pakistan
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Pre-installation vs post-installation metrics from completed commercial retrofits.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <SpecTable
            highlightCol={3}
            columns={[
              { header: 'Project' },
              { header: 'Location' },
              { header: 'Pre-Install Bill', align: 'right' },
              { header: 'Post-Install Bill', align: 'right' },
              { header: 'Payback', align: 'right' },
              { header: 'Size' },
              { header: 'Type' },
            ]}
            rows={cases.map((c) => ({
              label: c.name,
              cells: [c.location, c.pre, c.post, c.payback, c.size, c.type],
            }))}
          />
        </div>
      </section>
    </main>
  );
}