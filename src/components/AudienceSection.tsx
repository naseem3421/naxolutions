'use client';

import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface AudienceSectionProps {
  onOpenDiagnostic: () => void;
}

export default function AudienceSection({ onOpenDiagnostic }: AudienceSectionProps) {
  const forCriteria = [
    'Already have a proven, real product or commercial service with established market demand.',
    'Already receive some level of customer attention, web traffic, or inbound enquiries.',
    'Know there is commercial growth potential, but current sales conversion feels inefficient.',
    'Have tried individual marketing tactics or vendors without solving the underlying revenue flow.',
    'Want a connected, structured revenue system rather than another disconnected vendor or freelancer.',
  ];

  const notForCriteria = [
    'You only want someone to run Meta or Google ads without looking at landing conversion or sales follow-up.',
    'You want the cheapest website possible to tick a box.',
    'You measure marketing success exclusively by vanity clicks, impressions, or cheap form-fills.',
    'You are unwilling to examine how inbound enquiries are handled or followed up after they arrive.',
    'You want a quick tactical hack without addressing the underlying commercial process.',
  ];

  return (
    <section id="who" className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider">
            Qualification & Fit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
            This is for businesses that already have something worth selling.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            We work best with companies where an incremental improvement in conversion system efficiency unlocks significant enterprise value.
          </p>
        </div>

        {/* Dual Column Criteria */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WHO THIS IS FOR */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
              <span className="font-bold text-lg text-[#0F1012] tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246]" />
                THIS IS FOR YOUR BUSINESS IF...
              </span>
              <span className="text-[10px] font-mono font-bold uppercase bg-white text-[#2B5246] px-2.5 py-1 rounded border border-[#E6E1D6]">
                Target Fit
              </span>
            </div>

            <ul className="space-y-4">
              {forCriteria.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F0EC] text-[#2B5246] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-[#0F1012] font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHO THIS IS NOT FOR */}
          <div className="bg-[#FAF8F5] border border-[#E8D5CC] rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E8D5CC] pb-4">
              <span className="font-bold text-lg text-[#C84B27] tracking-tight flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#C84B27]" />
                PROBABLY NOT FOR YOU IF...
              </span>
              <span className="text-[10px] font-mono font-bold uppercase bg-[#FDF4F0] text-[#C84B27] px-2.5 py-1 rounded border border-[#E8D5CC]">
                Non-Fit Boundaries
              </span>
            </div>

            <ul className="space-y-4">
              {notForCriteria.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FDF4F0] text-[#C84B27] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✕
                  </span>
                  <span className="text-sm text-[#4A4E58] font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* WORKING WITH EXISTING TEAMS MATRIX */}
        <div className="bg-[#FAF8F5] border border-[#0F1012]/10 rounded-xl p-8 mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0F1012]/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                Internal Alignment Matrix
              </span>
              <h3 className="text-xl font-bold text-[#0F1012]">
                How We Work With Your Existing Internal Team &amp; Vendors
              </h3>
            </div>
            <span className="text-xs font-mono bg-[#0F1012]/5 text-[#0F1012]/70 px-3 py-1 rounded border border-[#0F1012]/10 self-start sm:self-auto">
              Zero Friction Integration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-[#0F1012]/10 space-y-2">
              <div className="font-bold text-base text-[#0F1012] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B27]"></span>
                With In-House Media Buyers
              </div>
              <p className="text-xs text-[#4A4E58] leading-relaxed">
                We do not take over campaign management. We re-architect post-click conversion destinations &amp; lead capture so their existing traffic produces 2x-3x higher pipeline value.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#0F1012]/10 space-y-2">
              <div className="font-bold text-base text-[#0F1012] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B27]"></span>
                With Your Internal Sales Reps
              </div>
              <p className="text-xs text-[#4A4E58] leading-relaxed">
                We do not manage or replace reps. We build automated WhatsApp lead triage, CRM notifications, and follow-up protocols so reps only spend time closing qualified prospects.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#0F1012]/10 space-y-2">
              <div className="font-bold text-base text-[#0F1012] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B27]"></span>
                With In-House Tech / IT Teams
              </div>
              <p className="text-xs text-[#4A4E58] leading-relaxed">
                We build clean, API-first Next.js tools and webhooks that connect seamlessly into your existing CRM, WhatsApp Business API, or database without legacy codebase overhead.
              </p>
            </div>
          </div>
        </div>

        {/* Positioning Summary Callout */}
        <div className="bg-[#0F1012] text-white rounded-lg p-8 space-y-4 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[#B0B6C5] leading-relaxed max-w-3xl mx-auto">
            &quot;If you want someone to simply execute a task, there are plenty of specialists for that.
            <br />
            <span className="text-white font-semibold">
              If you want to understand why the business isn&apos;t converting as efficiently as it should, that&apos;s a different conversation.&quot;
            </span>
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors"
            >
              <span>Talk Through Your Conversion System</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
