import { Shield } from "lucide-react";

export default function WhyMainTown() {
  return (
    <section id="why-maintown" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">OUR CORE MISSION</p>

        {/* Section Heading */}
        <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">What Is MainTown Realty?</h2>

        {/* Editorial Container with Clean Rounded Corners */}
        <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xs text-left sm:text-center relative">
          <p className="font-sans text-slate-800 text-lg sm:text-[25px] font-normal leading-relaxed sm:leading-loose tracking-tight">
            "MainTown Realty is being built to fix how renting works in Nigeria — and to make it easier for Nigerians moving abroad to land somewhere safe. Today, finding a home means trusting a
            stranger with your money, hoping the agent doesn't disappear, and somehow gathering a full year's rent before you can even move in. We're building a platform where every property is
            checked before it's listed, every payment is handled safely, and you can pay your rent monthly instead of all at once. For landlords, it means a tenant you can actually trust, without the
            stress of chasing rent every month. We're starting in Lagos, and building toward serving Nigerians relocating to Canada too."
          </p>

          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs font-semibold uppercase tracking-wider">
            <span className="text-slate-400 font-mono">MAINTOWN REALTY INFRASTRUCTURE</span>
            <span className="text-primary font-semibold">PART OF SMARTYHUB GROUP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
