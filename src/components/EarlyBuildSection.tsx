import { Check, Clock, ArrowRight, Calendar } from 'lucide-react';

export default function EarlyBuildSection() {
  const stages = [
    {
      num: '01',
      title: 'Idea',
      subtitle: 'Thesis & Problem Validation',
      status: 'Done',
      statusType: 'done',
      icon: <Check className="w-3.5 h-3.5" />,
    },
    {
      num: '02',
      title: 'Prototype',
      subtitle: 'This Website & Concept Validation',
      status: 'In Progress',
      statusType: 'current',
      icon: <Clock className="w-3.5 h-3.5" />,
    },
    {
      num: '03',
      title: 'Private Beta',
      subtitle: 'Initial Cohort Testing in Lagos',
      status: 'Next',
      statusType: 'next',
      icon: <ArrowRight className="w-3.5 h-3.5" />,
    },
    {
      num: '04',
      title: 'Public Launch',
      subtitle: 'General Availability in Lagos & Canada',
      status: 'Planned',
      statusType: 'planned',
      icon: <Calendar className="w-3.5 h-3.5" />,
    },
  ];

  const scopePills = [
    { label: 'Verified Listings', isDev: false },
    { label: 'WhatsApp-Based Inquiries', isDev: false },
    { label: 'AI Document Verification (in development)', isDev: true },
    { label: 'Waitlist Onboarding', isDev: false },
  ];

  return (
    <section id="early-build" className="py-20 md:py-28 bg-slate-50/50 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            EARLY BUILD
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            We're Building the First Version Now
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            No customer logos yet. No growth charts. Just a clear problem, a working thesis, and the first version taking shape.
          </p>
        </div>

        {/* 4-Stage Progress Tracker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14 text-left">
          {stages.map((stage) => {
            const isCurrent = stage.statusType === 'current';
            const isDone = stage.statusType === 'done';

            return (
              <div
                key={stage.num}
                id={`stage-card-${stage.num}`}
                className={`p-6 rounded-2xl transition-all relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-2 border-primary shadow-xs'
                    : 'bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Card Top: Number & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold tracking-wider ${
                    isCurrent ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {stage.num}
                  </span>

                  {/* Status Pill Badge */}
                  {isDone && (
                    <span className="inline-flex items-center gap-1 bg-[#D4F5E0] text-emerald-800 border border-emerald-300/40 text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>{stage.status}</span>
                    </span>
                  )}

                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 bg-purple-50 text-primary border border-purple-200 text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span>{stage.status}</span>
                    </span>
                  )}

                  {stage.statusType === 'next' && (
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md">
                      <span>{stage.status}</span>
                    </span>
                  )}

                  {stage.statusType === 'planned' && (
                    <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-400 border border-slate-200 text-[10px] font-semibold font-mono px-2 py-0.5 rounded-md">
                      <span>{stage.status}</span>
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div>
                  <h3 className="font-sans text-lg font-semibold text-slate-900 mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Bottom Active Indicator subtle bar */}
                {isCurrent && (
                  <div className="mt-5 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-medium text-primary">
                    <span className="font-mono">Active Milestone</span>
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* First Release Scope Box */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-xs text-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-4">
            FIRST RELEASE SCOPE
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {scopePills.map((pill) => (
              <div
                key={pill.label}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  pill.isDev
                    ? 'bg-purple-50/80 border border-purple-200 text-purple-900 shadow-2xs'
                    : 'bg-slate-50 border border-slate-200/90 text-slate-700'
                }`}
              >
                {pill.isDev && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                )}
                <span>{pill.label}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs mt-4 font-normal">
            Features currently in active development for initial private testing cohort.
          </p>
        </div>

      </div>
    </section>
  );
}
