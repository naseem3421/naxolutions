'use client';

import React, { useState } from 'react';
import { Check, X, ArrowRight, ShieldAlert, BarChart3, Clock, Target, FileText, HelpCircle, Activity } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ConsultationClient() {
  const [isPlaceholderOpen, setIsPlaceholderOpen] = useState(false);

  const handleBook = () => {
    // Analytics placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'consultation_cta_click', {
        event_category: 'engagement',
      });
    }
    setIsPlaceholderOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <Navigation onOpenDiagnostic={handleBook} />

      <main className="flex-grow pt-16 sm:pt-20">
        {/* HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-bold text-[#C84B27] uppercase tracking-wider mb-6">
            Paid Business Diagnostic
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1012] max-w-4xl mx-auto leading-[1.1] mb-6">
            Stop Guessing Where Your Revenue Is Leaking.
          </h1>
          <p className="text-lg md:text-xl text-[#4A4E58] max-w-3xl mx-auto leading-relaxed mb-10">
            A structured business diagnostic for companies that are generating attention, leads or enquiries — but aren't converting enough of them into revenue.
          </p>
          <div className="bg-white p-4 md:p-6 rounded-xl border border-[#E6E1D6] max-w-3xl mx-auto shadow-sm mb-12">
            <p className="text-sm md:text-base text-[#4A4E58] font-medium leading-relaxed">
              We examine your acquisition, website, customer journey and conversion process to identify where potential revenue is being lost.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBook}
              className="w-full sm:w-auto px-8 py-4 bg-[#0F1012] text-white rounded font-bold uppercase tracking-wider text-sm hover:bg-[#C84B27] transition-colors shadow-subtle flex items-center justify-center gap-2"
            >
              Find My Revenue Leaks
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F1012] border border-[#E6E1D6] rounded font-bold uppercase tracking-wider text-sm hover:border-[#0F1012] transition-colors flex items-center justify-center"
            >
              Compare Consultation Plans
            </a>
          </div>
        </section>

        {/* TRUST / POSITIONING ROW */}
        <div className="border-y border-[#E6E1D6] bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <div className="flex items-center justify-center gap-8 md:gap-16 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
              <span>Business Strategy</span>
              <span className="text-[#C84B27]">•</span>
              <span>Customer Acquisition</span>
              <span className="text-[#C84B27]">•</span>
              <span>Conversion</span>
              <span className="text-[#C84B27]">•</span>
              <span>Revenue Systems</span>
            </div>
          </div>
        </div>

        {/* PROBLEM SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Why Traffic &amp; Enquiries Aren't Turning Into Revenue.
            </h2>
            <div className="prose prose-lg text-[#4A4E58] mb-10 max-w-3xl">
              <p>
                Many businesses we speak to think they need more traffic or cheaper leads. But when we look under the hood, the real problem is further down the funnel. They often experience:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
              {[
                'Leads coming in but few becoming customers',
                'High ad spend with weak returns',
                'Website traffic without enquiries',
                'Enquiries that go cold',
                'Slow follow-up response times',
                'Poorly structured sales processes',
                'Unclear commercial offers',
                'Landing pages that fail to convert',
                'No visibility into where prospects drop off'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[#FAF8F5] border border-[#E6E1D6]">
                  <ShieldAlert className="w-5 h-5 text-[#C84B27] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#0F1012] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E6E1D6] text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-[#737887] mb-6 font-bold">The Real Conversion Funnel</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-bold text-[#0F1012]">
                <span>Traffic</span>
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C84B27]" />
                <span className="md:hidden text-[#C84B27]">↓</span>
                <span>Leads</span>
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C84B27]" />
                <span className="md:hidden text-[#C84B27]">↓</span>
                <span>Conversations</span>
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C84B27]" />
                <span className="md:hidden text-[#C84B27]">↓</span>
                <span>Qualified Prospects</span>
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C84B27]" />
                <span className="md:hidden text-[#C84B27]">↓</span>
                <span>Customers</span>
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C84B27]" />
                <span className="md:hidden text-[#C84B27]">↓</span>
                <span className="text-[#C84B27]">Revenue</span>
              </div>
              <p className="text-sm text-[#4A4E58] mt-6">
                Leakage can happen at multiple stages. If your middle-funnel is broken, pouring more traffic at the top is just setting money on fire.
              </p>
            </div>
          </div>
        </section>

        {/* DIAGNOSTIC PHILOSOPHY */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0F1012] text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-white">
              We Don't Start With “Run More Ads.”
            </h2>
            <div className="prose prose-lg text-[#A1A1AA] mb-12">
              <p>
                Increasing traffic does not automatically solve a broken conversion system. Our diagnostic examines the mechanics behind the lead. We break your business down analytically into 8 core areas:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Acquisition', 'Offer', 'Landing experience', 'Lead capture', 'Follow-up', 'Sales process', 'Conversion', 'Customer journey'].map((area, i) => (
                <div key={i} className="border border-white/10 bg-white/5 p-4 rounded flex items-center justify-center text-center">
                  <span className="text-sm font-bold tracking-wide">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Choose Your Diagnostic Level
              </h2>
              <p className="text-lg text-[#4A4E58]">
                Select the depth of analysis your business requires right now.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch pt-4">
              {/* CARD 1 */}
              <div className="bg-white rounded-2xl border border-[#E6E1D6] p-8 sm:p-10 flex flex-col hover:border-[#0F1012] transition-colors shadow-sm">
                <div className="min-h-[3.5rem] flex items-start">
                  <h3 className="text-2xl font-bold text-[#0F1012] leading-snug">Revenue Diagnostic</h3>
                </div>
                <div className="text-4xl font-extrabold text-[#0F1012] mb-4">₹4,999</div>
                <p className="text-sm text-[#4A4E58] leading-relaxed mb-8 min-h-[44px]">
                  Best for: Businesses looking for clarity on where their biggest conversion problems are.
                </p>
                <button
                  onClick={handleBook}
                  className="w-full py-3.5 bg-white text-[#0F1012] border-2 border-[#0F1012] rounded font-bold uppercase tracking-wider text-sm hover:bg-[#0F1012] hover:text-white transition-colors mb-8"
                >
                  Book My Diagnostic
                </button>
                <div className="space-y-3.5">
                  <div className="text-xs font-bold text-[#0F1012] uppercase tracking-wider border-b border-[#E6E1D6] pb-2.5 mb-4">
                    Core Diagnostic Includes:
                  </div>
                  {['60-minute 1:1 strategy session', 'Business and customer journey review', 'Website / landing page review', 'Lead generation review', 'Sales / conversion process review', 'Identification of major revenue leaks', '3–5 priority actions', 'Session recording'].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4A4E58] leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#0F1012] rounded-2xl border border-[#0F1012] p-8 sm:p-10 flex flex-col relative shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C84B27] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Comprehensive
                </div>
                <div className="min-h-[3.5rem] flex items-start">
                  <h3 className="text-2xl font-bold text-white leading-snug">Revenue & Conversion Deep Dive</h3>
                </div>
                <div className="text-4xl font-extrabold text-white mb-4">₹9,999</div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8 min-h-[44px]">
                  Best for: Businesses that want deeper data analysis and a documented action plan.
                </p>
                <button
                  onClick={handleBook}
                  className="w-full py-3.5 bg-[#C84B27] text-white border-2 border-[#C84B27] rounded font-bold uppercase tracking-wider text-sm hover:bg-[#A33B1E] hover:border-[#A33B1E] transition-colors mb-8"
                >
                  Book Deep Dive
                </button>
                <div className="space-y-3.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/20 pb-2.5 mb-4">
                    Everything in Diagnostic, PLUS:
                  </div>
                  {['Pre-call data analysis', 'Ads performance review', 'CRM / lead data review', 'Conversion-rate analysis', 'Funnel / drop-off analysis', 'Competitor / market positioning review', 'Detailed Revenue Leakage Report', 'Prioritized 30-day action plan', 'Post-consultation clarification/support'].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#A1A1AA] leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <div className="max-w-4xl mx-auto hidden md:block">
              <h3 className="text-xl font-bold text-center mb-8">Compare Plan Features</h3>
              <div className="bg-white border border-[#E6E1D6] rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] border-b border-[#E6E1D6]">
                      <th className="p-4 font-bold text-[#0F1012] w-1/2">Feature</th>
                      <th className="p-4 font-bold text-center text-[#0F1012] w-1/4">Diagnostic (₹4,999)</th>
                      <th className="p-4 font-bold text-center text-[#0F1012] w-1/4">Deep Dive (₹9,999)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '60-minute strategy session', basic: true, pro: true },
                      { name: 'Business/customer journey review', basic: true, pro: true },
                      { name: 'Website/landing-page review', basic: true, pro: true },
                      { name: 'Lead-generation review', basic: true, pro: true },
                      { name: 'Sales/conversion review', basic: true, pro: true },
                      { name: 'Revenue leakage identification', basic: true, pro: true },
                      { name: 'Priority action plan', basic: true, pro: true },
                      { name: 'Session recording', basic: true, pro: true },
                      { name: 'Pre-call data analysis', basic: false, pro: true },
                      { name: 'Ads performance review', basic: false, pro: true },
                      { name: 'CRM/lead data review', basic: false, pro: true },
                      { name: 'Conversion analysis', basic: false, pro: true },
                      { name: 'Funnel/drop-off analysis', basic: false, pro: true },
                      { name: 'Competitor/positioning review', basic: false, pro: true },
                      { name: 'Written Revenue Leakage Report', basic: false, pro: true },
                      { name: '30-day action plan', basic: false, pro: true },
                      { name: 'Post-consultation support', basic: false, pro: true },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#E6E1D6] last:border-0 hover:bg-[#FAF8F5]">
                        <td className="p-4 text-sm text-[#4A4E58]">{row.name}</td>
                        <td className="p-4 text-center">
                          {row.basic ? <Check className="w-5 h-5 text-[#0F1012] mx-auto" /> : <X className="w-5 h-5 text-[#E6E1D6] mx-auto" />}
                        </td>
                        <td className="p-4 text-center">
                          {row.pro ? <Check className="w-5 h-5 text-[#C84B27] mx-auto" /> : <X className="w-5 h-5 text-[#E6E1D6] mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS AFTER BOOKING & DELIVERABLES */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-10">What Happens After Booking</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-center font-mono font-bold text-[#C84B27] shrink-0">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F1012] mb-2">Tell Us About Your Business</h4>
                    <p className="text-sm text-[#4A4E58]">Submit the basic information required to understand the business prior to our call.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-center font-mono font-bold text-[#C84B27] shrink-0">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F1012] mb-2">We Analyse</h4>
                    <p className="text-sm text-[#4A4E58]">For the Deep Dive, relevant business and performance data is reviewed before the session begins.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-center font-mono font-bold text-[#C84B27] shrink-0">03</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F1012] mb-2">We Diagnose</h4>
                    <p className="text-sm text-[#4A4E58]">During our session, we identify the biggest friction points across acquisition, conversion and sales.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E6E1D6] flex items-center justify-center font-mono font-bold text-[#C84B27] shrink-0">04</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F1012] mb-2">You Leave With Clarity</h4>
                    <p className="text-sm text-[#4A4E58]">You receive practical priorities tailored to your business, instead of another generic marketing checklist.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E6E1D6] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-3">You're Not Paying for an Hour on Zoom.</h2>
                <p className="text-[#4A4E58] mb-8 font-medium">The value is in the diagnosis and commercial clarity — not the clock.</p>

                <div className="space-y-5">
                  <div className="bg-white p-4 rounded-xl border border-[#E6E1D6]">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F1012] mb-1.5 flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#C84B27]" /> 01. Root-Cause Isolation
                    </h4>
                    <p className="text-sm text-[#4A4E58] leading-relaxed">
                      We separate surface symptoms ("we need more leads") from the actual structural bottlenecks costing you sales.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E6E1D6]">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F1012] mb-1.5 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#C84B27]" /> 02. Commercial Priority Ranking
                    </h4>
                    <p className="text-sm text-[#4A4E58] leading-relaxed">
                      Instead of a 50-item agency checklist, you get the exact 3–5 highest-leverage fixes ranked by revenue impact.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E6E1D6]">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F1012] mb-1.5 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#C84B27]" /> 03. Vendor-Neutral Roadmap
                    </h4>
                    <p className="text-sm text-[#4A4E58] leading-relaxed">
                      Whether your internal team executes the fixes or you engage Naxolutions later, you own the complete diagnostic blueprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WHO IT'S FOR / NOT FOR & WHAT TO BRING */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-[#0F1012] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">This Is For Businesses That Are Already Trying to Grow.</h3>
              <ul className="space-y-3 text-sm text-[#A1A1AA]">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Established businesses</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Businesses already generating enquiries</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Businesses spending on advertising</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Businesses with an existing website and sales team</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Businesses experiencing poor lead-to-customer conversion</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#C84B27] shrink-0 mt-0.5" /> Business owners who want an outside diagnosis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Who This Is NOT For</h3>
              <ul className="space-y-3 text-sm text-[#A1A1AA]">
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone looking for free marketing advice</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone with no business yet</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone expecting guaranteed revenue</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone looking for a generic social media strategy</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone unwilling to share relevant business information</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Someone looking for an instant “magic hack”</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">What You Should Bring</h3>
              <p className="text-sm text-[#A1A1AA] mb-4">The exact data requirements vary, but the consultation is most useful if you can provide:</p>
              <ul className="space-y-2 text-sm text-[#A1A1AA] list-disc pl-5 marker:text-[#C84B27]">
                <li>Current website & Ad account info</li>
                <li>Lead and Sales numbers</li>
                <li>CRM information (if applicable)</li>
                <li>Current marketing spend & Average customer value</li>
                <li>Details on your sales process & common customer objections</li>
              </ul>
            </div>

          </div>
        </section>

        {/* GUARANTEE */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#C84B27] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">No Empty Advice.</h2>
            <p className="text-lg md:text-xl font-medium text-white/90">
              If your business doesn't have enough information for a meaningful diagnosis, we'll tell you rather than manufacture recommendations. Our goal is to provide absolute clarity.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <HelpCircle className="w-6 h-6 text-[#C84B27]" />
              <h2 className="text-3xl font-bold text-[#0F1012]">Consultation FAQ</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Is this a free consultation?</h4>
                <p className="text-[#4A4E58]">No. This is a paid business diagnostic designed for businesses that want focused analysis rather than a generic discovery call.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Why does it cost ₹4,999 / ₹9,999?</h4>
                <p className="text-[#4A4E58]">Because the session is structured around diagnosing the business thoroughly rather than simply discussing marketing ideas.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Which plan should I choose?</h4>
                <p className="text-[#4A4E58]">The Revenue Diagnostic (₹4,999) is suitable when you primarily need expert identification of the major conversion issues. The Deep Dive (₹9,999) is suitable when you want deeper data analysis and a documented, written action plan.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Do I need to provide access to my ad account?</h4>
                <p className="text-[#4A4E58]">Not necessarily for the ₹4,999 diagnostic. Relevant access and data may be requested for the Deep Dive where required to complete the pre-call analysis.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Will you guarantee more sales?</h4>
                <p className="text-[#4A4E58]">No. Business outcomes depend on implementation, market conditions, offer quality, sales execution and other factors. The objective is to identify actionable opportunities and priorities.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">Can I hire Naxolutions after the consultation?</h4>
                <p className="text-[#4A4E58]">Yes. If there is a suitable implementation requirement, Naxolutions may discuss a separate engagement. The consultation is not dependent on purchasing another service.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0F1012] mb-2">What is your rescheduling and refund policy?</h4>
                <p className="text-[#4A4E58]">You can reschedule your session with at least 24 hours' advance notice. Because pre-session research and diagnostic preparation begin upon booking, completed sessions and delivered analyses are non-refundable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 bg-[#FAF8F5] text-center border-t border-[#E6E1D6]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F1012] mb-6">
              Find Out What's Actually Holding Your Growth Back.
            </h2>
            <p className="text-lg text-[#4A4E58] mb-10 max-w-2xl mx-auto">
              Stop changing ads, websites and marketing tactics blindly. Start with a diagnosis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleBook}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0F1012] border-2 border-[#0F1012] rounded font-bold uppercase tracking-wider text-sm hover:bg-[#0F1012] hover:text-white transition-colors"
              >
                Book Revenue Diagnostic — ₹4,999
              </button>
              <button
                onClick={handleBook}
                className="w-full sm:w-auto px-8 py-4 bg-[#C84B27] text-white rounded font-bold uppercase tracking-wider text-sm hover:bg-[#A33B1E] transition-colors"
              >
                Book Deep Dive — ₹9,999
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenDiagnostic={handleBook} />

      {/* PLACEHOLDER MODAL */}
      {isPlaceholderOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F1012]/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsPlaceholderOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#737887] hover:text-[#0F1012] hover:bg-[#FAF8F5] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-12 h-12 bg-[#F3EFE7] rounded-full flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-[#C84B27]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#0F1012] mb-2">Booking Coming Soon</h3>
            <p className="text-[#4A4E58] mb-6">
              Booking integration (calendar and payment gateway) is being finalized. Please check back later to book your diagnostic session.
            </p>
            
            <button
              onClick={() => setIsPlaceholderOpen(false)}
              className="w-full py-3 bg-[#0F1012] text-white rounded font-bold uppercase tracking-wider text-sm hover:bg-[#C84B27] transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
