import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';

export default function CommercialOverview() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Commercial & Industrial</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Reduce OPEX with solar infrastructure
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Turnkey solar solutions for factories, cold storage, agriculture, and commercial properties. Lower your operational expenditure with predictable energy costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">50 kW – 1 MW+ Systems</h3>
              <p className="text-sm text-slate-600">Scalable rooftop and ground-mount solar arrays sized to your industrial load profile. Modular design for phased deployment.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Peak Shaving</h3>
              <p className="text-sm text-slate-600">Offset expensive peak-hour tariff slabs with solar + battery dispatch. Reduce monthly demand charges by 30–50%.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">Tax Depreciation</h3>
              <p className="text-sm text-slate-600">Avail accelerated depreciation under Section 65B of the Income Tax Ordinance — reduce your corporate tax liability in the first year.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 animate-inview">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-4">See what's possible</h2>
          <p className="text-slate-600 mb-6">Explore our completed commercial retrofits across Pakistan.</p>
          <Link to="/commercial/case-studies" className="inline-flex items-center h-8 px-3.5 bg-maroon-700 text-white text-sm font-semibold rounded-md hover:bg-maroon-800 transition-colors">
            View case studies
          </Link>
        </div>
      </section>
    </main>
  );
}