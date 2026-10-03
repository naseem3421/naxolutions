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
  Layers,
  Activity,
  Workflow,
  ShieldCheck,
  Target,
  Smartphone,
  Zap,
} from 'lucide-react';

const faqItems = [
  {
    question: 'How is a conversion website different from a normal website?',
    answer:
      'A normal website functions as a passive digital brochure focused on decorative aesthetics and template layouts. A conversion website is engineered as an active commercial engine built around buyer decision psychology, commercial positioning, objection removal, and low-friction qualification intake.',
  },
  {
    question: 'Do we need to replace our entire existing website?',
    answer:
      'Not necessarily. If your current website communicates value clearly and generates enquiries, Naxolutions focuses on downstream leaks like response latency or sales follow-up. We only recommend redesigning or deploying dedicated conversion destinations if the web landing experience is actively losing revenue.',
  },
  {
    question: 'What technology stack do you use to build conversion websites?',
    answer:
      'We build high-performance, server-rendered applications using Next.js, TypeScript, and clean semantic architecture. This ensures instantaneous page loads, zero layout shifts, excellent Core Web Vitals, and seamless API webhook integration with your CRM.',
  },
  {
    question: 'Will our team be able to make updates easily?',
    answer:
      'Yes. Conversion destinations are engineered for long-term operational stability and can be connected to headless CMS platforms or structured configuration files that your team can manage without coding.',
  },
];

