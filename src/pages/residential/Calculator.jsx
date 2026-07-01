import React from 'react';
import { ROICalculator } from '../../components/calculator/ROICalculator';
import { Badge } from '../../components/ui/Badge';
import { useInView } from '../../hooks/useInView';

export default function CalculatorPage() {
  const [ref, visible] = useInView();
  const handleSubmit = (data) => {
    console.log('Lead submitted:', data);
  };

  return (
    <main>
      <section ref={ref} className={`py-10 md:py-14 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6 text-center">
          <Badge tone="accent" variant="solid" className="mb-4">Smart ROI · 2026</Badge>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
            Your solar savings calculator
          </h1>
          <p className="mt-3 text-white/80 max-w-lg mx-auto">
            Built on real 2026 NEPRA net-billing rates. Enter your bill and DISCO for a tailored plan.
          </p>
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