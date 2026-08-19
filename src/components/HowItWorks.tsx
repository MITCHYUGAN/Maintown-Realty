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
      icon: <Search className="w-5 h-5 text-purple-600" />,
      title: 'Browse',
      description: 'Explore verified listings in your area, with real photos and honest details.',
    },
    {
      step: 2,
      id: 'inspect',
      icon: <Calendar className="w-5 h-5 text-purple-600" />,
      title: 'Inspect',
      description: 'Book a visit directly with the landlord or agent, right from the app.',
    },
    {
      step: 3,
      id: 'verify',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      title: 'Verify',
      description: 'We confirm your details securely, so landlords can trust you from day one.',
    },
    {
      step: 4,
      id: 'pay-safely',
      icon: <Lock className="w-5 h-5 text-purple-600" />,
      title: 'Pay Safely',
      description: 'Your payment is protected until everything checks out — no more handing over cash and hoping for the best.',
    },
    {
      step: 5,
      id: 'move-in',
      icon: <Key className="w-5 h-5 text-purple-600" />,
      title: 'Move In',
      description: 'Get your keys and settle in, knowing everything was done right.',
    },
  ];

  return (
    <section id="journey" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <span>Visual Pathway</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Here's the Journey We're Building Toward
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A seamless stepping-stone experience leading you straight to the keys of your next home.
          </p>
        </div>

        {/* Winding Pathway Graphic Container */}
        <div className="relative py-8">

          {/* Desktop Curved Winding Path Line (SVG Background) */}
          <div className="hidden lg:block absolute top-[68px] left-[6%] right-[6%] h-24 pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path
                d="M 20 40 Q 250 -10, 500 50 T 980 40"
                stroke="#8B5CF6"
                strokeWidth="4"
                strokeDasharray="8 8"
                className="opacity-70 animate-pulse"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="lg:hidden absolute top-8 bottom-16 left-8 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-400 opacity-40 z-0" />

          {/* Stepping Stone Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={item.id}
                id={`journey-step-${item.id}`}
                className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Node Stepping Marker */}
                <div className="relative shrink-0 mr-5 lg:mr-0 lg:mb-6">
                  {/* Outer Pulsing Aura */}
                  <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border-2 border-purple-500/60 flex items-center justify-center shadow-lg shadow-purple-950/50 group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <div className="p-2 bg-white/10 rounded-xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md border-2 border-slate-900 z-20">
                    {item.step}
                  </div>
                </div>

                {/* Content Copy */}
                <div className="space-y-2 max-w-xs">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Destination: House Silhouette Icon */}
          <div className="mt-16 text-center flex flex-col items-center justify-center relative z-10">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl border-4 border-slate-800 ring-1 ring-purple-500/50 flex flex-col items-center gap-2">
              <Home className="w-10 h-10 text-amber-200" />
              <span className="font-display font-bold text-sm tracking-wide text-purple-100">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-purple-50 text-slate-950 font-bold rounded-2xl shadow-xl transition-all text-sm cursor-pointer"
            >
              <span>Learn More About How It Works</span>
              <ChevronRight className="w-4 h-4 text-purple-600" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
