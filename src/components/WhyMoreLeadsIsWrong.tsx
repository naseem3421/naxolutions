'use client';

import React, { useState } from 'react';
import { ArrowDown, AlertTriangle, TrendingUp, Sliders } from 'lucide-react';

export default function WhyMoreLeadsIsWrong() {
  const [trafficMultiplier, setTrafficMultiplier] = useState<number>(2); // 2x traffic
  const [fixLeakyMiddle, setFixLeakyMiddle] = useState<boolean>(false);

  // Math simulation constants
  const baseVisitors = 1000;
  const baseInterested = 200; // 20%
  const baseEnquiries = 50;   // 5% of visitors
  const baseQualified = 15;   // 30% of enquiries
  const baseSales = 3;        // 20% of qualified

  // Scenario A: Buying 2x Traffic into Leaky System
  const scenarioATraffic = baseVisitors * trafficMultiplier;
  const scenarioAEnquiries = baseEnquiries * trafficMultiplier;
  const scenarioASales = baseSales * trafficMultiplier;
  const scenarioAAdCost = 200000 * trafficMultiplier; // e.g. ₹4,00,000 for 2x traffic

  // Scenario B: Fixing system leaks with 1x traffic
  const scenarioBVisitors = baseVisitors;
  const scenarioBEnquiries = 120; // Improved messaging & friction reduction -> 12% conversion
  const scenarioBSales = 18;       // Faster response + qualification + follow-up -> 15% conversion
  const scenarioBAdCost = 200000;   // Original ad spend

  return (
    <section className="py-20 md:py-32 bg-[#FAF8F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#737887] uppercase tracking-wider mb-4">
            System Mathematics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight mb-6">
            More leads don't fix a broken conversion system.
          </h2>
          <p className="text-lg text-[#4A4E58] leading-relaxed">
            If your business loses opportunities between enquiry and decision, buying more traffic simply gives the broken system more people to lose.
          </p>
        </div>

        {/* Visual Conversion Drop-off Model */}
        <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 shadow-card mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887] border-b border-[#E6E1D6] pb-4 mb-8">
            THE ANATOMY OF A LEAKY JOURNEY
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            {/* Stage 1 */}
            <div className="p-4 rounded bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#737887]">STAGE 01</span>
                <div className="font-bold text-sm text-[#0F1012]">100 VISITORS</div>
              </div>
              <span className="text-xs font-mono text-[#4A4E58]">Attention Inflow</span>
            </div>

            <div className="flex justify-center text-[#737887]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#737887]">STAGE 02</span>
                <div className="font-bold text-sm text-[#0F1012]">20 INTERESTED</div>
              </div>
              <span className="text-xs font-mono text-[#C84B27]">80 Exited (Clarity Leak)</span>
            </div>

            <div className="flex justify-center text-[#737887]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#737887]">STAGE 03</span>
                <div className="font-bold text-sm text-[#0F1012]">10 ENQUIRIES</div>
              </div>
              <span className="text-xs font-mono text-[#C84B27]">10 Exited (Friction Form)</span>
            </div>

            <div className="flex justify-center text-[#C84B27]">
              <div className="px-2 py-0.5 rounded bg-[#FDF4F0] border border-[#E8D5CC] text-[11px] font-mono text-[#C84B27] font-semibold flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>Critical Mid-Funnel Leak Point</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded bg-[#FDF4F0] border border-[#E8D5CC] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#C84B27]">STAGE 04</span>
                <div className="font-bold text-sm text-[#0F1012]">3 QUALIFIED OPPORTUNITIES</div>
              </div>
              <span className="text-xs font-mono text-[#C84B27]">7 Lost to Slow Response & No Filter</span>
            </div>

            <div className="flex justify-center text-[#737887]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Stage 5 */}
            <div className="p-4 rounded bg-[#0F1012] text-white flex items-center justify-between shadow-subtle">
              <div>
                <span className="text-xs font-mono text-[#C84B27]">FINAL OUTPUT</span>
                <div className="font-bold text-sm text-white">1 CUSTOMER REVENUE</div>
              </div>
              <span className="text-xs font-mono text-[#B0B6C5]">99% Cumulative Loss</span>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Simulator */}
        <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6E1D6] pb-4 mb-6 gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
                COMMERCIAL COMPARISON // MORE ADS VS CONNECTED SYSTEM
              </span>
            </div>
            <div className="text-xs font-mono text-[#0F1012] font-semibold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Model</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Traditional Agency Fix */}
            <div className="bg-[#FAF8F5] border-2 border-[#E6E1D6] rounded-lg p-6 flex flex-col justify-between relative">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider h-5 flex items-center">
                  OPTION A: Traditional Ad Agency Approach
                </div>
                <h3 className="text-xl font-bold text-[#0F1012] min-h-[3.25rem] flex items-center">
                  Buy 2x More Ad Traffic (₹4,00,000 Spend)
                </h3>
                <p className="text-xs text-[#4A4E58] leading-relaxed min-h-[2.5rem] flex items-center">
                  Pumps 2x more people into the exact same leaky experience without fixing response times or qualification.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E1D6] text-xs font-mono space-y-2.5">
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Ad Budget:</span>
                  <span className="font-bold text-[#C84B27]">₹4,00,000/mo</span>
                </div>
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Enquiries Generated:</span>
                  <span className="font-bold text-[#0F1012]">100 leads</span>
                </div>
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Closed Customers:</span>
                  <span className="font-bold text-[#0F1012]">6 customers</span>
                </div>
                <div className="flex items-center justify-between min-h-[26px] text-[#C84B27]">
                  <span>Cost Per Customer:</span>
                  <span className="font-bold">₹66,666 / customer</span>
                </div>
              </div>
            </div>

            {/* Right: Naxolutions Connected System Fix */}
            <div className="bg-[#FAF8F5] border-2 border-[#0F1012] rounded-lg p-6 flex flex-col justify-between relative shadow-card">
              <div className="absolute -top-3 right-4 bg-[#0F1012] text-white text-[10px] font-mono px-2.5 py-0.5 rounded uppercase font-bold tracking-wider pointer-events-none">
                NAXOLUTIONS APPROACH
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-[#2B5246] uppercase tracking-wider h-5 flex items-center">
                  OPTION B: Fix Conversion Architecture
                </div>
                <h3 className="text-xl font-bold text-[#0F1012] min-h-[3.25rem] flex items-center">
                  Fix The Leaky System (₹2,00,000 Ad Spend)
                </h3>
                <p className="text-xs text-[#4A4E58] leading-relaxed min-h-[2.5rem] flex items-center">
                  Fixes landing clarity, response delays, qualification filters, and structured follow-up sequences.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E1D6] text-xs font-mono space-y-2.5">
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Ad Budget:</span>
                  <span className="font-bold text-[#0F1012]">₹2,00,000/mo <span className="font-normal text-[#737887]">(Same spend)</span></span>
                </div>
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Enquiries Generated:</span>
                  <span className="font-bold text-[#0F1012]">120 leads <span className="font-normal text-[#737887]">(Better messaging)</span></span>
                </div>
                <div className="flex items-center justify-between min-h-[26px]">
                  <span className="text-[#4A4E58]">Closed Customers:</span>
                  <span className="font-bold text-[#2B5246]">18 customers <span className="font-medium">(3x output!)</span></span>
                </div>
                <div className="flex items-center justify-between min-h-[26px] text-[#2B5246]">
                  <span>Cost Per Customer:</span>
                  <span className="font-bold">₹11,111 / customer <span className="font-medium text-[11px]">(-83% CAC)</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#FDF4F0] border border-[#E8D5CC] rounded text-xs font-mono text-[#0F1012] flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#C84B27] flex-shrink-0" />
            <span>
              <strong>Key Commercial Takeaway:</strong> Fixing system leaks produces 3x more revenue from existing attention, without doubling your ad spend.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
