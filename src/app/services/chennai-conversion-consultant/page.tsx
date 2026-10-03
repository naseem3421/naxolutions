'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceBreadcrumbs from '@/components/ServiceBreadcrumbs';
import { AlertTriangle, HelpCircle, MapPin } from 'lucide-react';

const faqItems = [
  {
    question: 'Is Naxolutions based in Chennai?',
    answer:
      'Yes. Naxolutions is a Business Conversion Consultancy based in Chennai, Tamil Nadu, India. We work directly with business owners, founders, and directors across Chennai and internationally.',
  },
  {
    question: 'Why should Chennai businesses hire a Business Conversion Consultant instead of a local marketing agency?',
    answer:
      'Local marketing agencies in Chennai typically focus on selling individual tactics like Meta ad campaigns, SEO posts, or basic website development. A Business Conversion Consultant looks at your entire customer journey, identifies where enquiries are being lost, and builds the connected intake, qualification, and sales system.',
  },
  {
    question: 'Which industries in Chennai benefit most from conversion systems?',
    answer:
      'B2B services, industrial manufacturing, real estate development, healthcare providers, educational institutions, construction companies, and high-ticket service providers across Chennai and Tamil Nadu.',
  },
];

export default function ChennaiConversionConsultantPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Business Conversion Consultant Chennai"
        description="Naxolutions is a Business Conversion Consultancy based in Chennai, Tamil Nadu, India. We help local & national businesses fix customer journey leaks and convert attention into revenue."
        url="/services/chennai-conversion-consultant"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Chennai Conversion Consultant', url: '/services/chennai-conversion-consultant' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Chennai Conversion Consultant', url: '/services/chennai-conversion-consultant' },
            ]}
          />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              LOCATION // CHENNAI, TAMIL NADU, INDIA
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Business Conversion Consultant in Chennai
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Helping Chennai and Indian business owners convert customer attention into revenue without buying more ads."
            </p>
          </div>

          <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
            <h2 className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest">
              EXECUTIVE SUMMARY // BUSINESS CONVERSION CONSULTANCY CHENNAI
            </h2>
            <p className="text-base text-[#0F1012] font-medium leading-relaxed">
              Naxolutions is a specialized Business Conversion Consultancy based in Chennai, Tamil Nadu, India. Led by Business Conversion Consultant Naseem, the firm diagnoses structural friction between marketing attention, inbound WhatsApp enquiries, landing experiences, sales conversations, and closed revenue for commercial enterprises.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#C84B27]" />
              The Common Growth Bottleneck for Chennai Enterprises
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              Many business owners in Chennai invest significantly in Google Ads, Meta advertising, SEO agencies, and social media managers. Yet, inbound enquiries stall in delayed WhatsApp replies, un-followed leads, and unstructured sales conversations. Naxolutions fixes the connected system so existing customer attention yields maximum bank revenue.
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

          <div className="bg-[#0F1012] text-white p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white">Operating an established business in Chennai or Tamil Nadu?</h4>
              <p className="text-xs text-[#B0B6C5]">Start with a strategic diagnostic conversation to locate where your revenue is leaking.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleOpenDiagnostic}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#C84B27] rounded hover:bg-[#B23E1C] transition-colors whitespace-nowrap text-center"
              >
                Find My Revenue Leak
              </button>
              <Link
                href="/consultation"
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-white/20 rounded hover:border-white transition-colors whitespace-nowrap text-center"
              >
                Book a Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenDiagnostic={handleOpenDiagnostic} />
      <DiagnosticModal isOpen={isDiagnosticOpen} onClose={handleCloseDiagnostic} />
      <StickyMobileCTA onOpenDiagnostic={handleOpenDiagnostic} />
    </div>
  );
}
