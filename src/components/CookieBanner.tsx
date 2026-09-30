'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already set their cookie preference
    const consent = localStorage.getItem('naxolutions_cookie_consent');
    if (!consent) {
      // Delay showing slightly so it does not distract during first visual render
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (level: 'all' | 'essential') => {
    localStorage.setItem('naxolutions_cookie_consent', level);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#0F1012] text-white border border-[#FAF8F5]/15 rounded-xl p-5 shadow-2xl space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C84B27]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Data & Cookie Preferences
            </span>
          </div>
          <button
            onClick={() => handleConsent('essential')}
            className="text-[#737887] hover:text-white transition-colors p-1"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#B0B6C5] leading-relaxed">
          We use essential cookies to maintain system functionality and anonymous performance signals to optimize our diagnostic tools. Review our{' '}
          <Link href="/privacy" className="text-white underline hover:text-[#C84B27] transition-colors">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-2.5 pt-1">
          <button
            onClick={() => handleConsent('all')}
            className="flex-1 bg-[#C84B27] hover:bg-[#b03f1f] text-white text-xs font-semibold py-2.5 px-3 rounded transition-colors active:scale-95"
          >
            Accept All
          </button>
          <button
            onClick={() => handleConsent('essential')}
            className="flex-1 bg-white/10 hover:bg-white/15 text-[#FAF8F5] text-xs font-medium py-2.5 px-3 rounded border border-white/10 transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
