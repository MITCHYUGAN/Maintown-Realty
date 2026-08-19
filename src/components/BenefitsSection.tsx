import { ChevronRight, Check } from 'lucide-react';

interface BenefitsSectionProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
}

export default function BenefitsSection({ onJoinWaitlist }: BenefitsSectionProps) {
  return (
    <section id="ecosystem-section" className="w-full py-20 md:py-28 bg-slate-50/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            WHICHEVER SIDE OF THE DEAL YOU'RE ON, MAINTOWN PROTECTS YOU
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Built Around Three People
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            A balanced ecosystem designed to protect every participant in the rental process.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Tenants */}
          <div id="stakeholder-card-tenant" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Visual Illustration 1 */}
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Top 3 Action Tiles */}
                <div className="grid grid-cols-3 gap-2.5 w-full max-w-[260px]">
                  {/* Browse */}
                  <div className="bg-white rounded-xl p-2.5 py-3 flex flex-col items-center justify-center shadow-2xs border border-slate-100">
                    <div className="w-6 h-6 rounded-md bg-purple-100 text-primary flex items-center justify-center mb-1.5">
                      <div className="w-3 h-2 bg-primary rounded-xs" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-800 tracking-tight">Browse</span>
                  </div>

                  {/* Inspect */}
                  <div className="bg-white rounded-xl p-2.5 py-3 flex flex-col items-center justify-center shadow-2xs border border-slate-100">
                    <div className="w-6 h-6 flex flex-col items-center justify-center gap-1 mb-1.5">
                      <div className="w-4 h-1 bg-slate-400 rounded-full" />
                      <div className="w-4 h-1 bg-slate-400 rounded-full" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-800 tracking-tight">Inspect</span>
                  </div>

                  {/* Move in */}
                  <div className="bg-white rounded-xl p-2.5 py-3 flex flex-col items-center justify-center shadow-2xs border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-800 tracking-tight whitespace-nowrap">Move in</span>
                  </div>
                </div>

                {/* Bottom Progress Bar Tile */}
                <div className="bg-white rounded-xl p-2.5 px-4 w-full max-w-[260px] mt-4 flex items-center gap-2 shadow-2xs border border-slate-100">
                  <div className="w-14 h-2 rounded-full bg-primary" />
                  <div className="w-8 h-2 rounded-full bg-purple-200" />
                  <div className="w-8 h-2 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-2">
                Tenants
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                Browse verified listings, book inspections, and pay your rent safely — one month at a time, not a whole year upfront.
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-semibold tracking-wider uppercase mb-5">
                COMING SOON: IN-APP PAYMENTS
              </div>
            </div>

            {/* CTA Button matching card radius */}
            <button
              id="btn-join-tenant"
              onClick={() => onJoinWaitlist('tenant')}
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs shadow-xs transition-all cursor-pointer"
            >
              <span>Join as a Tenant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Landlords */}
          <div id="stakeholder-card-landlord" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Visual Illustration 2 */}
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Top 3 House Circles */}
                <div className="flex items-center justify-center gap-3 w-full">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="w-11 h-11 rounded-full bg-white shadow-2xs border border-slate-100 flex items-center justify-center"
                    >
                      {/* House Silhouette Icon */}
                      <div className="flex flex-col items-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[7px] border-b-primary" />
                        <div className="w-3 h-2 bg-primary -mt-[1px]" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Middle 2 Cards */}
                <div className="flex items-center justify-center gap-2.5 w-full max-w-[250px] mt-4">
                  <div className="bg-white rounded-xl p-2.5 px-3 w-1/2 shadow-2xs border border-slate-100 flex flex-col gap-1.5">
                    <div className="w-8 h-2 rounded-full bg-primary" />
                    <div className="w-14 h-1.5 rounded-full bg-purple-100" />
                  </div>
                  <div className="bg-white rounded-xl p-2.5 px-3 w-1/2 shadow-2xs border border-slate-100 flex flex-col gap-1.5">
                    <div className="w-8 h-2 rounded-full bg-primary" />
                    <div className="w-14 h-1.5 rounded-full bg-purple-100" />
                  </div>
                </div>

                {/* Bottom Hierarchy Blocks */}
                <div className="flex flex-col items-center w-full max-w-[250px] mt-3 gap-1.5">
                  <div className="flex gap-2 w-full justify-center">
                    <div className="w-1/2 h-4 bg-white rounded-lg border border-slate-100" />
                    <div className="w-1/2 h-4 bg-white rounded-lg border border-slate-100" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-2">
                Landlords
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                List your property, connect with verified tenants, and get paid reliably — without chasing rent every single month.
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-semibold tracking-wider uppercase mb-5">
                COMING SOON: LANDLORD DASHBOARD
              </div>
            </div>

            {/* CTA Button matching card radius */}
            <button
              id="btn-join-landlord"
              onClick={() => onJoinWaitlist('landlord')}
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs shadow-xs transition-all cursor-pointer"
            >
              <span>Join as a Landlord</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Agents */}
          <div id="stakeholder-card-agent" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Visual Illustration 3 (Growth Chart) */}
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] p-6 pb-4 flex flex-col justify-end relative overflow-hidden">
                
                {/* Subtle Grid Guidelines */}
                <div className="absolute inset-x-6 top-10 bottom-12 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="w-full border-b border-primary" />
                  <div className="w-full border-b border-primary" />
                  <div className="w-full border-b border-primary" />
                </div>

                {/* Upward Curved Dashed Trend Line */}
                <svg
                  className="absolute inset-x-6 top-6 bottom-10 w-[calc(100%-3rem)] h-[calc(100%-4rem)] pointer-events-none overflow-visible"
                  viewBox="0 0 240 100"
                  fill="none"
                >
                  <path
                    d="M 12 80 Q 90 60 170 30 T 228 8"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <circle cx="228" cy="8" r="4" fill="#9333ea" />
                </svg>

                {/* 6 Rising White Bars */}
                <div className="grid grid-cols-6 gap-2 sm:gap-2.5 items-end h-32 relative z-10">
                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-white rounded-t-md rounded-b-xs h-[28%] shadow-2xs border border-slate-100" />
                    <span className="text-[10px] font-semibold text-slate-700 mt-2">List</span>
                  </div>

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-white rounded-t-md rounded-b-xs h-[42%] shadow-2xs border border-slate-100" />
                    <span className="text-[10px] font-semibold text-slate-700 mt-2">Match</span>
                  </div>

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-white rounded-t-md rounded-b-xs h-[56%] shadow-2xs border border-slate-100" />
                    <span className="text-[10px] font-semibold text-slate-700 mt-2">Inspect</span>
                  </div>

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-white rounded-t-md rounded-b-xs h-[70%] shadow-2xs border border-slate-100" />
                    <span className="text-[10px] font-semibold text-slate-700 mt-2">Verify</span>
                  </div>

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-white rounded-t-md rounded-b-xs h-[84%] shadow-2xs border border-slate-100" />
                    <span className="text-[10px] font-semibold text-slate-700 mt-2">Close</span>
                  </div>

                  <div className="flex flex-col items-center h-full justify-end">
                    <div className="w-full bg-primary rounded-t-md rounded-b-xs h-[100%] shadow-xs" />
                    <span className="text-[10px] font-semibold text-primary mt-2">Paid</span>
                  </div>
                </div>

              </div>

              {/* Text Content */}
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-slate-900 mt-6 mb-2">
                Agents
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                List on behalf of your landlords, and protect your commission with a system built to keep everyone accountable.
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-semibold tracking-wider uppercase mb-5">
                COMING SOON: AGENT PORTAL
              </div>
            </div>

            {/* CTA Button matching card radius */}
            <button
              id="btn-join-agent"
              onClick={() => onJoinWaitlist('agent')}
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs shadow-xs transition-all cursor-pointer"
            >
              <span>Join as an Agent</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
