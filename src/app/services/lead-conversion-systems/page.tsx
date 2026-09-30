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
    question: 'What is a Lead Conversion System?',
    answer:
      'A Lead Conversion System is the operational and technological framework that captures inbound enquiries, instantly notifies sales teams, qualifies prospects based on budget and fit, and routes them directly into a structured sales conversation.',
  },
  {
    question: 'Why do leads drop off before the sales call?',
    answer:
      'The primary cause is response latency. Studies show lead intent decays by 80% after 30 minutes. If your team takes 3 to 6 hours to reply, the prospect has already contacted faster competitors.',
  },
  {
    question: 'How does Naxolutions fix lead drop-off?',
    answer:
      'We deploy automated instant response triggers (WhatsApp/SMS/Email), qualification intake filters to separate tire-kickers, and automated calendar scheduling to lock in consultations immediately.',
  },
];

export default function LeadConversionSystemsPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Lead Conversion Systems"
        description="Stop losing qualified leads between form submit and sales call. Naxolutions builds structured intake, qualification, and instant response systems."
        url="/services/lead-conversion-systems"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Lead Conversion Systems', url: '/services/lead-conversion-systems' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Lead Conversion Systems', url: '/services/lead-conversion-systems' },
            ]}
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 01
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Lead Conversion Systems
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Transforming inbound marketing enquiries into qualified sales conversations with zero delay."
            </p>
          </div>

          <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
            <h2 className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest">
              EXECUTIVE SUMMARY // WHAT IS A LEAD CONVERSION SYSTEM?
            </h2>
            <p className="text-base text-[#0F1012] font-medium leading-relaxed">
              A Lead Conversion System is an integrated architectural process that connects customer attention to structured sales conversations. It eliminates manual response delays, filters out tire-kickers through qualification criteria, and automates multi-channel follow-up to ensure zero inbound enquiries leak between marketing and revenue.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#C84B27]" />
              Why Do Inbound Leads Fail To Convert?
            </h3>
            <ul className="space-y-3 text-sm text-[#4A4E58]">
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">1. Response Latency:</span>
                <span>Enquiries sit in inbox queues for hours. Buyer intent decays rapidly after 30 minutes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">2. Lack of Qualification:</span>
                <span>Sales reps waste 60% of their day pitching budget-less prospects who were never qualified.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">3. Friction Intake:</span>
                <span>Long, complex forms or restrictive contact options discourage high-intent decision makers.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0F1012]">
              What Naxolutions Actually Builds
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012]">Instant Multi-Channel Response</div>
                <p className="text-xs text-[#4A4E58]">Automated WhatsApp, SMS, and Email acknowledgment within 60 seconds of form submission.</p>
              </div>
              <div className="bg-white p-5 rounded border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012]">Diagnostic Intake Filters</div>
                <p className="text-xs text-[#4A4E58]">Smart intake questions that route high-budget opportunities directly to senior sales reps.</p>
              </div>
              <div className="bg-white p-5 rounded border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012]">Calendar Booking Integration</div>
                <p className="text-xs text-[#4A4E58]">Locking in consultation times at the moment of peak buyer intent without back-and-forth emails.</p>
              </div>
              <div className="bg-white p-5 rounded border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012]">CRM & WhatsApp Synchronization</div>
                <p className="text-xs text-[#4A4E58]">Connecting lead data directly into rep workflows so zero conversation context is lost.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0F1012]">
              Frequently Asked Questions
            </h3>
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
              <h4 className="text-xl font-bold text-white">Losing leads between marketing and sales?</h4>
              <p className="text-xs text-[#B0B6C5]">We diagnose your exact leak points and build the connected intake framework.</p>
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
