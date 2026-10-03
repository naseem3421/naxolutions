'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import Navigation from '@/components/Navigation';
import NaxolutionsApproach from '@/components/NaxolutionsApproach';
import FragmentedVsConnected from '@/components/FragmentedVsConnected';
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
        {/* Methodology Intro Header */}
        <section className="pt-16 pb-12 bg-[#FAF8F5] border-b border-[#E6E1D6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              SYSTEM METHODOLOGY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] mb-4">
              The 7-Stage Business Conversion Architecture
            </h1>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              We do not sell pre-packaged service menus or random tactical retainers. We diagnose where customer attention breaks, architect the connected path, and build the systems required to capture lost revenue.
            </p>
          </div>
        </section>

        <NaxolutionsApproach onOpenDiagnostic={handleOpenDiagnostic} />
        <FragmentedVsConnected />

        {/* Methodology Action Callout */}
        <section className="py-20 bg-[#0F1012] text-white text-center border-t border-[#1A1C20]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to Apply This Methodology to Your Pipeline?
            </h2>
            <p className="text-base text-[#B0B6C5] leading-relaxed">
              Every business system is unique. In our structured diagnostic review, we map your exact customer journey to isolate where attention leaks before becoming revenue.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleOpenDiagnostic}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors shadow-editorial"
              >
                <span>Find My Revenue Leak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/20 hover:border-white rounded transition-colors"
              >
                <span>Book a Diagnostic</span>
              </Link>
            </div>
          </div>
        </section>
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
