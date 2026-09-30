'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Clock, Shield, MessageSquare, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  const whatsappUrl = siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        "Hello Naxolutions, I just submitted the diagnostic intake form and would like to request priority review of our conversion system."
      )}`
    : null;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <header className="py-6 border-b border-[#E6E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-[#0F1012] flex items-center gap-2">
            <span className="w-7 h-7 bg-[#0F1012] text-white rounded flex items-center justify-center text-xs">N</span>
            <span>NAXOLUTIONS</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-mono font-medium text-[#737887] hover:text-[#0F1012] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back To Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Status Badge & Heading */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EC] border border-[#2B5246]/20 text-xs font-mono font-semibold text-[#2B5246] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#2B5246]" />
              Diagnostic Intake Received
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Your System Assessment Is Under Principal Review.
            </h1>

            <p className="text-base sm:text-lg text-[#4A4E58] leading-relaxed">
              Thank you for sharing context on your commercial operations. We evaluate your customer journey against our 10-stage revenue framework to isolate your primary conversion leaks.
            </p>
          </div>

          {/* Timeline Process Breakdown */}
          <div className="bg-white border-2 border-[#0F1012] rounded-xl p-6 sm:p-8 space-y-6 shadow-card">
            <div className="border-b border-[#E6E1D6] pb-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
                WHAT HAPPENS NEXT // TIMELINE & DELIVERABLE
              </span>
              <span className="text-xs font-mono text-[#C84B27] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Response &lt; 24 Hours
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] text-[#0F1012] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  01
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0F1012]">Initial Commercial Audit</div>
                  <p className="text-xs text-[#4A4E58] leading-relaxed">
                    A principal consultant personally examines your current web presence, inquiry capture mechanisms, response latency, and qualification criteria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] text-[#0F1012] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  02
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0F1012]">Friction Mapping & Bottleneck Identification</div>
                  <p className="text-xs text-[#4A4E58] leading-relaxed">
                    We map the points where prospective buyers encounter delays or unclarified value between enquiry and sales decision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] text-[#0F1012] font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  03
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0F1012]">Direct Diagnostic Conversation</div>
                  <p className="text-xs text-[#4A4E58] leading-relaxed">
                    We reach out via your preferred channel (WhatsApp or Email) with specific, actionable observations. No generic sales pitch, no obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Priority Contact */}
          {whatsappUrl && (
            <div className="bg-[#FAF8F5] border border-[#E6E1D6] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-[#2B5246] uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#2B5246]" />
                  Need Priority Same-Day Review?
                </div>
                <p className="text-xs sm:text-sm text-[#4A4E58] leading-relaxed">
                  If you have active ad spend running or urgent sales pipeline leaks, message our principal consultant directly.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          )}

          {/* Return Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E1D6] text-xs">
            <Link
              href="/"
              className="text-[#0F1012] font-semibold hover:text-[#C84B27] flex items-center gap-1.5 transition-colors"
            >
              <span>← Return to Home Overview</span>
            </Link>

            <Link
              href="/#breaks"
              className="text-[#737887] hover:text-[#0F1012] transition-colors"
            >
              Explore 7 Points Where Businesses Break →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
