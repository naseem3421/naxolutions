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
  Clock,
  Target,
  Layers,
  Activity,
  Workflow,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const faqItems = [
  {
    question: 'What is a Lead Conversion System?',
    answer:
      'A Lead Conversion System is the operational and technological framework that captures inbound enquiries, instantly notifies sales teams, qualifies prospects based on budget and commercial fit, and routes them directly into a structured sales conversation.',
  },
  {
    question: 'Why do leads drop off before the sales call?',
    answer:
      'The primary cause is response latency. Industry research shows buyer responsiveness decays rapidly after the first 5 minutes. If your team takes 3 to 6 hours to reply, the prospect has already moved on or contacted faster competitors.',
  },
  {
    question: 'How does Naxolutions fix lead drop-off?',
    answer:
      'We deploy automated instant response triggers (WhatsApp/SMS/Email), qualification intake filters to separate tire-kickers, and automated calendar scheduling to lock in consultations immediately.',
  },
  {
    question: 'Can this integrate with our existing CRM and ad channels?',
    answer:
      'Yes. We build clean API webhooks that seamlessly bridge your Meta Ads, Google Ads, website forms, CRM (HubSpot, Zoho, Salesforce, etc.), and WhatsApp Business API.',
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Lead Conversion Systems', url: '/services/lead-conversion-systems' },
            ]}
          />

          {/* 1. HERO */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 01
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Stop Losing Qualified Leads Between Form Submit and Sales Call.
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Transforming inbound marketing enquiries into qualified sales conversations with zero manual delay."
            </p>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              When an interested prospect reaches out, their intent is at its peak. Every hour of delay between enquiry submission and sales response directly destroys pipeline conversion. Naxolutions builds the end-to-end bridge between lead generation and sales meetings.
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
                  Companies generating 20+ inbound enquiries per month via paid ads, website forms, or organic search.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  B2B firms and high-ticket service operations where every qualified sales conversation carries substantial commercial value.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Businesses whose sales reps complain of &quot;unqualified leads&quot; while prospects complain of slow callbacks.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Teams relying on manual spreadsheet exporting or disjointed email alerts to distribute new leads.
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
              Where Inbound Enquiries Leak Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C84B27]" />
                  Response Latency
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Enquiries sit in email inboxes for hours. Prospects forget they submitted or book calls with competitors who responded in minutes.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C84B27]" />
                  Zero Upfront Qualification
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Sales reps waste hours pitching low-fit prospects with zero budget because the intake mechanism lacked qualification filters.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#C84B27]" />
                  Broken Follow-Up Cadence
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  When a prospect misses the initial call, reps abandon them after 1 or 2 attempts without structured multi-channel re-engagement.
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
              What We Diagnose Across Your Intake Pipeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A4E58]">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">1. Submission-to-First-Touch Latency</div>
                <p className="text-xs">Measuring the precise elapsed time from form or ad submit to actual human or automated contact.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">2. Intake Friction &amp; Drop-off Points</div>
                <p className="text-xs">Analyzing form completion rates, field fatigue, and mobile usability obstacles.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">3. Lead Qualification Thresholds</div>
                <p className="text-xs">Evaluating how effectively your system identifies deal size, timeline, and decision-maker status.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">4. Routing &amp; Calendar Booking Rate</div>
                <p className="text-xs">Tracking what percentage of qualified leads successfully confirm an appointment on your sales calendar.</p>
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
                <div className="font-bold text-base text-[#0F1012]">Instant Multi-Channel Response Automation</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automated WhatsApp, SMS, and Email triggers delivering relevant brochures, case proof, and next-step links in under 60 seconds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Diagnostic Intake Qualification Logic</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Smart intake mechanisms that immediately triage high-budget enterprise prospects and guide them into priority booking slots.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Direct Calendar Reservation Integration</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Seamless calendar integration eliminating back-and-forth scheduling emails, complete with automated meeting reminders.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">CRM Synchronization &amp; Rep Alerts</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Direct webhook synchronization passing lead source, search intent, and qualification answers straight to rep notification channels.
                </p>
              </div>
            </div>
          </div>

          {/* 6. HOW THE SYSTEM WORKS (VISUAL WORKFLOW) */}
          <div className="bg-[#0F1012] text-white rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                Pipeline Architecture
              </div>
              <span className="text-[10px] font-mono text-white/60">Automated Intake Flow</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'Inbound Form / Ad',
                'Instant Webhook (<60s)',
                'Qualification Filter',
                'WhatsApp & Calendar Invite',
                'CRM Pipeline Sync',
                'Rep Pre-Call Alert',
                'Qualified Consultation',
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
                <div className="text-xs font-mono text-[#4A4E58]">First-Touch Latency</div>
                <div className="text-xl font-bold text-[#0F1012]">&lt; 90 Seconds</div>
                <div className="text-[11px] text-[#737887]">Down from hours</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Intake Completion</div>
                <div className="text-xl font-bold text-[#0F1012]">35% – 50%</div>
                <div className="text-[11px] text-[#737887]">Qualified answer rate</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Booking Show-Up Rate</div>
                <div className="text-xl font-bold text-[#0F1012]">75% – 85%</div>
                <div className="text-[11px] text-[#737887]">With automated reminders</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Rep Qualification Time</div>
                <div className="text-xl font-bold text-[#0F1012]">-60% Waste</div>
                <div className="text-[11px] text-[#737887]">Filtered tire-kickers</div>
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
              Eliminated 18-Hour Lead Latency &amp; Lifted Demo Opportunities 3.6x
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              By replacing weekly spreadsheet lead syncs with an instant webhook intake and direct calendar scheduling system, the client cut average response latency from 18 hours to under 90 seconds. Their demo-to-opportunity rate rose from 3.2% to 11.8% with zero additional advertising spend.
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
              <h3 className="text-2xl font-bold text-white">Losing leads between marketing and sales?</h3>
              <p className="text-sm text-[#B0B6C5] leading-relaxed">
                We diagnose your exact leak points and build the connected intake framework to convert attention into revenue.
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
