'use client';

import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Building2, Briefcase, Gem, Megaphone, Users2 } from 'lucide-react';

interface AudienceSectionProps {
  onOpenDiagnostic: () => void;
}

export default function AudienceSection({ onOpenDiagnostic }: AudienceSectionProps) {
  const icpProfiles = [
    {
      title: 'Established Local Businesses',
      icon: Building2,
      description: 'Businesses already receiving regular phone calls, walk-ins, or WhatsApp enquiries, but losing qualified opportunities due to slow responses or unstructured follow-up.',
    },
    {
      title: 'B2B & Industrial Companies',
      icon: Briefcase,
      description: 'Manufacturing, technical, SaaS, and professional services where buyer journeys take weeks, and enquiries leak across fragmented email threads and manual spreadsheets.',
    },
    {
      title: 'High-Ticket Service Providers',
      icon: Gem,
      description: 'Advisory, luxury, real estate, and specialized firms where every single qualified enquiry has significant commercial value, making even a 2% conversion lift transformative.',
    },
    {
      title: 'Businesses Running Paid Advertising',
      icon: Megaphone,
      description: 'Companies already investing in Google Ads or Meta Ads whose cost-per-lead is acceptable, but whose cost-per-customer is bloated by poor landing and intake conversion.',
    },
    {
      title: 'Businesses With Sales Teams',
      icon: Users2,
      description: 'Organizations where internal sales reps waste 50%+ of their day manually following up with tire-kickers instead of closing pre-qualified, high-intent prospects.',
    },
  ];

  const forCriteria = [
    'Already have a proven, real product or commercial service with established market demand.',
    'Already receive customer attention, inbound enquiries, web traffic, or word-of-mouth referrals.',
    'Know there is commercial growth potential, but current sales conversion feels fragmented or leaky.',
    'Have tried individual marketing vendors or ad agencies without fixing the underlying sales flow.',
    'Want a connected, structured revenue system rather than another disconnected freelancer.',
  ];

  const notForCriteria = [
    'Brand-new ventures looking for someone to figure out product-market fit from scratch.',
    'You only want someone to manage Meta or Google ads without addressing landing conversion or sales follow-up.',
    'You want the cheapest template website possible merely to tick an online presence box.',
    'You measure marketing success exclusively by vanity clicks, impressions, or cheap form-fills.',
    'You are unwilling to examine how inbound enquiries are handled or followed up after they arrive.',
  ];

  return (
    <section id="who" className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#4A4E58] uppercase tracking-wider">
            Who Naxolutions Helps
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
            Built for businesses that already have something worth selling.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            We work exclusively with established commercial operations where an incremental lift in conversion efficiency unlocks substantial enterprise profit. We do not claim to serve every business type.
          </p>
        </div>

        {/* 5 Specific ICP Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {icpProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            const isLast = idx === icpProfiles.length - 1;
            return (
              <div
                key={idx}
                className={`bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 space-y-3 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E6E1D6] flex items-center justify-center text-[#C84B27]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#0F1012]">{profile.title}</h3>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  {profile.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dual Column Qualification Criteria */}
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
                We do not replace your media buyers. We re-architect post-click conversion destinations &amp; lead capture so their existing traffic produces substantially higher pipeline value.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#0F1012]/10 space-y-2">
              <div className="font-bold text-base text-[#0F1012] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B27]"></span>
                With Your Internal Sales Reps
              </div>
              <p className="text-xs text-[#4A4E58] leading-relaxed">
                We do not replace your sales team. We build automated WhatsApp lead triage, CRM notifications, and follow-up protocols so reps spend their hours closing qualified buyers rather than chasing non-responsive leads.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-[#0F1012]/10 space-y-2">
              <div className="font-bold text-base text-[#0F1012] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B27]"></span>
                With In-House Tech / IT Teams
              </div>
              <p className="text-xs text-[#4A4E58] leading-relaxed">
                We build clean, API-first Next.js tools and webhooks that connect seamlessly into your existing CRM, WhatsApp Business API, or database without technical debt or legacy friction.
              </p>
            </div>
          </div>
        </div>

        {/* Positioning Summary Callout */}
        <div className="bg-[#0F1012] text-white rounded-lg p-8 space-y-4 text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[#B0B6C5] leading-relaxed max-w-3xl mx-auto">
            &quot;If you want someone to execute a tactical checklist, there are thousands of freelancers for that.
            <br />
            <span className="text-white font-semibold">
              If you want to diagnose and engineer why the business isn&apos;t converting as profitably as it should, that&apos;s Naxolutions.&quot;
            </span>
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors"
            >
              <span>Find My Revenue Leak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
