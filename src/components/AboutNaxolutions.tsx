'use client';

import React from 'react';
import { UserCheck, Shield, Layers, ArrowRight } from 'lucide-react';

export default function AboutNaxolutions() {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#FAF8F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#4A4E58] uppercase tracking-wider">
              Firm Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight max-w-3xl mx-auto">
              Naxolutions exists because businesses don't need another disconnected vendor.
            </h2>
          </div>

          {/* Philosophy Body */}
          <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-10 space-y-6 shadow-subtle">
            <p className="text-lg text-[#4A4E58] leading-relaxed">
              Marketing agencies, website developers, media buyers, CRM specialists, and sales trainers are traditionally hired as separate vendors.
            </p>

            <p className="editorial-heading text-xl sm:text-2xl font-bold text-[#0F1012] leading-snug">
              The customer doesn't experience them separately.
              <br />
              <span className="text-[#C84B27] italic">They experience one single continuous journey.</span>
            </p>

            <p className="text-base text-[#4A4E58] leading-relaxed">
              When that journey breaks between stages, vendors point fingers at each other. The ad agency blames lead quality; the sales team blames lead volume; the web developer blames copy.
            </p>

            <p className="text-base font-semibold text-[#0F1012] leading-relaxed border-l-2 border-[#0F1012] pl-4 py-1">
              Naxolutions takes structural ownership of the ENTIRE customer-to-revenue system. We identify what is missing, build what is necessary, connect the pieces, and improve the system based on real commercial behavior.
            </p>
          </div>

          {/* Secondary Consultant Profile Card */}
          <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#0F1012] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
              N
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-[#0F1012]">Naseem</span>
                <span className="text-xs font-mono text-[#4A4E58] font-medium px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E6E1D6]">
                  Business Conversion Consultant &amp; System Architect
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                &quot;I work directly with business owners to identify where their customer journey is breaking and build the missing pieces needed to move predictably from attention to revenue.&quot;
              </p>
            </div>
          </div>

          {/* Principal Advisory Guarantee Block */}
          <div className="bg-[#0F1012] text-[#FAF8F5] rounded-xl p-6 sm:p-8 border border-[#FAF8F5]/10 space-y-4">
            <div className="flex items-center gap-3 border-b border-[#FAF8F5]/10 pb-3">
              <UserCheck className="w-5 h-5 text-[#C84B27]" />
              <span className="font-bold text-lg tracking-tight">
                Our Principal Advisory Guarantee
              </span>
              <span className="ml-auto text-[10px] font-mono uppercase bg-[#C84B27]/20 text-[#C84B27] px-2.5 py-0.5 rounded border border-[#C84B27]/30">
                Direct Accountability
              </span>
            </div>
            <p className="text-sm text-[#FAF8F5]/90 leading-relaxed">
              When you engage Naxolutions, your business model, customer journey audit, and conversion system architecture are directed personally by a senior principal consultant. You will never be delegated to junior account managers, interns, or outsourced call reps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-[#FAF8F5]/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C84B27]" />
                <span>Direct Senior Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C84B27]" />
                <span>End-to-End Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#C84B27]" />
                <span>No Agency Hand-Offs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
