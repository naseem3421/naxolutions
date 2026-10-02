'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, XCircle, Clock, Zap } from 'lucide-react';

interface DiagnosticCaseTeardownsProps {
  onOpenDiagnostic?: () => void;
}

interface CaseStudy {
  id: string;
  industry: string;
  businessType: string;
  headline: string;
  summary: string;
  before: {
    latency: string;
    conversion: string;
    followUp: string;
    bottleneck: string;
  };
  after: {
    latency: string;
    conversion: string;
    followUp: string;
    systemFix: string;
  };
  impact: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas-enterprise',
    industry: 'B2B Enterprise Software',
    businessType: 'ACV ₹8,00,000 / year',
    headline: 'Eliminating 18-Hour Lead Latency & Structuring Enterprise Demo Routing',
    summary: 'The client was spending heavily on LinkedIn & Google Ads to drive demo requests, but inbound leads were being manually assigned via weekly spreadsheet syncs.',
    before: {
      latency: '18 hours average first contact',
      conversion: '3.2% Demo-to-Opportunity rate',
      followUp: 'Ad-hoc manual sales rep emails',
      bottleneck: 'Leads cooled down before reps even received lead contact info.'
    },
    after: {
      latency: '< 90 seconds automated instant reply',
      conversion: '11.8% Demo-to-Opportunity rate',
      followUp: 'Automated 7-stage WhatsApp + CRM sync',
      systemFix: 'Instant qualification triage + direct calendar booking system.'
    },
    impact: '3.6x increase in qualified sales conversations without increasing ad spend.'
  },
  {
    id: 'commercial-real-estate',
    industry: 'Commercial Real Estate Advisory',
    businessType: 'Transaction Value ₹1.5 Cr+',
    headline: 'Replacing Generic Website Forms with Instant WhatsApp Triage',
    summary: 'High-net-worth buyers clicked Google Search ads and hit a standard static "Contact Us" web page, resulting in high bounce rates and untracked calls.',
    before: {
      latency: '4 to 6 hours during business hours',
      conversion: '1.8% Visitor-to-Enquiry rate',
      followUp: 'Unstructured personal phone calls',
      bottleneck: 'High bounce rate on mobile; no instant proof or brochure delivery.'
    },
    after: {
      latency: 'Instant automated WhatsApp brochure',
      conversion: '6.4% Visitor-to-Enquiry rate',
      followUp: 'Automated follow-up sequence with floor plans',
      systemFix: 'Dedicated high-converting property landing system with 1-click WhatsApp.'
    },
    impact: '3.5x higher qualified site-visit booking rate.'
  },
  {
    id: 'healthcare-medical-tech',
    industry: 'High-Ticket Medical Equipment & Tech',
    businessType: 'B2B Sales Cycle 60 Days',
    headline: 'Unifying Disconnected Ad Campaigns & Sales Rep Follow-Up Protocols',
    summary: 'Marketing ran Meta & Google Ads driving traffic to separate landing pages, while the internal sales team worked in an isolated offline CRM.',
    before: {
      latency: '24+ hours via email inquiry forms',
      conversion: '4.5% Inquiry-to-Qualified-Lead',
      followUp: 'Max 2 phone calls before giving up',
      bottleneck: 'Sales reps lacked context on which product ad the prospect clicked.'
    },
    after: {
      latency: '< 3 minutes automated routing',
      conversion: '14.2% Inquiry-to-Qualified-Lead',
      followUp: 'Structured 14-day multi-channel nurture',
      systemFix: 'Deep UTM-to-CRM context sync + automated sales script notifications.'
    },
    impact: '₹42 Lakhs in uncaptured quarterly pipeline unlocked.'
  }
];

export default function DiagnosticCaseTeardowns({ onOpenDiagnostic }: DiagnosticCaseTeardownsProps) {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find(c => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section className="pt-16 pb-24 bg-[#0F1012] text-[#FAF8F5] relative overflow-hidden border-b border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B27]/15 border border-[#C84B27]/30 text-[#C84B27] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            System Architecture Teardowns
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] mb-6">
            Real Pipeline Transformations: Before &amp; After Naxolutions
          </h2>
          <p className="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed">
            See how fixing structural revenue leaks, lead latency, and broken follow-ups transforms sales output without spending a single extra rupee on advertising.
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
                <span>{study.industry}</span>
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
          {/* Headline Banner */}
          <div className="border-b border-[#FAF8F5]/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#C84B27] uppercase tracking-wider font-semibold">
                Diagnostic Case Focus • {activeStudy.industry}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF8F5] mt-1">
                {activeStudy.headline}
              </h3>
            </div>
            <div className="bg-[#C84B27]/10 border border-[#C84B27]/30 px-4 py-3 rounded-xl text-right flex-shrink-0">
              <div className="text-xs font-mono text-[#C84B27] font-semibold">VERIFIED IMPACT</div>
              <div className="text-sm font-semibold text-[#FAF8F5]">{activeStudy.impact}</div>
            </div>
          </div>

          <p className="text-base text-[#FAF8F5]/90 leading-relaxed">
            {activeStudy.summary}
          </p>

          {/* Before vs After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* BEFORE Column */}
            <div className="bg-[#0F1012] border border-red-500/20 rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-red-500/20 text-red-400 font-semibold text-lg">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>BEFORE: Fragmented Baseline</span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-mono text-[#FAF8F5]/70 uppercase">Lead Latency</div>
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
                  <div className="text-xs font-mono text-emerald-400/80 uppercase">Optimized Response Latency</div>
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

          {/* Bottom Callout */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#FAF8F5]/10">
            <p className="text-xs text-[#FAF8F5]/75 font-mono">
              Every business system is unique. We audit your exact baseline during our diagnostic review.
            </p>
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto bg-[#C84B27] hover:bg-[#b03f1f] text-[#FAF8F5] px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 group flex-shrink-0"
            >
              <span>Audit Your Pipeline</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
