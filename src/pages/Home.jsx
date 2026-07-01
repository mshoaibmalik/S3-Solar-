import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { SplitJourney } from '../components/sections/SplitJourney';
import { TelemetryCards } from '../components/sections/TelemetryCards';
import { SpecMatrix } from '../components/sections/SpecMatrix';
import { Card } from '../components/ui/Card';
import { ROICalculator } from '../components/calculator/ROICalculator';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TelemetryCards />
      <SplitJourney />

      {/* Calculator preview */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-mono text-2xs tracking-wider uppercase text-gold-600">Smart ROI · 2026</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-slate-900 mt-2">
              See your savings in 60 seconds
            </h2>
            <p className="text-slate-600 mt-3 max-w-lg mx-auto">
              Built on real 2026 NEPRA net-billing rates. Enter your monthly bill and DISCO to get a tailored solar plan with payback timeline.
            </p>
          </div>
          <div className="flex justify-center">
            <ROICalculator />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/residential/calculator"
              className="inline-flex items-center gap-1 text-maroon-700 font-semibold text-xs hover:underline"
            >
              Open full-screen calculator →
            </Link>
          </div>
        </div>
      </section>

      <SpecMatrix />
    </main>
  );
}