'use client';

import React from 'react';
import { UserCheck, Shield, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutNaxolutions() {
  const hasLinkedIn = Boolean(siteConfig.contact.linkedin);

  return (
    <section id="about" className="pt-16 pb-24 md:pt-20 md:pb-32 bg-[#FAF8F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-semibold text-[#4A4E58] uppercase tracking-wider">
              Leadership &amp; Firm Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight max-w-3xl mx-auto">
              Naxolutions exists because businesses don&apos;t need another disconnected vendor.
            </h2>
          </div>

          {/* Philosophy Body */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-6 sm:p-10 space-y-6 shadow-subtle">
            <p className="text-lg text-[#4A4E58] leading-relaxed">
              Marketing agencies, website designers, media buyers, CRM specialists, and sales consultants are traditionally hired as separate vendors operating in silos.
            </p>

            <p className="editorial-heading text-xl sm:text-2xl font-bold text-[#0F1012] leading-snug">
              The buyer does not experience your business in silos.
              <br />
              <span className="text-[#C84B27] italic">They experience one single continuous journey from first touch to signed contract.</span>
            </p>

            <p className="text-base text-[#4A4E58] leading-relaxed">
              When that journey breaks between stages, vendors point fingers at each other: the ad agency blames lead quality; the sales team blames lead volume; the web developer blames the offer. Nobody owns the connection.
            </p>

            <p className="text-base font-semibold text-[#0F1012] leading-relaxed border-l-2 border-[#0F1012] pl-4 py-1">
              Naxolutions takes structural ownership of the complete customer-to-revenue journey. We diagnose what is leaking, architect what is missing, build the technological and procedural connections, and measure real commercial output.
            </p>
          </div>

          {/* Founder Profile Teardown */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-6 sm:p-10 space-y-8 shadow-subtle">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-[#E6E1D6] pb-6">
              <div className="w-16 h-16 rounded-full bg-[#0F1012] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md">
                N
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-2xl text-[#0F1012]">Naseem</h3>
                  <span className="text-xs font-mono text-[#C84B27] font-semibold px-2.5 py-0.5 rounded bg-[#FAF8F5] border border-[#E6E1D6]">
                    Business Conversion Consultant &amp; System Architect
                  </span>
                </div>
                <p className="text-sm text-[#4A4E58]">
                  Principal Consultant at Naxolutions • Chennai, Tamil Nadu, India
                </p>
                {hasLinkedIn && (
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-[#C84B27] hover:underline pt-1"
                  >
                    View LinkedIn Profile →
                  </a>
                )}
              </div>
            </div>

            {/* Clear Factual Q&A Answers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  Who is Naseem?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  A business conversion consultant and systems architect who evaluates commercial pipelines from first marketing touchpoint to final sales payment.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  What does he actually do?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  He conducts granular revenue leakage audits, diagnoses drop-off points, and designs custom technological and operational systems to fix them.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  What kind of businesses does he work with?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  Established B2B companies, industrial manufacturers, high-ticket service providers, and commercial firms already generating leads or sales conversations.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  What systems does he build?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  Lead conversion systems, B2B conversion websites, automated WhatsApp qualification workflows, CRM routing protocols, and multi-touch nurture pipelines.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  What is his approach?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  Root-cause diagnosis before prescription. He insists on mapping actual customer behavior and lead latency before building any software or adjusting messaging.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C84B27]">
                  Why should a business owner trust him?
                </h4>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  Direct principal accountability. He does not sell speculative retainer packages or delegate client architecture to junior account managers.
                </p>
              </div>
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
              When you engage Naxolutions, your customer journey audit, pipeline teardown, and conversion system architecture are directed personally by Naseem. You will never be delegated to junior account coordinators, outsourced call reps, or offshore subcontractors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono text-[#FAF8F5]/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C84B27]" />
                <span>Direct Principal Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C84B27]" />
                <span>Whole-Pipeline Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C84B27]" />
                <span>Zero Agency Hand-Offs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
