import React from 'react';

interface MainTownLogoProps {
  className?: string;
  variant?: 'light-bg' | 'dark-bg'; // light-bg means logo is placed on a light/white background
  size?: 'sm' | 'md' | 'lg';
}

export default function MainTownLogo({ className = '', variant = 'light-bg', size = 'md' }: MainTownLogoProps) {
  const isLight = variant === 'light-bg';

  const dimensions = {
    sm: { markSize: 'w-7 h-7', mainText: 'text-base', realtyText: 'text-[9px]' },
    md: { markSize: 'w-9 h-9', mainText: 'text-xl', realtyText: 'text-[11px]' },
    lg: { markSize: 'w-12 h-12', mainText: 'text-2xl', realtyText: 'text-[13px]' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* House Roofline 'M' Logo Symbol */}
      <div className={`${dimensions.markSize} relative flex-shrink-0`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer M Roofline Path */}
          <path
            d="M15 85V35L50 10L85 35V85H68V52L50 38L32 52V85H15Z"
            fill="#7C3AED"
          />
          {/* Inner Diamond Peak Angle */}
          <path
            d="M50 10L72 28L50 43L28 28L50 10Z"
            fill="#8B5CF6"
            opacity="0.9"
          />
          {/* 2x2 Window Grid beneath the peak */}
          <rect x="42" y="60" width="7" height="7" rx="1" fill="#FFFFFF" />
          <rect x="51" y="60" width="7" height="7" rx="1" fill="#FFFFFF" />
          <rect x="42" y="69" width="7" height="7" rx="1" fill="#FFFFFF" />
          <rect x="51" y="69" width="7" height="7" rx="1" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-display font-extrabold ${dimensions.mainText} tracking-tight text-purple-600`}>
          MainTown
        </span>
        <span className={`font-sans font-bold uppercase tracking-[0.28em] ${dimensions.realtyText} mt-0.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
          REALTY
        </span>
      </div>
    </div>
  );
}
