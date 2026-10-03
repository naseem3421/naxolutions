'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TheRealProblem from '@/components/TheRealProblem';
import RevenueJourney from '@/components/RevenueJourney';
import HomepageInsights from '@/components/HomepageInsights';
import DiagnosisCTA from '@/components/DiagnosisCTA';
import Footer from '@/components/Footer';

// Code-split below-the-fold and client-heavy interactive components
const AudienceSection = dynamic(() => import('@/components/AudienceSection'), {
  ssr: true,
});

const DiagnosticCaseTeardowns = dynamic(() => import('@/components/DiagnosticCaseTeardowns'), {
  ssr: true,
});

const RevenueLeakageCalculator = dynamic(() => import('@/components/RevenueLeakageCalculator'), {
  loading: () => <div className="py-24 bg-[#0F1012] min-h-[480px]" />,
  ssr: true,
});

const AboutNaxolutions = dynamic(() => import('@/components/AboutNaxolutions'), {
  ssr: true,
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  ssr: true,
});

const DiagnosticModal = dynamic(() => import('@/components/DiagnosticModal'), {
  ssr: false,
});

const StickyMobileCTA = dynamic(() => import('@/components/StickyMobileCTA'), {
  ssr: false,
});

export default function HomeClient() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow">
        <Hero onOpenDiagnostic={handleOpenDiagnostic} />
        <TheRealProblem />
        <RevenueLeakageCalculator onOpenDiagnostic={handleOpenDiagnostic} />
        <AudienceSection onOpenDiagnostic={handleOpenDiagnostic} />
        <RevenueJourney onOpenDiagnostic={handleOpenDiagnostic} />
        <DiagnosticCaseTeardowns onOpenDiagnostic={handleOpenDiagnostic} />
        <AboutNaxolutions />
        <HomepageInsights />
        <DiagnosisCTA onOpenDiagnostic={handleOpenDiagnostic} />
        <FAQSection />
      </main>

      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
      />

      <StickyMobileCTA onOpenDiagnostic={handleOpenDiagnostic} />
    </div>
  );
}
