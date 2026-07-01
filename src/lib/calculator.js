/**
 * S3 Solar — 2026 NEPRA Smart ROI Calculator Logic
 *
 * Ground truths:
 * - Average grid import cost: PKR 55/kWh (inclusive of base rates, surcharges, slab taxes)
 * - 2026 NEPRA NAEPP export buyback rate: PKR 11/kWh
 * - Deployment cost: PKR 140,000–175,000 per kW installed
 * - Solar yield: 3.6 kWh/kWp/day (after real-world losses)
 */

export const DISCOS = [
  { value: 'LESCO', label: 'LESCO — Lahore', tariff: 54 },
  { value: 'KE', label: 'K-Electric — Karachi', tariff: 62 },
  { value: 'IESCO', label: 'IESCO — Islamabad', tariff: 53 },
  { value: 'MEPCO', label: 'MEPCO — Multan', tariff: 52 },
  { value: 'FESCO', label: 'FESCO — Faisalabad', tariff: 53 },
  { value: 'GEPCO', label: 'GEPCO — Gujranwala', tariff: 53 },
  { value: 'HESCO', label: 'HESCO — Hyderabad', tariff: 55 },
  { value: 'PESCO', label: 'PESCO — Peshawar', tariff: 51 },
  { value: 'QESCO', label: 'QESCO — Quetta', tariff: 51 },
];

const YIELD = 3.6; // kWh generated per kWp per day
const EXPORT_RATE = 11; // PKR/kWh — NEPRA NAEPP net-billing buyback
const CONCURRENCE_FEE = 1000; // PKR/kW — mandatory NEPRA concurrence fee

// Self-consumption fractions per spec:
// Self-Consumption mode: 75% self-consumed, 25% exported
// Grid Export mode: 40% self-consumed, 60% exported
const SELF_USE = { self: 0.75, export: 0.40 };

// Tiered turnkey price per kW (PKR)
const onGridPerKw = (kw) => (kw <= 5 ? 150000 : kw <= 20 ? 108000 : 100000);
const hybridPerKw = (kw) => (kw <= 10 ? 172000 : 158000);

export const fmtPKR = (v) => 'PKR ' + Math.round(v).toLocaleString('en-US');
export const fmtCr = (v) => {
  if (v >= 1e7) return 'PKR ' + (v / 1e7).toFixed(2) + ' Cr';
  if (v >= 1e5) return 'PKR ' + (v / 1e5).toFixed(1) + ' Lac';
  return fmtPKR(v);
};

export function compute({ bill, disco, focus }) {
  const tariff = (DISCOS.find((d) => d.value === disco) || DISCOS[0]).tariff;
  const monthlyUnits = bill / tariff;
  const annualUnits = monthlyUnits * 12;
  const dailyUnits = monthlyUnits / 30;

  // Size system to cover consumption (nearest 0.5 kW)
  let sizeKw = Math.max(1, Math.round((dailyUnits / YIELD) * 2) / 2);
  const annualGen = sizeKw * YIELD * 365;

  const battery = focus === 'self';
  const batteryKwh = battery ? Math.max(5, Math.round((dailyUnits * 0.5) / 2.5) * 2.5) : 0;

  // Cost: hybrid (battery) vs on-grid, plus NEPRA concurrence fee
  const perKw = battery ? hybridPerKw(sizeKw) : onGridPerKw(sizeKw);
  const systemCost = sizeKw * perKw;
  const concurrence = sizeKw * CONCURRENCE_FEE;
  const totalCost = systemCost + concurrence;

  // Savings: self-consumed units offset the retail tariff; surplus earns export rate
  const selfFrac = SELF_USE[focus];
  const selfUnits = Math.min(annualGen * selfFrac, annualUnits);
  const exportUnits = Math.max(0, annualGen - selfUnits);
  const annualSavings = selfUnits * tariff + exportUnits * EXPORT_RATE;
  const monthlySavings = annualSavings / 12;
  const payback = totalCost / annualSavings;
  const co2 = (annualGen * 0.5) / 1000; // tonnes/yr

  return {
    tariff,
    monthlyUnits,
    sizeKw,
    batteryKwh,
    systemCost,
    concurrence,
    totalCost,
    monthlySavings,
    annualSavings,
    payback,
    co2,
    annualGen,
    selfFrac,
    exportFrac: 1 - selfFrac,
  };
}