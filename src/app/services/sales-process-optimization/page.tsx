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
  PhoneCall,
  Activity,
  Workflow,
  ShieldCheck,
  Target,
  Repeat,
  FileCheck,
} from 'lucide-react';

const faqItems = [
  {
    question: 'How does sales process optimization stop proposal stalling?',
    answer:
      'Proposals stall when they are emailed without a locked review commitment. We restructure the consultation protocol so reps schedule a live proposal walkthrough before sending any numbers, eliminating the "send it to my email and I\'ll get back to you" trap.',
  },
  {
    question: 'Do you replace our sales reps or conduct sales training?',
    answer:
      'No. We do not replace your sales reps. We engineer the structural operational framework: diagnostic call scripts, pre-call intake briefings, automated CRM reminders, and follow-up templates so your existing team performs at peak conversion efficiency.',
  },
  {
    question: 'What if our buyers have long sales cycles (30 to 90 days)?',
    answer:
      'Long sales cycles are where systems matter most. We build automated multi-touch nurture cadences (sharing technical teardowns, ROI calculators, and client case studies via WhatsApp and Email) so your business stays top-of-mind across the entire buying committee.',
  },
  {
    question: 'How do you prevent reps from wasting time on unqualified tire-kickers?',
    answer:
      'By implementing mandatory upfront intake criteria. Prospects must confirm budget band, timeline, and decision authority before booking senior sales rep calendar time.',
  },
];

export default function SalesProcessOptimizationPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Sales Process Optimization"
        description="Eliminate sales call waste, qualify prospects automatically, and establish structured follow-up sequences for higher closed revenue."
        url="/services/sales-process-optimization"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Sales Process Optimization', url: '/services/sales-process-optimization' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Sales Process Optimization', url: '/services/sales-process-optimization' },
            ]}
          />

          {/* 1. HERO */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 05
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Transform Sales Conversations from Unstructured Chats into Predictable Revenue.
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Focusing sales capacity 100% on high-fit prospects with real budget and clear intent."
            </p>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              If your sales reps pitch before diagnosing, email proposals without scheduling review calls, and abandon leads after two unanswered rings, your business is hemorrhaging revenue. Naxolutions engineers diagnostic sales frameworks, milestone-based proposal protocols, and structured multi-touch nurture systems.
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
                  Companies with 2 to 20 sales reps having conversations that frequently stall at the proposal stage.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  High-ticket service, SaaS, and B2B firms where closing even 2 additional opportunities per month unlocks significant profit.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Operations where follow-up depends solely on individual rep memory rather than automated CRM sequences.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Founders spending hours on sales calls that end with &quot;Send me your deck and I&apos;ll discuss with my partner.&quot;
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
              Where Sales Opportunities Go Cold
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#C84B27]" />
                  Premature Pitching
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Reps talk 80% of the time, presenting features and slide decks before diagnosing the prospect&apos;s specific financial friction or budget reality.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#C84B27]" />
                  The Proposal Black Hole
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Proposals are emailed into the void without a confirmed calendar appointment to review terms, allowing deals to stall indefinitely.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-[#C84B27]" />
                  Single-Touch Follow-Up
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Reps call once or twice. If the buyer doesn&apos;t answer, the lead is marked &quot;unresponsive&quot; and abandoned forever.
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
              What We Diagnose Across Your Sales Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A4E58]">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">1. Discovery Call Structure &amp; Question Depth</div>
                <p className="text-xs">Evaluating whether reps effectively uncover decision criteria, budget limits, and project timelines.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">2. Proposal-to-Close Velocity</div>
                <p className="text-xs">Auditing elapsed days between proposal delivery and contract signature to detect stall points.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">3. Follow-Up Touchpoints &amp; Cadence</div>
                <p className="text-xs">Measuring how many follow-up attempts occur across WhatsApp, phone, and email before a deal is closed or lost.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">4. Objection Handling Frameworks</div>
                <p className="text-xs">Assessing how reps navigate price objections, competitor comparisons, and decision authority friction.</p>
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
                <div className="font-bold text-base text-[#0F1012]">Diagnostic Discovery Framework</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  A structured consultative script guiding reps to uncover real commercial pain, establish ROI thresholds, and qualify buyer readiness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Milestone-Locked Proposal Protocols</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Rules requiring review call booking before proposal delivery, ensuring deals never stall in unchecked inboxes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Automated Multi-Touch Follow-Up Systems</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Structured 14 to 30-day follow-up cadences combining WhatsApp case studies, rep reminder prompts, and email check-ins.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">CRM Deal Stage Rules &amp; Stalled Deal Alerts</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automated notifications alerting sales leaders whenever an active deal sits in a stage past its normal velocity threshold.
                </p>
              </div>
            </div>
          </div>

          {/* 6. HOW THE SYSTEM WORKS (VISUAL WORKFLOW) */}
          <div className="bg-[#0F1012] text-white rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                Optimized Sales Flow
              </div>
              <span className="text-[10px] font-mono text-white/60">Structured Consultation Journey</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'Pre-Qualified Lead',
                'Diagnostic Discovery',
                'Pain & Budget Scored',
                'Live Proposal Walkthrough',
                'Mutual Action Agreement',
                'Automated Multi-Touch Cadence',
                'Signed Contract & Payment',
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
                <div className="text-xs font-mono text-[#4A4E58]">Call-to-Proposal Rate</div>
                <div className="text-xl font-bold text-[#0F1012]">40% – 55%</div>
                <div className="text-[11px] text-[#737887]">Qualified prospect ratio</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Proposal Close Rate</div>
                <div className="text-xl font-bold text-[#0F1012]">30% – 45%</div>
                <div className="text-[11px] text-[#737887]">Live walkthrough rule</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Sales Cycle Length</div>
                <div className="text-xl font-bold text-[#0F1012]">-30% Days</div>
                <div className="text-[11px] text-[#737887]">Fewer stalled deals</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Rep Pipeline Capacity</div>
                <div className="text-xl font-bold text-[#0F1012]">2.5x Deals</div>
                <div className="text-[11px] text-[#737887]">Less manual chasing</div>
              </div>
            </div>
          </div>

          {/* 8. CASE STUDY PROOF */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Related Case Proof // B2B SaaS Enterprise
            </div>
            <h3 className="text-xl font-bold text-[#0F1012]">
              Structured Demo Routing &amp; 7-Stage Follow-Up: Lifted Closed Deals 3.6x
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              Sales reps previously handled demo requests with ad-hoc manual emails and gave up if leads missed the initial call. By deploying automated reminder sequences and a structured 7-stage follow-up cadence, the company increased demo-to-opportunity rate from 3.2% to 11.8%.
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
              <h3 className="text-2xl font-bold text-white">Are sales calls ending in radio silence?</h3>
              <p className="text-sm text-[#B0B6C5] leading-relaxed">
                We audit your consultation scripts, proposal protocols, and follow-up architecture to transform conversations into revenue.
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
