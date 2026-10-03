'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import DiagnosticCaseTeardowns from '@/components/DiagnosticCaseTeardowns';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesClient() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-24 sm:pt-28">
        {/* Page Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12 max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Diagnostic Case Architecture
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Case Studies &amp; System Teardowns
            </h1>
            <p className="text-lg text-[#4A4E58] leading-relaxed">
              Every diagnostic follows our rigorous framework: <span className="font-semibold text-[#0F1012]">Problem → Baseline → Intervention → Result</span>. Client identities are protected under NDA, with metrics sourced directly from client CRM and analytics systems.
            </p>
          </div>
        </section>

        {/* Core Case Studies Component */}
        <DiagnosticCaseTeardowns onOpenDiagnostic={handleOpenDiagnostic} />

        {/* Bottom Consultation Link */}
        <section className="py-16 bg-white border-t border-[#E6E1D6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1012]">
              Ready to find where your pipeline is leaking?
            </h2>
            <p className="text-base text-[#4A4E58] max-w-2xl mx-auto">
              Book a 1:1 business diagnostic session to uncover bottlenecks across your acquisition, response latency, and sales conversion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors shadow-subtle flex items-center justify-center gap-2"
              >
                <span>Find My Revenue Leak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/consultation"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0F1012] bg-[#FAF8F5] border border-[#E6E1D6] hover:border-[#0F1012] rounded transition-colors"
              >
                <span>Compare Consultation Plans</span>
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
