import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';

export default function Tier1PanelsVsCounterfeits() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[400px] md:min-h-[500px] flex items-center text-white animate-inview bg-gradient-to-br from-maroon-800 to-maroon-700 ${visible ? 'visible' : ''}`}>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Hardware Guide</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">Tier-1 Panels vs Counterfeits</h1>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white animate-inview">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-sm text-slate-600 leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">What is a Tier-1 solar panel?</h2>
          <p>Tier-1 classification, defined by Bloomberg New Energy Finance (BNEF), identifies solar panel manufacturers that are bankable — meaning they have demonstrated long-term financial stability, automated production lines, and a track record of supplying large-scale projects. Tier-1 panels come with robust warranties (25–30 years) and verified performance degradation rates (0.35–0.55% per year).</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">The counterfeit problem in Pakistan</h2>
          <p>Pakistan's solar market has seen a surge in counterfeit and substandard panels, particularly from unverified importers. These panels often use recycled or Grade-B cells, have fake brand labels, and degrade rapidly — some losing 30%+ efficiency within 2 years. Common counterfeit brands include fake "Jinko," "Longi," and "Trina" panels manufactured in unlicensed facilities.</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">How to verify authentic panels</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
            <div className="flex gap-3"><span className="font-bold text-gold-600">1.</span> <span><strong>Check the serial number</strong> — Every genuine Tier-1 panel has a unique serial number that can be verified on the manufacturer's website or via QR code scan.</span></div>
            <div className="flex gap-3"><span className="font-bold text-gold-600">2.</span> <span><strong>Inspect the junction box</strong> — Authentic panels have sealed, branded junction boxes with bypass diodes. Counterfeits often use generic boxes with poor sealing.</span></div>
            <div className="flex gap-3"><span className="font-bold text-gold-600">3.</span> <span><strong>Verify the data sheet</strong> — Request the official datasheet and compare electrical ratings (Vmp, Imp, Voc, Isc) against the panel's label. Mismatches indicate counterfeits.</span></div>
            <div className="flex gap-3"><span className="font-bold text-gold-600">4.</span> <span><strong>Check the frame and glass</strong> — Tier-1 panels use anodized aluminum frames and tempered glass with anti-reflective coating. Counterfeits often have rough edges and uncoated glass.</span></div>
            <div className="flex gap-3"><span className="font-bold text-gold-600">5.</span> <span><strong>Buy from authorized distributors</strong> — Sazuddin Solar System (Pvt) Ltd sources exclusively from manufacturer-authorized distributors with direct factory warranties.</span></div>
          </div>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">Performance comparison</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 overflow-x-auto">
            <table className="w-full text-sm min-w-[320px]">
              <thead><tr className="border-b border-slate-200"><th className="text-left py-2 font-semibold text-slate-900">Metric</th><th className="text-right py-2 font-semibold text-slate-900">Tier-1</th><th className="text-right py-2 font-semibold text-slate-900">Counterfeit</th></tr></thead>
              <tbody>
                <tr className="border-b border-slate-100"><td className="py-2">Efficiency</td><td className="text-right font-mono">21–23%</td><td className="text-right font-mono">14–17%</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">Degradation/yr</td><td className="text-right font-mono">0.35–0.55%</td><td className="text-right font-mono">1.5–3%</td></tr>
                <tr className="border-b border-slate-100"><td className="py-2">Warranty</td><td className="text-right font-mono">25–30 yr</td><td className="text-right font-mono">None / 2–5 yr</td></tr>
                <tr><td className="py-2">Lifespan</td><td className="text-right font-mono">30+ years</td><td className="text-right font-mono">5–10 years</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </main>
  );
}