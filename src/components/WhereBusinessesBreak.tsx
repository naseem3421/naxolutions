'use client';

import React from 'react';
import { AlertTriangle, Clock, Zap, Target, MessageSquare, RefreshCw, BarChart2 } from 'lucide-react';

export default function WhereBusinessesBreak() {
  const diagnosticCards = [
    {
      id: '01',
      title: 'ATTENTION WITHOUT ACTION',
      icon: Target,
      summary: "People see the business but don't take the next step.",
      detail:
        'Marketing or ads bring potential buyers to the page, but there is no compelling commercial hook or clear low-friction action. Visitors leave without a reason to return.',
      symptom: 'High traffic volume with minimal micro-conversions.',
    },
    {
      id: '02',
      title: 'INTEREST WITHOUT CLARITY',
      icon: Zap,
      summary: 'People are interested but don\'t understand the offer quickly enough.',
      detail:
        'The landing experience uses vague positioning or over-complicated corporate copy. The prospect cannot immediately determine whether you solve their exact commercial need.',
      symptom: 'High scroll rates but low form completion.',
    },
    {
      id: '03',
      title: 'ENQUIRY WITHOUT SPEED',
      icon: Clock,
      summary: 'A lead comes in but the response comes too late.',
      detail:
        'A high-intent buyer fills out a form, but hours pass before anyone reaches out. By the time your team responds, the buyer has already scheduled a call with a faster competitor.',
      symptom: 'Prospects say "I\'ve already sorted this with someone else."',
    },
    {
      id: '04',
      title: 'LEAD WITHOUT QUALIFICATION',
      icon: AlertTriangle,
      summary: 'The sales team spends time on enquiries that were never good opportunities.',
      detail:
        'Inbound channels lack diagnostic filtering. Sales representatives spend valuable consultation hours explaining basic details to prospects who lack budget, authority, or fit.',
      symptom: 'Sales team feels overworked but conversion rate remains low.',
    },
    {
      id: '05',
      title: 'CONVERSATION WITHOUT DIRECTION',
      icon: MessageSquare,
      summary: 'The customer is interested but the sales process has no clear progression.',
      detail:
        'Consultations end with ambiguous "send me an email" promises rather than agreed next milestones. Proposals are delivered without a confirmed review meeting scheduled.',
      symptom: 'Deals sit in pipeline purgatory for weeks.',
    },
    {
      id: '06',
      title: 'INTEREST WITHOUT FOLLOW-UP',
      icon: RefreshCw,
      summary: 'A potential customer disappears simply because the conversation stopped.',
      detail:
        'When a prospect does not purchase on the first interaction, there is no structured nurture or follow-up sequence. The lead is abandoned despite remaining interested.',
      symptom: '70%+ of past leads are never contacted a second time.',
    },
    {
      id: '07',
      title: 'MARKETING WITHOUT FEEDBACK',
      icon: BarChart2,
      summary: 'Money is spent generating attention without learning what actually produces revenue.',
      detail:
        'Advertising data stops at "clicks" or "leads" and never connects to closed sales. Marketing teams optimize for cheap form fills while sales teams complain about bad lead quality.',
      symptom: 'Ad strategy is completely detached from actual profit.',
    },
  ];

  return (
    <section id="breaks" className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            Diagnostic Patterns
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            Revenue rarely disappears at one obvious point.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            It leaks quietly across multiple small disconnects between attention, enquiry handling, qualification, and sales follow-up.
          </p>
        </div>

        {/* 7 Diagnostic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-[#FAF8F5] border border-[#E6E1D6] hover:border-[#0F1012] rounded-lg p-6 sm:p-8 transition-all duration-200 flex flex-col justify-between shadow-subtle group hover:shadow-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-3">
                    <span className="text-xs font-mono font-bold text-[#737887]">
                      BREAKPOINT // {card.id}
                    </span>
                    <Icon className="w-4 h-4 text-[#C84B27]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1012] tracking-tight group-hover:text-[#C84B27] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#0F1012]">
                    "{card.summary}"
                  </p>

                  <p className="text-xs text-[#4A4E58] leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E1D6] text-[11px] font-mono text-[#737887]">
                  <span className="text-[#C84B27] font-semibold">Common Symptom: </span>
                  {card.symptom}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
