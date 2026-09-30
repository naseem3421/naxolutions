'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Activity } from 'lucide-react';
import { REVENUE_JOURNEY_STAGES } from '@/config/framework';

interface RevenueJourneyProps {
  onOpenDiagnostic: () => void;
}

export default function RevenueJourney({ onOpenDiagnostic }: RevenueJourneyProps) {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const [flaggedStages, setFlaggedStages] = useState<number[]>([1, 4, 7]);

  const stages = REVENUE_JOURNEY_STAGES;

  const toggleFlag = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (flaggedStages.includes(id)) {
      setFlaggedStages(flaggedStages.filter((item) => item !== id));
    } else {
      setFlaggedStages([...flaggedStages, id]);
    }
  };

  const activeStageData = stages[selectedStage];

  return (
    <section id="journey" className="py-20 md:py-32 bg-[#FAF8F5] border-b border-[#E6E1D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            Diagnostic Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            Every customer passes through a journey. Where does yours break?
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            Revenue does not drop off randomly. It leaks through structural friction across the 10 stages connecting first attention to final payment.
          </p>
        </div>

        {/* 10 STAGES INTERACTIVE MAP */}
        <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 shadow-card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6E1D6] pb-4 mb-6 gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
                THE NAXOLUTIONS 10-STAGE REVENUE JOURNEY
              </span>
              <p className="text-xs text-[#737887] mt-0.5">
                Click any stage to inspect commercial friction questions or flag your internal leaks.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#C84B27] font-semibold">
                {flaggedStages.length} Friction Points Flagged
              </span>
            </div>
          </div>

          {/* Horizontal / Grid Visual Node System */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 mb-8">
            {stages.map((stage, index) => {
              const isSelected = selectedStage === index;
              const isFlagged = flaggedStages.includes(stage.id);

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(index)}
                  className={`p-3 rounded border text-left transition-all duration-200 relative flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? 'border-[#0F1012] bg-[#FAF8F5] ring-2 ring-[#0F1012]'
                      : isFlagged
                      ? 'border-[#E8D5CC] bg-[#FDF4F0]'
                      : 'border-[#E6E1D6] bg-white hover:border-[#B0A894]'
                  }`}
                >
                  {/* Stage Code & Flag Toggle */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#737887]">
                      {stage.code}
                    </span>
                    <span
                      onClick={(e) => toggleFlag(stage.id, e)}
                      title={isFlagged ? 'Flagged as friction point' : 'Flag stage'}
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                        isFlagged
                          ? 'bg-[#C84B27] text-white'
                          : 'bg-[#E6E1D6] text-[#737887] hover:bg-[#B0A894]'
                      }`}
                    >
                      !
                    </span>
                  </div>

                  {/* Stage Title */}
                  <div className="font-bold text-xs text-[#0F1012] tracking-tight leading-tight my-1">
                    {stage.name}
                  </div>

                  {/* Visual Connection line / state */}
                  <div className="mt-2 w-full h-1 bg-[#E6E1D6] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        isFlagged ? 'bg-[#C84B27] w-full' : 'bg-[#2B5246] w-2/3'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Card for Selected Stage */}
          <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage Title & Question */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#0F1012] text-white">
                  STAGE {activeStageData.code}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#737887]">
                  {activeStageData.name}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0F1012] leading-snug">
                "{activeStageData.question}"
              </h3>
              <button
                onClick={(e) => toggleFlag(activeStageData.id, e)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                  flaggedStages.includes(activeStageData.id)
                    ? 'bg-[#C84B27] text-white'
                    : 'bg-white border border-[#E6E1D6] text-[#0F1012] hover:bg-[#F3EFE7]'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>
                  {flaggedStages.includes(activeStageData.id)
                    ? 'Friction Point Flagged'
                    : 'Flag As Potential Leak'}
                </span>
              </button>
            </div>

            {/* Typical Friction Break */}
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#E6E1D6] pt-4 md:pt-0 md:pl-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#C84B27] font-semibold">
                Typical Structural Break:
              </div>
              <p className="text-sm font-medium text-[#0F1012]">
                {activeStageData.commonBreak}
              </p>
              <div className="text-xs text-[#737887] font-mono mt-2">
                Diagnostic Indicator: {activeStageData.diagnosticMetric}
              </div>
            </div>

            {/* Commercial Consequence & Action */}
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#E6E1D6] pt-4 md:pt-0 md:pl-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#737887] font-semibold">
                  Commercial Result:
                </div>
                <p className="text-sm text-[#4A4E58]">
                  {activeStageData.consequence}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDiagnostic}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors"
                >
                  <span>Diagnose Stage {activeStageData.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Revenue Leak Summary Widget */}
        <div className="bg-[#0F1012] text-white rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Diagnostic Revenue Leak Summary</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              You flagged {flaggedStages.length} journey stages with potential friction.
            </h4>
            <p className="text-sm text-[#B0B6C5]">
              Naxolutions views these not as marketing failures, but as connected system architecture problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap shadow-card"
            >
              <span>Find Where You're Losing Revenue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
