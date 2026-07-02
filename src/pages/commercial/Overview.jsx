import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';
import commercialSolarPageHero from '../../assets/commercial-solar-page-hero.png';
import commercialSolarSection from '../../assets/commercial-solar-section.png';

export default function CommercialOverview() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="absolute inset-0">
          <img
            src={commercialSolarPageHero}
            alt="Commercial solar installation"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
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
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
          <img
            src={commercialSolarSection}
            alt="Commercial solar panel installation"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            loading="lazy"
          />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl tracking-tight text-slate-900 mb-4">Industrial-Grade Solar Solutions</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                From factory rooftops to ground-mount arrays, we deliver turnkey solar infrastructure that reduces operational expenditure and provides predictable energy costs for commercial and industrial operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our systems are engineered for Pakistan's industrial environment, with robust mounting structures, dust-resistant designs, and comprehensive maintenance packages.
              </p>
            </div>
          </div>
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