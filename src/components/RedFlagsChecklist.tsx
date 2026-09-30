'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckSquare, Square, AlertCircle, ArrowRight } from 'lucide-react';

interface RedFlagsChecklistProps {
  onOpenDiagnostic?: () => void;
}

interface RedFlagItem {
  id: string;
  title: string;
  description: string;
  impact: string;
}

const RED_FLAGS: RedFlagItem[] = [
  {
    id: 'flag-1',
    title: 'Lead Latency > 15 Minutes',
    description: 'Enquiries submitted on your website or ad forms sit in email inboxes or CSV spreadsheets for hours before a sales rep reaches out.',
    impact: '80% drop in lead qualification rate after 5 minutes.'
  },
  {
    id: 'flag-2',
    title: 'Disconnected WhatsApp Strategy',
    description: 'WhatsApp is used as an informal, unstructured chat app on individual reps\' personal phones without automated triage, CRM sync, or broadcast tracking.',
    impact: 'Zero pipeline visibility and total loss of history if a rep leaves.'
  },
  {
    id: 'flag-3',
    title: 'Single-Touch Follow-Up Reliance',
    description: 'Your sales team contacts a lead 1 or 2 times via phone. If unanswered, the lead is marked "cold" or abandoned without structured multi-touch nurture.',
    impact: 'Up to 70% of ultimate buyers buy after 5+ follow-up touches.'
  },
  {
    id: 'flag-4',
    title: 'Generic Post-Click Landing Experience',
    description: 'Paid ads send traffic to a generic homepage or outdated landing page that lacks clear B2B value framing, proof mechanisms, or immediate booking hooks.',
    impact: '92%+ bounce rate on paid traffic spend.'
  },
  {
    id: 'flag-5',
    title: 'Zero Automated Lead Triage & Scoring',
    description: 'High-value enterprise prospects receive the exact same generic auto-reply or waiting time as unqualified tire-kickers seeking free information.',
    impact: 'High-ticket buyers leave for faster competitors.'
  }
];

export default function RedFlagsChecklist({ onOpenDiagnostic }: RedFlagsChecklistProps) {
  const [selectedFlags, setSelectedFlags] = useState<string[]>(['flag-1', 'flag-3']);

  const toggleFlag = (id: string) => {
    setSelectedFlags(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedCount = selectedFlags.length;

  const getSystemSeverity = () => {
    if (selectedCount === 0) return { label: 'Low Immediate Risk', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (selectedCount <= 2) return { label: 'Moderate Revenue Leakage Detected', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    return { label: 'Critical Pipeline Leaks — Immediate Audit Needed', color: 'text-[#C84B27] bg-[#C84B27]/10 border-[#C84B27]/30' };
  };

  const severity = getSystemSeverity();

  return (
    <section className="py-24 bg-[#FAF8F5] text-[#0F1012] relative border-b border-[#0F1012]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B27]/10 border border-[#C84B27]/20 text-[#C84B27] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            Conversion Diagnostic Checklist
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1012] mb-6">
            5 Red Flags Your Conversion System Is Leaking Right Now
          </h2>
          <p className="text-base sm:text-lg text-[#0F1012]/70 leading-relaxed">
            Select the issues currently occurring in your sales and marketing operations to instantly assess your pipeline risk level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checklist Items (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {RED_FLAGS.map((flag) => {
              const isChecked = selectedFlags.includes(flag.id);
              return (
                <motion.div
                  key={flag.id}
                  whileHover={{ scale: 1.005 }}
                  onClick={() => toggleFlag(flag.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-[#0F1012] text-[#FAF8F5] border-[#0F1012] shadow-lg'
                      : 'bg-white text-[#0F1012] border-[#0F1012]/10 hover:border-[#0F1012]/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button type="button" className="mt-1 flex-shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-6 h-6 text-[#C84B27]" />
                      ) : (
                        <Square className="w-6 h-6 text-[#0F1012]/30" />
                      )}
                    </button>
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-lg font-semibold ${isChecked ? 'text-[#FAF8F5]' : 'text-[#0F1012]'}`}>
                          {flag.title}
                        </h3>
                        {isChecked && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#C84B27]/20 text-[#C84B27] font-bold">
                            LEAK DETECTED
                          </span>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${isChecked ? 'text-[#FAF8F5]/80' : 'text-[#0F1012]/70'}`}>
                        {flag.description}
                      </p>
                      <div className={`text-xs font-mono pt-2 border-t flex items-center gap-1.5 ${
                        isChecked ? 'border-[#FAF8F5]/10 text-[#C84B27]' : 'border-[#0F1012]/5 text-[#0F1012]/50'
                      }`}>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Estimated Impact: {flag.impact}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Diagnosis & Summary (Right 5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white border border-[#0F1012]/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#0F1012]">
                Your System Diagnostic Score
              </h3>

              {/* Status Badge */}
              <div className={`p-4 rounded-xl border text-sm font-medium flex items-center gap-3 ${severity.color}`}>
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider">Status Overview</div>
                  <div className="font-semibold text-base">{severity.label}</div>
                </div>
              </div>

              {/* Counter Display */}
              <div className="py-4 border-y border-[#0F1012]/10 flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-[#0F1012]">
                    {selectedCount} <span className="text-lg font-sans font-normal text-[#0F1012]/40">/ 5</span>
                  </div>
                  <div className="text-xs text-[#0F1012]/60 mt-0.5">Active Red Flags Checked</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-[#C84B27]">
                    {selectedCount * 20}%
                  </div>
                  <div className="text-xs font-mono text-[#0F1012]/60">Estimated Pipeline Friction</div>
                </div>
              </div>

              <div className="text-sm text-[#0F1012]/70 leading-relaxed">
                {selectedCount === 0 ? (
                  <p>Your pipeline has solid operational baselines. A formal 14-point audit can help identify higher-tier scale optimization points.</p>
                ) : (
                  <p>
                    Identifying these <strong>{selectedCount} leak points</strong> is the first step. Naxolutions re-architects these exact disconnects into automated, high-converting pipelines.
                  </p>
                )}
              </div>

              <button
                onClick={onOpenDiagnostic}
                className="w-full bg-[#0F1012] hover:bg-[#16181B] text-[#FAF8F5] py-4 px-6 rounded-xl font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Fix These {selectedCount > 0 ? selectedCount : ''} Leaks Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C84B27]" />
              </button>

              <div className="text-center text-xs text-[#0F1012]/40 font-mono">
                No contract required • Direct Senior Partner Session
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
