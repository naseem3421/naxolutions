'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, XCircle, Clock, Zap, Calendar, Workflow, ShieldCheck } from 'lucide-react';

interface DiagnosticCaseTeardownsProps {
  onOpenDiagnostic?: () => void;
}

interface CaseStudy {
  id: string;
  clientDescriptor: string;
  industry: string;
  businessType: string;
  location: string;
  timeline: string;
  headline: string;
  challenge: string;
  before: {
    latency: string;
    conversion: string;
    followUp: string;
    bottleneck: string;
  };
  whatWeChanged: string[];
  systemFlow: string[];
  after: {
    latency: string;
    conversion: string;
    followUp: string;
    systemFix: string;
  };
  impact: string;
  contextNote: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas-enterprise',
    clientDescriptor: 'B2B Enterprise Software Firm',
    industry: 'B2B Enterprise Software',
    businessType: 'Contract Value ₹8,00,000 / year',
    location: 'Chennai, India',
    timeline: '45-Day Architecture & Integration Sprint',
    headline: 'Eliminating 18-Hour Lead Latency & Structuring Enterprise Demo Routing',
    challenge:
      'The company was investing significantly in Google Search and LinkedIn ads to drive demo requests. However, inbound submissions sat in email queues before being manually logged into weekly spreadsheet syncs, allowing high-intent enterprise buyers to contact faster competitors before reps ever reached out.',
    before: {
      latency: '18 hours average first contact',
      conversion: '3.2% Demo-to-Opportunity rate',
      followUp: 'Ad-hoc manual sales rep emails with 1-touch follow-up',
      bottleneck: 'Inbound buyer interest expired before sales reps received contact information.',
    },
    whatWeChanged: [
      'Engineered an instant API webhook connecting landing forms directly into rep notification channels within 60 seconds.',
      'Implemented automated multi-question intake triage separating tire-kickers from high-budget accounts.',
      'Embedded direct calendar reservation with automatic CRM opportunity creation and calendar sync.',
      'Configured a 7-stage automated WhatsApp & email re-engagement protocol for leads who dropped out before demo completion.',
    ],
    systemFlow: [
      'Inbound Ad Traffic',
      'Instant Webhook (<60s)',
      'Budget Triage',
      'Automated Calendar Booking',
      'CRM Sync',
      'Account Exec Demo',
      '7-Stage Follow-Up',
      'Closed Contract',
    ],
    after: {
      latency: '< 90 seconds automated acknowledgment',
      conversion: '11.8% Demo-to-Opportunity rate',
      followUp: 'Structured 7-stage automated WhatsApp + CRM sequence',
      systemFix: 'Instant qualification intake + direct calendar reservation system.',
    },
    impact: '3.6x lift in qualified sales conversations without increasing paid advertising spend.',
    contextNote: 'Client identity confidential under NDA. Results represent measured client pipeline data over a 90-day post-launch evaluation window.',
  },
  {
    id: 'commercial-real-estate',
    clientDescriptor: 'Commercial Real Estate Advisory',
    industry: 'Commercial Real Estate & Advisory',
    businessType: 'Transaction Size ₹1.5 Cr+',
    location: 'Chennai, India',
    timeline: '30-Day Conversion Architecture Sprint',
    headline: 'Replacing Generic Website Forms with Instant WhatsApp Triage',
    challenge:
      'High-net-worth commercial property investors clicked targeted search ads only to land on a static "Contact Us" brochure page with a generic 6-field form. Over 90% of mobile visitors bounced without taking action, and those who did submit waited hours for a manual sales call.',
    before: {
      latency: '4 to 6 hours during standard business hours',
      conversion: '1.8% Visitor-to-Enquiry rate',
      followUp: 'Unstructured personal mobile calls without lead context',
      bottleneck: 'High mobile bounce rate; no instant brochure or floor plan delivery on preferred channel.',
    },
    whatWeChanged: [
      'Replaced the static brochure website with a conversion-engineered property presentation with clear commercial positioning.',
      'Deployed a 1-click WhatsApp intake trigger delivering curated property decks and floor plans in under 30 seconds.',
      'Integrated an automated qualification prompt verifying investor budget range and preferred micro-market before sales hand-off.',
      'Built automated lead notification triggers for commercial advisory specialists with instant CRM logging.',
    ],
    systemFlow: [
      'Commercial Search Ads',
      'Conversion Landing Experience',
      '1-Click WhatsApp Trigger',
      'Instant Deck Delivery (<30s)',
      'Budget & Area Triage',
      'Advisory Specialist Call',
      'Automated Site Visit Booking',
    ],
    after: {
      latency: 'Instant automated WhatsApp brochure delivery (<30s)',
      conversion: '6.4% Visitor-to-Enquiry rate',
      followUp: 'Automated 14-day sequence with floor plans & micro-market updates',
      systemFix: 'Dedicated high-converting property landing system with automated WhatsApp triage.',
    },
    impact: '3.5x higher qualified investor site-visit booking rate from existing ad traffic.',
    contextNote: 'Client identity confidential under NDA. Measured across 120 days of active commercial campaign traffic.',
  },
  {
    id: 'healthcare-medical-tech',
    clientDescriptor: 'Specialized Medical Tech & B2B Equipment',
    industry: 'High-Ticket Medical Technology',
    businessType: 'Sales Cycle 60–90 Days',
    location: 'Chennai, India',
    timeline: '60-Day Full Pipeline Integration',
    headline: 'Unifying Disconnected Ad Campaigns & Sales Rep Follow-Up Protocols',
    challenge:
      'Marketing ran Google Ads driving clinical leads to unoptimized product spec pages. Meanwhile, the sales department worked from isolated spreadsheets and gave up after one or two phone calls. Reps lacked visibility into which equipment category the prospect originally searched for.',
    before: {
      latency: '24+ hours via basic email inquiry forms',
      conversion: '4.5% Inquiry-to-Qualified-Lead rate',
      followUp: 'Maximum 2 phone attempts before marking lead abandoned',
      bottleneck: 'Sales reps lacked campaign search context and had no structured multi-touch nurture protocol.',
    },
    whatWeChanged: [
      'Structured dedicated conversion pages for each high-ticket equipment category with explicit ROI breakdowns.',
      'Passed complete UTM attribution and clinical specialty tags directly into the CRM pipeline on form submit.',
      'Architected a 14-day multi-channel nurture sequence (WhatsApp case studies + technical whitepapers + rep call prompts).',
      'Established a strict 5-minute lead response protocol with automatic escalation if an inquiry was untouched.',
    ],
    systemFlow: [
      'Clinical Search Intent',
      'Equipment Conversion Pages',
      'UTM & Specialty Tagging',
      '5-Min Rep Notification & Escalation',
      '14-Day Case Study Nurture',
      'Clinical Consultation Call',
      'Proposal & Procurement',
    ],
    after: {
      latency: '< 3 minutes automated routing & rep alerting',
      conversion: '14.2% Inquiry-to-Qualified-Lead rate',
      followUp: 'Structured 14-day multi-channel educational nurture',
      systemFix: 'Deep UTM-to-CRM context synchronization + automated rep follow-up protocols.',
    },
    impact: '₹42 Lakhs in recovered pipeline opportunities within the first quarter post-deployment.',
    contextNote: 'Client identity confidential under NDA. Financial pipeline figures based on verified client CRM closed-won attribution data.',
  },
];

