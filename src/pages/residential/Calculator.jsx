import React from 'react';
import { ROICalculator } from '../../components/calculator/ROICalculator';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';
import roiCalculatorHero from '../../assets/roi-calculator-hero.png';

export default function CalculatorPage() {
  const [ref, visible] = useInView();
  const handleSubmit = (data) => {
    console.log('Lead submitted:', data);
  };

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src={roiCalculatorHero}
            alt="Solar ROI calculator"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <Badge tone="accent" variant="solid" className="mb-4">Smart ROI · 2026</Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
              Your solar savings calculator
            </h1>
            <p className="mt-3 text-white/80 max-w-lg mx-auto">
              Built on real 2026 NEPRA net-billing rates. Enter your bill and DISCO for a tailored plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-slate-50 animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="flex justify-center">
            <ROICalculator onSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </main>
  );
}