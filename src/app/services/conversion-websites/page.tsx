'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceBreadcrumbs from '@/components/ServiceBreadcrumbs';
import { AlertTriangle, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'How is a conversion website different from a normal website?',
    answer:
      'A normal website functions as a passive digital brochure focused on decorative aesthetics. A conversion website is built as an active commercial engine designed around buyer decision psychology, commercial positioning, objection removal, and qualified intake.',
  },
  {
    question: 'Do we need to replace our existing website?',
    answer:
      'Not necessarily. If your existing website already converts qualified traffic effectively, Naxolutions focuses on downstream leaks like response latency or follow-up. We only build a new website if the landing experience is actively losing revenue.',
  },
];

export default function ConversionWebsitesPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Conversion-Focused Websites"
        description="Not an online brochure. Naxolutions builds commercially structured conversion websites designed to turn attention into high-intent enquiries."
        url="/services/conversion-websites"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Conversion-Focused Websites', url: '/services/conversion-websites' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Conversion-Focused Websites', url: '/services/conversion-websites' },
            ]}
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 02
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Conversion-Focused Websites
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "The place where customer attention becomes clear commercial intent."
            </p>
          </div>

          <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
            <h2 className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest">
              EXECUTIVE SUMMARY // WHAT IS A CONVERSION WEBSITE?
            </h2>
            <p className="text-base text-[#0F1012] font-medium leading-relaxed">
              A conversion website is a strategic digital architecture engineered to turn passive visitor attention into direct commercial enquiries. Unlike decorative brochure sites, it answers core buyer objections within 6 seconds, establishes market authority, and guides qualified prospects through low-friction intake channels.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#C84B27]" />
              Why Standard Agency Websites Fail To Produce Revenue
            </h3>
            <ul className="space-y-3 text-sm text-[#4A4E58]">
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">1. Focus on Decoration over Commercial Clarity:</span>
                <span>Web agencies prioritize flashy animations over clear, objective value propositions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">2. Disconnected Inbound Channels:</span>
                <span>Forms are submitted into black-hole email inboxes with zero automatic rep notification.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">3. Generic Messaging:</span>
                <span>Using corporate fluff like "industry leader" instead of tackling specific buyer commercial friction.</span>
              </li>
            </ul>
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
              <h4 className="text-xl font-bold text-white">Is your website losing qualified visitors?</h4>
              <p className="text-xs text-[#B0B6C5]">We diagnose landing page friction and rebuild your web conversion experience.</p>
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
