import { useState } from 'react';
import { MapPin, Globe2, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

interface TwoJourneysProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent', market: 'Nigeria' | 'Canada') => void;
}

export default function TwoJourneys({ onJoinWaitlist }: TwoJourneysProps) {
  const [activeTab, setActiveTab] = useState<'Nigeria' | 'Canada'>('Nigeria');

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">
            Cross-Border & Local Housing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Two Journeys
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Whether you're renting locally in Lagos or relocating across oceans, we're building a safer path.
          </p>
        </div>

        {/* Tab Selector Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm gap-1">
            <button
              id="tab-btn-nigeria"
              onClick={() => setActiveTab('Nigeria')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'Nigeria'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Renting in Nigeria</span>
            </button>

            <button
              id="tab-btn-canada"
              onClick={() => setActiveTab('Canada')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'Canada'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Relocating to Canada</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-mono uppercase font-extrabold border border-amber-200">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Active Tab Card Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'Nigeria' ? (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Primary Market • Lagos First</span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Phase 1</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900">
                Renting in Nigeria
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Starting in Lagos. Browse listings, get verified, and rent with confidence — no more guessing games.
              </p>

              <div className="pt-2">
                <button
                  id="tab-nigeria-cta"
                  onClick={() => onJoinWaitlist('tenant', 'Nigeria')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md shadow-purple-100 text-sm cursor-pointer transition-all"
                >
                  Join the Waitlist (Nigeria)
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Cross-Border Pipeline</span>
                </div>
                <span className="text-xs font-mono font-semibold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Coming Soon
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900">
                Relocating to Canada
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Moving to Canada? We're building a way for you to line up verified housing before you land. Join the waitlist to be first in line.
              </p>

              <div className="pt-2">
                <button
                  id="tab-canada-cta"
                  onClick={() => onJoinWaitlist('tenant', 'Canada')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md shadow-purple-100 text-sm cursor-pointer transition-all"
                >
                  Join the Waitlist (Canada Pipeline)
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
