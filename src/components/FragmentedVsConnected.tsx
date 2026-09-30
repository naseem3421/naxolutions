'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

export default function FragmentedVsConnected() {
  const fragmentedNodes = [
    { label: 'Paid Ads / Social', problem: 'Sent to generic page' },
    { label: 'Unoptimized Website', problem: 'Passive contact form' },
    { label: 'Manual WhatsApp / Inbox', problem: 'Takes 4+ hours to reply' },
    { label: 'Individual Sales Rep', problem: 'Unstructured call with no script' },
    { label: 'Disjointed Spreadsheet', problem: 'Leads forgotten after 2 days' },
    { label: 'Rep Memory Follow-Up', problem: '70% drop-off rate' },
  ];

  const connectedNodes = [
    { stage: '01', title: 'ATTENTION', detail: 'High-intent target traffic' },
    { stage: '02', title: 'CONVERSION EXPERIENCE', detail: 'Commercial clarity website' },
    { stage: '03', title: 'ENQUIRE', detail: 'Instant automated intake & notification' },
    { stage: '04', title: 'QUALIFICATION', detail: 'Filter out tire-kickers automatically' },
    { stage: '05', title: 'CONVERSATION', detail: 'Structured consultation framework' },
    { stage: '06', title: 'FOLLOW-UP', detail: 'Automated + rep-guided sequence' },
    { stage: '07', title: 'DECISION', detail: 'Clear proposal review milestone' },
    { stage: '08', title: 'REVENUE', detail: 'Predictable, measurable profit' },
  ];

  return (
    <section className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            System Architecture Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            The goal isn't more tools. It's fewer gaps.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            Compare the friction of disconnected software vendors against a unified conversion architecture.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: FRAGMENTED */}
          <div className="bg-[#FAF8F5] border border-[#E8D5CC] rounded-lg p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E8D5CC] pb-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#C84B27]" />
                <span className="font-bold text-lg text-[#C84B27] tracking-tight">
                  FRAGMENTED ARCHITECTURE
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase bg-[#FDF4F0] text-[#C84B27] px-2.5 py-1 rounded border border-[#E8D5CC]">
                High Revenue Leakage
              </span>
            </div>

            {/* Fragmented Chain */}
            <div className="space-y-3">
              {fragmentedNodes.map((node, index) => (
                <React.Fragment key={index}>
                  <div className="p-3 bg-white border border-[#E8D5CC] rounded flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-[#0F1012]">{node.label}</div>
                      <div className="text-[11px] text-[#C84B27]">{node.problem}</div>
                    </div>
                    <span className="text-[10px] font-mono text-[#737887]">Friction Point</span>
                  </div>
                  {index < fragmentedNodes.length - 1 && (
                    <div className="flex justify-center text-[#C84B27] my-0.5">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Fragmented Summary Callout */}
            <div className="pt-4 border-t border-[#E8D5CC] space-y-1 text-xs font-mono text-[#4A4E58]">
              <div className="flex justify-between text-[#C84B27] font-semibold">
                <span>System Connection:</span>
                <span>Disconnected</span>
              </div>
              <div className="flex justify-between text-[#C84B27] font-semibold">
                <span>Ownership & Attribution:</span>
                <span>Unclear</span>
              </div>
              <div className="flex justify-between text-[#C84B27] font-semibold">
                <span>Commercial Output:</span>
                <span>Highly Inefficient</span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONNECTED */}
          <div className="bg-[#FAF8F5] border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-6 relative shadow-card">
            <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#2B5246]" />
                <span className="font-bold text-lg text-[#0F1012] tracking-tight">
                  CONNECTED NAXOLUTIONS SYSTEM
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase bg-[#0F1012] text-white px-2.5 py-1 rounded">
                Optimal Efficiency
              </span>
            </div>

            {/* Connected Pipeline */}
            <div className="space-y-2.5">
              {connectedNodes.map((node, index) => (
                <div
                  key={index}
                  className="p-3 bg-white border border-[#E6E1D6] rounded flex items-center justify-between shadow-subtle hover:border-[#0F1012] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0F1012] text-white">
                      {node.stage}
                    </span>
                    <div>
                      <div className="font-bold text-xs text-[#0F1012]">{node.title}</div>
                      <div className="text-[11px] text-[#4A4E58]">{node.detail}</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#2B5246]" />
                </div>
              ))}
            </div>

            {/* Connected Summary Callout */}
            <div className="pt-4 border-t border-[#E6E1D6] space-y-1 text-xs font-mono text-[#0F1012]">
              <div className="flex justify-between text-[#2B5246] font-semibold">
                <span>System Connection:</span>
                <span>100% Unified Pipeline</span>
              </div>
              <div className="flex justify-between text-[#2B5246] font-semibold">
                <span>Ownership & Attribution:</span>
                <span>End-to-End Accountable</span>
              </div>
              <div className="flex justify-between text-[#2B5246] font-semibold">
                <span>Commercial Output:</span>
                <span>Maximum Conversion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
