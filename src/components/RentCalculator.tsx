import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Sparkles, AlertCircle, HelpCircle, ShieldCheck } from 'lucide-react';

interface RentCalculatorProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord') => void;
}

export default function RentCalculator({ onJoinWaitlist }: RentCalculatorProps) {
  const [annualRent, setAnnualRent] = useState<number>(2400000); // Default to 2.4 million Naira

  const presets = [
    { label: 'Yaba (1-Bed)', value: 1200000 },
    { label: 'Gbagada (2-Bed)', value: 1800000 },
    { label: 'Ikeja GRA (2-Bed)', value: 3000000 },
    { label: 'Lekki Phase 1 (3-Bed)', value: 4800000 },
  ];

  // Calculations
  const monthlyBase = Math.round(annualRent / 12);
  
  // Traditional Upfront Fees in Nigeria:
  // - Rent (12 months)
  // - Agency Fee (typically 10%)
  // - Legal Fee (typically 10%)
  // - Caution Deposit (typically 10%)
  const traditionalAgency = Math.round(annualRent * 0.1);
  const traditionalLegal = Math.round(annualRent * 0.1);
  const traditionalCaution = Math.round(annualRent * 0.1);
  const traditionalTotal = annualRent + traditionalAgency + traditionalLegal + traditionalCaution;

  // MainTown Fees:
  // - First month rent
  // - Affordable MainTown Service Fee (1.5% - 2.5% per month, or mock it as a small fixed monthly admin fee, e.g. ₦5,000/mo or 2%)
  const mainTownMonthlyService = Math.round(monthlyBase * 0.02); // 2% service spread fee
  const mainTownMonthlyTotal = monthlyBase + mainTownMonthlyService;
  const mainTownUpfront = mainTownMonthlyTotal; // Only month 1 required to move in!
  const savingsUpfront = traditionalTotal - mainTownUpfront;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Rent Spreading Simulator
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Compare Your Rent Outflow
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            See the massive difference between paying millions upfront and spreading rent into comfortable monthly installments.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Inputs & Slider */}
          <div className="lg:col-span-5 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100/80 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                Adjust Parameters
              </span>

              {/* Presets */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">Curated Nigerian Locations</label>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      id={`preset-${p.label.replace(/\s+/g, '-')}`}
                      onClick={() => setAnnualRent(p.value)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        annualRent === p.value
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100/30'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 pt-4 border-t border-slate-200/50">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-semibold text-slate-700">Or Enter Annual Rent</label>
                  <span className="font-display text-xl font-extrabold text-slate-950 font-mono">
                    {formatCurrency(annualRent)}
                  </span>
                </div>

                <input
                  id="rent-slider"
                  type="range"
                  min={600000}
                  max={12000000}
                  step={100000}
                  value={annualRent}
                  onChange={(e) => setAnnualRent(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                />

                <div className="flex justify-between text-[10px] font-semibold text-slate-400 font-mono">
                  <span>₦600K / yr</span>
                  <span>₦6.3M / yr</span>
                  <span>₦12M / yr</span>
                </div>
              </div>

              {/* Nigerian Hidden Fees Warning */}
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex gap-2.5 items-start">
                <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-[11px] font-bold text-amber-800">Traditional "Hidden" Costs</h4>
                  <p className="text-[10px] text-amber-700 leading-relaxed">
                    Nigerian leases typically demand an extra 10% agency fee, 10% legal fee, and 10% caution deposit. This inflates your move-in bill by 30%.
                  </p>
                </div>
              </div>
            </div>

            {/* Waitlist CTA trigger */}
            <div className="mt-8 pt-6 border-t border-slate-200/50">
              <button
                id="calc-cta-btn"
                onClick={() => onJoinWaitlist('tenant')}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100/30 transition-all text-sm cursor-pointer hover:scale-[1.02]"
              >
                Get Approved for {formatCurrency(monthlyBase)}/mo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Panel: Side-by-Side Comparison */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Column A: Traditional upfront */}
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono font-bold text-rose-500 uppercase tracking-wider bg-rose-50 px-2 py-1 rounded-md inline-block mb-4">
                  Traditional Upfront
                </span>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Move-In Cash</p>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono mt-1">
                  {formatCurrency(traditionalTotal)}
                </p>

                <div className="space-y-2.5 mt-6 border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Base Rent (12 mos)</span>
                    <span className="font-medium text-slate-700 font-mono">{formatCurrency(annualRent)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Agency Fee (10%)</span>
                    <span className="font-medium text-slate-700 font-mono">{formatCurrency(traditionalAgency)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Legal Fee (10%)</span>
                    <span className="font-medium text-slate-700 font-mono">{formatCurrency(traditionalLegal)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Caution Fee (10%)</span>
                    <span className="font-medium text-slate-700 font-mono">{formatCurrency(traditionalCaution)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-3 bg-rose-50/50 rounded-xl border border-rose-100 text-[10px] text-rose-600 font-bold text-center">
                Requires 100% upfront savings
              </div>
            </div>

            {/* Column B: MainTown Monthly */}
            <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white flex flex-col justify-between shadow-xl shadow-indigo-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-44 h-44 bg-white/5 rounded-full blur-2xl" />
              <div>
                <span className="text-[9px] font-mono font-bold text-emerald-300 uppercase tracking-wider bg-white/10 px-2 py-1 rounded-md inline-block mb-4">
                  MainTown Realty
                </span>
                <p className="text-xs text-indigo-200 font-semibold uppercase tracking-wider">Move-In Cash Required</p>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                  {formatCurrency(mainTownUpfront)}
                </p>

                <div className="space-y-2.5 mt-6 border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-indigo-200">First Month Rent</span>
                    <span className="font-semibold text-white font-mono">{formatCurrency(monthlyBase)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-indigo-200">Monthly Spread Fee (2%)</span>
                    <span className="font-semibold text-white font-mono">{formatCurrency(mainTownMonthlyService)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-indigo-200">Agency & Legal Fees</span>
                    <span className="font-extrabold text-emerald-300">₦0 upfront (spread)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-indigo-200">Caution Deposit</span>
                    <span className="font-extrabold text-emerald-300">₦0 upfront (spread)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="p-3 bg-white/15 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col gap-1 text-center">
                  <p className="text-[11px] text-indigo-100 font-medium">MainTown Instantly Saves You</p>
                  <p className="text-sm font-extrabold text-emerald-300 font-mono">{formatCurrency(savingsUpfront)}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
