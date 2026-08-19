import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function RoadmapSection() {
  const availableNow = [
    'Browse listing previews',
    'Contact us directly via WhatsApp',
    'Join the waitlist',
  ];

  const comingSoon = [
    'Safe in-app payments',
    'In-app chat and video calls with landlords',
    'Verified inspection booking',
    'Canada listings',
    'Property purchase in installments',
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">
            Transparent Development Status
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built in the Open — Here's Exactly Where We Are
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We believe in honest, transparent progress without misleading feature claims.
          </p>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Column 1: Available Now */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <h3 className="font-display text-xl font-bold text-slate-900">
                Available Now
              </h3>
              <span className="ml-auto text-[11px] font-mono font-bold bg-[#D4F5E0] text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                Live Today
              </span>
            </div>

            <ul className="space-y-3.5">
              {availableNow.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Coming Soon */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
              <h3 className="font-display text-xl font-bold text-slate-900">
                Coming Soon
              </h3>
              <span className="ml-auto text-[11px] font-mono font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                In Active R&D
              </span>
            </div>

            <ul className="space-y-3.5">
              {comingSoon.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Small Disclaimer Footer */}
        <p className="text-center text-xs sm:text-sm text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          We're building this step by step, in the open. Join the waitlist and we'll bring you along as each feature goes live.
        </p>

        {/* SECTION 9: Land & Property Teaser */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-400 font-bold tracking-wide inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Own property in installments — a new way to buy. Coming soon.
          </p>
        </div>

      </div>
    </section>
  );
}
