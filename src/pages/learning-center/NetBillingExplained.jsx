import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';
import netBillingGuideHero from '../../assets/net-billing-guide.png';

export default function NetBillingExplained() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src={netBillingGuideHero}
            alt="Net billing explained guide"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Regulatory Guide</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">Net Billing Explained — Pakistan 2026</h1>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white animate-inview">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-sm text-slate-600 leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">What is net billing?</h2>
          <p>Net billing is the regulatory framework introduced by NEPRA under the 2026 Alternative and Renewable Energy (ARE) Policy that governs how solar-equipped properties trade electricity with the national grid. Unlike the previous net metering regime (which offered a 1:1 unit offset at retail tariff), net billing compensates exported solar energy at a separate buyback rate determined by NEPRA.</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">Current rates (2026)</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-200"><th className="text-left py-2 font-semibold text-slate-900">Metric</th><th className="text-right py-2 font-semibold text-slate-900">Value</th></tr></thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="py-2">Average retail import tariff</td><td className="text-right font-mono">PKR 50–62 / kWh</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">2026 NEPRA NAEPP export buyback</td><td className="text-right font-mono">PKR 11 / kWh</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">NEPRA concurrence fee</td><td className="text-right font-mono">PKR 1,000 / kW</td></tr>
                <tr><td className="py-2">Bi-directional meter installation</td><td className="text-right font-mono">Covered by DISCO</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">How it works</h2>
          <p>When your solar system generates more electricity than your property consumes, the surplus flows into the local DISCO grid. A bi-directional meter tracks both import (what you take from the grid) and export (what you send back) separately. Your monthly bill is calculated as: <strong>Import charges — Export compensation</strong>. If export exceeds import in a billing period, the surplus carries forward as a credit.</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">Why self-consumption matters more than ever</h2>
          <p>Because the export rate (PKR 11/kWh) is roughly 1/5th of the import rate (PKR 50–62/kWh), every unit you can self-consume is worth 5x more than one you export. This makes battery storage the financially optimal choice for 2026 — store your daytime surplus and discharge it at night instead of exporting cheap and importing expensive.</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">Concurrence process</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Submit system design to your DISCO for technical review</li>
            <li>Pay NEPRA concurrence fee (PKR 1,000/kW)</li>
            <li>Receive approval and net billing agreement</li>
            <li>DISCO installs bi-directional meter</li>
            <li>System commissioning and net billing commencement</li>
          </ol>
          <p className="mt-4">Sazuddin Solar System (Pvt) Ltd manages this entire process on your behalf. Typical timeline: 4–6 weeks from application to commissioning.</p>
        </div>
      </article>
    </main>
  );
}