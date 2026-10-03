'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, Activity, ChevronDown, Sparkles } from 'lucide-react';
import { seoConfig } from '@/config/seo';

interface NavigationProps {
  onOpenDiagnostic?: () => void;
}

export default function Navigation({ onOpenDiagnostic }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleCtaClick = () => {
    if (onOpenDiagnostic) {
      onOpenDiagnostic();
    } else if (typeof window !== 'undefined') {
      window.location.href = '/consultation';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E1D6] py-2.5 shadow-subtle'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* 01. Brand Logo & Positioning Badge */}
            <div className="flex items-center lg:flex-1">
              <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-[#0F1012] p-1.5 shadow-subtle transition-transform group-hover:scale-105">
                  <Image
                    src="/logo-mark-white.png"
                    alt="Naxolutions Logo"
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base sm:text-lg tracking-tight text-[#0F1012] leading-none">
                    NAXOLUTIONS
                  </span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-[#737887] font-semibold mt-1">
                    BUILD • GROW • SCALE
                  </span>
                </div>
              </Link>
            </div>

            {/* 02. Streamlined Desktop Navigation Menu (5 Items) */}
            <nav className="hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="flex items-center justify-center gap-1 xl:gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E6E1D6] shadow-subtle">
                <Link
                  href="/#journey"
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap inline-flex items-center justify-center text-[#4A4E58] hover:text-[#C84B27] hover:bg-[#FAF8F5] rounded-full transition-all"
                >
                  Journey
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    aria-expanded={servicesDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Services navigation menu"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap text-[#4A4E58] hover:text-[#C84B27] hover:bg-[#FAF8F5] rounded-full transition-all inline-flex items-center justify-center gap-1"
                  >
                    <span>Services</span>
                    <ChevronDown className="w-3 h-3 text-[#737887]" />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 text-left">
                      <div className="bg-white border border-[#E6E1D6] rounded-xl p-2.5 shadow-card space-y-1">
                        <Link
                          href="/what-we-build"
                          className="block px-3 py-2 rounded-lg text-xs font-bold text-[#0F1012] bg-[#FAF8F5] hover:bg-[#F3EFE7] hover:text-[#C84B27] transition-colors border border-[#E6E1D6] mb-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span>What We Build (Overview)</span>
                            <span className="text-[#C84B27]">→</span>
                          </div>
                          <div className="text-[10px] text-[#737887] font-normal mt-0.5">
                            Core conversion architecture &amp; blocks
                          </div>
                        </Link>

                        <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#737887] border-b border-[#E6E1D6]/60">
                          SYSTEM SERVICES
                        </div>

                        {seoConfig.services.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={svc.path}
                            className="block px-3 py-2 rounded text-xs font-medium text-[#0F1012] hover:bg-[#FAF8F5] hover:text-[#C84B27] transition-colors"
                          >
                            <div className="font-bold">{svc.name}</div>
                            <div className="text-[10px] text-[#737887] line-clamp-1 mt-0.5">
                              {svc.shortDescription}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/approach"
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap inline-flex items-center justify-center text-[#4A4E58] hover:text-[#C84B27] hover:bg-[#FAF8F5] rounded-full transition-all"
                >
                  Methodology
                </Link>

                <Link
                  href="/case-studies"
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap inline-flex items-center justify-center text-[#4A4E58] hover:text-[#C84B27] hover:bg-[#FAF8F5] rounded-full transition-all"
                >
                  Case Studies
                </Link>

                <Link
                  href="/consultation"
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap inline-flex items-center justify-center text-[#4A4E58] hover:text-[#C84B27] hover:bg-[#FAF8F5] rounded-full transition-all font-bold"
                >
                  Consultation
                </Link>
              </div>
            </nav>

            {/* 03. Right CTA Action */}
            <div className="hidden sm:flex lg:flex-1 items-center justify-end gap-3 flex-shrink-0">
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-all duration-200 shadow-subtle group whitespace-nowrap"
              >
                <Activity className="w-3.5 h-3.5 text-[#C84B27] group-hover:text-white transition-colors" />
                <span>Find My Revenue Leak</span>
              </button>
            </div>

            {/* 04. Mobile Navigation Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={handleCtaClick}
                className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-white bg-[#C84B27] rounded sm:hidden"
              >
                Find Leak
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0F1012] hover:text-[#C84B27] focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden border-b border-[#E6E1D6] overflow-y-auto">
          <div className="flex flex-col gap-4 text-xs font-mono font-semibold uppercase tracking-wider text-[#0F1012]">
            <Link
              href="/#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>The Revenue Journey</span>
              <span className="text-[#737887]">→</span>
            </Link>
            <Link
              href="/what-we-build"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>What We Build</span>
              <span className="text-[#737887]">→</span>
            </Link>
            <Link
              href="/approach"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>Operating Methodology</span>
              <span className="text-[#737887]">→</span>
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>Case Studies &amp; Teardowns</span>
              <span className="text-[#737887]">→</span>
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>Insights &amp; Articles</span>
              <span className="text-[#737887]">→</span>
            </Link>
            <Link
              href="/consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between font-bold text-[#C84B27]"
            >
              <span>Book Consultation</span>
              <span className="text-[#C84B27]">→</span>
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#E6E1D6] flex items-center justify-between"
            >
              <span>FAQ</span>
              <span className="text-[#737887]">→</span>
            </Link>

            {/* Mobile Services List */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[#C84B27] font-bold tracking-widest mb-2">
                CORE SERVICES:
              </div>
              <div className="space-y-1.5 pl-2 border-l border-[#E6E1D6]">
                {seoConfig.services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={svc.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-[#4A4E58] hover:text-[#0F1012]"
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full text-center py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded flex items-center justify-center gap-2 transition-colors"
            >
              <span>Find My Revenue Leak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
