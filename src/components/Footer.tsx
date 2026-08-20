import { MessageCircle, Instagram, Phone } from "lucide-react";
import MainTownLogo from "./MainTownLogo";
import { PageType } from "../types";

interface FooterProps {
  onNavigatePage: (page: PageType, anchor?: string) => void;
  onJoinWaitlist: (role: "tenant" | "landlord" | "agent") => void;
}

export default function Footer({ onNavigatePage }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 text-left">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button id="footer-logo-btn" onClick={() => onNavigatePage("home")} className="text-left focus:outline-none cursor-pointer">
              <MainTownLogo variant="dark-bg" size="md" />
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              MainTown Realty is building trusted proptech infrastructure for renters in Nigeria and expats moving to Canada. Say goodbye to full year upfront rent and fake listings.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-link-instagram"
                href="https://www.instagram.com/mitchyugan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center gap-2 text-xs font-medium"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span>@maintownrealty</span>
              </a>

              <a
                id="footer-link-whatsapp"
                href="https://wa.me/2349061808874"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center gap-2 text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs font-normal">
              <li>
                <button id="footer-nav-home" onClick={() => onNavigatePage("home")} className="hover:text-primary transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button id="footer-nav-how-it-works" onClick={() => onNavigatePage("how-it-works")} className="hover:text-primary transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button id="footer-nav-journey" onClick={() => onNavigatePage("home", "journey")} className="hover:text-primary transition-colors cursor-pointer">
                  The Journey
                </button>
              </li>
              <li>
                <button id="footer-nav-roadmap" onClick={() => onNavigatePage("home", "roadmap")} className="hover:text-primary transition-colors cursor-pointer">
                  Roadmap & Status
                </button>
              </li>
              <li>
                <button id="footer-nav-waitlist" onClick={() => onNavigatePage("home", "waitlist-form")} className="hover:text-primary transition-colors cursor-pointer">
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-normal">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+2349061808874" className="hover:text-white transition-colors">
                  +234 906 180 8874
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/2349061808874" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +234 906 180 8874
                </a>
              </p>
              <p className="text-slate-400 pt-1 text-[11px]">Operating out of Lagos, Nigeria. Expanding to Canada.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 MainTown Realty, part of SmartyHub Group. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Built in the open for Nigeria & Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
