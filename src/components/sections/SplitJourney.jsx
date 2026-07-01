import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { useInView } from '../../hooks/useInView';

export function SplitJourney() {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`py-14 md:py-20 animate-inview ${visible ? 'visible' : ''}`}>
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="font-mono text-2xs tracking-wider uppercase text-gold-600">Choose your path</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-slate-900 mt-2">
            Solar built for your world
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/residential/overview">
            <Card interactive className={`p-8 md:p-10 h-full border-t-4 border-t-maroon-700 animate-inview ${visible ? 'visible' : ''} animate-stagger-1`}>
              <div className="w-12 h-12 rounded-lg bg-maroon-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-2">Residential Solar</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Grid-independence for Pakistani homeowners. Hybrid rooftop systems with lithium battery backup to combat load-shedding and hyper-inflated utility tariffs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-0.5 bg-maroon-50 text-maroon-700 rounded-pill">7–10 kW systems</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-maroon-50 text-maroon-700 rounded-pill">Battery backup</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-maroon-50 text-maroon-700 rounded-pill">Net billing ready</span>
              </div>
            </Card>
          </Link>

          <Link to="/commercial/overview">
            <Card interactive className={`p-8 md:p-10 h-full border-t-4 border-t-gold-500 animate-inview ${visible ? 'visible' : ''} animate-stagger-2`}>
              <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A67C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-2">Commercial & Industrial</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Turnkey solar infrastructure for factory owners, cold storage facilities, and agricultural operations. Reduce OPEX with custom Grid-Tied and Microgrid systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-0.5 bg-gold-50 text-gold-800 rounded-pill">50 kW–1 MW</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-gold-50 text-gold-800 rounded-pill">Peak shaving</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-gold-50 text-gold-800 rounded-pill">Tax depreciation</span>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}