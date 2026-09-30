'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceBreadcrumbs from '@/components/ServiceBreadcrumbs';
import { HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'How does sales process optimization stop proposal stalling?',
    answer:
      'Proposals stall when they are sent without an agreed review milestone. We restructure the consultation script so reps schedule the confirmation meeting before delivering pricing.',
  },
];

export default function SalesProcessOptimizationPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Sales Process Optimization"
        description="Eliminate sales call waste, qualify prospects automatically, and establish structured follow-up sequences for higher closed revenue."
        url="/services/sales-process-optimization"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Sales Process Optimization', url: '/services/sales-process-optimization' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Sales Process Optimization', url: '/services/sales-process-optimization' },
            ]}
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 05
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Sales Process Optimization
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Focusing sales capacity 100% on high-fit prospects with real budget and clear intent."
            </p>
          </div>

          <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
            <h2 className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest">
              EXECUTIVE SUMMARY // WHAT IS SALES PROCESS OPTIMIZATION?
            </h2>
            <p className="text-base text-[#0F1012] font-medium leading-relaxed">
              Sales Process Optimization is the systematic refinement of sales consultation frameworks, diagnostic intake criteria, proposal protocols, and multi-touch follow-up workflows. It removes ambiguous "let me think about it" call ends and transforms sales rep time into predictable closed transactions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0F1012]">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded border border-[#E6E1D6] space-y-2">
                  <h4 className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C84B27]" />
                    {faq.question}
                  </h4>
                  <p className="text-xs text-[#4A4E58] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F1012] text-white p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">Are sales calls ending in radio silence?</h4>
              <p className="text-xs text-[#B0B6C5]">We optimize your sales qualification and follow-up architecture.</p>
            </div>
            <button
              onClick={handleOpenDiagnostic}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] rounded hover:bg-[#B23E1C] transition-colors whitespace-nowrap"
            >
              Start System Diagnosis
            </button>
          </div>
        </div>
      </main>

      <Footer onOpenDiagnostic={handleOpenDiagnostic} />
      <DiagnosticModal isOpen={isDiagnosticOpen} onClose={handleCloseDiagnostic} />
      <StickyMobileCTA onOpenDiagnostic={handleOpenDiagnostic} />
    </div>
  );
}
