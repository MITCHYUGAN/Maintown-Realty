import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Landmark, MapPin, CheckCircle, Star, Bell } from 'lucide-react';

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'search' | 'schedule' | 'dashboard'>('search');

  const tabs = [
    { id: 'search', label: 'Property', icon: <Search className="w-4 h-4" /> },
    { id: 'schedule', label: 'Rent', icon: <Calendar className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <Landmark className="w-4 h-4" /> },
  ];

  return (
    <section id="preview" className="py-24 bg-white relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        
        {/* Header with Title and Clear Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              PRODUCT WALKTHROUGH
            </span>
            <span className="text-slate-300 font-normal">•</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              CONCEPT PREVIEW · NOT YET BUILT
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            See the MainTown Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            A premium, high-speed proptech workspace tailored for Nigerian housing. Switch tabs to explore different panels of our client dashboard.
          </p>
        </div>

        {/* Interactive Layout: Tabs Left, Phone Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Tab Descriptions */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
              TOGGLE APPLICATION PANELS
            </span>

            <div className="space-y-3">
              {/* Property Search Description */}
              <button
                id="preview-tab-search"
                onClick={() => setActiveTab('search')}
                className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'search'
                    ? 'bg-white border-2 border-primary shadow-sm'
                    : 'bg-transparent border border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    activeTab === 'search'
                      ? 'bg-purple-50 border-purple-100 text-primary'
                      : 'bg-slate-100 border-slate-200/60 text-slate-500'
                  }`}>
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Vetted Property Search</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      Browse verified apartments across Lekki, VI, Ikeja, and Yaba. Listings detail both the yearly standard rent and your affordable monthly subscription.
                    </p>
                  </div>
                </div>
              </button>

              {/* Rent Schedule Description */}
              <button
                id="preview-tab-schedule"
                onClick={() => setActiveTab('schedule')}
                className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-white border-2 border-primary shadow-sm'
                    : 'bg-transparent border border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    activeTab === 'schedule'
                      ? 'bg-purple-50 border-purple-100 text-primary'
                      : 'bg-slate-100 border-slate-200/60 text-slate-500'
                  }`}>
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Monthly Rent Schedule</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      Track your 12-month payment timeline with checkmarks. Build solid credit history by making on-time digital rent payments.
                    </p>
                  </div>
                </div>
              </button>

              {/* Dashboard Description */}
              <button
                id="preview-tab-dashboard"
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-white border-2 border-primary shadow-sm'
                    : 'bg-transparent border border-transparent hover:bg-slate-50'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    activeTab === 'dashboard'
                      ? 'bg-purple-50 border-purple-100 text-primary'
                      : 'bg-slate-100 border-slate-200/60 text-slate-500'
                  }`}>
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Secure Landlord Ledger</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                      For landlords: View portfolio performance, active units, escrow receipts, automatic collections, and verified credit ratings of your tenants.
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Smartphone Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-[340px] h-[680px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl shadow-slate-950/20 border-4 border-slate-800 ring-1 ring-slate-900">
              
              {/* Dynamic Island Speaker */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-xl z-20 flex items-center justify-between px-3">
                <div className="w-3.5 h-3.5 bg-zinc-900 rounded-full border border-zinc-800" />
                <div className="w-12 h-1 bg-zinc-900 rounded-full" />
                <div className="w-2.5 h-2.5 bg-purple-950 rounded-full" />
              </div>

              {/* Phone Internal Screen */}
              <div className="w-full h-full bg-slate-50 rounded-[32px] overflow-hidden relative flex flex-col pt-9 pb-4 text-left select-none">
                
                {/* Internal App Navigation Header */}
                <div className="px-5 py-3 border-b border-slate-100 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                      <span className="text-[11px] font-bold text-white">M</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-800">MainTown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-slate-400" />
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-semibold text-slate-600">CA</div>
                  </div>
                </div>

                {/* Main App Content Area */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
                  <AnimatePresence mode="wait">
                    {activeTab === 'search' && (
                      <motion.div
                        key="search-screen"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div className="flex gap-2 p-1.5 rounded-lg bg-white border border-slate-100 shadow-xs">
                          <Search className="w-4 h-4 text-slate-400 shrink-0 mt-1 ml-1" />
                          <input type="text" readOnly placeholder="Search Lekki, Yaba, Ikeja..." className="bg-transparent border-none outline-none text-xs text-slate-800 w-full" />
                        </div>

                        <div className="space-y-3">
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">VERIFIED HOMES</p>
                          
                          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs">
                            <div className="h-28 bg-purple-50 relative overflow-hidden flex items-center justify-center">
                              <div className="text-center p-4">
                                <MapPin className="w-6 h-6 text-primary mx-auto mb-1" />
                                <span className="text-[9px] font-mono text-primary font-semibold uppercase tracking-wide">LEKKI RESIDENCE</span>
                              </div>
                              <div className="absolute top-2 right-2 bg-[#D4F5E0] text-emerald-900 border border-emerald-300/50 font-semibold text-[9px] px-2 py-0.5 rounded-md">Verified</div>
                            </div>
                            <div className="p-3 space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-800">Lekki Haven Court</span>
                                <div className="flex items-center gap-0.5 text-xs text-amber-500 font-mono"><Star className="w-3 h-3 fill-amber-500" />4.9</div>
                              </div>
                              <p className="text-[10px] text-slate-400 flex items-center gap-0.5"><MapPin className="w-3 h-3" /> Lekki Phase 1, Lagos</p>
                              <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                                <span className="text-[10px] text-slate-400 font-mono">₦2.4M / yr upfront</span>
                                <span className="text-xs font-semibold text-primary bg-purple-50 px-2 py-0.5 rounded-md font-mono">₦200,000/mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'schedule' && (
                      <motion.div
                        key="schedule-screen"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div className="p-4 bg-white border border-slate-100 rounded-xl space-y-3 shadow-xs">
                          <p className="text-xs font-semibold text-slate-800">12-Month Rent Schedule</p>
                          <p className="text-[10px] text-slate-400">Paid regularly to build credit</p>

                          <div className="space-y-3 pt-3 border-t border-slate-50">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                              <div className="flex-1 flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-800">Month 1 (November)</span>
                                <span className="text-[10px] text-emerald-800 font-semibold bg-[#D4F5E0] px-1.5 py-0.5 rounded font-mono">Paid</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                              <div className="flex-1 flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-800">Month 2 (December)</span>
                                <span className="text-[10px] text-emerald-800 font-semibold bg-[#D4F5E0] px-1.5 py-0.5 rounded font-mono">Paid</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-4.5 h-4.5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                              </div>
                              <div className="flex-1 flex justify-between items-center">
                                <span className="text-xs font-medium text-slate-800">Month 3 (January)</span>
                                <span className="text-[10px] text-primary font-semibold bg-purple-50 px-1.5 py-0.5 rounded font-mono">Due Jan 31</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'dashboard' && (
                      <motion.div
                        key="dashboard-screen"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="p-3 bg-white border border-slate-100 rounded-lg shadow-2xs">
                            <p className="text-[9px] text-slate-400 font-medium uppercase font-mono">Total Payouts</p>
                            <p className="text-sm font-semibold text-slate-800 font-mono mt-0.5">₦8.4M</p>
                          </div>
                          <div className="p-3 bg-white border border-slate-100 rounded-lg shadow-2xs">
                            <p className="text-[9px] text-slate-400 font-medium uppercase font-mono">Active Units</p>
                            <p className="text-sm font-semibold text-slate-800 font-mono mt-0.5">3 Active</p>
                          </div>
                        </div>

                        <div className="p-3.5 bg-white border border-slate-100 rounded-xl space-y-2 shadow-2xs">
                          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-mono">Tenant Health Streak</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-800">Adebola Joseph (Apt 3)</span>
                            <span className="text-[10px] font-semibold text-emerald-800 bg-[#D4F5E0] px-1.5 py-0.5 rounded font-mono">99% Score</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Internal App Navigation Footer with 3 tabs */}
                <div className="px-5 pt-3.5 border-t border-slate-100 bg-white grid grid-cols-3 gap-1 text-center text-slate-400">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      id={`mock-btn-${tab.id}`}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                        activeTab === tab.id ? 'text-primary font-semibold' : 'hover:text-slate-700'
                      }`}
                    >
                      {tab.icon}
                      <span className="text-[9px] font-semibold tracking-tight">{tab.label}</span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
