import { Search, Calendar, ShieldCheck, Lock, Key, Home, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface HowItWorksProps {
  onNavigateHowItWorks?: (page: PageType) => void;
}

export default function HowItWorks({ onNavigateHowItWorks }: HowItWorksProps) {
  const steps = [
    {
      step: 1,
      id: 'browse',
      icon: <Search className="w-5 h-5 text-purple-300" />,
      title: 'Browse',
      description: 'Explore verified listings in your area, with real photos and honest details.',
    },
    {
      step: 2,
      id: 'inspect',
      icon: <Calendar className="w-5 h-5 text-purple-300" />,
      title: 'Inspect',
      description: 'Book a visit directly with the landlord or agent, directly on the platform.',
    },
    {
      step: 3,
      id: 'verify',
      icon: <ShieldCheck className="w-5 h-5 text-purple-300" />,
      title: 'Verify',
      description: 'We confirm your details securely, so landlords can trust you from day one.',
    },
    {
      step: 4,
      id: 'pay-safely',
      icon: <Lock className="w-5 h-5 text-purple-300" />,
      title: 'Pay Safely',
      description: 'Your payment is protected until everything checks out — no more handing over cash and hoping for the best.',
    },
    {
      step: 5,
      id: 'move-in',
      icon: <Key className="w-5 h-5 text-purple-300" />,
      title: 'Move In',
      description: 'Get your keys and settle in, knowing everything was done right.',
    },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            VISUAL PATHWAY
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Here's the Journey We're Building Toward
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
            A seamless stepping-stone experience leading you straight to the keys of your next home.
          </p>
        </div>

        {/* Winding Pathway Container */}
        <div className="relative py-6">

          {/* Desktop Curved Winding Path Line */}
          <div className="hidden lg:block absolute top-[70px] left-[6%] right-[6%] h-24 pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path
                d="M 20 40 Q 250 -10, 500 50 T 980 40"
                stroke="#a855f7"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="opacity-40"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="lg:hidden absolute top-8 bottom-16 left-8 w-1 bg-gradient-to-b from-primary via-purple-500 to-primary/40 opacity-40 z-0" />

          {/* Stepping Stone Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((item) => (
              <div
                key={item.id}
                id={`journey-step-${item.id}`}
                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Node Stepping Marker */}
                <div className="relative shrink-0 mr-5 lg:mr-0 lg:mb-6">
                  {/* Outer Box */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:border-primary group-hover:scale-105 transition-all duration-300 relative z-10">
                    <div className="p-2.5 bg-primary/20 rounded-xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white font-semibold text-xs flex items-center justify-center shadow-sm border-2 border-slate-950 z-20">
                    {item.step}
                  </div>
                </div>

                {/* Content Copy */}
                <div className="space-y-2 max-w-xs">
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Destination: House Silhouette Icon */}
          <div className="mt-16 text-center flex flex-col items-center justify-center relative z-10">
            <div className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-purple-700 text-white shadow-xl shadow-primary/20 border border-purple-400/30 flex items-center gap-3">
              <Home className="w-5 h-5 text-amber-300" />
              <span className="font-sans font-semibold text-sm tracking-wide text-white">
                Destination: Verified Safe Home
              </span>
            </div>
          </div>

        </div>

        {/* Learn More Action Button */}
        {onNavigateHowItWorks && (
          <div className="mt-14 text-center">
            <button
              id="journey-learn-more-btn"
              onClick={() => onNavigateHowItWorks('how-it-works')}
              className="inline-flex items-center gap-2 px-7 h-12 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              <span>Learn More About How It Works</span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
