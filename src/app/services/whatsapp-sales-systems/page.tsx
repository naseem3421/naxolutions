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
  MessageSquare,
  Activity,
  Workflow,
  ShieldCheck,
  Target,
  Clock,
  Smartphone,
} from 'lucide-react';

const faqItems = [
  {
    question: 'Why do WhatsApp leads ask for price and immediately ghost?',
    answer:
      'When inbound WhatsApp chats receive immediate raw price quotes without diagnostic qualification or value framing, the prospect treats your business as an undifferentiated commodity and departs. A WhatsApp Sales System uses structured qualification questions to pivot price inquiries into consultation conversations.',
  },
  {
    question: 'Will an automated WhatsApp system feel robotic or spammy?',
    answer:
      'No. We design conversational, respectful routing flows that provide immediate answers, brochures, and schedule links while seamlessly handing over warm conversations to human sales reps within minutes.',
  },
  {
    question: 'Can this integrate with our existing CRM and team workflow?',
    answer:
      'Yes. Using the official WhatsApp Business API, conversations are synchronized in real-time with your CRM (HubSpot, Zoho, LeadSquared, Salesforce, etc.), allowing multiple reps to manage conversations with full transparency.',
  },
  {
    question: 'Do sales reps need to give up their personal phones?',
    answer:
      'No. Reps can access the unified team inbox via web and mobile apps, preventing pipeline history from being lost whenever a sales rep leaves the company.',
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'WhatsApp Sales Systems', url: '/services/whatsapp-sales-systems' },
            ]}
          />

          {/* 1. HERO */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 03
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Stop Losing WhatsApp Leads to &quot;How Much?&quot; and Ghosting.
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "Moving inbound WhatsApp chats from raw price-checking to structured commercial dialogues."
            </p>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              In India and modern high-velocity markets, WhatsApp is where buyers prefer to converse. Yet most businesses treat it like an informal personal chat app: enquiries sit unassigned, reps reply hours late with uncontextualized prices, and follow-ups never happen. Naxolutions engineers high-converting WhatsApp sales systems with instant triage, qualification, and automated CRM sync.
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
                  Businesses driving traffic to click-to-WhatsApp ads or featuring WhatsApp buttons across their website.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Companies where sales reps manage high-value client conversations on disconnected personal phones.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Commercial operations losing leads who ask &quot;Price please?&quot; and disappear after seeing a number.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Founders with zero pipeline visibility into whether reps are actually following up with warm chat leads.
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
              Where Inbound WhatsApp Conversations Collapse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#C84B27]" />
                  Personal Phone Silos
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Leads live in individual rep handsets. When a rep goes on leave or resigns, customer history and open negotiations vanish completely.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C84B27]" />
                  Inconsistent Response Speed
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Enquiries coming in after business hours or during meetings wait 4 to 8 hours for a reply, long after buyer intent has cooled.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#C84B27]" />
                  Zero Structured Cadence
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  If the prospect doesn&apos;t reply immediately, reps do not follow up. There is no automated re-engagement or case-study broadcast.
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
              What We Diagnose Across Your WhatsApp Operations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A4E58]">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">1. Click-to-Chat Pre-Filled Messaging</div>
                <p className="text-xs">Evaluating if pre-filled messages capture campaign UTM source and specific product intent.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">2. First-Reply Latency &amp; Triage</div>
                <p className="text-xs">Measuring response time during working hours, weekends, and after-hours to detect leakage.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">3. Qualification &amp; Price Handling Scripts</div>
                <p className="text-xs">Reviewing how reps respond to price requests and whether questions steer towards calls.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">4. Follow-Up Cadence &amp; Re-engagement</div>
                <p className="text-xs">Analyzing what percentage of non-responsive prospects receive structured 3-touch or 5-touch follow-up.</p>
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
                <div className="font-bold text-base text-[#0F1012]">Official WhatsApp Business API Architecture</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Centralized multi-agent inbox setup connecting your official business number with full management oversight and audit trails.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Instant Interactive Triage &amp; Qualification</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automated interactive menu options delivering brochures, price ranges, and qualification questions in under 30 seconds.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Automated Multi-Touch Follow-Up Sequences</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Polite, timed follow-ups (Day 1, Day 3, Day 7) sharing customer case studies and consultation booking links if a lead pauses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Two-Way CRM Synchronization &amp; Tagging</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Automatic lead logging, deal stage updating, and rep assignment passed straight into your existing CRM without manual data entry.
                </p>
              </div>
            </div>
          </div>

          {/* 6. HOW THE SYSTEM WORKS (VISUAL WORKFLOW) */}
          <div className="bg-[#0F1012] text-white rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                WhatsApp Pipeline Flow
              </div>
              <span className="text-[10px] font-mono text-white/60">Automated Chat-to-Call System</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'WhatsApp Inbound Click',
                'Contextual Prefilled Prompt',
                'Instant Auto-Triage (<30s)',
                'Qualification Filter',
                'CRM Opportunity Created',
                'Rep Assigned with Context',
                'Automated 3-Touch Follow-Up',
                'Confirmed Consultation',
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
                <div className="text-xs font-mono text-[#4A4E58]">First-Reply Latency</div>
                <div className="text-xl font-bold text-[#0F1012]">&lt; 30 Seconds</div>
                <div className="text-[11px] text-[#737887]">24/7 automated triage</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Chat-to-Call Booking</div>
                <div className="text-xl font-bold text-[#0F1012]">22% – 38%</div>
                <div className="text-[11px] text-[#737887]">Up from sub-8%</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Follow-Up Recovery</div>
                <div className="text-xl font-bold text-[#0F1012]">18% – 25%</div>
                <div className="text-[11px] text-[#737887]">Re-engaged ghosted leads</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">CRM Sync Coverage</div>
                <div className="text-xl font-bold text-[#0F1012]">100%</div>
                <div className="text-[11px] text-[#737887]">Zero lost contacts</div>
              </div>
            </div>
          </div>

          {/* 8. CASE STUDY PROOF */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Related Case Proof // Commercial Advisory Firm
            </div>
            <h3 className="text-xl font-bold text-[#0F1012]">
              Replaced Raw Contact Forms with Automated WhatsApp Triage: 3.5x Higher Conversion
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              By introducing 1-click WhatsApp brochure delivery with automated budget qualification, the firm cut lead drop-off significantly and empowered sales reps to call pre-qualified investors with full property preference context.
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
              <h3 className="text-2xl font-bold text-white">Losing sales on WhatsApp?</h3>
              <p className="text-sm text-[#B0B6C5] leading-relaxed">
                We audit how your team receives, qualifies, and follows up on WhatsApp chats and engineer an automated commercial sales engine.
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
