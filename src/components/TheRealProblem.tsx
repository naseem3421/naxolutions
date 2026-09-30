'use client';

import React, { useState } from 'react';
import { Eye, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

export default function TheRealProblem() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const diagnosticPairs = [
    {
      id: '01',
      symptom: 'Not enough leads',
      reality: "Good enquiries aren't being converted.",
      explanation:
        'The business measures surface lead volume rather than qualified opportunity throughput. High lead counts mean nothing if 70% drop off before a real conversation begins.',
      impact: 'Ad budgets increase while actual closed sales stay flat.',
    },
    {
      id: '02',
      symptom: "Website isn't performing",
      reality: "Visitors don't have a clear reason or path to enquire.",
      explanation:
        'The site functions like an online brochure with passive language, redundant information, and friction-filled forms rather than an active commercial conversion engine.',
      impact: 'High traffic leaves without taking any direct commercial action.',
    },
    {
      id: '03',
      symptom: 'Sales team needs more leads',
      reality: "Existing enquiries aren't being handled or followed up systematically.",
      explanation:
        'Inbound enquiries are treated as one-off interactions instead of structured conversations. Potential buyers who do not buy on day one are lost to memory.',
      impact: 'Chasing cold prospects while warm enquiries go cold.',
    },
    {
      id: '04',
      symptom: 'We need more advertising',
      reality: "You're sending more people into a system that already leaks.",
      explanation:
        'Pumping more customer attention into a leaky conversion journey multiplies acquisition cost without fixing the structural hole in the middle.',
      impact: 'Customer acquisition cost (CAC) balloons exponentially.',
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-32 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            The Real Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            Your business can have all the right pieces — and still lose customers.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            Individual activities can appear to perform well on vanity metrics while the overall customer-to-revenue journey remains fundamentally broken.
          </p>
        </div>

        {/* Visual Pattern Grid: "Looks like" vs "Actually is" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {diagnosticPairs.map((pair, idx) => {
            const isSelected = activeTab === idx;
            return (
              <div
                key={pair.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer rounded-lg border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#0F1012] bg-[#FAF8F5] shadow-card ring-1 ring-[#0F1012]'
                    : 'border-[#E6E1D6] bg-white hover:border-[#B0A894]'
                }`}
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Top Identifier */}
                  <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
                    <span className="text-xs font-mono font-bold text-[#737887]">
                      DIAGNOSIS CARD // {pair.id}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#F3EFE7] text-[#4A4E58]">
                      Symptom vs Reality
                    </span>
                  </div>

                  {/* Looks Like (The Surface Symptom) */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#737887] flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#737887]" />
                      <span>Looks Like:</span>
                    </div>
                    <div className="text-xl font-bold text-[#0F1012] line-through decoration-[#C84B27] decoration-2">
                      "{pair.symptom}"
                    </div>
                  </div>

                  {/* Actually Is (The Structural Reality) */}
                  <div className="space-y-1 bg-white p-4 rounded border border-[#E6E1D6]">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#C84B27] font-semibold flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#C84B27]" />
                      <span>Actually Is:</span>
                    </div>
                    <div className="text-lg font-bold text-[#0F1012]">
                      "{pair.reality}"
                    </div>
                  </div>

                  {/* Deep Explanation */}
                  <p className="text-sm text-[#4A4E58] leading-relaxed">
                    {pair.explanation}
                  </p>
                </div>

                {/* Bottom Impact Note */}
                <div className="bg-[#F3EFE7] px-6 py-3 border-t border-[#E6E1D6] text-xs font-mono text-[#4A4E58] flex items-start gap-2">
                  <span className="shrink-0">Commercial Impact:</span>
                  <span className="font-semibold text-[#0F1012]">{pair.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Note */}
        <div className="mt-12 p-6 rounded bg-[#FAF8F5] border border-[#E6E1D6] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#0F1012] uppercase tracking-wider">
              Diagnostic Observation
            </h4>
            <p className="text-sm text-[#4A4E58]">
              Notice how none of these problems are solved by simply buying another software tool or running more ad campaigns.
            </p>
          </div>
          <a
            href="#journey"
            className="text-xs font-bold uppercase tracking-wider text-[#C84B27] hover:text-[#0F1012] flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Explore The Complete Journey</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
