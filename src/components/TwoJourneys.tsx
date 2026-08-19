import { useState } from 'react';
import { MapPin, Globe2, ChevronRight, CheckCircle2, Building2, ShieldCheck, Sparkles } from 'lucide-react';

interface TwoJourneysProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent', market: 'Nigeria' | 'Canada') => void;
}

export default function TwoJourneys({ onJoinWaitlist }: TwoJourneysProps) {
  const [activeTab, setActiveTab] = useState<'Nigeria' | 'Canada'>('Nigeria');

  return (
    <section id="two-journeys" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            CROSS-BORDER & LOCAL HOUSING
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Built for Two Journeys
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            Whether you're renting locally in Lagos or relocating across oceans, we're building a safer, verified path.
          </p>
        </div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/80 border border-slate-200/80 rounded-2xl gap-1.5">
            <button
              id="tab-btn-nigeria"
              onClick={() => setActiveTab('Nigeria')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'Nigeria'
                  ? 'bg-white text-primary border border-slate-200/80 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Renting in Nigeria</span>
            </button>

            <button
              id="tab-btn-canada"
              onClick={() => setActiveTab('Canada')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'Canada'
                  ? 'bg-white text-primary border border-slate-200/80 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Relocating to Canada</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-md uppercase font-semibold tracking-wider ${
                activeTab === 'Canada'
                  ? 'bg-purple-100 text-primary border border-purple-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Tab Card Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'Nigeria' ? (
            <div className="bg-white border-2 border-primary/40 rounded-3xl p-8 sm:p-12 text-left shadow-sm transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="md:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Primary Market • Lagos First</span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-slate-900">
                    Renting in Nigeria
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    Starting in Lagos. Browse listings, get verified, and rent with confidence — no more guessing games.
                  </p>

                  <div className="pt-2">
                    <button
                      id="tab-nigeria-cta"
                      onClick={() => onJoinWaitlist('tenant', 'Nigeria')}
                      className="inline-flex items-center gap-2 px-7 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-xs text-sm cursor-pointer transition-all"
                    >
                      <span>Join the Waitlist (Nigeria)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Highlight Box */}
                <div className="md:col-span-5">
                  <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-2xs">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center justify-center text-primary">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-base">Lagos Verified Fleet</div>
                      <div className="text-slate-500 text-xs mt-1">Yaba • Lekki • Ikeja • Victoria Island</div>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-2xs border border-slate-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% On-Ground Inspection</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="bg-white border-2 border-primary/40 rounded-3xl p-8 sm:p-12 text-left shadow-sm transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="md:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Cross-Border Pipeline</span>
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-slate-900">
                    Relocating to Canada
                  </h3>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    We're actively building partnerships to bring Canada property listings to our platform. MainTown connects you with licensed local partners — join the waitlist to be notified when this launches.
                  </p>

                  <div className="pt-2">
                    <button
                      id="tab-canada-cta"
                      onClick={() => onJoinWaitlist('tenant', 'Canada')}
                      className="inline-flex items-center gap-2 px-7 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-xs text-sm cursor-pointer transition-all"
                    >
                      <span>Join the Waitlist (Canada Pipeline)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Highlight Box */}
                <div className="md:col-span-5">
                  <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-2xs">
                    <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center justify-center text-primary">
                      <Globe2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-base">Toronto • Calgary • Vancouver</div>
                      <div className="text-slate-500 text-xs mt-1">Licensed Partner Network</div>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 text-[11px] font-semibold text-slate-800 flex items-center gap-1.5 shadow-2xs border border-slate-100">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Pre-Arrival Verification</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
