import { User, Building, Users, ChevronRight } from 'lucide-react';

interface BenefitsSectionProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
}

export default function BenefitsSection({ onJoinWaitlist }: BenefitsSectionProps) {
  const cards = [
    {
      id: 'tenant',
      role: 'tenant' as const,
      icon: <User className="w-6 h-6 text-purple-600" />,
      title: 'Tenants',
      description: 'Browse verified listings, book inspections, and eventually pay your rent safely, one month at a time.',
      buttonText: 'Join as a Tenant',
    },
    {
      id: 'landlord',
      role: 'landlord' as const,
      icon: <Building className="w-6 h-6 text-purple-600" />,
      title: 'Landlords',
      description: 'List your property, connect with verified tenants, and get paid reliably — without the back-and-forth of chasing rent.',
      buttonText: 'Join as a Landlord',
    },
    {
      id: 'agent',
      role: 'agent' as const,
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: 'Agents',
      description: 'List on behalf of your landlords, and protect your commission with a system built to keep everyone accountable.',
      buttonText: 'Join as an Agent',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">
            Designed for the Entire Ecosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Whichever Side You're On, We've Got You
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            A unified infrastructure built to restore trust and ease for every stakeholder.
          </p>
        </div>

        {/* 3 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`stakeholder-card-${card.id}`}
              className="bg-slate-50/70 p-8 rounded-3xl border border-slate-200/80 hover:border-purple-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                <div className="p-3.5 w-12 h-12 rounded-2xl bg-purple-100/60 border border-purple-200/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <button
                id={`btn-join-${card.id}`}
                onClick={() => onJoinWaitlist(card.role)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-white hover:bg-purple-600 text-slate-900 hover:text-white font-bold rounded-xl border border-slate-200 hover:border-purple-600 transition-all text-sm cursor-pointer shadow-xs group-hover:shadow-md"
              >
                <span>{card.buttonText}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
