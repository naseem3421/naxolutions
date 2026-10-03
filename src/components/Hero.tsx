'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const [activeFrictionNode, setActiveFrictionNode] = useState<number>(1);

  const systemNodes = [
    {
      id: 0,
      label: 'ATTENTION',
      subtext: 'Traffic & Awareness',
      leakName: 'Attention Friction',
      leakDescription: 'Qualified prospects visit but exit within 8 seconds because messaging lacks commercial clarity and objection handling.',
      metric: 'High Bounce Leak',
      symptom: 'High bounce rate on high-intent search clicks and ad campaigns',
    },
    {
      id: 1,
      label: 'ENQUIRY',
      subtext: 'Forms, Calls & Messages',
      leakName: 'Response Latency',
      leakDescription: 'Enquiries sit unhandled for hours in manual email inboxes. High-intent buyers contact faster-replying competitors while waiting.',
      metric: 'Multi-Hour Delay',
      symptom: 'Prospects say "I have already arranged a call elsewhere"',
    },
    {
      id: 2,
      label: 'CONVERSATION',
      subtext: 'Sales & Consultations',
      leakName: 'Qualification Friction',
      leakDescription: 'Sales reps spend valuable consultation hours on unvetted leads who lack budget, fit, or immediate buying intent.',
      metric: 'Capacity Drain',
      symptom: 'Full sales calendars but weak proposal acceptance rates',
    },
    {
      id: 3,
      label: 'DECISION',
      subtext: 'Proposals & Follow-ups',
      leakName: 'Follow-Up Void',
      leakDescription: 'Proposals are sent into radio silence without a confirmed review meeting or structured multi-touch nurture sequence.',
      metric: 'Stalled Pipeline',
      symptom: 'Interested prospects vanish after receiving pricing proposals',
    },
    {
      id: 4,
      label: 'REVENUE',
      subtext: 'Closed Contracts & Profit',
      leakName: 'Connected System Output',
      leakDescription: 'When all stages connect into a single commercial architecture, predictable bank revenue flows without buying more traffic.',
      metric: 'System Goal',
      symptom: 'Target outcome of a calibrated Naxolutions conversion engine',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF8F5] border-b border-[#E6E1D6]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-paper-grid opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline Badge & Anti-Agency Contrast */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#4A4E58] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#C84B27] animate-pulse" />
              Business Conversion Consultancy // Chennai &amp; Global
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-[#E6E1D6] text-xs font-mono text-[#0F1012]">
              <span className="text-[#C84B27] font-bold">≠</span> Not an ad agency • We architect the pipeline from click to cash
            </div>
          </div>

          {/* Main Editorial Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F1012] leading-[1.1] mb-4">
            Your business may not have a lead problem.
          </h1>

          <p className="editorial-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[#C84B27] leading-tight mb-8">
            It may have a conversion problem.
          </p>

          {/* Core Explanation */}
          <p className="text-lg sm:text-xl text-[#4A4E58] leading-relaxed max-w-3xl mb-6">
            Naxolutions helps established businesses identify and fix the structural gaps between leads, sales conversations, and revenue.
            <br className="hidden sm:inline" />
            <span className="text-[#0F1012] font-semibold mt-1 block">
              Most businesses already have traffic, websites, enquiries, WhatsApp messages, and salespeople. What they lack is an integrated system that connects those assets so revenue flows predictably.
            </span>
          </p>

          {/* Qualification ICP Line */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white border border-[#E6E1D6] text-xs font-mono text-[#0F1012] font-medium mb-6">
            <span className="text-[#C84B27] font-bold">ICP //</span>
            <span>For established businesses already generating enquiries, traffic, or sales opportunities.</span>
          </div>

          {/* Economic Cost Benchmark - Qualified Source */}
          <div className="bg-white border-l-2 border-[#C84B27] border-y border-r border-[#E6E1D6] p-4 rounded-r-lg max-w-3xl mb-10 text-xs sm:text-sm text-[#4A4E58] flex items-start gap-3">
            <span className="font-mono font-bold text-[#C84B27] text-xs uppercase bg-[#FDF4F0] px-2 py-0.5 rounded border border-[#E8D5CC] flex-shrink-0 mt-0.5">
              Diagnostic Reality
            </span>
            <p>
              Based on Naxolutions internal diagnostic observations across commercial B2B audits, an average of <span className="font-bold text-[#0F1012]">63% of qualified inbound enquiry value leaks</span> between first response, sales qualification, and proposal follow-up — before sales conversations even mature.
            </p>
          </div>

          {/* CTA Group */}
          <div className="space-y-4 mb-16">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenDiagnostic}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded shadow-card transition-all duration-200 group"
              >
                <Activity className="w-4 h-4 text-[#C84B27] group-hover:text-white transition-colors" />
                <span>Find My Revenue Leak</span>
                <ArrowRight className="w-4 h-4 text-[#C84B27] group-hover:text-white transition-colors group-hover:translate-x-0.5" />
              </button>

              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1012] bg-white border border-[#E6E1D6] hover:border-[#0F1012] hover:bg-[#F3EFE7] rounded transition-all duration-200"
              >
                <span>View Consultation</span>
                <ChevronRight className="w-4 h-4 text-[#4A4E58]" />
              </Link>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#737887] hover:text-[#C84B27] transition-colors py-2 px-3"
              >
                <span>See How It Works ↓</span>
              </a>
            </div>

            {/* Risk Reversal Microcopy */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#4A4E58]">
              <span>✓ 3-minute structured intake</span>
              <span>•</span>
              <span>✓ No agency sales pitch</span>
              <span>•</span>
              <span>✓ 100% confidential senior review</span>
            </div>
          </div>
        </div>

        {/* Visual System Map / Business Diagnostic Interface */}
        <div className="mt-6 bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 shadow-card relative">
          <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#737887]">
                DIAGNOSTIC FRAMEWORK // CONVERSION PIPELINE MAP
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#C84B27] bg-[#FDF4F0] px-2.5 py-1 rounded border border-[#E8D5CC] flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Interactive Friction Diagnosis</span>
            </div>
          </div>

          {/* Connected Stage Nodes Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8 relative">
            {systemNodes.map((node, index) => {
              const isActive = activeFrictionNode === index;
              const isRevenue = index === 4;

              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setActiveFrictionNode(index)}
                    aria-label={`Inspect pipeline stage 0${index + 1}: ${node.label} - ${node.subtext}`}
                    className={`w-full text-left p-4 rounded border transition-all duration-200 relative ${
                      isActive
                        ? 'border-[#0F1012] bg-[#FAF8F5] ring-1 ring-[#0F1012] shadow-subtle'
                        : 'border-[#E6E1D6] bg-white hover:border-[#B0A894] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {/* Connection Arrow Indicator for desktop */}
                    {index < systemNodes.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#D4CDBC]">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#4A4E58]">
                        0{index + 1}
                      </span>
                      {isActive && !isRevenue && (
                        <span className="inline-block w-2 h-2 rounded-full bg-[#C84B27] animate-ping" />
                      )}
                    </div>

                    <div className="font-bold text-sm text-[#0F1012] tracking-tight mb-0.5">
                      {node.label}
                    </div>

                    <div className="text-[11px] text-[#4A4E58]">
                      {node.subtext}
                    </div>

                    {/* Friction Flag Indicator */}
                    {!isRevenue && (
                      <div className="mt-3 pt-2 border-t border-[#E6E1D6] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#C84B27] font-medium">Friction Area</span>
                        <span className="text-[#0F1012] font-semibold text-[10px]">{node.metric}</span>
                      </div>
                    )}
                    {isRevenue && (
                      <div className="mt-3 pt-2 border-t border-[#E6E1D6] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#2B5246] font-medium">Outcome</span>
                        <span className="text-[#0F1012] font-semibold text-[10px]">{node.metric}</span>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active Diagnostic Detail Callout */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Selected Stage Breakdown: {systemNodes[activeFrictionNode].leakName}</span>
              </div>
              <p className="text-sm font-medium text-[#0F1012]">
                {systemNodes[activeFrictionNode].leakDescription}
              </p>
              <div className="text-xs text-[#4A4E58]">
                <span className="font-semibold text-[#0F1012]">Common Commercial Symptom:</span> {systemNodes[activeFrictionNode].symptom}
              </div>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap self-start md:self-center shadow-subtle"
            >
              <span>Find My Revenue Leak</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
