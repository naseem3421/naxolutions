'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { seoConfig } from '@/config/seo';

interface FooterProps {
  onOpenDiagnostic?: () => void;
}

export default function Footer({ onOpenDiagnostic }: FooterProps) {
  const whatsappUrl = siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        siteConfig.contact.whatsappPrefilledMessage
      )}`
    : null;

  return (
    <footer className="bg-[#0F1012] text-white py-16 border-t border-[#1A1C20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A2D34]">
          {/* Brand & Positioning */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white text-[#0F1012] flex items-center justify-center font-bold text-sm">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                NAXOLUTIONS
              </span>
            </Link>

            <div className="text-xs font-mono text-[#C84B27] uppercase tracking-wider font-semibold">
              Business Conversion Consultancy // Chennai, India
            </div>

            <p className="editorial-heading text-lg text-[#B0B6C5] italic max-w-sm">
              "From attention to revenue — without the unnecessary gaps."
            </p>

            <p className="text-xs text-[#737887] leading-relaxed max-w-sm">
              Naxolutions helps businesses identify and fix the structural problems between customer attention, enquiry, sales conversation, and revenue.
            </p>
          </div>

          {/* System Services Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
              SYSTEM SERVICES
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#B0B6C5]">
              {seoConfig.services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={svc.path} className="hover:text-white transition-colors">
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#B0B6C5]">
              <li>
                <Link href="/#problem" className="hover:text-white transition-colors">
                  The Leak
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-white transition-colors">
                  Revenue Journey
                </Link>
              </li>
              <li>
                <Link href="/what-we-build" className="hover:text-white transition-colors">
                  What We Build
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-white transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                {onOpenDiagnostic ? (
                  <button
                    onClick={onOpenDiagnostic}
                    className="text-[#C84B27] hover:underline font-semibold text-left"
                  >
                    Start a Conversation
                  </button>
                ) : (
                  <Link href="/consultation" className="text-[#C84B27] hover:underline font-semibold">
                    Start a Conversation
                  </Link>
                )}
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
              DIRECT CHANNELS
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#B0B6C5]">
              <li>
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-[#737887]" />
                  </a>
                ) : (
                  <span className="text-[#737887] text-[11px]">
                    WhatsApp (Direct contact)
                  </span>
                )}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 text-[#737887]" />
                </a>
              </li>
              <li>
                {siteConfig.contact.linkedin ? (
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#737887]" />
                  </a>
                ) : (
                  <span className="text-[#737887] text-[11px]">LinkedIn</span>
                )}
              </li>
              <li>
                {siteConfig.contact.instagram ? (
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-[#737887]" />
                  </a>
                ) : (
                  <span className="text-[#737887] text-[11px]">Instagram</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737887]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} NAXOLUTIONS. All rights reserved.</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span>Strategic Clarity</span>
            <span>•</span>
            <span>Tech Precision</span>
            <span>•</span>
            <span>No Agency Fluff</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
