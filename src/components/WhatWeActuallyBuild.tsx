'use client';

import React from 'react';
import { Layers, ShieldCheck, MessageSquare, Repeat, Target, Cpu, Activity, ArrowRight } from 'lucide-react';

interface WhatWeActuallyBuildProps {
  onOpenDiagnostic: () => void;
}

export default function WhatWeActuallyBuild({ onOpenDiagnostic }: WhatWeActuallyBuildProps) {
  const buildingBlocks = [
    {
      id: '01',
      title: 'CONVERSION WEBSITE',
      tagline: 'The place where attention becomes intent.',
      description:
        'Not a decorative online brochure. A commercially structured experience designed to answer buyer objections, establish positioning, and guide qualified visitors directly into an enquiry.',
      icon: Layers,
    },
    {
      id: '02',
      title: 'LEAD QUALIFICATION',
      tagline: 'Separate serious opportunities from noise.',
      description:
        'Diagnostic intake flows, questionnaires, and smart routing protocols that filter out tire-kickers and ensure your sales team only speaks to high-fit prospects with real budget.',
      icon: ShieldCheck,
    },
    {
      id: '03',
      title: 'CONVERSATION SYSTEM',
      tagline: 'Move enquiries toward meaningful sales conversations.',
      description:
        'Instant multi-channel response triggers (WhatsApp, SMS, Email) and consultation frameworks that transform cold inbound forms into warm, structured commercial dialogues within minutes.',
      icon: MessageSquare,
    },
    {
      id: '04',
      title: 'FOLLOW-UP SYSTEM',
      tagline: 'Continue the conversation when the customer isn\'t ready immediately.',
      description:
        'Automated and rep-assisted sequence architecture that maintains structured contact over 30, 60, or 90 days, ensuring interested leads don\'t fall through the cracks.',
      icon: Repeat,
    },
    {
      id: '05',
      title: 'QUALIFIED ACQUISITION',
      tagline: 'Bring the right attention into the conversion engine.',
      description:
        'Precision buyer targeting built specifically to feed high-intent attention into your conversion engine, rather than vanity impressions or cheap low-quality clicks.',
      icon: Target,
    },
    {
      id: '06',
      title: 'AUTOMATION',
      tagline: 'Remove repetitive manual friction.',
      description:
        'Connect your website, CRM, communication tools, and internal task distribution into a zero-latency workflow that eliminates human delay and manual error.',
      icon: Cpu,
    },
    {
      id: '07',
      title: 'MEASUREMENT',
      tagline: 'Understand what actually turns attention into revenue.',
      description:
        'Closed-loop analytics connecting ad campaigns directly to final bank receipts, allowing you to optimize for actual enterprise profit rather than marketing metrics.',
      icon: Activity,
    },
  ];

  return (
    <section id="build" className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAF8F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concept Framing Header */}
        <div className="max-w-4xl mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider">
            System Building Blocks
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
            Sometimes the missing piece is technology.
            <br />
            Sometimes it's messaging.
            <br />
            Sometimes it's process.
            <br />
            <span className="text-[#C84B27]">Usually, it's the connection between them.</span>
          </h2>

          <p className="text-lg text-[#4A4E58] leading-relaxed max-w-3xl">
            We do not sell pre-packaged service menus or standard monthly retainers. We select and build the specific system components required to fix your business's revenue leaks.
          </p>
        </div>

        {/* System Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {buildingBlocks.map((block, index) => {
            const Icon = block.icon;
            const isLastOdd = index === buildingBlocks.length - 1;
            return (
              <div
                key={block.id}
                className={`bg-white border border-[#E6E1D6] hover:border-[#0F1012] rounded-lg p-6 sm:p-8 transition-all duration-200 shadow-subtle flex flex-col justify-between group ${
                  isLastOdd ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className={isLastOdd ? 'lg:flex lg:items-center lg:justify-between lg:gap-12 space-y-4 lg:space-y-0' : 'space-y-4'}>
                  <div className={isLastOdd ? 'lg:w-1/3 space-y-3' : 'space-y-4'}>
                    <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-3">
                      <span className="text-xs font-mono font-bold text-[#737887]">
                        COMPONENT // {block.id}
                      </span>
                      <Icon className="w-4 h-4 text-[#C84B27]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1012] tracking-tight group-hover:text-[#C84B27] transition-colors">
                      {block.title}
                    </h3>

                    <p className="editorial-heading text-sm text-[#C84B27] italic font-medium">
                      "{block.tagline}"
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm text-[#4A4E58] leading-relaxed ${isLastOdd ? 'lg:w-2/3 lg:pl-8 lg:border-l lg:border-[#E6E1D6]' : ''}`}>
                    {block.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E1D6] flex items-center justify-between text-[11px] font-mono text-[#737887]">
                  <span>Architected Component</span>
                  <span className="text-[#0F1012] font-semibold">Custom Deployed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tailored Component Positioning Banner */}
        <div className="bg-[#0F1012] text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white">
              Not sure which building block your business is missing?
            </h4>
            <p className="text-sm text-[#B0B6C5]">
              We diagnose your customer journey first to determine what actually needs to be built.
            </p>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap"
          >
            <span>Talk Through Your System</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
