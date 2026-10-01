import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export default function HomepageInsights() {
  // Get 3 most recent articles from existing blog data source
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D6]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-xs font-mono font-bold text-[#C84B27] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              INSIGHTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F1012]">
              Practical thinking for turning attention into revenue.
            </h2>
            <p className="text-sm sm:text-base text-[#4A4E58] leading-relaxed">
              Practical frameworks and field-tested thinking on lead conversion, WhatsApp sales, conversion websites, sales processes, and marketing-to-sales systems.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F1012] hover:bg-[#C84B27] rounded transition-all duration-200 shadow-subtle group"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
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
                <h3 className="text-lg font-bold text-[#0F1012] leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#C84B27] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
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
      </div>
    </section>
  );
}