export default function ConversionWebsitesPage() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="service"
        title="Conversion-Focused Websites"
        description="Not a digital brochure. Naxolutions builds commercially structured conversion websites designed to turn attention into high-intent enquiries."
        url="/services/conversion-websites"
        breadcrumbs={[
          { name: 'Services', url: '/what-we-build' },
          { name: 'Conversion-Focused Websites', url: '/services/conversion-websites' },
        ]}
        faqItems={faqItems}
      />

      <Navigation onOpenDiagnostic={handleOpenDiagnostic} />

      <main className="flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ServiceBreadcrumbs
            items={[
              { name: 'Services', url: '/what-we-build' },
              { name: 'Conversion-Focused Websites', url: '/services/conversion-websites' },
            ]}
          />

          {/* 1. HERO */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              SYSTEM BUILDING BLOCK // 02
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Your Website Shouldn't Be a Digital Brochure. It Should Be a Conversion Engine.
            </h1>
            <p className="editorial-heading text-xl text-[#C84B27] italic">
              "The place where customer attention becomes clear commercial intent."
            </p>
            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              Most agency websites are built for visual applause rather than commercial action. They load slowly, speak in corporate clichés, hide contact mechanisms, and fail to address buyer hesitation. Naxolutions builds conversion websites engineered around commercial positioning, buyer decision clarity, and qualified intake.
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
                  Companies generating qualified traffic from search, paid ads, or referrals but converting under 2% into actual enquiries.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  B2B, industrial, and high-ticket service operations with outdated online brochures that don't reflect current enterprise caliber.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Firms spending heavily on Google or Meta Ads sending high-cost clicks to generic homepages.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246] shrink-0 mt-0.5" />
                <span className="text-sm text-[#4A4E58]">
                  Businesses whose website forms dump enquiries into email inboxes without CRM sync or instant routing.
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
              Why Most Websites Fail to Generate High-Intent Enquiries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C84B27]" />
                  Aesthetic Over Commercial Clarity
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Designers focus on animations and color palettes while neglecting the single most important element: answering why the buyer should care within 5 seconds.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#C84B27]" />
                  High Mobile Friction
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  70%+ of B2B decision-makers review initial links on mobile devices. Heavy scripts, tiny text, and rigid forms cause immediate bounces.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#E6E1D6] space-y-2">
                <div className="font-bold text-sm text-[#0F1012] flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#C84B27]" />
                  Vague Corporate Clichés
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  Copy filled with generic claims like &quot;innovative solutions&quot; rather than addressing the prospect&apos;s specific risk, cost, and implementation concerns.
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
              What We Diagnose Across Your Landing Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#4A4E58]">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">1. Above-The-Fold Value Framing</div>
                <p className="text-xs">Does the headline and subcopy immediately clarify category, target fit, and core problem solved?</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">2. Buyer Objection Architecture</div>
                <p className="text-xs">Are price hesitation, implementation timelines, and risk mitigation addressed systematically?</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">3. Intake Friction &amp; CTA Alignment</div>
                <p className="text-xs">Are conversion actions calibrated to buyer commitment, or asking for marriage on the first date?</p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6] space-y-1">
                <div className="font-bold text-[#0F1012]">4. Performance &amp; Core Web Vitals</div>
                <p className="text-xs">Auditing LCP, CLS, and mobile responsiveness to ensure speed never penalizes ad spend.</p>
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
                <div className="font-bold text-base text-[#0F1012]">Commercial Positioning &amp; Value Architecture</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Precision messaging engineered to answer the buyer&apos;s internal dialogue: &quot;Why should I care?&quot;, &quot;Why should I trust you?&quot;, and &quot;Why now?&quot;.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Server-Rendered Next.js Architecture</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Ultra-fast, zero-bloat web engineering achieving sub-second load times and flawless mobile responsiveness across all devices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Structured Objection-Removal FAQ &amp; Proof</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Strategic layout of verifiable case proof, methodology diagrams, and honest objection handling before the buyer reaches the intake.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E6E1D6] space-y-2 shadow-subtle">
                <div className="font-bold text-base text-[#0F1012]">Frictionless Intake &amp; 1-Click WhatsApp Hooks</div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  Mobile-optimized intake mechanisms, smart fields, and direct WhatsApp triggers configured for immediate lead capture.
                </p>
              </div>
            </div>
          </div>

          {/* 6. HOW THE SYSTEM WORKS (VISUAL WORKFLOW) */}
          <div className="bg-[#0F1012] text-white rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                Conversion Architecture Flow
              </div>
              <span className="text-[10px] font-mono text-white/60">Visitor-to-Lead Journey</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                'Targeted Visitor',
                '5s Problem Clarification',
                'Commercial Proof & Case Study',
                'Objection Removal',
                'Qualification Filter',
                'Direct Intake / WhatsApp',
                'High-Intent Opportunity',
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
                <div className="text-xs font-mono text-[#4A4E58]">Visitor-to-Enquiry Rate</div>
                <div className="text-xl font-bold text-[#0F1012]">3.5% – 7.0%+</div>
                <div className="text-[11px] text-[#737887]">Up from sub-1.5%</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Mobile Bounce Rate</div>
                <div className="text-xl font-bold text-[#0F1012]">&lt; 45%</div>
                <div className="text-[11px] text-[#737887]">Optimized mobile flow</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">LCP Page Speed</div>
                <div className="text-xl font-bold text-[#0F1012]">&lt; 1.2s</div>
                <div className="text-[11px] text-[#737887]">Sub-second loading</div>
              </div>
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E6E1D6] space-y-1">
                <div className="text-xs font-mono text-[#4A4E58]">Cost Per Qualified Lead</div>
                <div className="text-xl font-bold text-[#0F1012]">-40% – -60%</div>
                <div className="text-[11px] text-[#737887]">Higher landing yield</div>
              </div>
            </div>
          </div>

          {/* 8. CASE STUDY PROOF */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Related Case Proof // Commercial Real Estate Advisory
            </div>
            <h3 className="text-xl font-bold text-[#0F1012]">
              Replaced Static Brochure with Dedicated Conversion Destination: 3.5x More Site Visits
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              High-net-worth commercial buyers clicked search ads and bounced from a static 6-field contact form. Naxolutions re-engineered the landing destination around commercial investment metrics and 1-click WhatsApp brochure delivery, lifting enquiry rate from 1.8% to 6.4%.
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
              <h3 className="text-2xl font-bold text-white">Is your website losing qualified visitors?</h3>
              <p className="text-sm text-[#B0B6C5] leading-relaxed">
                We diagnose landing page friction and engineer your web conversion experience around commercial clarity.
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
