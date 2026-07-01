import React from 'react';
import { Badge } from '../components/ui/Badge';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Badge tone="accent" className="mb-4">About S3 Solar</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-6">
              Engineering Pakistan's solar future
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              S3 Solar (Sazuddin Solar System) is a NEPRA-certified and AEDB-approved solar EPC contractor operating across Pakistan. 
              We design, supply, install, and maintain premium solar energy systems for residential homeowners and commercial & industrial enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 animate-inview">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-8 text-center">Credentials & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'NEPRA Certified', desc: 'Licensed by the National Electric Power Regulatory Authority for solar PV installation and net-billing integration across all DISCO jurisdictions.' },
              { title: 'AEDB Approved', desc: 'Registered with the Alternative Energy Development Board, meeting all technical and safety standards for renewable energy projects in Pakistan.' },
              { title: 'Tier-1 Hardware Partners', desc: 'Exclusive partnerships with Tier-1 panel manufacturers (Jinko, Longi, Trina) and premium inverter brands (Huawei, Sungrow, Goodwe).' },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-maroon-100 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-8 text-center">Partnership Timeline</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { year: '2018', event: 'Founded in Lahore. First 50 residential installations completed.' },
              { year: '2020', event: 'Crossed 500 kW cumulative capacity. AEDB accreditation secured.' },
              { year: '2022', event: 'Expanded into C&I segment. 2 MW textile mill project in Faisalabad.' },
              { year: '2024', event: 'Surpassed 2,000 systems and 12 MW deployed across 8 cities.' },
              { year: '2026', event: '18.42 MW deployed. NEPRA net-billing certified. Active across Pakistan.' },
            ].map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-mono text-sm font-bold text-maroon-700">{m.year}</span>
                </div>
                <div className="w-px h-full bg-slate-200 relative top-2">
                  <div className="w-2 h-2 rounded-full bg-maroon-700 absolute -left-[3.5px]" />
                </div>
                <p className="text-sm text-slate-600">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}