'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DiagnosticModal from '@/components/DiagnosticModal';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServiceBreadcrumbs from '@/components/ServiceBreadcrumbs';
import {
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  GitMerge,
  Activity,
  Workflow,
  ShieldCheck,
  Target,
  BarChart3,
  Layers,
} from 'lucide-react';

const faqItems = [
  {
    question: 'Why do marketing teams and sales teams constantly blame each other?',
    answer:
      'Marketing agencies are typically incentivized to generate cheap clicks and high form-fill volume. Sales teams, conversely, are judged on closed contracts and gross revenue. Without a unified conversion architecture connecting them, marketing blames sales for not closing, while sales blames marketing for sending unqualified junk.',
  },
  {
    question: 'Do you replace our existing ad agency or media buyers?',
    answer:
      'No. We do not need to replace your media buyers. We build the connective architecture: passing campaign search intent directly to sales reps, implementing qualification filters, and feeding closed-won data back to ad algorithms so campaigns optimize for real revenue.',
  },
  {
    question: 'Can we track offline phone calls and WhatsApp deals back to specific ad campaigns?',
    answer:
      'Yes. By implementing clean UTM parameter capture and CRM attribution workflows, offline calls, WhatsApp consultations, and closed invoices can be tied directly back to the original acquisition source.',
  },
  {
    question: 'How long does it take to connect our marketing and sales systems?',
    answer:
      'A full integration sprint typically takes 30 to 45 days, covering attribution setup, intake qualification redesign, CRM pipeline routing, and rep notification protocol deployment.',
  },
];

export default function MarketingToSalesSystemsPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Marketing-to-Sales Systems"
        description="Bridge the disconnect between marketing ads and closed sales. Naxolutions connects acquisition, landing experience, qualification, and sales conversations."
        url="/services/marketing-to-sales-systems"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Marketing-to-Sales Systems', url: '/services/marketing-to-sales-systems' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Marketing-to-Sales Systems', url: '/services/marketing-to-sales-systems' },
            ]}
          />

          {/* 1. HERO */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 04
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              End the Disconnect Between Marketing and Sales. Unify Your Pipeline.
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Connecting customer attention, web intake, sales qualification, and bank revenue into one continuous journey."
            </p>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              When marketing and sales operate as separate silos, revenue leaks through the cracks. Marketing celebrates low cost-per-click while sales reps complain about tire-kickers who have no budget. Naxolutions bridges the chasm: creating closed-loop attribution, real-time lead context, and unified conversion measurement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={handleOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors shadow-subtle flex items-center justify-center gap-2"
              >
                <span>Find My Revenue Leak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/consultation"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0F1012] bg-white border border-[#E6E1D6] hover:border-[#0F1012] rounded transition-colors text-center"
              >
                Book a Diagnostic
              </Link>
            </div>
          </div>

          {/* 2. WHO THIS IS FOR */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-4 shadow-subtle">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              Who This Is For
            </div>
            <h2 className="text-2xl font-bold text-[#0F1012]">
              Ideal Business Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Companies with an internal sales team where reps complain about poor lead quality from paid campaigns.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Businesses spending on Meta or Google Ads unable to determine which campaigns generate closed revenue.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Operations where sales reps receive raw form notifications without search context or intent data.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Leadership teams tired of mediating finger-pointing between agency vendors and in-house sales managers.
                </span>
              </div>
            </div>
          </div>

          {/* 3. THE PROBLEM & SYMPTOMS */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              The Core Problem
            </div>
            <h2 className="text-2xl font-bold text-[#0F1012]">
              The Costly Chasm Between Marketing Clicks and Closed Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#C84B27]" />
                  Vanity Metric Optimization
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Ad agencies optimize algorithms for cheap form submissions, flooding your sales reps with low-budget consumers who never buy.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-[#C84B27]" />
                  Context Blindness
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Reps call prospects without knowing which ad they clicked, which problem they were trying to solve, or what page they viewed.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C84B27]" />
                  Broken Feedback Loop
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Sales pipeline outcomes are never fed back into marketing channels, preventing ad networks from targeting higher-value prospects.
                </p>
              </div>
            </div>
          </div>

          {/* 4. WHAT WE DIAGNOSE */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
            <div className="text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              Diagnostic Scope
            </div>
            <h2 className="text-2xl font-bold text-[#0F1012]">
              What We Diagnose Across Your Commercial Hand-Off
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A4E58]">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">1. Attribution Integrity &amp; Tracking Gaps</div>
                <p className="text-xs">Verifying whether UTM data survives form submissions, WhatsApp clicks, and CRM imports.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">2. Sales Qualification Alignment</div>
                <p className="text-xs">Ensuring marketing qualification parameters match what sales reps actually need to close deals.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">3. Lead-to-Opportunity Drop-off</div>
                <p className="text-xs">Identifying exactly where in the sales stage prospects stall: first contact, proposal, or follow-up.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">4. Revenue Closed Per Acquisition Channel</div>
                <p className="text-xs">Calculating true return on investment and revenue yield rather than surface-level cost-per-lead.</p>
              </div>
            </div>
          </div>

          {/* 5. WHAT WE BUILD */}
          <div className="space-y-6">
            <div className="text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              Tangible Deliverables
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1012]">
              What Naxolutions Actually Builds
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Closed-Loop UTM &amp; Attribution Architecture</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Deep tracking passing campaign search queries, ad creative IDs, and page sources directly into lead records in your CRM.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Context-Enriched Rep Notification Systems</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Instant mobile notifications for reps showing what problem the prospect wanted solved and what service tier they requested.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Automated Lead Triage &amp; Round-Robin Routing</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automatic routing directing enterprise deals to senior closers while routing smaller accounts to automated booking calendars.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Offline Conversion API Synchronization</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automated webhooks feeding closed-won deal values back to Google Ads and Meta CAPI to continuously train ad targeting.
                </p>
              </div>
            </div>
          </div>

          {/* 6. HOW THE SYSTEM WORKS (VISUAL WORKFLOW) */}
          <div className="bg-[#0F1012] text-white rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                Closed-Loop Revenue System
              </div>
              <span className="text-[10px] font-mono text-white/60">Unified Acquisition-to-Close Flow</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'Search Intent / Ad Click',
                'UTM & Context Captured',
                'Conversion Destination',
                'Qualification Filter',
                'Contextual CRM Alert',
                'Consultative Rep Pitch',
                'Closed Sale Recorded',
                'Ad Algorithm Re-Trained',
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono border ${
                      idx === arr.length - 1
                        ? 'bg-[#C84B27] text-white border-[#C84B27] font-bold'
                        : 'bg-[#16181B] text-white/90 border-white/15'
                    }`}
                  >
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-[#C84B27] font-bold text-xs select-none">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 7. WHAT GETS MEASURED */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle">
            <div className="text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              Performance Metrics
            </div>
            <h2 className="text-2xl font-bold text-[#0F1012]">
              What We Track &amp; Measure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Lead-to-Opportunity</div>
                <div className="text-xl font-bold text-[#0F1012]">15% – 30%+</div>
                <div className="text-[11px] text-[#737887]">Up from single digits</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Cost Per Opportunity</div>
                <div className="text-xl font-bold text-[#0F1012]">-35% – -50%</div>
                <div className="text-[11px] text-[#737887]">True sales efficiency</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Sales Velocity</div>
                <div className="text-xl font-bold text-[#0F1012]">-20 Days</div>
                <div className="text-[11px] text-[#737887]">Faster closing cycle</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Attribution Integrity</div>
                <div className="text-xl font-bold text-[#0F1012]">98%+</div>
                <div className="text-[11px] text-[#737887]">Full pipeline clarity</div>
              </div>
            </div>
          </div>

          {/* 8. CASE STUDY PROOF */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Related Case Proof // Medical Technology Enterprise
            </div>
            <h3 className="text-xl font-bold text-[#0F1012]">
              Connected Disjointed Ads &amp; Sales Workflows: Recovered ₹42 Lakhs in Quarterly Pipeline
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              Marketing ran separate search campaigns while sales reps worked out of isolated spreadsheets with no search context. By integrating deep UTM context into CRM sales scripts and enforcing an automated 5-minute lead alert protocol, the company lifted qualified opportunities from 4.5% to 14.2%.
            </p>
            <div className="pt-2">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-xs font-semibold text-[#C84B27] hover:underline"
              >
                View Full Case Teardown →
              </Link>
            </div>
          </div>

          {/* 9. FAQ */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0F1012]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                  <h3 className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C84B27]" />
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10. BOTTOM CTA */}
          <div className="bg-[#0F1012] text-white p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-white">Is your marketing disconnected from sales?</h3>
              <p className="text-sm text-[#B0B6C5] leading-relaxed">
                We audit the hand-off between acquisition and sales execution to eliminate leakage and unify your pipeline around revenue.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleOpenDiagnostic}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] rounded hover:bg-[#B23E1C] transition-colors whitespace-nowrap text-center"
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
