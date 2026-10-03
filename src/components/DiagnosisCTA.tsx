'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

interface DiagnosisCTAProps {
  onOpenDiagnostic: () => void;
}

export default function DiagnosisCTA({ onOpenDiagnostic }: DiagnosisCTAProps) {
  return (
    <section className="py-20 md:py-28 bg-[#0F1012] text-white relative overflow-hidden border-b border-[#2A2D34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1C20] border border-[#2A2D34] text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            SYSTEM INTAKE &amp; DIAGNOSIS
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Find Where Your Revenue Is Leaking
          </h2>

          {/* Supporting Copy */}
          <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-[#B0B6C5] leading-relaxed">
            <p>
              Bring us the problem you're seeing — fewer conversions, poor-quality enquiries, slow follow-up, weak sales conversations, wasted ad spend, or simply a feeling that the business should be converting better.
            </p>
            <p className="text-white font-medium">
              Start with a diagnostic review of your current baseline, or book a dedicated 1:1 revenue teardown session.
            </p>
          </div>

          {/* How We Evaluate Box */}
          <div className="bg-[#16181B] border border-[#FAF8F5]/10 rounded-xl p-6 max-w-3xl mx-auto text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-3">
              <span className="text-xs font-mono text-[#C84B27] font-semibold uppercase tracking-wider">
                What We Examine First
              </span>
              <span className="text-[10px] font-mono bg-[#C84B27]/20 text-[#C84B27] px-2 py-0.5 rounded border border-[#C84B27]/30">
                3-Stage Triage
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#FAF8F5]/80">
              <div className="bg-[#0F1012] p-3.5 rounded border border-[#FAF8F5]/5 space-y-1">
                <div className="font-mono text-[#C84B27] font-semibold">01. Acquisition &amp; Landing</div>
                <div className="text-[#FAF8F5]/60 text-[11px]">Where high-intent visitors drop off before becoming an enquiry.</div>
              </div>
              <div className="bg-[#0F1012] p-3.5 rounded border border-[#FAF8F5]/5 space-y-1">
                <div className="font-mono text-[#C84B27] font-semibold">02. Response &amp; Triage</div>
                <div className="text-[#FAF8F5]/60 text-[11px]">Speed from form or WhatsApp submission to qualified sales contact.</div>
              </div>
              <div className="bg-[#0F1012] p-3.5 rounded border border-[#FAF8F5]/5 space-y-1">
                <div className="font-mono text-[#C84B27] font-semibold">03. Follow-Up &amp; Close</div>
                <div className="text-[#FAF8F5]/60 text-[11px]">How warm prospects are nurtured and converted into revenue.</div>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-all duration-200 shadow-editorial group"
              >
                <span>Find My Revenue Leak</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#1A1C20] border border-[#2A2D34] hover:border-white rounded transition-all duration-200"
              >
                <span>Book a Diagnostic</span>
              </Link>
            </div>

            <span className="text-xs font-mono text-[#A0A6B2]">
              No generic agency pitch • Direct senior architecture review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
