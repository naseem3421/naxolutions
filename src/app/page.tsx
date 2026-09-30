'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TheRealProblem from '@/components/TheRealProblem';
import RevenueJourney from '@/components/RevenueJourney';
import RevenueLeakageCalculator from '@/components/RevenueLeakageCalculator';
import DiagnosisCTA from '@/components/DiagnosisCTA';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
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
        <RevenueJourney onOpenDiagnostic={handleOpenDiagnostic} />
        <RevenueLeakageCalculator onOpenDiagnostic={handleOpenDiagnostic} />
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
