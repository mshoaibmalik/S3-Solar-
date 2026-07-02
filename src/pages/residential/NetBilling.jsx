import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';

export default function NetBilling() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Net Billing Guide</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              How net billing works in Pakistan
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Understanding the 2026 NEPRA regulatory framework for exporting solar energy to the national grid.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-slate-600 leading-relaxed">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h2 className="font-display font-semibold text-xl text-slate-900 mb-3">Net Metering vs Net Billing</h2>
              <p className="mb-3">Under the old net metering regime (2015–2025), every kWh you exported to the grid offset one kWh of your consumption at the full retail tariff — a true 1:1 trade. This made batteries financially unattractive since the grid served as a free virtual battery.</p>
              <p>The 2026 NEPRA Alternative and Renewable Energy (ARE) policy transitioned Pakistan to net billing. Under net billing, exported units are compensated at the <strong>National Average Energy Purchase Price (NAEPP)</strong>, currently ~PKR 11/kWh — roughly 1/5th of the retail tariff. This dramatically changes the economics in favor of self-consumption and battery storage.</p>
            </div>

            <div className="bg-gold-50 border border-gold-200 rounded-xl p-6">
              <h2 className="font-display font-semibold text-xl text-slate-900 mb-3">What this means for you</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><span className="text-gold-600 font-bold">1.</span> <span>Every unit you self-consume saves you PKR 50–62 (your DISCO tariff rate). Every unit exported earns only PKR 11 — <strong>self-consumption is 5× more valuable</strong>.</span></li>
                <li className="flex gap-3"><span className="text-gold-600 font-bold">2.</span> <span>Battery storage is now the financially optimal choice. Store your daytime surplus and use it at night instead of exporting cheap and importing expensive.</span></li>
                <li className="flex gap-3"><span className="text-gold-600 font-bold">3.</span> <span>Systems optimized for self-consumption achieve payback in 3.5–4.5 years. Grid-export-only systems stretch to 5.5+ years.</span></li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h2 className="font-display font-semibold text-xl text-slate-900 mb-3">NEPRA concurrence process</h2>
              <p className="mb-3">All grid-connected solar systems require NEPRA concurrence approval. The process involves:</p>
              <ol className="space-y-2 list-decimal list-inside">
                <li>System design submitted to your DISCO for technical review</li>
                <li>NEPRA concurrence fee of PKR 1,000/kW</li>
                <li>Bi-directional meter installation by DISCO</li>
                <li>Net billing agreement execution</li>
              </ol>
              <p className="mt-3">Sazuddin Solar System (Pvt) Ltd manages the entire concurrence process on your behalf — from application submission to meter commissioning.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}