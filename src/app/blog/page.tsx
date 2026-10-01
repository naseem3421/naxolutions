import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Layers, HelpCircle, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { seoConfig } from '@/config/seo';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Business Conversion Insights & Frameworks | Naxolutions Blog',
  description:
    'Research, frameworks, and practical guides on lead conversion systems, WhatsApp sales automation, web conversion architecture, and sales process optimization.',
  alternates: {
    canonical: `${seoConfig.siteUrl}/blog`,
  },
  openGraph: {
    title: 'Business Conversion Insights & Frameworks | Naxolutions Blog',
    description:
      'In-depth operational teardowns and conversion frameworks for enterprise business leaders.',
    url: `${seoConfig.siteUrl}/blog`,
    siteName: 'Naxolutions',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const categories = [
    { slug: 'lead-conversion', name: 'Lead Conversion' },
    { slug: 'whatsapp-sales', name: 'WhatsApp Sales' },
    { slug: 'website-conversion', name: 'Website Conversion' },
    { slug: 'sales-process', name: 'Sales Process' },
    { slug: 'marketing-to-sales', name: 'Marketing to Sales' },
    { slug: 'chennai-business-growth', name: 'Chennai Business Growth' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <SchemaMarkup
        type="page"
        title="Business Conversion Insights & Frameworks"
        description="Research, frameworks, and practical guides on lead conversion systems, WhatsApp sales automation, and sales process optimization."
        url="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      <Navigation />

      <main className="flex-grow pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              CONVERSION RESEARCH &amp; INSIGHTS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              Business Conversion Insights &amp; Operational Frameworks
            </h1>
            <p className="editorial-heading text-lg text-[#4A4E58] italic leading-relaxed">
              "Technical analysis, breakdown guides, and system architecture for enterprise conversion leaders."
            </p>
          </div>

          {/* Content Sub-Navigation (Articles vs Case Studies) */}
          <div className="flex flex-wrap items-center gap-3 pb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737887]">
              INSIGHTS HUB:
            </span>
            <div className="flex items-center gap-2">
              <Link
                href="/blog"
                className="px-3.5 py-1.5 rounded-full bg-[#0F1012] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-subtle"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C84B27]" />
                <span>Articles</span>
              </Link>
              <Link
                href="/case-studies"
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6E1D6] text-[#4A4E58] hover:text-[#0F1012] hover:border-[#0F1012] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#737887]" />
                <span>Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-4 border-b border-[#E6E1D6]">
            <span className="px-4 py-2 rounded-full bg-[#0F1012] text-white text-xs font-semibold uppercase tracking-wider">
              All Topics
            </span>
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="px-4 py-2 rounded-full bg-white border border-[#E6E1D6] text-[#4A4E58] text-xs font-semibold uppercase tracking-wider hover:border-[#0F1012] cursor-pointer transition-colors"
              >
                {cat.name}
              </span>
            ))}
          </div>

          {/* Posts Grid or Clean Architecture State */}
          {BLOG_POSTS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-[#E6E1D6] hover:border-[#0F1012] rounded-lg p-6 space-y-4 shadow-subtle flex flex-col justify-between transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#737887]">
                      <span className="text-[#C84B27] font-bold uppercase tracking-wider">
                        {post.categoryName}
                      </span>
                      <span>{post.publishedAt}</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0F1012] leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#C84B27] transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-[#4A4E58] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E1D6] flex items-center justify-between">
                    <span className="text-xs text-[#737887] font-medium">By {post.author.name}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#C84B27] inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#E6E1D6] rounded-xl p-8 sm:p-12 text-center space-y-6 shadow-subtle max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#F3EFE7] text-[#C84B27] flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#0F1012]">
                  Conversion Insights Architecture Initialized
                </h2>
                <p className="text-sm text-[#4A4E58] leading-relaxed">
                  Our research team is currently preparing answer-first teardowns and direct-answer operational guides. Verified technical case articles will be published directly to this index.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D6] grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="bg-[#FAF8F5] p-4 rounded border border-[#E6E1D6] space-y-1">
                  <div className="font-bold text-xs text-[#0F1012] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#C84B27]" />
                    Direct-Answer GEO Format
                  </div>
                  <p className="text-[11px] text-[#737887]">
                    Structured answer blocks optimized for AI search engines &amp; decision makers.
                  </p>
                </div>
                <div className="bg-[#FAF8F5] p-4 rounded border border-[#E6E1D6] space-y-1">
                  <div className="font-bold text-xs text-[#0F1012] flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#C84B27]" />
                    No Speculative Content
                  </div>
                  <p className="text-[11px] text-[#737887]">
                    Every framework is backed by real enterprise baseline conversion tests.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related System Services Section */}
          <div className="bg-[#0F1012] text-white rounded-xl p-8 sm:p-10 space-y-6 border border-[#1A1C20]">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C84B27] font-bold uppercase tracking-widest">
                SYSTEM BUILDING BLOCKS
              </span>
              <h3 className="text-2xl font-bold text-white">
                Explore Naxolutions Core Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {seoConfig.services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={svc.path}
                  className="bg-[#16181B] hover:bg-[#1f2227] border border-[#FAF8F5]/10 p-4 rounded-lg space-y-2 transition-colors group"
                >
                  <div className="font-bold text-sm text-white group-hover:text-[#C84B27] transition-colors flex items-center justify-between">
                    <span>{svc.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#737887] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs text-[#FAF8F5]/70 line-clamp-2">
                    {svc.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
