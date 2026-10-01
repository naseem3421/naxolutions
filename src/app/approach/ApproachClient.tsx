'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import AboutNaxolutions from '@/components/AboutNaxolutions';
import NaxolutionsApproach from '@/components/NaxolutionsApproach';
import FragmentedVsConnected from '@/components/FragmentedVsConnected';
import AudienceSection from '@/components/AudienceSection';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function ApproachClient() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-16 sm:pt-20">
        <AboutNaxolutions />
        <NaxolutionsApproach onOpenDiagnostic={handleOpenDiagnostic} />
        <FragmentedVsConnected />
        <AudienceSection onOpenDiagnostic={handleOpenDiagnostic} />
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
