import { FileX2, HelpCircle, Repeat, Plane } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      id: 'fake-listings',
      icon: <FileX2 className="w-5 h-5 text-primary" />,
      title: 'Fake Listings & Scam Agents',
      description: "Paid an inspection fee to someone who vanished right after? You're not alone.",
    },
    {
      id: 'disappearing-agents',
      icon: <HelpCircle className="w-5 h-5 text-primary" />,
      title: 'Agents Who Disappear',
      description: "Once they've got your money, some agents are never heard from again.",
    },
    {
      id: 'landlords-chasing-rent',
      icon: <Repeat className="w-5 h-5 text-primary" />,
      title: 'Landlords Chasing Rent',
      description: 'Calling tenants every month for rent is exhausting for everyone involved.',
    },
    {
      id: 'moving-abroad',
      icon: <Plane className="w-5 h-5 text-primary" />,
      title: 'Moving Abroad, No Home Lined Up',
      description: "Relocating to Canada shouldn't mean landing with nowhere safe to stay.",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-white border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            THE REALITY OF RENTING TODAY
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            You've Probably Felt This Before
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
            Traditional renting in Nigeria is broken for renters, landlords, and relocating expats alike.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {problems.map((item) => (
            <div
              key={item.id}
              id={`problem-card-${item.id}`}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-primary flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-sans text-lg font-semibold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
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
