import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';

export default function StringVsMicroinverters() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Technology Analysis</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">String Inverters vs Microinverters</h1>
          </div>
        </div>
      </section>

      <article className="py-14 bg-white animate-inview">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-sm text-slate-600 leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">The topology question</h2>
          <p>Choosing between a string inverter and microinverters is one of the most consequential decisions in a solar PV system design. In Pakistan's urban environments — characterized by dust accumulation, partial shading from nearby structures, and high ambient temperatures — the right choice significantly impacts annual energy yield.</p>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">String inverters</h2>
          <p>A string inverter is a single, centralized unit that converts DC power from an entire series-connected array of solar panels. All panels in a string operate at the same current, limited by the lowest-performing panel. If one panel is shaded or soiled, the entire string's output drops proportionally.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-900 mb-2">Best for:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Unshaded, south-facing roofs with consistent tilt</li>
              <li>Large systems where cost per watt is critical</li>
              <li>Commercial flat roofs with uniform panel orientation</li>
              <li>Systems with power optimizers for partial shade mitigation</li>
            </ul>
            <p className="font-semibold text-slate-900 mt-3 mb-2">Drawbacks:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Single point of failure — one inverter takes down the whole system</li>
              <li>Shading on one panel reduces output of the entire string</li>
              <li>Shorter warranty (typically 10–12 years vs 25 years for microinverters)</li>
            </ul>
          </div>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">Microinverters</h2>
          <p>Microinverters are small, panel-level inverters mounted directly under each solar panel. Each panel operates independently, converting its own DC to AC at the source. Shading or soiling on one panel has zero impact on the others — every panel performs at its individual maximum power point.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-900 mb-2">Best for:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Roofs with partial shading from trees, chimneys, or adjacent buildings</li>
              <li>Multi-orientation roofs (panels facing different directions)</li>
              <li>Systems where panel-level monitoring is desired</li>
              <li>Dust-heavy environments where panels get soiled unevenly</li>
            </ul>
            <p className="font-semibold text-slate-900 mt-3 mb-2">Drawbacks:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Higher upfront cost per watt (20–30% premium over string inverters)</li>
              <li>More components = more potential failure points (though individual failures don't affect the rest of the system)</li>
              <li>Slightly lower peak efficiency than string inverters (97% vs 98.5%)</li>
            </ul>
          </div>

          <h2 className="font-display font-bold text-2xl text-slate-900 mt-8">The Pakistani urban context</h2>
          <p>In densely built Pakistani cities like Lahore, Karachi, and Islamabad, most residential roofs experience partial shading during certain hours — from water tanks, adjacent walls, or overhead cables. The dry season brings heavy dust accumulation that settles unevenly across the array. Under these conditions, microinverters typically recover 5–15% more annual energy compared to a conventional string inverter system, often justifying the premium within the first 3 years.</p>
          <p>For commercial installations with large, unobstructed rooftop areas and uniform panel orientation, string inverters remain the cost-effective choice — especially when paired with power optimizers for per-panel MPPT tracking without the full microinverter cost.</p>
        </div>
      </article>
    </main>
  );
}