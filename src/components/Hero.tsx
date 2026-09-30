'use client';

import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, ChevronRight, CheckCircle2, RefreshCw } from 'lucide-react';

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
      leakDescription: 'Qualified prospects visit but exit in 8 seconds because messaging lacks commercial clarity.',
      metric: '68% drop-off',
      symptom: 'High bounce rate on high-intent search clicks',
    },
    {
      id: 1,
      label: 'ENQUIRY',
      subtext: 'Forms, Calls & Messages',
      leakName: 'Response Friction',
      leakDescription: 'Enquiries sit unhandled for 4+ hours. Lead intent decays by 80% after 30 minutes.',
      metric: '4.8 hr avg delay',
      symptom: 'Prospects contact 2 competitors while waiting',
    },
    {
      id: 2,
      label: 'CONVERSATION',
      subtext: 'Sales & Consultations',
      leakName: 'Qualification Friction',
      leakDescription: 'Sales team wastes 60% of capacity pitching unqualified prospects with no budget.',
      metric: '62% wasted hours',
      symptom: 'Drawn-out sales cycles with ambiguous outcomes',
    },
    {
      id: 3,
      label: 'DECISION',
      subtext: 'Proposals & Follow-ups',
      leakName: 'Follow-Up Void',
      leakDescription: 'Proposals are sent into radio silence without a structured follow-up protocol.',
      metric: '74% leads un-followed',
      symptom: 'Interested prospects vanish after receiving proposal',
    },
    {
      id: 4,
      label: 'REVENUE',
      subtext: 'Closed Contracts & Profit',
      leakName: 'System Output',
      leakDescription: 'When all stages connect, predictable revenue flows without buying more traffic.',
      metric: '+40-120% efficiency',
      symptom: 'Target outcome of a connected conversion system',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF8F5] border-b border-[#E6E1D6]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-paper-grid opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#4A4E58] uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C84B27] animate-pulse" />
            System Diagnosis
          </div>

          {/* Main Editorial Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F1012] leading-[1.1] mb-4">
            Your business may not have a lead problem.
          </h1>

          <p className="editorial-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[#C84B27] leading-tight mb-8">
            It may have a conversion problem.
          </p>

          {/* Core Explanation */}
          <p className="text-lg sm:text-xl text-[#4A4E58] leading-relaxed max-w-3xl mb-10">
            Most businesses already have the pieces — marketing, a website, enquiries, salespeople, WhatsApp, follow-ups.
            <br className="hidden sm:inline" />
            <span className="text-[#0F1012] font-semibold">
              What they don't have is a system that connects those pieces from first attention to actual revenue.
            </span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded shadow-card transition-all duration-200 group"
            >
              <span>Find Where You're Losing Revenue</span>
              <ArrowRight className="w-4 h-4 text-[#C84B27] group-hover:text-white transition-colors group-hover:translate-x-0.5" />
            </button>

            <a
              href="#journey"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1012] bg-white border border-[#E6E1D6] hover:border-[#0F1012] hover:bg-[#F3EFE7] rounded transition-all duration-200"
            >
              <span>See How The System Breaks</span>
              <ChevronRight className="w-4 h-4 text-[#737887]" />
            </a>
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
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#737887]">
                        0{index + 1}
                      </span>
                      {isActive && !isRevenue && (
                        <span className="inline-block w-2 h-2 rounded-full bg-[#C84B27] animate-ping" />
                      )}
                    </div>

                    <div className="font-bold text-sm text-[#0F1012] tracking-tight mb-0.5">
                      {node.label}
                    </div>

                    <div className="text-[11px] text-[#737887]">
                      {node.subtext}
                    </div>

                    {/* Friction Flag Indicator */}
                    {!isRevenue && (
                      <div className="mt-3 pt-2 border-t border-[#E6E1D6] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#C84B27] font-medium">Leak Point</span>
                        <span className="text-[#0F1012] font-semibold">{node.metric}</span>
                      </div>
                    )}
                    {isRevenue && (
                      <div className="mt-3 pt-2 border-t border-[#E6E1D6] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#2B5246] font-medium">System Goal</span>
                        <span className="text-[#0F1012] font-semibold">{node.metric}</span>
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
              <div className="text-xs text-[#737887]">
                <span className="font-semibold text-[#4A4E58]">Common Commercial Symptom:</span> {systemNodes[activeFrictionNode].symptom}
              </div>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap self-start md:self-center"
            >
              <span>Audit This Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
