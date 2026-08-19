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
    <section id="calculator" className="py-24 bg-white relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Rent Spreading Simulator
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Compare Your Rent Outflow
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            See the massive difference between paying millions upfront and spreading rent into comfortable monthly installments.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Inputs & Slider */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                Adjust Parameters
              </span>

              {/* Presets */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground">Curated Nigerian Locations</label>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      id={`preset-${p.label.replace(/\s+/g, '-')}`}
                      onClick={() => setAnnualRent(p.value)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        annualRent === p.value
                          ? 'bg-primary border-primary text-primary-foreground shadow-xs'
                          : 'bg-white border-border text-foreground hover:bg-secondary/40'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-semibold text-foreground">Or Enter Annual Rent</label>
                  <span className="text-xl font-bold text-foreground">
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
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                />

                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                  <span>₦600K / yr</span>
                  <span>₦6.3M / yr</span>
                  <span>₦12M / yr</span>
                </div>
              </div>

              {/* Nigerian Hidden Fees Warning */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 flex gap-2.5 items-start">
                <AlertCircle className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-amber-900">Traditional "Hidden" Costs</h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Nigerian leases typically demand an extra 10% agency fee, 10% legal fee, and 10% caution deposit. This inflates your move-in bill by 30%.
                  </p>
                </div>
              </div>
            </div>

            {/* Waitlist CTA trigger */}
            <div className="mt-8 pt-6 border-t border-border">
              <button
                id="calc-cta-btn"
                onClick={() => onJoinWaitlist('tenant')}
                className="w-full flex items-center justify-center gap-1.5 h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md shadow-primary/20 transition-all text-sm cursor-pointer"
              >
                Get Approved for {formatCurrency(monthlyBase)}/mo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Panel: Side-by-Side Comparison */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Column A: Traditional upfront */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200 inline-block mb-4">
                  Traditional Upfront
                </span>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Move-In Cash</p>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                  {formatCurrency(traditionalTotal)}
                </p>

                <div className="space-y-2.5 mt-6 border-t border-border pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Base Rent (12 mos)</span>
                    <span className="font-semibold text-foreground">{formatCurrency(annualRent)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Agency Fee (10%)</span>
                    <span className="font-semibold text-foreground">{formatCurrency(traditionalAgency)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Legal Fee (10%)</span>
                    <span className="font-semibold text-foreground">{formatCurrency(traditionalLegal)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Caution Fee (10%)</span>
                    <span className="font-semibold text-foreground">{formatCurrency(traditionalCaution)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-3 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-700 font-semibold text-center">
                Requires 100% upfront savings
              </div>
            </div>

            {/* Column B: MainTown Monthly */}
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-between shadow-md relative overflow-hidden">
              <div>
                <span className="text-xs font-semibold text-emerald-950 uppercase tracking-wider bg-emerald-300 px-2.5 py-1 rounded-full inline-block mb-4">
                  MainTown Realty
                </span>
                <p className="text-xs text-primary-foreground/80 font-medium uppercase tracking-wider">Move-In Cash Required</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {formatCurrency(mainTownUpfront)}
                </p>

                <div className="space-y-2.5 mt-6 border-t border-white/20 pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-primary-foreground/80">First Month Rent</span>
                    <span className="font-semibold text-white">{formatCurrency(monthlyBase)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-primary-foreground/80">Monthly Spread Fee (2%)</span>
                    <span className="font-semibold text-white">{formatCurrency(mainTownMonthlyService)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-primary-foreground/80">Agency & Legal Fees</span>
                    <span className="font-bold text-emerald-200">₦0 upfront (spread)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-primary-foreground/80">Caution Deposit</span>
                    <span className="font-bold text-emerald-200">₦0 upfront (spread)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col gap-1 text-center">
                  <p className="text-xs text-primary-foreground/80 font-medium">MainTown Instantly Saves You</p>
                  <p className="text-base font-bold text-emerald-200">{formatCurrency(savingsUpfront)}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
