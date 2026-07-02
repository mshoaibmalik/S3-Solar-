import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';

export default function HybridSystems() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src="/src/assets/hybrid-battery-hero.png"
            alt="Hybrid battery solar system"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Hybrid + Battery Systems</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Power through load-shedding
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Lithium-ion battery storage integrated with your solar array. Store daytime surplus and run your home through the night and grid outages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <img
            src="/src/assets/below-battery-comparision.png"
            alt="Battery comparison and specifications"
            className="w-full h-auto rounded-lg shadow-lg object-cover mb-12"
            loading="lazy"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-t-4 border-t-gold-500">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-3">Lithium Iron Phosphate (LiFePO₄)</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">• 6,000+ cycle life (15+ years)</li>
                <li className="flex gap-2">• 95% depth of discharge usable capacity</li>
                <li className="flex gap-2">• Built-in Battery Management System (BMS)</li>
                <li className="flex gap-2">• Stackable design — expand from 5 kWh to 20 kWh+</li>
                <li className="flex gap-2">• Lightweight, wall-mountable, no maintenance</li>
              </ul>
            </Card>
            <Card className="p-6 border-t-4 border-t-slate-400">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-3">Deep-Cycle Lead Acid</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">• Lower upfront cost per kWh</li>
                <li className="flex gap-2">• 1,200–1,500 cycle life (3–5 years)</li>
                <li className="flex gap-2">• 50% depth of discharge recommended</li>
                <li className="flex gap-2">• Proven technology — widely available locally</li>
                <li className="flex gap-2">• Requires ventilation and periodic maintenance</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 animate-inview">
        <div className="max-w-container mx-auto px-6">
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-6 text-center">How hybrid systems work</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>During daylight hours, solar panels generate DC electricity which the hybrid inverter converts to AC for immediate home use. Surplus generation simultaneously charges the battery bank. When the sun sets, the home draws from battery storage — avoiding expensive peak-hour grid imports.</p>
            <p>During a grid outage (load-shedding), the hybrid inverter disconnects from the grid in under 20ms and forms an island microgrid from the battery + available solar, keeping critical loads running. When grid power returns, the inverter re-synchronizes automatically.</p>
            <p>With the 2026 NEPRA net-billing framework, any excess generation that cannot be stored or self-consumed is exported to the grid at PKR 11/kWh. Self-consuming every unit saves you PKR 50–62/kWh — roughly 5× more valuable than exporting. This makes battery storage the financially optimal strategy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}