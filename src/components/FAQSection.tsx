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
        'No. Digital marketing agencies typically sell execution services like ad spend management, SEO content, or social posts. Naxolutions is a Business Conversion Consultancy. We architect and build the connected system between customer attention, enquiry, sales conversation, and revenue.',
    },
    {
      question: 'Do you only work with businesses that already run ads?',
      answer:
        'No. We work with businesses that receive customer attention through organic search, word-of-mouth, direct referrals, outbound sales, or paid media. The problem is rarely the traffic source itself; it is how enquiries are captured, qualified, and closed after attention arrives.',
    },
    {
      question: 'Will you manage our Meta Ads?',
      answer:
        'If paid acquisition is identified as a critical missing piece of your conversion system, we will architect and deploy high-intent acquisition campaigns. However, we never run ads in isolation without ensuring your landing experience and sales handling are structurally ready to convert that attention.',
    },
    {
      question: 'Do you build websites?',
      answer:
        'Yes, when a new or modified landing experience is required to fix a conversion leak. However, we build conversion websites engineered around commercial positioning, buyer decision clarity, and intake qualification — not generic online brochures.',
    },
    {
      question: 'Can you work with our existing CRM?',
      answer:
        'Yes. We connect and optimize your existing toolstack (CRM, WhatsApp, Email, scheduling tools) to eliminate manual delays, automated pipeline breaks, and lost follow-ups.',
    },
    {
      question: 'What if we already have a website?',
      answer:
        'We do not recommend replacing a working website simply to sell a web build. If your current website communicates value clearly and generates qualified enquiries, we focus on downstream leaks like response speed, lead filtering, or post-consultation follow-up.',
    },
    {
      question: 'What if our problem actually is lead generation?',
      answer:
        'During our initial diagnostic evaluation, we examine whether your bottleneck is true top-of-funnel attention or mid-funnel conversion. If attention is genuinely the limiting constraint, we build targeted acquisition components to feed the system.',
    },
    {
      question: 'Do you replace our sales team?',
      answer:
        'No. We empower your sales team by filtering out unqualified leads, providing structured consultation frameworks, and automating non-responsive follow-up so your reps spend 100% of their time having high-value conversations.',
    },
    {
      question: 'How do you decide what needs to be built?',
      answer:
        'We map your existing customer journey step-by-step to identify precisely where attention leaks before becoming revenue. We then prioritize the fewest, highest-impact building blocks required to close those gaps.',
    },
    {
      question: 'How does the initial conversation work?',
      answer:
        'The initial conversation is a structured diagnostic review. We discuss how your business currently receives attention, handles enquiries, and closes sales. There is no sales pitch, no predefined package push, and no obligation.',
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
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0F1012]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-normal text-[#737887]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#F3EFE7] flex items-center justify-center flex-shrink-0 text-[#0F1012]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#4A4E58] leading-relaxed border-t border-[#E6E1D6]/60 mt-1">
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
