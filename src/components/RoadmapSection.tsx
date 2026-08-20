import { CheckCircle2, Clock } from "lucide-react";

export default function RoadmapSection() {
  const availableNow = ["Browse listing previews & verified properties", "Contact us directly via WhatsApp for inquiries", "Join the early access priority waitlist"];

  const comingSoon = [
    "Safe in-app rental payments & escrow protection",
    "In-app chat & verified inspection booking",
    "AI-powered document & deed authenticity checks",
    "Automated landlord rent collection ledger",
    "Canada relocation housing & listings",
  ];

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">DEVELOPMENT STATUS</p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.18]">Built in the Open — Here's Exactly Where We Are</h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">We believe in honest, transparent progress without misleading feature claims.</p>
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Column 1: Available Now */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
              <h3 className="text-xl font-semibold text-slate-900">Available Now</h3>
              <span className="ml-auto text-xs font-medium bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-lg border border-emerald-200 font-mono">Live Prototype</span>
            </div>

            <ul className="space-y-4">
              {availableNow.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Coming Soon */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
              <h3 className="text-xl font-semibold text-slate-900">Coming Soon</h3>
              <span className="ml-auto text-xs font-medium bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-lg border border-amber-200 font-mono">In Active R&D</span>
            </div>

            <ul className="space-y-4">
              {comingSoon.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Small Reassurance Footer */}
        <p className="text-center text-xs sm:text-sm text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
          We're building this step by step, in the open. Join the waitlist and we'll bring you along as each feature goes live.
        </p>
      </div>
    </section>
  );
}
