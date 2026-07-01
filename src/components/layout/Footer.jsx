import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo variant="lockup" size={28} tone="mono-light" showTagline />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Premium solar installation across Pakistan — residential rooftop hybrid systems and turnkey commercial infrastructure.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-800 text-xs font-mono text-gold-400 border border-slate-700">
                NEPRA Certified
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-slate-800 text-xs font-mono text-gold-400 border border-slate-700">
                AEDB Approved
              </span>
            </div>
          </div>

          {/* Residential */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-4">Home Solar</h4>
            <ul className="space-y-2.5">
              <li><Link to="/residential/overview" className="text-sm text-slate-400 hover:text-white transition-colors">Overview</Link></li>
              <li><Link to="/residential/hybrid-systems" className="text-sm text-slate-400 hover:text-white transition-colors">Hybrid + Battery</Link></li>
              <li><Link to="/residential/net-billing" className="text-sm text-slate-400 hover:text-white transition-colors">Net Billing Guide</Link></li>
              <li><Link to="/residential/calculator" className="text-sm text-slate-400 hover:text-white transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-4">Business Solar</h4>
            <ul className="space-y-2.5">
              <li><Link to="/commercial/overview" className="text-sm text-slate-400 hover:text-white transition-colors">C&I Overview</Link></li>
              <li><Link to="/commercial/solutions" className="text-sm text-slate-400 hover:text-white transition-colors">Grid-Tied & Microgrids</Link></li>
              <li><Link to="/commercial/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/learning-center" className="text-sm text-slate-400 hover:text-white transition-colors">Knowledge Hub</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-gold-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Head Office: Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-gold-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-gold-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>info@s3solar.pk</span>
              </li>
              <li className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0 text-gold-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} S3 Solar — Sazuddin Solar System. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/learning-center" className="hover:text-white transition-colors">Knowledge Hub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}