'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5" />
              LEGAL & DATA GOVERNANCE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012]">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[#737887]">
              Effective Date: January 1, 2026 // Last Updated: September 2026
            </p>
          </div>

          {/* Policy Content */}
          <div className="bg-white border border-[#E6E1D6] rounded-xl p-8 sm:p-12 space-y-10 shadow-card text-[#4A4E58] text-sm leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C84B27]" />
                1. Overview & Commitment
              </h2>
              <p>
                Naxolutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates as a Business Conversion Consultancy headquartered in Chennai, Tamil Nadu, India. This Privacy Policy outlines our principles and practices concerning the collection, storage, use, and protection of information obtained through our website ({siteConfig.url}), diagnostic intake forms, communication channels (including WhatsApp Business, Email, and Phone), and consulting client engagements.
              </p>
              <p>
                We adhere to applicable data privacy principles, including the <em>Digital Personal Data Protection Act, 2023 (DPDP Act, India)</em> and standard international privacy frameworks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#C84B27]" />
                2. Information We Collect
              </h2>
              <p>We collect only information reasonably required to deliver commercial diagnostic evaluations and conversion advisory services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0F1012]">Commercial Diagnostic Intake Details:</strong> Name, work email address, phone/WhatsApp number, company name, industry domain, monthly lead volumes, and self-reported conversion friction points.
                </li>
                <li>
                  <strong className="text-[#0F1012]">Direct Inquiries:</strong> Any information submitted through our WhatsApp Business API channels, email conversations, or scheduling forms.
                </li>
                <li>
                  <strong className="text-[#0F1012]">Technical & Telemetry Data:</strong> IP address, device type, browser specifications, and aggregated navigation patterns via privacy-preserving analytics to optimize page load speeds and usability.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#C84B27]" />
                3. Purpose of Data Processing
              </h2>
              <p>We process your submitted data strictly for legitimate commercial consulting purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Conducting preliminary revenue journey audits and bottleneck analyses.</li>
                <li>Direct communication regarding your diagnostic assessment and scheduling consultation calls.</li>
                <li>Transmitting agreed conversion frameworks, proposals, and advisory documentation.</li>
                <li>We do not sell, rent, or trade your contact details or business metrics to third-party data brokers or marketing list aggregators.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">4. WhatsApp & Communication Protocols</h2>
              <p>
                When you initiate or consent to communication via WhatsApp, messages are transmitted through Meta&apos;s encrypted communication infrastructure. We utilize WhatsApp strictly to coordinate consultation details, deliver diagnostic summaries, and manage client advisory pipelines. You may opt out of WhatsApp communications at any time by replying &quot;STOP&quot; or emailing us directly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">5. Confidentiality of Commercial Business Metrics</h2>
              <p>
                All proprietary commercial disclosures shared during diagnostic audits (such as deal values, lead counts, conversion ratios, or sales cycle notes) are treated as strictly confidential commercial intelligence. Such metrics are reviewed exclusively by our senior principal consultants and are never publicly disclosed without written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">6. Data Security & Storage</h2>
              <p>
                We implement industry-standard encryption protocols (HTTPS/TLS) and secure access controls for all incoming intake endpoints. Data is stored on secure cloud databases with role-based authentication restrictions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0F1012]">7. Your Rights & Contact Details</h2>
              <p>
                You retain the right to review, update, or request the deletion of your personal and commercial data at any time. For questions regarding this policy or our data practices, reach our privacy coordinator directly at:
              </p>
              <div className="bg-[#FAF8F5] p-4 rounded border border-[#E6E1D6] font-mono text-xs text-[#0F1012] space-y-1">
                <div><strong>Naxolutions Business Conversion Consultancy</strong></div>
                <div>Principal Practice: Chennai, Tamil Nadu, India</div>
                <div>Direct Privacy Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C84B27] underline">{siteConfig.contact.email}</a></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
