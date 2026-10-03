'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, GitMerge, LineChart, Sliders } from 'lucide-react';

interface MethodStep {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

interface NaxolutionsApproachProps {
  onOpenDiagnostic?: () => void;
}

export default function NaxolutionsApproach({ onOpenDiagnostic }: NaxolutionsApproachProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: MethodStep[] = [
    {
      number: '01',
      name: 'DIAGNOSE',
      subtitle: 'Understand the existing customer-to-revenue journey',
      description:
        'We audit every touchpoint from first attention to closed payment. We examine your current traffic channels, landing messaging, form completion rates, response protocols, qualification criteria, and follow-up history.',
      deliverable: 'Complete Commercial Journey Map & Friction Audit',
    },
    {
      number: '02',
      name: 'IDENTIFY',
      subtitle: 'Find friction, bottlenecks, unnecessary manual work & missing stages',
      description:
        'We pinpoint precisely where prospects drop off, lose interest, wait too long, or receive ambiguous sales communications. We measure where revenue is actively leaking.',
      deliverable: 'Revenue Leak Diagnosis & Bottleneck Matrix',
    },
    {
      number: '03',
      name: 'ARCHITECT',
      subtitle: 'Design the simplest system required to move the customer forward',
      description:
        'We design the optimal conversion blueprint. We do not add unnecessary software tools; we design the fewest, simplest connected steps required to convert attention into revenue cleanly.',
      deliverable: 'Target Conversion System Blueprint & Functional Architecture',
    },
    {
      number: '04',
      name: 'BUILD',
      subtitle: 'Build the missing components',
      description:
        'We build whatever missing pieces are required — whether that is a high-intent conversion website, automated lead qualification, instant response workflows, or structured sales follow-up mechanisms.',
      deliverable: 'Custom Conversion Assets, Protocols & Systems',
    },
    {
      number: '05',
      name: 'CONNECT',
      subtitle: 'Make all pieces work together seamlessly',
      description:
        'We integrate your advertising, landing experience, enquiry channels, CRM, WhatsApp/email automation, and sales rep workflows into one unified, friction-free pipeline.',
      deliverable: 'End-to-End System Integration & Team Operational Protocols',
    },
    {
      number: '06',
      name: 'MEASURE',
      subtitle: 'Track what actually happens after implementation',
      description:
        'We track real commercial outcomes: lead-to-opportunity ratio, response latency, sales conversion speed, and cost per customer acquisition — not vanity impressions.',
      deliverable: 'Commercial Revenue Tracking Dashboard & Feedback Pipeline',
    },
    {
      number: '07',
      name: 'IMPROVE',
      subtitle: 'Continuously remove friction based on real behavior',
      description:
        'Conversion systems are dynamic. We continually refine messaging, eliminate emerging bottlenecks, and polish sales friction based on empirical customer data.',
      deliverable: 'Quarterly Friction Optimization & Performance Refinement',
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            The Operating Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            We don't start with a service. We start with the problem.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            Our 7-phase conversion architecture methodology is engineered for commercial clarity and systematic execution — not agency retainer fluff.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Column */}
          <div className="lg:col-span-5 space-y-2">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'border-[#0F1012] bg-[#FAF8F5] shadow-subtle ring-1 ring-[#0F1012]'
                      : 'border-[#E6E1D6] bg-white hover:border-[#B0A894]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        isSelected
                          ? 'bg-[#0F1012] text-white'
                          : 'bg-[#F3EFE7] text-[#737887]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-[#0F1012]">
                        {step.name}
                      </div>
                      <div className="text-xs text-[#737887] line-clamp-1">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-[#C84B27] translate-x-1'
                        : 'text-[#D4CDBC]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Deliverable Panel Column */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 sm:p-10 shadow-card min-h-[420px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
                <span className="text-xs font-mono font-bold text-[#C84B27] uppercase tracking-widest">
                  METHODOLOGY PHASE // {steps[activeStep].number}
                </span>
                <span className="text-xs font-mono text-[#737887] bg-white px-2.5 py-1 rounded border border-[#E6E1D6]">
                  Diagnostic Execution
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1012]">
                  {steps[activeStep].number} — {steps[activeStep].name}
                </h3>
                <p className="editorial-heading text-lg text-[#C84B27] italic">
                  "{steps[activeStep].subtitle}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#4A4E58] leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Concrete Deliverable Box */}
            <div className="mt-8 pt-6 border-t border-[#E6E1D6] bg-white p-4 rounded border border-[#E6E1D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737887] font-semibold">
                  Phase Concrete Deliverable:
                </span>
                <div className="text-xs font-mono font-bold text-[#0F1012]">
                  {steps[activeStep].deliverable}
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#2B5246] font-semibold bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E6E1D6] self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Validated Phase
              </span>
            </div>
          </div>
        </div>

        {/* Key Operational Statement Banner */}
        <div className="mt-16 bg-[#FAF8F5] border-2 border-[#0F1012] rounded-lg p-8 sm:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
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

          {onOpenDiagnostic && (
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors whitespace-nowrap shadow-subtle"
            >
              <span>Find My Revenue Leak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
