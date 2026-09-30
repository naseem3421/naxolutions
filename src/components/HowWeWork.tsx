'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Search, Compass, AlertCircle, Wrench, BarChart2 } from 'lucide-react';

interface HowWeWorkProps {
  onOpenDiagnostic: () => void;
}

export default function HowWeWork({ onOpenDiagnostic }: HowWeWorkProps) {
  const processSteps = [
    {
      id: '01',
      title: 'UNDERSTAND THE BUSINESS',
      detail: 'Examine product margins, target buyers, average sales cycle, and existing commercial metrics.',
      icon: Search,
    },
    {
      id: '02',
      title: 'MAP THE CUSTOMER JOURNEY',
      detail: 'Trace every step a customer takes from first ad or organic click to final signed contract.',
      icon: Compass,
    },
    {
      id: '03',
      title: 'FIND THE LEAKS',
      detail: 'Locate precise points of drop-off, response delays, qualification noise, and un-followed leads.',
      icon: AlertCircle,
    },
    {
      id: '04',
      title: 'PRIORITIZE THE FIXES',
      detail: 'Rank missing building blocks by commercial return on effort (highest impact structural changes first).',
      icon: Wrench,
    },
    {
      id: '05',
      title: 'BUILD THE SYSTEM',
      detail: 'Deploy missing web experiences, intake protocols, automated response workflows, and rep protocols.',
      icon: CheckCircle,
    },
    {
      id: '06',
      title: 'MEASURE THE RESULT',
      detail: 'Track end-to-end commercial conversion velocity and calculate actual closed revenue impact.',
      icon: BarChart2,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider">
            Engagement Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
            We don't assume what your business needs.
          </h2>

          <p className="text-lg text-[#4A4E58] leading-relaxed">
            We look at how your business currently acquires attention, handles enquiries, communicates value, follows up, and closes opportunities. Then we decide what actually needs to change.
          </p>
        </div>

        {/* 6-Step Horizontal / Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 space-y-4 shadow-subtle hover:border-[#0F1012] transition-colors relative"
              >
                <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-3">
                  <span className="text-xs font-mono font-bold text-[#C84B27]">
                    PHASE // {step.id}
                  </span>
                  <Icon className="w-4 h-4 text-[#737887]" />
                </div>

                <h3 className="text-base font-bold text-[#0F1012] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-[#4A4E58] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Operational Statement Banner */}
        <div className="bg-white border-2 border-[#0F1012] rounded-lg p-8 sm:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              OUR CORE PRINCIPLE
            </span>
            <h3 className="editorial-heading text-2xl sm:text-3xl font-bold text-[#0F1012] leading-snug">
              "Sometimes the answer is a new website.
              <br />
              <span className="text-[#C84B27] italic">Sometimes it isn't."</span>
            </h3>
            <p className="text-sm text-[#4A4E58] leading-relaxed">
              If your current website already converts qualified visitors effectively, we don't rebuild it. We fix your response protocols, lead qualification filters, or sales follow-up mechanisms instead.
            </p>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors whitespace-nowrap shadow-subtle"
          >
            <span>Start With A Diagnosis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
