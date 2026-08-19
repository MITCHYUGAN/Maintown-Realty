import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import MainTownLogo from './MainTownLogo';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType, anchor?: string) => void;
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
}

export default function Header({ currentPage, onNavigate, onJoinWaitlist }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageType, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <MainTownLogo variant="light-bg" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPage === 'home' ? 'text-purple-600 font-bold' : ''
              }`}
            >
              Home
            </button>
            <button
              id="nav-link-how-it-works"
              onClick={() => handleNavClick('how-it-works')}
              className={`hover:text-purple-600 transition-colors cursor-pointer ${
                currentPage === 'how-it-works' ? 'text-purple-600 font-bold' : ''
              }`}
            >
              How It Works
            </button>
            <button
              id="nav-link-journey"
              onClick={() => handleNavClick('home', 'journey')}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              The Journey
            </button>
            <button
              id="nav-link-roadmap"
              onClick={() => handleNavClick('home', 'roadmap')}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              Roadmap
            </button>
            <a
              id="nav-link-whatsapp"
              href="https://wa.me/2349061808874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-50 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-landlord-btn"
              onClick={() => onJoinWaitlist('landlord')}
              className="text-xs font-bold text-slate-700 hover:text-purple-600 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-purple-200 hover:bg-purple-50/40 transition-all cursor-pointer"
            >
              I'm a Landlord or Agent
            </button>
            <button
              id="header-tenant-btn"
              onClick={() => onJoinWaitlist('tenant')}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white rounded-xl shadow-md shadow-purple-100 hover:shadow-purple-200 transition-all cursor-pointer"
            >
              Join the Waitlist
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/60 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl py-6 px-5 space-y-4 flex flex-col">
          <nav className="flex flex-col gap-3 font-semibold text-slate-800 text-base">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-600"
            >
              Home
            </button>
            <button
              id="mobile-nav-how-it-works"
              onClick={() => handleNavClick('how-it-works')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-600"
            >
              How It Works
            </button>
            <button
              id="mobile-nav-journey"
              onClick={() => handleNavClick('home', 'journey')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-600"
            >
              The Journey
            </button>
            <button
              id="mobile-nav-roadmap"
              onClick={() => handleNavClick('home', 'roadmap')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-600"
            >
              Roadmap
            </button>
            <a
              id="mobile-nav-whatsapp"
              href="https://wa.me/2349061808874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-emerald-600 font-bold"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-50" />
              Chat on WhatsApp (+234 906 180 8874)
            </a>
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              id="mobile-join-landlord-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlist('landlord');
              }}
              className="w-full text-center py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              I'm a Landlord or Agent
            </button>
            <button
              id="mobile-join-tenant-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlist('tenant');
              }}
              className="w-full text-center py-3 rounded-xl bg-purple-600 text-white text-sm font-bold hover:bg-purple-700 shadow-md shadow-purple-100 cursor-pointer"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
