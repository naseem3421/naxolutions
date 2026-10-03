'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Are you a digital marketing agency?',
      answer:
        'No. Digital marketing agencies typically sell commodity execution services like ad spend management, SEO content, or social media posts. Naxolutions is a Business Conversion Consultancy. We architect and build the connected system between customer attention, enquiry, sales conversation, follow-up, and revenue.',
    },
    {
      question: 'Do you replace our existing marketing agency?',
      answer:
        'No. We do not replace your media buying or creative agency. Marketing agencies drive traffic to your front door; Naxolutions architects the post-click intake, WhatsApp routing, qualification, and sales follow-up systems that turn their traffic into revenue.',
    },
    {
      question: 'Do you guarantee more sales or specific revenue?',
      answer:
        'No credible business consultant guarantees revenue outcomes because closed transactions depend on multiple external factors including your pricing, sales rep execution, product fulfillment, and market dynamics. What Naxolutions does guarantee is systemic conversion efficiency: eliminating response latency, filtering out tire-kickers before rep calls, and ensuring zero leads leak between enquiry and sales conversation.',
    },
    {
      question: 'How long does implementation take?',
      answer:
        'Our initial Diagnostic session is completed in 60 minutes with strategic written recommendations delivered within 48–72 hours. Custom architecture sprints (building conversion destinations, WhatsApp Business API triage, and CRM synchronization) typically range from 30 to 60 days depending on pipeline complexity.',
    },
    {
      question: 'Will you manage our Meta Ads or Google Ads?',
      answer:
        'If paid acquisition is identified as a critical missing piece of your conversion system, we will architect and deploy high-intent acquisition campaigns. However, we never run ads in isolation without ensuring your landing experience and sales handling are structurally ready to convert that attention.',
    },
    {
      question: 'Do you build websites?',
      answer:
        'Yes, when a new or modified landing experience is required to fix a conversion leak. However, we build conversion websites engineered around commercial positioning, buyer decision clarity, and intake qualification — not generic online brochures.',
    },
    {
      question: 'Can you work with our existing CRM and tech stack?',
      answer:
        'Yes. We connect and optimize your existing toolstack (CRM, WhatsApp, Email, scheduling tools) to eliminate manual delays, automated pipeline breaks, and lost follow-ups.',
    },
    {
      question: 'What if we already have a website?',
      answer:
        'We do not recommend replacing a working website simply to sell a web build. If your current website communicates value clearly and generates qualified enquiries, we focus on downstream leaks like response speed, lead filtering, or post-consultation follow-up.',
    },
    {
      question: 'Is the consultation refundable?',
      answer:
        'Diagnostic sessions represent dedicated, senior-level strategic analysis and research into your business model. Sessions can be rescheduled at any time with 24 hours advance notice. Because direct strategic recommendations and IP are delivered during the session, consultations are non-refundable once conducted.',
    },
    {
      question: 'Do you replace our sales team?',
      answer:
        'No. We empower your sales team by filtering out unqualified leads, providing structured consultation frameworks, and automating non-responsive follow-up so your reps spend 100% of their time having high-value conversations.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
            Understanding the Conversion System approach.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            Clear answers to common questions about how Naxolutions differs from traditional vendors.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-lg transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0F1012] bg-[#FAF8F5] shadow-subtle'
                    : 'border-[#E6E1D6] bg-white hover:border-[#B0A894]'
                }`}
              >
                <button
                  id={`faq-question-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F1012]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-[#4A4E58]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#F3EFE7] flex items-center justify-center flex-shrink-0 text-[#0F1012]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-6 pb-6 pt-0 text-sm text-[#4A4E58] leading-relaxed border-t border-[#E6E1D6]/60 mt-1"
                  >
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
