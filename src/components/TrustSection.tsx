import { Check, ShieldCheck, Video, UserCheck, MapPin, Star } from 'lucide-react';
import propertyImage from '../assets/images/premium_lagos_apartment_1784324873120.jpg';

export default function TrustSection() {
  const points = [
    {
      id: 'photo-check',
      icon: <Check className="w-4 h-4 text-emerald-800 font-bold" />,
      text: "Every listing photo is checked to make sure it's real, not copied from somewhere else.",
    },
    {
      id: 'video-walkthrough',
      icon: <Video className="w-4 h-4 text-emerald-800 font-bold" />,
      text: "Every property comes with a video walkthrough, so you see exactly what you're getting.",
    },
    {
      id: 'stakeholder-verify',
      icon: <UserCheck className="w-4 h-4 text-emerald-800 font-bold" />,
      text: "Every landlord and agent is verified before their listing goes live.",
    },
    {
      id: 'verified-badge',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-800 font-bold" />,
      text: "Trusted listings carry a verified badge you can spot at a glance.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Verification Points */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-700 bg-[#D4F5E0] px-3 py-1 rounded-full border border-emerald-200/60 uppercase tracking-wider inline-block">
                Anti-Fraud Verification
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                How We Keep Listings Real
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                Multi-layer verification safeguards designed to eliminate fake listings, duplicate photos, and ghost agents.
              </p>
            </div>

            {/* List of Points with Pale Mint Badges */}
            <div className="space-y-4 pt-2">
              {points.map((pt) => (
                <div key={pt.id} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all">
                  <div className="w-7 h-7 rounded-full bg-[#D4F5E0] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300/40">
                    {pt.icon}
                  </div>
                  <p className="text-slate-700 text-base font-semibold leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Property Card UI Mockup with Verified Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-4 border border-slate-200 shadow-xl ring-1 ring-slate-100 relative group">
              
              {/* Property Image Container */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={propertyImage}
                  alt="Verified Lekki Residence Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Pale Mint Verified Badge Overlay */}
                <div className="absolute top-3 right-3 bg-[#D4F5E0] text-emerald-900 border border-emerald-300/60 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Verified Listing</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-mono">
                  <Video className="w-3.5 h-3.5 text-purple-300" />
                  <span>3D Walkthrough Included</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 space-y-3 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      Lekki Haven Court (3-Bedroom Serviced)
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      Lekki Phase 1, Lagos State
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400 font-mono">Verified Landlord Direct</span>
                  <span className="text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-lg">
                    Safe Payment Escrow
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
