import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Search, Calendar, ShieldCheck, Lock, Key, 
  CheckCircle2, ChevronDown, MessageCircle, Globe2, Building2, UserCheck, Video 
} from 'lucide-react';
import { PageType } from '../types';
import propertyImage from '../assets/images/premium_lagos_apartment_1784324873120.jpg';

interface HowItWorksPageProps {
  onNavigateHome: (anchor?: string) => void;
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
}

export default function HowItWorksPage({ onNavigateHome, onJoinWaitlist }: HowItWorksPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const detailedSteps = [
    {
      step: 1,
      icon: <Search className="w-6 h-6 text-purple-600" />,
      title: '1. Browse Real, Verified Listings',
      shortCopy: 'Explore verified listings in your area, with real photos and honest details.',
      expandedCopy: 'We eliminate duplicates and stolen photos. Every listing published on MainTown Realty undergoes algorithmic image verification and mandatory video walkthroughs so you see the property in its exact physical state before making any commitments.',
    },
    {
      step: 2,
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: '2. Book Transparent Inspections',
      shortCopy: 'Book a visit directly with the landlord or agent, right from the app.',
      expandedCopy: 'No more paying extortionate "inspection fees" to unverified middlemen. Schedule direct visits or request live video tours with verified property owners at times that suit your calendar.',
    },
    {
      step: 3,
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: '3. Secure Instant Verification',
      shortCopy: 'We confirm your details securely, so landlords can trust you from day one.',
      expandedCopy: 'Landlords insist on a full year upfront because they fear tenant defaults. Our secure KYC and credit profile verification builds instant trust, enabling landlords to accept monthly payments with complete confidence.',
    },
    {
      step: 4,
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: '4. Protected Escrow Payments',
      shortCopy: 'Your payment is protected until everything checks out — no more handing over cash and hoping for the best.',
      expandedCopy: 'Your rental deposit is held safely in escrow. Funds are only transferred to the landlord once you inspect the keys, confirm physical move-in condition, and sign off on the digital tenancy agreement.',
    },
    {
      step: 5,
      icon: <Key className="w-6 h-6 text-purple-600" />,
      title: '5. Move In & Build Credit',
      shortCopy: 'Get your keys and settle in, knowing everything was done right.',
      expandedCopy: 'Settle into your home with automated monthly payments via bank transfer or card. Every punctual payment builds your positive rental score, opening doors for future credit and property acquisition.',
    },
  ];

  const faqs = [
    {
      question: 'Is MainTown Realty available to use right now?',
      answer: "We're in the building phase. Right now you can browse example listings, reach us directly on WhatsApp, and join the waitlist to be first in line as features go live.",
    },
    {
      question: 'How do I know a listing is real?',
      answer: 'Every property we list is checked — photos verified, a video walkthrough included, and the landlord or agent confirmed — before it goes live.',
    },
    {
      question: "I'm a landlord — how do I list my property?",
      answer: "Join the waitlist and select 'Landlord' — our team will reach out on WhatsApp to walk you through listing your property.",
    },
    {
      question: 'When is the Canada option launching?',
      answer: "We're building this out and will share updates with everyone on the waitlist first.",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-white text-slate-800 font-sans">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          id="how-page-back-btn"
          onClick={() => onNavigateHome()}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-purple-600 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Hero Title */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>Detailed Infrastructure</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How MainTown Realty Works
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed">
            A transparent look at the platform we're building for Nigerian renters, landlords, and expats moving to Canada.
          </p>
        </div>

      </div>

      {/* Detailed Step-by-Step Walkthrough */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 5-Step Rental Journey
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Here is how every transaction flows safely through MainTown Realty.
            </p>
          </div>

          <div className="space-y-8">
            {detailedSteps.map((item) => (
              <div
                key={item.step}
                id={`detail-step-${item.step}`}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start gap-6 text-left"
              >
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 shrink-0">
                  {item.icon}
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-800 font-semibold text-sm sm:text-base">
                    "{item.shortCopy}"
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {item.expandedCopy}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Verification Standard Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-emerald-800 bg-[#D4F5E0] px-3 py-1 rounded-full border border-emerald-200/60 uppercase tracking-wider">
                Verification Protocol
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Verification System
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Before any home is listed on MainTown Realty, it passes a 4-point verification check to guarantee authenticity:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Reverse Image & Duplicate Checks</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Cross-referencing photos across databases to stop stolen image reposts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <Video className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Mandatory Unedited Video Tours</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Continuous video walkthroughs proving the exact current physical condition.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <UserCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Landlord & Agent Identity KYC</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Government-issued ID and title document verification before listing access.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">The "Verified" Pale Mint Badge</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Instantly recognizable pale mint green badge with a clean white checkmark.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl border border-slate-800 max-w-md w-full space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-300 uppercase">MainTown Verification Seal</span>
                  <div className="flex items-center gap-1.5 bg-[#D4F5E0] text-emerald-900 text-xs font-extrabold px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-800 relative">
                  <img src={propertyImage} alt="Verified Listing Preview" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2 text-xs">
                  <p className="text-slate-300 font-medium">✓ Title Ownership Verified</p>
                  <p className="text-slate-300 font-medium">✓ Physical Walkthrough Confirmed</p>
                  <p className="text-slate-300 font-medium">✓ Zero Unlisted Inspection Fees</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all text-left"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-base sm:text-lg text-slate-900 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      openFaq === index ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Founder & Group Trust Blurb */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-display text-xl font-bold text-slate-900">
            About MainTown Realty & SmartyHub Group
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
            "MainTown Realty is built by a team with real, hands-on experience in the Nigerian real estate market, under SmartyHub Group. We're building this the right way — carefully, and in the open."
          </p>
        </div>
      </section>

      {/* Page 2 Bottom CTAs */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Join the Future of Renting?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base">
            Secure your spot on the priority waitlist or talk to our founders directly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              id="how-page-join-cta"
              onClick={() => onJoinWaitlist('tenant')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-xl text-sm transition-all cursor-pointer"
            >
              Join the Waitlist
            </button>
            <a
              id="how-page-wa-cta"
              href="https://wa.me/2349061808874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-xl text-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-50" />
              <span>Chat on WhatsApp (+234 906 180 8874)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
