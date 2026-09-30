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
    question: 'Why do WhatsApp leads ask for price and disappear?',
    answer:
      'When inbound WhatsApp messages receive raw price quotes without diagnostic qualification or structured follow-up, the customer treats your business as a commodity and leaves. A WhatsApp Sales System guides the conversation toward consultation and value alignment.',
  },
  {
    question: 'Can a WhatsApp Sales System integrate with our CRM?',
    answer:
      'Yes. Naxolutions connects WhatsApp Business APIs directly into your CRM, notifying sales reps instantly and logging all conversation history centrally.',
  },
];

export default function WhatsAppSalesSystemsPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="WhatsApp Sales Systems"
        description="Turn cold WhatsApp inbound enquiries into structured sales conversations with zero response latency and automated qualification."
        url="/services/whatsapp-sales-systems"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'WhatsApp Sales Systems', url: '/services/whatsapp-sales-systems' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'WhatsApp Sales Systems', url: '/services/whatsapp-sales-systems' },
            ]}
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 03
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              WhatsApp Sales Systems
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Moving inbound WhatsApp chats from raw price-checking to structured commercial dialogues."
            </p>
          </div>

          <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
            <h2 className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest">
              EXECUTIVE SUMMARY // WHAT IS A WHATSAPP SALES SYSTEM?
            </h2>
            <p className="text-base text-[#0F1012] font-medium leading-relaxed">
              A WhatsApp Sales System is an operational sales framework that transforms direct instant messages into qualified opportunities. It combines pre-filled intake routing, automated initial response triggers, sales rep assignment, and automated multi-touch follow-up protocols.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#C84B27]" />
              Why Inbound WhatsApp Messages Get Lost
            </h3>
            <ul className="space-y-3 text-sm text-[#4A4E58]">
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">1. Rep-Dependent Memory:</span>
                <span>Messages rely on individual rep memory with zero systematic follow-up logging.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C84B27] font-bold">2. Instant Price Dropping:</span>
                <span>Answering "how much?" instantly without establishing product value kills buyer interest.</span>
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
              <h4 className="text-xl font-bold text-white">Losing revenue on un-followed WhatsApp messages?</h4>
              <p className="text-xs text-[#B0B6C5]">We build structured WhatsApp sales and qualification systems.</p>
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
