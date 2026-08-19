import { FileX2, HelpCircle, Repeat, Plane } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      id: 'fake-listings',
      icon: <FileX2 className="w-6 h-6 text-purple-600" />,
      title: 'Fake Listings & Scam Agents',
      description: "Paid an inspection fee to someone who vanished right after? You're not alone.",
    },
    {
      id: 'disappearing-agents',
      icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
      title: 'Agents Who Disappear',
      description: "Once they've got your money, some agents are never heard from again.",
    },
    {
      id: 'landlords-chasing-rent',
      icon: <Repeat className="w-6 h-6 text-purple-600" />,
      title: 'Landlords Chasing Rent',
      description: 'Calling tenants every month for rent is exhausting for everyone involved.',
    },
    {
      id: 'moving-abroad',
      icon: <Plane className="w-6 h-6 text-purple-600" />,
      title: 'Moving Abroad, No Home Lined Up',
      description: "Relocating to Canada shouldn't mean landing with nowhere safe to stay.",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">
            The Reality of Renting Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            You've Probably Felt This Before
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Traditional Nigerian renting is broken for renters, landlords, and expats alike.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => (
            <div
              key={item.id}
              id={`problem-card-${item.id}`}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
