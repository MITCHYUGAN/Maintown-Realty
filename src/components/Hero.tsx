import { motion } from 'motion/react';
import { ChevronRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/premium_lagos_apartment_1784324873120.jpg';

interface HeroProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
  onScrollToWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist, onScrollToWaitlist }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Verified homes. Trusted renting.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
            >
              Renting Shouldn't Feel Like a Gamble
            </motion.h1>

            {/* Subheadline - EXACT COPY */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Verified listings. Safe payments. No more disappearing agents. MainTown Realty is being built for renters in Nigeria — and Nigerians starting their next chapter in Canada.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                id="hero-primary-cta"
                onClick={onScrollToWaitlist}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-xl shadow-purple-200/80 hover:shadow-purple-300 transition-all text-base cursor-pointer"
              >
                Join the Waitlist
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onJoinWaitlist('landlord')}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-purple-50/40 text-slate-800 hover:text-purple-700 font-bold rounded-2xl border border-slate-200 hover:border-purple-200 transition-all text-base cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-purple-600" />
                I'm a Landlord or Agent
              </button>
            </motion.div>

            {/* Trust Pill Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-3"
            >
              <div className="flex items-center gap-1.5 bg-[#D4F5E0] text-emerald-900 px-2.5 py-1 rounded-full border border-emerald-200/60 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pre-launch Waitlist Open</span>
              </div>
              <span className="text-slate-400">•</span>
              <span>Part of SmartyHub Group</span>
              <span className="text-slate-400">•</span>
              <span>Lagos & Canada Markets</span>
            </motion.div>

          </div>

          {/* Right Column: Editorial Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 bg-slate-100 aspect-[4/3] sm:aspect-[16/11]"
            >
              <img
                src={heroImage}
                alt="Modern Lagos apartment interior photography"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Verified Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">Modern Lekki Phase 1 Living</p>
                  <p className="text-[11px] text-slate-500">Verified Photos • Video Walkthrough Included</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#D4F5E0] text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200/50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
