import { Check, ShieldCheck, Video, UserCheck, MapPin, Star } from 'lucide-react';
import propertyImage from '../assets/images/premium_lagos_apartment_1784324873120.jpg';

export default function TrustSection() {
  const points = [
    {
      id: 'photo-check',
      icon: <Check className="w-4 h-4 text-emerald-800" />,
      text: "Every listing photo is checked to make sure it's real, not copied from somewhere else.",
    },
    {
      id: 'video-walkthrough',
      icon: <Video className="w-4 h-4 text-emerald-800" />,
      text: "Every property comes with a video walkthrough, so you see exactly what you're getting.",
    },
    {
      id: 'stakeholder-verify',
      icon: <UserCheck className="w-4 h-4 text-emerald-800" />,
      text: "Every landlord and agent is verified before their listing goes live.",
    },
    {
      id: 'verified-badge',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-800" />,
      text: "Trusted listings carry a verified badge you can spot at a glance.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Verification Points */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                ANTI-FRAUD VERIFICATION
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                How We Keep Listings Real
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal leading-relaxed">
                Multi-layer verification safeguards designed to eliminate fake listings, duplicate photos, and ghost agents.
              </p>
            </div>

            {/* List of Points with Pale Mint Badges */}
            <div className="space-y-4 pt-2">
              {points.map((pt) => (
                <div key={pt.id} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all shadow-xs">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    {pt.icon}
                  </div>
                  <p className="text-foreground text-base font-medium leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Property Card UI Mockup with Verified Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-card rounded-2xl p-4 border border-border shadow-lg relative group">
              
              {/* Property Image Container */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={propertyImage}
                  alt="Verified Lekki Residence Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Pale Mint Verified Badge Overlay */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-200 font-semibold text-xs px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Listing</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-primary" />
                  <span>3D Walkthrough Included</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 space-y-3 text-left">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-base text-foreground">
                      Lekki Haven Court (3-Bedroom Serviced)
                    </h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      Lekki Phase 1, Lagos State
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>4.9</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-medium">
                  <span className="text-muted-foreground">Verified Landlord Direct</span>
                  <span className="text-primary font-semibold bg-primary/10 px-2.5 py-1 rounded-lg">
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
