import React from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Home, Layers, BookOpen, Calendar, HelpCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found (404) | Naxolutions',
  description: 'The requested page could not be found. Navigate back to Naxolutions Business Conversion Consultancy.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 text-center">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              404 // ROUTE NOT FOUND
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              This path does not exist in the conversion journey.
            </h1>
            
            <p className="text-base sm:text-lg text-[#4A4E58] max-w-xl mx-auto leading-relaxed">
              The page or resource you requested has been moved, renamed, or is unavailable. Use the directory below to return to key commercial conversion channels.
            </p>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            <Link
              href="/"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <Home className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">Main Conversion Diagnosis</div>
              <p className="text-xs text-[#737887]">Return to homepage to audit your revenue leaks.</p>
            </Link>

            <Link
              href="/what-we-build"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <Layers className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">System Services</div>
              <p className="text-xs text-[#737887]">Explore the 7 conversion building blocks we deploy.</p>
            </Link>

            <Link
              href="/approach"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <HelpCircle className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">Firm Methodology</div>
              <p className="text-xs text-[#737887]">Learn how we connect customer attention to revenue.</p>
            </Link>

            <Link
              href="/case-studies"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <BookOpen className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">Case Studies</div>
              <p className="text-xs text-[#737887]">Review real baseline pipeline transformations.</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <BookOpen className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">Blog &amp; Knowledge Base</div>
              <p className="text-xs text-[#737887]">Read business conversion frameworks &amp; insights.</p>
            </Link>

            <Link
              href="/consultation"
              className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] p-5 rounded-lg transition-all shadow-subtle group space-y-2"
            >
              <div className="flex items-center justify-between">
                <Calendar className="w-4 h-4 text-[#C84B27]" />
                <ArrowRight className="w-4 h-4 text-[#737887] group-hover:text-[#0F1012] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="font-bold text-sm text-[#0F1012]">Book Consultation</div>
              <p className="text-xs text-[#737887]">Schedule a 1:1 business conversion diagnostic.</p>
            </Link>
          </div>

          {/* Primary CTA Callout */}
          <div className="bg-[#0F1012] text-white p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card text-left">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white">Need a direct revenue leak diagnostic?</h2>
              <p className="text-xs text-[#B0B6C5]">Talk directly with a senior conversion consultant.</p>
            </div>
            <Link
              href="/consultation"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>Schedule Diagnosis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