export default function DiagnosticCaseTeardowns({ onOpenDiagnostic }: DiagnosticCaseTeardownsProps) {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="pt-16 pb-24 bg-[#0F1012] text-[#FAF8F5] relative overflow-hidden border-b border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B27]/15 border border-[#C84B27]/30 text-[#C84B27] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Diagnostic Case Teardowns
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] mb-6">
            Real Pipeline Transformations: Before &amp; After Naxolutions
          </h2>
          <p className="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed">
            See how identifying structural revenue leaks, eliminating response latency, and building connected follow-up protocols transforms conversion output without spending an extra rupee on advertising.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div role="tablist" aria-label="Case Study Industries" className="flex flex-wrap justify-center gap-3 mb-12">
          {CASE_STUDIES.map((study) => {
            const isActive = study.id === activeTab;
            return (
              <button
                key={study.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`case-study-panel-${study.id}`}
                id={`case-study-tab-${study.id}`}
                onClick={() => setActiveTab(study.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#C84B27] text-[#FAF8F5] border-[#C84B27] shadow-lg shadow-[#C84B27]/20 font-semibold'
                    : 'bg-[#16181B] text-[#FAF8F5]/80 border-[#FAF8F5]/10 hover:border-[#FAF8F5]/30 hover:text-[#FAF8F5]'
                }`}
              >
                <span>{study.clientDescriptor}</span>
                <span className="ml-2 text-xs opacity-75 font-mono">({study.businessType})</span>
              </button>
            );
          })}
        </div>

        {/* Main Active Case Study Display */}
        <div
          id={`case-study-panel-${activeStudy.id}`}
          role="tabpanel"
          aria-labelledby={`case-study-tab-${activeStudy.id}`}
          className="bg-[#16181B] border border-[#FAF8F5]/10 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl transition-all duration-300"
        >
          {/* Headline & Metadata Banner */}
          <div className="border-b border-[#FAF8F5]/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C84B27] uppercase tracking-wider font-semibold">
                <span>{activeStudy.industry}</span>
                <span>•</span>
                <span>{activeStudy.location}</span>
                <span>•</span>
                <span className="text-[#FAF8F5]/70 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {activeStudy.timeline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
                {activeStudy.headline}
              </h3>
            </div>
            <div className="bg-[#C84B27]/10 border border-[#C84B27]/30 px-4 py-3 rounded-xl text-left md:text-right flex-shrink-0">
              <div className="text-xs font-mono text-[#C84B27] font-semibold">MEASURED OUTCOME</div>
              <div className="text-sm font-semibold text-[#FAF8F5]">{activeStudy.impact}</div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="bg-[#0F1012] border border-[#FAF8F5]/10 rounded-xl p-6 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C84B27] font-semibold">
              The Operational Challenge
            </div>
            <p className="text-sm sm:text-base text-[#FAF8F5]/90 leading-relaxed">
              {activeStudy.challenge}
            </p>
          </div>

          {/* Before vs After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BEFORE Column */}
            <div className="bg-[#0F1012] border border-red-500/20 rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-red-500/20 text-red-400 font-semibold text-lg">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>BEFORE: Fragmented Baseline</span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-mono text-[#FAF8F5]/70 uppercase">First Response Latency</div>
                  <div className="font-mono text-[#FAF8F5]/90 mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    {activeStudy.before.latency}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#FAF8F5]/70 uppercase">Conversion Rate</div>
                  <div className="font-mono text-[#FAF8F5]/90 mt-0.5">
                    {activeStudy.before.conversion}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-[#FAF8F5]/70 uppercase">Follow-up Protocol</div>
                  <div className="text-[#FAF8F5]/85 mt-0.5">
                    {activeStudy.before.followUp}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-red-300 uppercase">Core Bottleneck</div>
                  <div className="text-red-200 mt-0.5 italic">
                    &quot;{activeStudy.before.bottleneck}&quot;
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER Column */}
            <div className="bg-[#0F1012] border border-emerald-500/30 rounded-xl p-6 space-y-5 shadow-lg">
              <div className="flex items-center gap-2 pb-3 border-b border-emerald-500/30 text-emerald-400 font-semibold text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>AFTER: Naxolutions Connected System</span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-mono text-emerald-400/80 uppercase">Response Latency</div>
                  <div className="font-mono text-emerald-300 font-semibold mt-0.5 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    {activeStudy.after.latency}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-emerald-400/80 uppercase">Optimized Conversion Rate</div>
                  <div className="font-mono text-emerald-300 font-semibold mt-0.5">
                    {activeStudy.after.conversion}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-emerald-400/80 uppercase">Systemized Follow-up</div>
                  <div className="text-[#FAF8F5]/90 mt-0.5">
                    {activeStudy.after.followUp}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-emerald-300 uppercase">Implemented System Fix</div>
                  <div className="text-emerald-200 mt-0.5 font-medium">
                    {activeStudy.after.systemFix}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Naxolutions Changed */}
          <div className="bg-[#0F1012] border border-[#FAF8F5]/10 rounded-xl p-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C84B27] font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              What We Changed: Systems &amp; Architecture Implemented
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#FAF8F5]/90">
              {activeStudy.whatWeChanged.map((change, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#C84B27] font-bold mt-0.5">→</span>
                  <span className="leading-relaxed">{change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Architecture Flow Diagram */}
          <div className="bg-[#0F1012] border border-[#FAF8F5]/10 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#C84B27] font-semibold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                System Built: Visual Pipeline Architecture
              </span>
              <span className="text-[10px] font-mono text-[#FAF8F5]/60">End-to-End Integration</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {activeStudy.systemFlow.map((step, idx) => {
                const isLast = idx === activeStudy.systemFlow.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                        isLast
                          ? 'bg-[#C84B27] text-white border-[#C84B27] font-bold'
                          : 'bg-[#16181B] text-[#FAF8F5]/90 border-[#FAF8F5]/15'
                      }`}
                    >
                      {step}
                    </div>
                    {!isLast && (
                      <span className="text-[#C84B27] font-bold text-xs select-none">→</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Disclaimer & Bottom Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#FAF8F5]/10">
            <p className="text-xs text-[#FAF8F5]/60 font-mono max-w-xl">
              {activeStudy.contextNote}
            </p>
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto bg-[#C84B27] hover:bg-[#b03f1f] text-[#FAF8F5] px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group flex-shrink-0"
            >
              <span>Find My Revenue Leak</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
