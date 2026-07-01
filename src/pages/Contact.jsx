import React from 'react';
import { Badge } from '../components/ui/Badge';
import { useInView } from '../hooks/useInView';

const centers = [
  { city: 'Lahore (Head Office)', phone: '+92 42 1234567', address: '23-B, Main Boulevard, Gulberg III, Lahore', hours: 'Mon–Sat: 9AM–6PM' },
  { city: 'Karachi', phone: '+92 21 1234567', address: 'Suite 5, Business Centre, Clifton, Karachi', hours: 'Mon–Sat: 9AM–6PM' },
  { city: 'Islamabad', phone: '+92 51 1234567', address: 'Office 12, Blue Area, Islamabad', hours: 'Mon–Sat: 9AM–6PM' },
  { city: 'Faisalabad', phone: '+92 41 1234567', address: '3rd Floor, Mall Plaza, Faisalabad', hours: 'Mon–Sat: 9AM–6PM' },
  { city: 'Multan', phone: '+92 61 1234567', address: '12-A, Abdali Road, Multan', hours: 'Mon–Sat: 9AM–6PM' },
];

export default function Contact() {
  const [ref, visible] = useInView();

  return (
    <main>
      <section ref={ref} className={`py-14 md:py-20 bg-white animate-inview ${visible ? 'visible' : ''}`}>
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge tone="accent" className="mb-4">Contact Us</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-slate-900 mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-slate-600">
              Reach out to our team for a free site survey, proposal, or technical consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 animate-inview">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-4">Direct Contact</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span><strong>Phone:</strong> +92 300 1234567</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span><strong>Email:</strong> info@s3solar.pk</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B1E2D" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span><strong>Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-display font-semibold text-lg text-slate-900 mb-4">WhatsApp</h3>
              <p className="text-sm text-slate-600 mb-4">
                Fastest response. Send us your monthly bill amount and city for an instant preliminary estimate.
              </p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-9 px-4 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl tracking-tight text-slate-900 mb-8 text-center">Regional Service Centers</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-inview">
            {centers.map((c, i) => (
  <div
    key={i}
    className={`
      bg-white border border-slate-200 rounded-xl p-5
      ${i === 4 ? "md:col-start-3" : ""}
    `}
  >
    <h3 className="font-display font-semibold text-base text-slate-900 mb-2">
      {c.city}
    </h3>
    <p className="text-sm text-slate-500 mb-1">{c.address}</p>
    <p className="text-sm font-mono text-maroon-700">{c.phone}</p>
    <p className="text-xs text-slate-400 mt-1">{c.hours}</p>
  </div>
))}
          </div>
        </div>
      </section>
    </main>
  );
}