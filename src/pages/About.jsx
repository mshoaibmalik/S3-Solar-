import React from 'react';
import { Badge } from '../components/ui/Badge';
import { useInView } from '../hooks/useInView';
import aboutHero from '../assets/about-hero.png';
import belowCertificate from '../assets/below-certificate.png';
import besideTimeline from '../assets/beside-timeline.png';

export default function About() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Sazuddin Solar System (Pvt) Ltd team installing solar panels"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">About Sazuddin Solar System (Pvt) Ltd</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Engineering Pakistan's solar future
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl">
              Sazuddin Solar System (Pvt) Ltd is a NEPRA-certified and AEDB-approved solar EPC contractor operating across Pakistan. 
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
          <img
            src={belowCertificate}
            alt="Sazuddin Solar System (Pvt) Ltd certifications and achievements"
            className="w-full h-auto rounded-lg shadow-lg object-cover mb-12"
            loading="lazy"
          />
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-8 text-center">Partnership Timeline</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto md:mx-0 space-y-6">
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
            <div className="hidden md:block">
              <img
                src={besideTimeline}
                alt="Sazuddin Solar System (Pvt) Ltd company timeline and growth"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}