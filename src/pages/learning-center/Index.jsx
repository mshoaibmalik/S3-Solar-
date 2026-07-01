import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { useInView } from '../../hooks/useInView';

const articles = [
  { title: 'Net Billing Explained', desc: 'Complete guide to the 2026 NEPRA net-billing framework — export rates, concurrence process, and financial implications for homeowners and businesses.', path: '/learning-center/net-billing-explained', tag: 'Regulatory' },
  { title: 'Tier-1 Panels vs Counterfeits', desc: 'How to verify authentic Tier-1 solar panels in Pakistan. Spot counterfeit products and protect your investment with proper asset verification.', path: '/learning-center/tier-1-panels-vs-counterfeits', tag: 'Hardware' },
  { title: 'String Inverters vs Microinverters', desc: 'Technical analysis of panel layout optimization for dust-heavy, partially shaded Pakistani urban environments. Which topology wins?', path: '/learning-center/string-vs-microinverters', tag: 'Technology' },
];

export default function LearningCenter() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-gradient-to-br from-maroon-800 to-maroon-700 text-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge tone="accent" variant="solid" className="mb-4">Knowledge Hub</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight">
              Solar knowledge, engineered for Pakistan
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Technical deep-dives, regulatory guides, and practical consumer advice — built for search engines and AI answer engines alike.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white animate-inview">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Link key={i} to={a.path}>
                <Card interactive className="p-6 h-full">
                  <Badge tone="accent" className="mb-3">{a.tag}</Badge>
                  <h2 className="font-display font-semibold text-lg text-slate-900 mb-2">{a.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}