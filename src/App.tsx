import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import WhyMainTown from "./components/WhyMainTown";
import TwoJourneys from "./components/TwoJourneys";
import AISection from "./components/AISection";
import BenefitsSection from "./components/BenefitsSection";
import HowItWorks from "./components/HowItWorks";
import ProductPreview from "./components/ProductPreview";
import EarlyBuildSection from "./components/EarlyBuildSection";
import TrustSection from "./components/TrustSection";
import WhereWeAreSection from "./components/WhereWeAreSection";
import RoadmapSection from "./components/RoadmapSection";
import WaitlistSection from "./components/WaitlistSection";
import HowItWorksPage from "./components/HowItWorksPage";
import Footer from "./components/Footer";
import { PageType } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [waitlistRole, setWaitlistRole] = useState<"tenant" | "landlord" | "agent">("tenant");
  const [waitlistMarket, setWaitlistMarket] = useState<"Nigeria" | "Canada" | "Both">("Nigeria");

  // Handle URL Hash or smooth scroll
  const handleNavigate = (page: PageType, anchor?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (page === "home" && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToInlineWaitlist = (role: "tenant" | "landlord" | "agent" = "tenant", market: "Nigeria" | "Canada" = "Nigeria") => {
    setWaitlistRole(role);
    setWaitlistMarket(market);

    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const elem = document.getElementById("waitlist-form");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
          const input = document.getElementById("inline-input-name");
          if (input) input.focus();
        }
      }, 150);
    } else {
      const elem = document.getElementById("waitlist-form");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        const input = document.getElementById("inline-input-name");
        if (input) input.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} onJoinWaitlist={(role) => scrollToInlineWaitlist(role)} />

      {/* Main Pages Router */}
      <main>
        {currentPage === "home" ? (
          <>
            {/* 1. Hero Section */}
            <Hero onJoinWaitlist={(role) => scrollToInlineWaitlist(role)} onScrollToWaitlist={() => scrollToInlineWaitlist("tenant")} />

            {/* 2. Problem Section */}
            <ProblemSection />

            {/* 3. Stakeholder Benefits Section (Designed for the Entire Ecosystem) */}
            <BenefitsSection onJoinWaitlist={(role) => scrollToInlineWaitlist(role)} />

            {/* 4. Who We Are Section (Our Core Mission) */}
            <WhyMainTown />

            {/* 5. Two Markets Section */}
            <TwoJourneys onJoinWaitlist={(role, market) => scrollToInlineWaitlist(role, market)} />

            {/* 6. AI Verification Section (Powered by AI) */}
            <AISection />

            {/* 7. The Journey Section (Winding Pathway Graphic) */}
            <HowItWorks onNavigateHowItWorks={(page) => handleNavigate(page)} />

            {/* 7. Product Preview Walkthrough */}
            <ProductPreview />

            {/* 8. Early Build Section */}
            <EarlyBuildSection />

            {/* 9. Trust & Verification Section */}
            <TrustSection />

            {/* 10. Where We Are Today Section */}
            <WhereWeAreSection />

            {/* 11. Development Status & Roadmap Section + Teaser */}
            <RoadmapSection />

            {/* 10. Priority Waitlist Form */}
            <WaitlistSection selectedRole={waitlistRole} selectedMarket={waitlistMarket} />
          </>
        ) : (
          /* Page 2: How It Works Page */
          <HowItWorksPage onNavigateHome={(anchor) => handleNavigate("home", anchor)} onJoinWaitlist={(role) => scrollToInlineWaitlist(role)} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigatePage={handleNavigate} onJoinWaitlist={(role) => scrollToInlineWaitlist(role)} />
    </div>
  );
}
