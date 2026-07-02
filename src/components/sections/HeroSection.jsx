import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { useInView } from '../../hooks/useInView';

export function HeroSection() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={`relative min-h-[500px] md:min-h-[600px] flex items-center text-white overflow-hidden animate-inview ${visible ? 'visible' : ''}`}>
      <div className="absolute inset-0">
        <img
          src="/src/assets/home-hero.png"
          alt="Solar panel installation on residential rooftop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative max-w-container mx-auto px-6 py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          <Badge tone="accent" variant="solid" className="mb-4">NEPRA Certified · AEDB Approved</Badge>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">
            Cut your bill.<br />
            <span className="text-gold-400">Own your power.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Premium rooftop solar + battery systems sized to your DISCO tariff — installed by a NEPRA-certified team across Pakistan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/residential/calculator"
              className="inline-flex items-center justify-center h-8 px-3.5 bg-gold-500 text-slate-950 text-sm font-semibold rounded-md hover:bg-gold-600 active:bg-gold-700 transition-colors duration-fast"
            >
              Calculate my savings
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-8 px-3.5 bg-white/10 text-white text-sm font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors duration-fast"
            >
              Book a free survey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
