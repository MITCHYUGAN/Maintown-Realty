import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhyMainTown from './components/WhyMainTown';
import TwoJourneys from './components/TwoJourneys';
import BenefitsSection from './components/BenefitsSection';
import HowItWorks from './components/HowItWorks';
import ProductPreview from './components/ProductPreview';
import TrustSection from './components/TrustSection';
import RoadmapSection from './components/RoadmapSection';
import WaitlistSection from './components/WaitlistSection';
import HowItWorksPage from './components/HowItWorksPage';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [modalRole, setModalRole] = useState<'tenant' | 'landlord' | 'agent'>('tenant');
  const [modalMarket, setModalMarket] = useState<'Nigeria' | 'Canada' | 'Both'>('Nigeria');

  // Handle URL Hash or smooth scroll
  const handleNavigate = (page: PageType, anchor?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'home' && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const openWaitlistModal = (role: 'tenant' | 'landlord' | 'agent' = 'tenant', market: 'Nigeria' | 'Canada' = 'Nigeria') => {
    setModalRole(role);
    setModalMarket(market);
    setIsWaitlistOpen(true);
  };

  const scrollToInlineWaitlist = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const elem = document.getElementById('waitlist-form');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const elem = document.getElementById('waitlist-form');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden">
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onJoinWaitlist={(role) => openWaitlistModal(role)}
      />

      {/* Main Pages Router */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              onJoinWaitlist={(role) => openWaitlistModal(role)}
              onScrollToWaitlist={scrollToInlineWaitlist}
            />

            {/* 2. Problem Section */}
            <ProblemSection />

            {/* 3. Who We Are Section */}
            <WhyMainTown />

            {/* 4. Two Markets Section */}
            <TwoJourneys
              onJoinWaitlist={(role, market) => openWaitlistModal(role, market)}
            />

            {/* 5. Stakeholder Benefits Section */}
            <BenefitsSection
              onJoinWaitlist={(role) => openWaitlistModal(role)}
            />

            {/* 6. The Journey Section (Winding Pathway Graphic) */}
            <HowItWorks
              onNavigateHowItWorks={(page) => handleNavigate(page)}
            />

            {/* 7. Product Preview Walkthrough */}
            <ProductPreview />

            {/* 8. Trust & Verification Section */}
            <TrustSection />

            {/* 9. Development Status & Roadmap Section + Teaser */}
            <RoadmapSection />

            {/* 10. Priority Waitlist Form */}
            <WaitlistSection />
          </>
        ) : (
          /* Page 2: How It Works Page */
          <HowItWorksPage
            onNavigateHome={(anchor) => handleNavigate('home', anchor)}
            onJoinWaitlist={(role) => openWaitlistModal(role)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePage={handleNavigate}
        onJoinWaitlist={(role) => openWaitlistModal(role)}
      />

      {/* Global Priority Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        defaultRole={modalRole}
        defaultMarket={modalMarket}
      />
    </div>
  );
}
