'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowLeft, Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TermsOfServicePage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              COMMERCIAL ENGAGEMENT TERMS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012]">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#737887]">
              Effective Date: January 1, 2026 // Last Updated: September 2026
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-8 sm:p-12 space-y-10 shadow-card text-[#4A4E58] text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">1. Consulting Scope & Engagement Nature</h2>
              <p>
                Naxolutions operates as an independent Business Conversion Consultancy based in Chennai, Tamil Nadu, India. Our engagements encompass commercial customer journey diagnostics, conversion system architecture, lead qualification workflows, sales process design, and systems integration.
              </p>
              <p>
                The preliminary diagnostic intake submitted via our website constitutes a mutual exploratory evaluation. It does not establish a formal contract of service until a formal Scope of Work (SOW) or Client Services Agreement (CSA) is mutually signed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">2. Diagnostic Assessment Disclaimer</h2>
              <p>
                The observations, friction metrics, and calculator simulations provided on this website are for diagnostic and educational modeling purposes. While grounded in proven conversion principles, actual business results depend on underlying product-market fit, sales execution, pricing structures, and external macroeconomic conditions. Naxolutions does not guarantee specific revenue dollar amounts without active, verified execution under our direct architectural oversight.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">3. Intellectual Property</h2>
              <p>
                All proprietary frameworks published on this website — including the <em>10-Stage Revenue Journey</em>, diagnostic questionnaires, and architectural teardown representations — are the intellectual property of Naxolutions. Clients retaining our formal advisory services receive full operational licenses for custom workflows, code repositories, and playbooks created specifically for their business.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">4. Mutual Non-Disclosure & Confidentiality</h2>
              <p>
                We respect the sensitive commercial nature of your conversion and sales data. Any pipeline figures, CAC estimates, or sales cycle specifics shared during diagnostic sessions are protected under strict professional confidentiality standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">5. Governing Jurisdiction</h2>
              <p>
                These terms and any disputes arising out of the use of our digital platforms or consulting relationships shall be governed by and construed in accordance with the substantive laws of the Republic of India. The courts located in Chennai, Tamil Nadu, India, shall have exclusive jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">6. Contact Information</h2>
              <p>
                For official correspondence or questions regarding our consulting terms, contact:
              </p>
              <div className="bg-[#FAF8F5] p-4 rounded border border-[#E6E1D6] font-mono text-xs text-[#0F1012] space-y-1">
                <div><strong>Naxolutions Business Conversion Consultancy</strong></div>
                <div>Principal Practice: Chennai, Tamil Nadu, India</div>
                <div>Legal & Advisory Inquiries: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C84B27] underline">{siteConfig.contact.email}</a></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
