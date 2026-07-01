import React from 'react';
import { Slider } from '../ui/Slider';
import { Select } from '../ui/Select';
import { SegmentedControl } from '../ui/SegmentedControl';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { compute, DISCOS, fmtPKR, fmtCr } from '../../lib/calculator';

export function ROICalculator({ onSubmit, compact, className = '' }) {
  const [step, setStep] = React.useState(1);
  const [bill, setBill] = React.useState(45000);
  const [disco, setDisco] = React.useState('LESCO');
  const [focus, setFocus] = React.useState('self');
  const [lead, setLead] = React.useState({ name: '', wa: '', city: '' });
  const [done, setDone] = React.useState(false);

  const r = React.useMemo(() => compute({ bill, disco, focus }), [bill, disco, focus]);

  return (
    <div className={`bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden w-full max-w-md font-body ${className}`}>
      {/* Header */}
      <div className="px-5 py-4 bg-maroon-700 text-white flex items-center justify-between">
        <div>
          <div className="font-mono text-2xs tracking-wider uppercase text-gold-300">Smart ROI · 2026</div>
          <div className="font-display text-lg font-semibold">Solar Savings Estimate</div>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((n) => (
            <span key={n} className={`w-6 h-1 rounded-pill ${n <= step ? 'bg-gold-500' : 'bg-white/25'}`} />
          ))}
        </div>
      </div>

      <div className="p-5">
        {/* Step 1: Inputs */}
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <Slider
              label="Average monthly bill"
              min={15000}
              max={500000}
              step={5000}
              value={bill}
              onChange={setBill}
              format={(v) => fmtPKR(v)}
            />
            <Select
              label="Your electricity provider (DISCO)"
              options={DISCOS}
              value={disco}
              onChange={(e) => setDisco(e.target.value)}
            />
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">System focus</label>
              <SegmentedControl
                fullWidth
                value={focus}
                onChange={setFocus}
                options={[
                  { value: 'self', label: 'Self-Consumption', sublabel: 'Max backup + battery' },
                  { value: 'export', label: 'Grid Export', sublabel: 'NEPRA net billing' },
                ]}
              />
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {focus === 'self'
                  ? `Recommended. Battery stores daytime surplus so ~75% is self-used at your full PKR ${r.tariff}/unit tariff — insulated from NEPRA export-rate cuts. Fastest payback.`
                  : `On-grid, no battery. Surplus is exported at only ~PKR 11/unit (NEPRA net billing) — roughly 5× less than a self-used unit, so payback is longer.`}
              </p>
            </div>
            <Button variant="accent" size="md" fullWidth onClick={() => setStep(2)}>
              See my estimate →
            </Button>
          </div>
        )}

        {/* Step 2: Results */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            {/* Key metrics grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
              <ResultCell label="System Size" value={r.sizeKw.toFixed(1)} unit="kW" />
              <ResultCell label="Battery Bank" value={r.batteryKwh > 0 ? r.batteryKwh.toFixed(1) : '—'} unit={r.batteryKwh > 0 ? 'kWh' : ''} sub={r.batteryKwh === 0 ? 'Grid-tied' : null} />
              <ResultCell label="Monthly Savings" value={fmtPKR(r.monthlySavings).replace('PKR ', '')} unit="PKR" tone="positive" />
              <ResultCell label="Payback Period" value={r.payback.toFixed(1)} unit="yrs" tone="brand" />
            </div>

            {/* Payback bar chart */}
            <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-600">Payback timeline</span>
                <span className="font-mono text-xs font-semibold text-maroon-700 tabular-nums">{r.payback.toFixed(1)} years</span>
              </div>
              <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-gold-500 to-maroon-700"
                  style={{ width: `${Math.min(100, (r.payback / 8) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-2xs text-slate-400">0 yr</span>
                <span className="text-2xs text-slate-400">8 yr</span>
              </div>
            </div>

            {/* Detail rows */}
            <div className="flex flex-col gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg">
              <Row k="Turnkey system cost" v={fmtCr(r.systemCost)} />
              <Row k="NEPRA concurrence fee" v={fmtPKR(r.concurrence)} />
              <Row k="Est. annual savings" v={fmtCr(r.annualSavings)} tone="positive" />
              <Row k="Self-consumed" v={`${(r.selfFrac * 100).toFixed(0)}%`} />
              <Row k="Exported to grid" v={`${(r.exportFrac * 100).toFixed(0)}%`} />
              <Row k="Units generated / year" v={Math.round(r.annualGen).toLocaleString() + ' kWh'} />
              <Row k="CO₂ avoided / year" v={r.co2.toFixed(1) + ' tonnes'} />
            </div>

            <div className="flex gap-2.5">
              <Button variant="secondary" onClick={() => setStep(1)}>← Adjust</Button>
              <Button variant="primary" fullWidth onClick={() => setStep(3)}>Get exact quote</Button>
            </div>
          </div>
        )}

        {/* Step 3: Lead capture */}
        {step === 3 && !done && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 px-3 py-2.5 bg-gold-50 border border-gold-200 rounded-md">
              <span className="font-display font-bold text-2xl text-maroon-700 tabular-nums">{r.sizeKw.toFixed(1)}kW</span>
              <span className="text-sm text-slate-600">system · <strong>{r.payback.toFixed(1)}yr</strong> payback. A specialist will confirm on WhatsApp.</span>
            </div>
            <Input label="Full name" placeholder="e.g. Ayesha Khan" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
            <Input label="WhatsApp number" prefix="+92" placeholder="3XX XXXXXXX" value={lead.wa} onChange={(e) => setLead({ ...lead, wa: e.target.value })} />
            <Input label="City" placeholder="e.g. Lahore" value={lead.city} onChange={(e) => setLead({ ...lead, city: e.target.value })} />
            <Button variant="accent" size="md" fullWidth
              disabled={!lead.name || !lead.wa || !lead.city}
              onClick={() => { setDone(true); onSubmit?.({ ...lead, ...r, bill, disco, focus }); }}>
              Book my free site survey
            </Button>
            <p className="text-2xs text-slate-400 text-center m-0">No spam. We only message you about your quote.</p>
          </div>
        )}

        {/* Done state */}
        {done && (
          <div className="flex flex-col items-center gap-2.5 py-5 text-center">
            <div className="w-13 h-13 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#1B8E5C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div className="font-display text-xl font-semibold text-slate-900">Request received</div>
            <p className="text-md text-slate-500 m-0">Thanks {lead.name.split(' ')[0] || ''} — our team will WhatsApp you within 24 hours to schedule your free {r.sizeKw.toFixed(1)}kW survey.</p>
            <Button variant="secondary" size="sm" onClick={() => { setDone(false); setStep(1); }}>Start over</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultCell({ label, value, unit, sub, tone }) {
  const color = tone === 'positive' ? 'text-green-600' : tone === 'brand' ? 'text-maroon-700' : 'text-slate-900';
  return (
    <div className="bg-white px-4 py-3.5">
      <div className="text-2xs font-semibold tracking-wider uppercase text-slate-500">{label}</div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className={`font-display font-bold text-2xl tracking-tight tabular-nums ${color}`}>{value}</span>
        {unit && <span className="font-mono text-sm font-medium text-slate-500">{unit}</span>}
      </div>
      {sub && <div className="text-2xs text-slate-400 mt-0.5">{sub}</div>}
    </div>
  );
}

function Row({ k, v, tone }) {
  return (
    <div className="flex justify-between items-baseline text-md">
      <span className="text-slate-500">{k}</span>
      <span className={`font-mono font-semibold tabular-nums ${tone === 'positive' ? 'text-green-600' : 'text-slate-900'}`}>{v}</span>
    </div>
  );
}