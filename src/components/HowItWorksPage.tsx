import { useState } from "react";
import { ArrowLeft, Search, Calendar, ShieldCheck, Lock, Key, CheckCircle2, ChevronDown, MessageCircle, UserCheck, Video, ChevronRight } from "lucide-react";
import propertyImage from "../assets/images/premium_lagos_apartment_1784324873120.jpg";
import nigerianMarketImg from "../assets/images/nigerian_market_img_1787177486003.jpg";
import canadianMarketImg from "../assets/images/canadian_market_img_1787177505933.jpg";
import MainTownLogo from "./MainTownLogo";

interface HowItWorksPageProps {
  onNavigateHome: (anchor?: string) => void;
  onJoinWaitlist: (role: "tenant" | "landlord" | "agent") => void;
}

export default function HowItWorksPage({ onNavigateHome, onJoinWaitlist }: HowItWorksPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const detailedSteps = [
    {
      step: 1,
      icon: <Search className="w-5 h-5 text-primary" />,
      title: "1. Browse Real, Verified Listings",
      shortCopy: "Explore verified listings in your area, with real photos and honest details.",
      expandedCopy:
        "We eliminate duplicates and stolen photos. Every listing published on MainTown Realty undergoes algorithmic image verification and mandatory video walkthroughs so you see the property in its exact physical state before making any commitments.",
    },
    {
      step: 2,
      icon: <Calendar className="w-5 h-5 text-primary" />,
      title: "2. Book Transparent Inspections",
      shortCopy: "Book a visit directly with the landlord or agent, directly on the platform.",
      expandedCopy:
        'No more paying extortionate "inspection fees" to unverified middlemen. Schedule direct visits or request live video tours with verified property owners at times that suit your calendar.',
    },
    {
      step: 3,
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "3. Secure Instant Verification",
      shortCopy: "We confirm your details securely, so landlords can trust you from day one.",
      expandedCopy:
        "Landlords insist on a full year upfront because they fear tenant defaults. Our secure KYC and credit profile verification builds instant trust, enabling landlords to accept monthly payments with complete confidence.",
    },
    {
      step: 4,
      icon: <Lock className="w-5 h-5 text-primary" />,
      title: "4. Protected Escrow Payments",
      shortCopy: "Your payment is protected until everything checks out — no more handing over cash and hoping for the best.",
      expandedCopy:
        "Your rental deposit is held safely in escrow. Funds are only transferred to the landlord once you inspect the keys, confirm physical move-in condition, and sign off on the digital tenancy agreement.",
    },
    {
      step: 5,
      icon: <Key className="w-5 h-5 text-primary" />,
      title: "5. Move In & Build Credit",
      shortCopy: "Get your keys and settle in, knowing everything was done right.",
      expandedCopy:
        "Settle into your home with automated monthly payments via bank transfer or card. Every punctual payment builds your positive rental score, opening doors for future credit and property acquisition.",
    },
  ];

  const faqs = [
    {
      question: "Is MainTown Realty available to use right now?",
      answer: "We're in the building phase. Right now you can browse example listings, reach us directly on WhatsApp, and join the waitlist to be first in line as features go live.",
    },
    {
      question: "How do I know a listing is real?",
      answer: "Every property we list is checked — photos verified, a video walkthrough included, and the landlord or agent confirmed — before it goes live.",
    },
    {
      question: "I'm a landlord — how do I list my property?",
      answer: "Join the waitlist and select 'Landlord' — our team will reach out on WhatsApp to walk you through listing your property.",
    },
    {
      question: "When is the Canada option launching?",
      answer: "We're building this out and will share updates with everyone on the waitlist first.",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-white text-slate-900 font-sans">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Back Link */}
        <button
          id="how-page-back-btn"
          onClick={() => onNavigateHome()}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Hero Title */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">HOW IT WORKS</p>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">How MainTown Realty Works</h1>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            A closer look at the renting journey we're building — what happens at each step, how verification works, and where we are today.
          </p>
        </div>
      </div>

      {/* Detailed Step-by-Step Walkthrough */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 space-y-12">
          <div className="text-left space-y-2">
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">The 5-Step Rental Journey</h2>
            <p className="text-slate-600 text-sm font-normal">Here is how every transaction flows safely through MainTown Realty.</p>
          </div>

          <div className="space-y-5">
            {detailedSteps.map((item) => (
              <div
                key={item.step}
                id={`detail-step-${item.step}`}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start gap-6 text-left"
              >
                <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 shrink-0">{item.icon}</div>

                <div className="space-y-2.5 flex-1">
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-800 font-medium text-sm sm:text-base">"{item.shortCopy}"</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 font-normal">{item.expandedCopy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TWO MARKETS (Nigeria First. Canada Next.) */}
      <section id="two-markets" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-12">
          {/* Header */}
          <div className="text-left max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">TWO MARKETS</p>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.18]">Nigeria First. Canada Next.</h2>
          </div>

          {/* Two Market Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Renting in Nigeria */}
            <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs flex flex-col text-left">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                <img src={nigerianMarketImg} alt="Modern residence in Lagos, Nigeria" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 sm:p-9 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-sans text-2xl font-semibold text-slate-900 tracking-tight">Renting in Nigeria</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    We're starting in Lagos, where the problem is sharpest: inspection fees paid to strangers, listings that don't exist, and a full year's rent demanded upfront. We're building toward
                    verified listings, inspections booked directly with the person who manages the property, and rent you can pay monthly. None of this is live yet — it's what we're building, and the
                    waitlist is how you get there first.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Relocating to Canada */}
            <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs flex flex-col text-left">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                <img src={canadianMarketImg} alt="Downtown Toronto condominium building in Canada" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 sm:p-9 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="font-sans text-2xl font-semibold text-slate-900 tracking-tight">Relocating to Canada</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 font-mono">Coming Soon</span>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    Landing in a new country without somewhere safe to stay is its own kind of stress. We're actively building partnerships with licensed local Canadian partners to bring verified
                    housing options to Nigerians before they fly, with the same checks we apply at home. This is future work — no Canadian listings exist on MainTown Realty today. Join the waitlist
                    and we'll share updates with you first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Standard Breakdown */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">VERIFICATION</p>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.18]">What We Actually Check</h2>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-xl bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 border border-emerald-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">Listing photos are reverse-checked so they can't be lifted from another property or website.</p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-xl bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 border border-emerald-200/60">
                    <Video className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">A video walkthrough is recorded for the property, so what you see is what exists.</p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-xl bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 border border-emerald-200/60">
                    <UserCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">The landlord or agent's identity and right to let the property are confirmed before it goes live.</p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-xl bg-[#D4F5E0] flex items-center justify-center text-emerald-800 shrink-0 mt-0.5 border border-emerald-200/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    Verified listings carry a badge, so you can tell at a glance which homes have been through the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white p-7 sm:p-8 rounded-3xl text-slate-900 shadow-xs border border-slate-200/90 max-w-md w-full space-y-6 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">MainTown Verification Seal</span>
                  <div className="flex items-center gap-1.5 bg-[#D4F5E0] text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img src={propertyImage} alt="Verified Listing Preview" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2.5 text-xs">
                  <p className="text-slate-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Title Ownership Verified
                  </p>
                  <p className="text-slate-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Physical Walkthrough Confirmed
                  </p>
                  <p className="text-slate-800 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Zero Unlisted Inspection Fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</p>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.18]">Questions, Answered Plainly</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} id={`faq-item-${index}`} className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all text-left">
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-medium text-base sm:text-lg text-slate-900 hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === index ? "rotate-180 text-primary" : ""}`} />
                </button>

                {openFaq === index && <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 font-normal">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Founder Trust & Action Banner */}
      <section className="py-20 md:py-24 bg-slate-950 text-white text-center border-t border-slate-900 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <MainTownLogo variant="dark-bg" size="md" />
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">About MainTown Realty & SmartyHub Group</h3>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic font-normal max-w-2xl mx-auto">
            "MainTown Realty is built by a team with real, hands-on experience in the Nigerian real estate market, under SmartyHub Group. We're building this the right way — carefully, and in the
            open."
          </p>

          {/* Two Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              id="how-page-join-cta"
              onClick={() => onNavigateHome("waitlist-form")}
              className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-xs text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Join the Waitlist</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              id="how-page-wa-cta"
              href="https://wa.me/2349061808874"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow-xs text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-50" />
              <span>Chat on WhatsApp (+234 906 180 8874)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
