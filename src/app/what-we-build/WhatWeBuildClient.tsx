'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import WhatWeActuallyBuild from '@/components/WhatWeActuallyBuild';
import RedFlagsChecklist from '@/components/RedFlagsChecklist';
import DiagnosisCTA from '@/components/DiagnosisCTA';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function WhatWeBuildClient() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-16 sm:pt-20">
        <WhatWeActuallyBuild onOpenDiagnostic={handleOpenDiagnostic} />
        <RedFlagsChecklist onOpenDiagnostic={handleOpenDiagnostic} />
        <DiagnosisCTA onOpenDiagnostic={handleOpenDiagnostic} />
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
