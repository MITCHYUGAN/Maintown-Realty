import { ShieldCheck } from 'lucide-react';

export default function WhyMainTown() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Diamond Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Purple Radial Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-8">
          <ShieldCheck className="w-4 h-4 text-purple-600" />
          <span>Our Core Mission</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">
          What Is MainTown Realty?
        </h2>

        {/* EXACT COPY IN EDITORIAL CONTAINER */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-sm text-left sm:text-center relative">
          
          <p className="font-sans text-slate-800 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed md:leading-loose tracking-tight">
            "MainTown Realty is being built to fix how renting works in Nigeria — and to make it easier for Nigerians moving abroad to land somewhere safe. Today, finding a home means trusting a stranger with your money, hoping the agent doesn't disappear, and somehow gathering a full year's rent before you can even move in. We're building a platform where every property is checked before it's listed, every payment is handled safely, and you can pay your rent monthly instead of all at once. For landlords, it means a tenant you can actually trust, without the stress of chasing rent every month. We're starting in Lagos, and building toward serving Nigerians relocating to Canada too."
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>MainTown Realty Infrastructure</span>
            <span className="text-purple-600 font-extrabold">Part of SmartyHub Group</span>
          </div>

        </div>

      </div>
    </section>
  );
}
