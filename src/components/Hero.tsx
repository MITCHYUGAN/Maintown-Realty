import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import MainTownLogo from './MainTownLogo';
import heroHomeImg from '../assets/images/hero_section_img_1787158602003.jpg';

interface HeroProps {
  onJoinWaitlist: (role: 'tenant' | 'landlord' | 'agent') => void;
  onScrollToWaitlist: () => void;
}

function FadedGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hero-grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="grid-fade-mask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="60%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="hero-grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade-mask)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" mask="url(#hero-grid-mask)" />
    </svg>
  );
}

const DEAL_NOTIFICATIONS = [
  { label: "New Tenant Verified", place: "Yaba, Lagos", time: "Just now" },
  { label: "New Tenant Verified", place: "Surulere, Lagos", time: "2m ago" },
  { label: "Listing Checked", place: "Ikeja, Lagos", time: "5m ago" },
  { label: "New Tenant Verified", place: "Yaba, Lagos", time: "8m ago" },
  { label: "Listing Checked", place: "Surulere, Lagos", time: "12m ago" },
];

interface NotificationItem {
  id: number;
  dataIdx: number;
}

function StackedNotifications() {
  const [visibleQueue, setVisibleQueue] = useState<NotificationItem[]>([
    { id: 0, dataIdx: 0 },
    { id: 1, dataIdx: 1 },
    { id: 2, dataIdx: 2 },
  ]);
  const [incomingItem, setIncomingItem] = useState<NotificationItem | null>(null);
  const [phase, setPhase] = useState<"idle" | "pre" | "animating">("idle");
  const nextRef = useRef(3);
  const animationTimeoutRef = useRef<number | null>(null);
  const cycleIntervalRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const startCycle = () => {
      const currentId = nextRef.current;
      nextRef.current += 1;
      const dataIdx = currentId % DEAL_NOTIFICATIONS.length;
      const newItem: NotificationItem = { id: currentId, dataIdx };

      setIncomingItem(newItem);
      setPhase("pre");

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setPhase("animating");
        });
      });

      animationTimeoutRef.current = window.setTimeout(() => {
        setVisibleQueue((prev) => [newItem, prev[0], prev[1]]);
        setIncomingItem(null);
        setPhase("idle");
      }, 1680);
    };

    cycleIntervalRef.current = window.setInterval(startCycle, 4000);

    return () => {
      if (cycleIntervalRef.current !== null) {
        window.clearInterval(cycleIntervalRef.current);
      }
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const cards = incomingItem === null ? visibleQueue : [...visibleQueue, incomingItem];

  const getCardStyle = (item: NotificationItem) => {
    const currentPos = visibleQueue.findIndex((q) => q.id === item.id);
    const isIncoming = incomingItem?.id === item.id;

    if (phase === "idle") {
      if (currentPos === 0) return { yOffset: 0, scale: 0.88, opacity: 1, zIndex: 1, blur: 0 };
      if (currentPos === 1) return { yOffset: 14, scale: 0.94, opacity: 1, zIndex: 2, blur: 0 };
      return { yOffset: 28, scale: 1, opacity: 1, zIndex: 3, blur: 0 };
    }

    if (phase === "pre") {
      if (isIncoming) return { yOffset: 0, scale: 0.88, opacity: 0, zIndex: 1, blur: 0 };
      if (currentPos === 0) return { yOffset: 0, scale: 0.88, opacity: 1, zIndex: 1, blur: 0 };
      if (currentPos === 1) return { yOffset: 14, scale: 0.94, opacity: 1, zIndex: 2, blur: 0 };
      return { yOffset: 28, scale: 1, opacity: 1, zIndex: 4, blur: 0 };
    }

    if (isIncoming) return { yOffset: 0, scale: 0.88, opacity: 1, zIndex: 1, blur: 0 };
    if (currentPos === 0) return { yOffset: 14, scale: 0.94, opacity: 1, zIndex: 2, blur: 0 };
    if (currentPos === 1) return { yOffset: 28, scale: 1, opacity: 1, zIndex: 3, blur: 0 };
    return { yOffset: 60, scale: 1.04, opacity: 0, zIndex: 4, blur: 8 };
  };

  return (
    <div className="relative h-[110px]" style={{ width: '100%', minWidth: 340 }}>
      {cards.map((item) => {
        const { label, place, time } = DEAL_NOTIFICATIONS[item.dataIdx];
        const { yOffset, scale, opacity, zIndex, blur } = getCardStyle(item);
        const shouldTransition = phase === "animating";

        return (
          <div
            key={`notif-card-${item.id}`}
            className="absolute bottom-0 left-0 right-0 origin-bottom rounded-xl border border-slate-200/80 bg-white shadow-lg overflow-hidden"
            style={{
              zIndex,
              opacity,
              filter: `blur(${blur}px)`,
              transform: `translateY(-${yOffset}px) scale(${scale})`,
              transition: shouldTransition
                ? "transform 1680ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1680ms cubic-bezier(0.22, 1, 0.36, 1), filter 1680ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
          >
            <div className="flex relative">
              {/* Accent left bar — inset & rounded */}
              <div className="absolute left-1.5 top-2 bottom-2 w-1 rounded-full bg-primary" />
              <div className="min-w-0 p-3 pl-6">
                <p className="text-[11px] text-muted-foreground">{label}</p>
                <p className="truncate text-sm font-semibold text-foreground">{place} · {time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Hero({ onJoinWaitlist, onScrollToWaitlist }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <FadedGrid className="text-foreground/[0.04]" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left — Copy */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-6">
              <MainTownLogo variant="light-bg" size="sm" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              REAL ESTATE, VERIFIED
            </p>
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] mb-6 text-balance text-foreground">
              Renting Shouldn't Feel<br />Like a Gamble
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Verified listings. Safe payments. No more disappearing agents. MainTown Realty is being built for renters in Nigeria — and Nigerians starting their next chapter in Canada.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onScrollToWaitlist}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-base font-medium px-8 h-12 inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/25 cursor-pointer"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onJoinWaitlist('landlord')}
                className="rounded-xl text-base font-medium px-8 h-12 border border-border bg-transparent hover:bg-secondary text-foreground transition-all cursor-pointer inline-flex items-center justify-center"
              >
                I'm a Landlord or Agent
              </button>
            </div>
          </div>

          {/* Right — Freestanding 3D Architectural Visual with floating overlay cards */}
          <div className="relative flex items-center justify-center lg:justify-end py-4">
            {/* Freestanding 3D isometric architectural model */}
            <div className="relative w-full max-w-[540px] lg:max-w-[640px]">
              <img
                src={heroHomeImg}
                alt="Modern luxury multi-level residential architectural design"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
                width={1280}
                height={1080}
              />
            </div>

            {/* Floating stacked notifications — bottom right */}
            <div className="absolute -bottom-4 right-0 sm:-right-4 hidden md:block z-20">
              <StackedNotifications />
            </div>

            {/* Verified listings card — top left */}
            <div className="absolute -top-2 -left-2 sm:-left-6 rounded-xl border border-slate-200/80 bg-white shadow-lg p-4 pb-4 hidden md:block w-[216px] z-20 text-left">
              {/* Mini sparkline chart — smooth curves */}
              <svg viewBox="0 0 160 52" className="w-full h-12 mb-2">
                <defs>
                  <linearGradient id="pipe-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 44 C18 40, 28 38, 42 40 S65 30, 82 32 S105 20, 120 22 S142 14, 155 12 L155 52 L0 52 Z"
                  fill="url(#pipe-grad)"
                />
                <path
                  d="M0 44 C18 40, 28 38, 42 40 S65 30, 82 32 S105 20, 120 22 S142 14, 155 12"
                  fill="none"
                  stroke="hsl(262 83% 58%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="155" cy="12" r="3.5" fill="hsl(262 83% 58%)" />
              </svg>
              <div>
                <p className="text-xs text-muted-foreground">Listings Verified</p>
                <p className="text-lg font-semibold text-foreground">100%</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
