'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react';

const DEAL_VALUE_STEPS = [
  // Below 1 Lakh
  10000, 25000, 50000, 75000, 100000,
  // 1 Lakh to 10 Lakhs
  150000, 200000, 250000, 300000, 400000, 500000, 600000, 750000, 1000000,
  // 10 Lakhs to 1 Crore
  1500000, 2000000, 2500000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000,
  // 1 Cr to 10 Cr with 0.5 Cr difference
  15000000, 20000000, 25000000, 30000000, 35000000, 40000000, 45000000, 50000000,
  55000000, 60000000, 65000000, 70000000, 75000000, 80000000, 85000000, 90000000,
  95000000, 100000000,
];

interface RevenueLeakageCalculatorProps {
  onOpenDiagnostic?: () => void;
}

export default function RevenueLeakageCalculator({ onOpenDiagnostic }: RevenueLeakageCalculatorProps) {
  const [enquiries, setEnquiries] = useState<number>(300);
  const [dealValue, setDealValue] = useState<number>(150000);
  const [currentCloseRate, setCurrentCloseRate] = useState<number>(4);

  // Math Calculations
  const currentMonthlyRevenue = Math.round(enquiries * (currentCloseRate / 100) * dealValue);
  
  // Conservative system optimization: 2.2x close rate boost from eliminating lead latency & follow-up leaks
  const targetCloseRate = Math.min(Math.round(currentCloseRate * 2.2 * 10) / 10, 35);
  const optimizedMonthlyRevenue = Math.round(enquiries * (targetCloseRate / 100) * dealValue);
  
  const monthlyLeak = optimizedMonthlyRevenue - currentMonthlyRevenue;
  const annualLeak = monthlyLeak * 12;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      const cr = val / 10000000;
      return `₹${parseFloat(cr.toFixed(2))} Cr`;
    }
    if (val >= 100000) {
      const lk = val / 100000;
      return `₹${parseFloat(lk.toFixed(2))} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const getDealStepIndex = (val: number) => {
    const exact = DEAL_VALUE_STEPS.indexOf(val);
    if (exact !== -1) return exact;
    return DEAL_VALUE_STEPS.reduce(
      (closestIdx, currVal, currIdx) =>
        Math.abs(currVal - val) < Math.abs(DEAL_VALUE_STEPS[closestIdx] - val) ? currIdx : closestIdx,
      0
    );
  };

  return (
    <section className="py-24 bg-[#0F1012] text-[#FAF8F5] relative overflow-hidden border-y border-[#FAF8F5]/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C84B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C84B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B27]/15 border border-[#C84B27]/30 text-[#C84B27] text-xs font-semibold tracking-wide uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive System Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5] mb-6">
            Calculate Your Business&apos;s Monthly Revenue Leakage
          </h2>
          <p className="text-base sm:text-lg text-[#FAF8F5]/80 leading-relaxed">
            Most businesses assume they need more ad spend to grow. In reality, disconnected follow-ups and website leaks bleed up to 60% of potential revenue from traffic you already paid for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-6 bg-[#16181B] border border-[#FAF8F5]/10 rounded-2xl p-6 sm:p-8 space-y-8">
            <h3 className="text-xl font-bold text-[#FAF8F5] pb-4 border-b border-[#FAF8F5]/10">
              Input Your Current Sales Baseline
            </h3>

            {/* Slider 1: Monthly Enquiries */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calc-monthly-enquiries" className="text-[#FAF8F5]/90 font-medium">
                  Monthly Qualified Enquiries / Leads
                </label>
                <span className="text-[#C84B27] font-mono font-bold text-base bg-[#C84B27]/10 px-2.5 py-1 rounded border border-[#C84B27]/20">
                  {enquiries.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                id="calc-monthly-enquiries"
                type="range"
                min="20"
                max="3000"
                step="10"
                value={enquiries}
                aria-label="Monthly Qualified Enquiries or Leads"
                aria-valuemin={20}
                aria-valuemax={3000}
                aria-valuenow={enquiries}
                onChange={(e) => setEnquiries(Number(e.target.value))}
                className="w-full h-2 bg-[#FAF8F5]/20 rounded-lg appearance-none cursor-pointer accent-[#C84B27]"
              />
              <div className="flex justify-between text-xs text-[#FAF8F5]/75 font-mono">
                <span>20 leads</span>
                <span>3,000 leads</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calc-average-deal-value" className="text-[#FAF8F5]/90 font-medium">
                  Average Customer Value (Deal Size)
                </label>
                <span className="text-[#C84B27] font-mono font-bold text-base bg-[#C84B27]/10 px-2.5 py-1 rounded border border-[#C84B27]/20">
                  {formatCurrency(dealValue)}
                </span>
              </div>
              <input
                id="calc-average-deal-value"
                type="range"
                min="0"
                max={DEAL_VALUE_STEPS.length - 1}
                step="1"
                value={getDealStepIndex(dealValue)}
                aria-label="Average Customer Value Deal Size"
                aria-valuemin={0}
                aria-valuemax={DEAL_VALUE_STEPS.length - 1}
                aria-valuenow={getDealStepIndex(dealValue)}
                onChange={(e) => setDealValue(DEAL_VALUE_STEPS[Number(e.target.value)])}
                className="w-full h-2 bg-[#FAF8F5]/20 rounded-lg appearance-none cursor-pointer accent-[#C84B27]"
              />
              <div className="flex justify-between text-xs text-[#FAF8F5]/75 font-mono">
                <span>₹10,000</span>
                <span>₹10 Cr</span>
              </div>
            </div>

            {/* Slider 3: Current Close Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calc-conversion-close-rate" className="text-[#FAF8F5]/90 font-medium">
                  Current Lead-to-Sale Conversion Rate
                </label>
                <span className="text-[#C84B27] font-mono font-bold text-base bg-[#C84B27]/10 px-2.5 py-1 rounded border border-[#C84B27]/20">
                  {currentCloseRate}%
                </span>
              </div>
              <input
                id="calc-conversion-close-rate"
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={currentCloseRate}
                aria-label="Current Lead to Sale Conversion Rate"
                aria-valuemin={1}
                aria-valuemax={20}
                aria-valuenow={currentCloseRate}
                onChange={(e) => setCurrentCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-[#FAF8F5]/20 rounded-lg appearance-none cursor-pointer accent-[#C84B27]"
              />
              <div className="flex justify-between text-xs text-[#FAF8F5]/75 font-mono">
                <span>1% (Low conversion)</span>
                <span>20% (High conversion)</span>
              </div>
            </div>

            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed italic border-t border-[#FAF8F5]/10 pt-4">
              *Calculations are based on conservative system fixes: eliminating 4+ hour response delays, implementing automated triage, and structuring 7-step WhatsApp &amp; CRM follow-up protocols.
            </p>
          </div>

          {/* Results Panel (Right) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Alert Card */}
            <div 
              className="bg-[#16181B] border-2 border-[#C84B27]/40 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold tracking-wider text-[#C84B27] uppercase bg-[#C84B27]/15 px-3 py-1 rounded">
                  Estimated System Revenue Leak
                </span>
                <AlertTriangle className="w-5 h-5 text-[#C84B27]" />
              </div>

              <div>
                <div className="text-xs text-[#FAF8F5]/70 font-mono mb-1">UNCAPTURED REVENUE PER MONTH</div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[#C84B27] tracking-tight">
                  {formatCurrency(monthlyLeak)}
                  <span className="text-sm font-sans font-normal text-[#FAF8F5]/80 ml-2">/ month</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FAF8F5]/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-[#FAF8F5]/70 font-mono">ANNUALIZED LOSS</div>
                  <div className="text-xl font-mono font-semibold text-[#FAF8F5] mt-1">
                    {formatCurrency(annualLeak)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#FAF8F5]/70 font-mono">OPTIMIZED CLOSE RATE</div>
                  <div className="text-xl font-mono font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {targetCloseRate}%
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#16181B] border border-[#FAF8F5]/10 rounded-xl p-5">
                <div className="text-xs font-mono text-[#FAF8F5]/70 mb-1">CURRENT MONTHLY REVENUE</div>
                <div className="text-lg font-mono font-semibold text-[#FAF8F5]">
                  {formatCurrency(currentMonthlyRevenue)}
                </div>
                <div className="text-xs text-[#FAF8F5]/60 mt-1">At {currentCloseRate}% close rate</div>
              </div>
              <div className="bg-[#16181B] border border-emerald-500/20 bg-emerald-500/5 rounded-xl p-5">
                <div className="text-xs font-mono text-emerald-400 mb-1">CONNECTED SYSTEM REVENUE</div>
                <div className="text-lg font-mono font-semibold text-emerald-300">
                  {formatCurrency(optimizedMonthlyRevenue)}
                </div>
                <div className="text-xs text-emerald-300/80 mt-1">At {targetCloseRate}% close rate</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDiagnostic}
                className="w-full bg-[#C84B27] hover:bg-[#b03f1f] text-[#FAF8F5] py-4 px-6 rounded-xl font-medium text-base transition-all duration-200 shadow-lg shadow-[#C84B27]/25 flex items-center justify-center gap-2 group"
              >
                <span>Audit &amp; Plug Your Revenue Leaks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-[#FAF8F5]/70 mt-3">
                100% confidential. No generic templates. Direct 14-point audit of your pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
