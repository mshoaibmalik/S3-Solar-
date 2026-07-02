import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';

export default function ResidentialOverview() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src="/src/assets/systems-hero.png"
            alt="Residential solar systems"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Residential Solar</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Grid independence for your home
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Hybrid rooftop systems with battery backup engineered for Pakistan's load-shedding schedules and hyper-inflated utility tariffs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="/src/assets/residential-solars-section.jpg"
                alt="Residential solar panel installation"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl tracking-tight text-slate-900 mb-4">Premium Rooftop Solar</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                High-efficiency Tier-1 solar panels paired with premium hybrid inverters and lithium battery storage. Engineered for Pakistan's climate with dust-resistant coatings and robust mounting systems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every system is custom-designed for your roof orientation, shading profile, and energy consumption pattern to maximize your return on investment.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Hybrid Rooftop Systems', desc: 'Solar panels + hybrid inverter + lithium battery. Daytime solar powers your home while charging batteries for evening use.', icon: '☀️' },
              { title: 'Load-Shedding Backup', desc: 'Automatic switchover during grid outages. Keep lights, fans, internet, and refrigeration running through scheduled and unscheduled load-shedding.', icon: '🔋' },
              { title: 'Net Billing Ready', desc: 'Export surplus daytime generation to your DISCO grid at NEPRA-regulated rates. Every unit exported earns PKR 11/kWh buyback.', icon: '📊' },
            ].map((f, i) => (
              <Card key={i} className="p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 animate-inview">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-4">Ready to cut your bill?</h2>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">Get a personalized savings estimate based on your actual monthly bill and DISCO tariff.</p>
          <Link to="/residential/calculator" className="inline-flex items-center h-8 px-3.5 bg-gold-500 text-slate-950 text-sm font-semibold rounded-md hover:bg-gold-600 transition-colors">
            Calculate my savings
          </Link>
        </div>
      </section>
    </main>
  );
}