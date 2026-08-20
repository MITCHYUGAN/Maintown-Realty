import MainTownLogo from "./MainTownLogo";

export default function WhereWeAreSection() {
  const stats = [
    {
      value: "Lagos",
      label: "Where we're starting",
    },
    {
      value: "3",
      label: "Neighborhoods live at launch",
    },
    {
      value: "100%",
      label: "Listings checked before going live",
    },
    {
      value: "2",
      label: "Markets we're building for: Nigeria & Canada",
    },
  ];

  return (
    <section id="where-we-are" className="py-20 md:py-28 bg-white border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & 2x2 Metric Stats */}
          <div className="lg:col-span-6 space-y-9 text-left">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">WHERE WE ARE TODAY</p>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.18]">
                Starting in Lagos,
                <br />
                building for two markets.
              </h2>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} id={`metric-${stat.value}`} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold font-sans text-primary tracking-tight">{stat.value}</div>
                  <p className="text-slate-600 text-sm leading-snug font-normal">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder / Team Statement Card */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-11 shadow-xs relative flex flex-col justify-between">
              {/* Quote Mark & Content with Left Accent Line */}
              <div className="flex gap-6 items-start">
                {/* Purple Accent Left Bar */}
                <div className="w-1 rounded-full bg-primary shrink-0 self-stretch my-1" />

                <div className="space-y-5 flex-1">
                  {/* Subtle Quote SVG Glyphs */}
                  <div className="text-slate-300 -mb-2">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Body Statement */}
                  <blockquote className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                    “MainTown Realty is built by a team with real, hands-on experience in the Nigerian real estate market, under SmartyHub Group. We're building this carefully, in the open, with AI at
                    the center of how we verify trust.”
                  </blockquote>

                  {/* Author / Organization Attribution */}
                  <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                    <MainTownLogo variant="light-bg" size="sm" />
                    <div>
                      <div className="font-sans text-sm font-semibold text-slate-900">The MainTown Realty Team</div>
                      <div className="text-xs text-slate-500 font-normal">Part of SmartyHub Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
