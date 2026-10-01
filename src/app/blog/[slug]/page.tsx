import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, UserCheck, Calendar, HelpCircle, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceBreadcrumbs from '@/components/ServiceBreadcrumbs';
import { seoConfig } from '@/config/seo';
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: 'Article Not Found | Naxolutions',
    };
  }

  const title = post.seoTitle || `${post.title} | Naxolutions Blog`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `${seoConfig.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${seoConfig.siteUrl}/blog/${post.slug}`,
      siteName: 'Naxolutions',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage || '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.featuredImage || '/og-image.png'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${seoConfig.siteUrl}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@type': 'Organization',
        name: 'Naxolutions',
        url: seoConfig.siteUrl,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Naxolutions',
      url: seoConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.siteUrl}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${seoConfig.siteUrl}/blog/${post.slug}`,
    },
    articleSection: post.categoryName,
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1012] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navigation />

      <main className="flex-grow pt-28 pb-20 md:pt-32 md:pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <ServiceBreadcrumbs
            items={[
              { name: 'Blog', url: '/blog' },
              { name: post.categoryName, url: `/blog?category=${post.category}` },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />

          {/* Title Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#737887]">
              <span className="px-3 py-1 rounded bg-[#F3EFE7] border border-[#E6E1D6] text-[#C84B27] font-bold uppercase tracking-wider">
                {post.categoryName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C84B27]" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F1012] leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-[#4A4E58] leading-relaxed italic border-l-2 border-[#C84B27] pl-4">
              {post.excerpt}
            </p>
          </div>

          {/* GEO / AEO Direct Answer Summary Block */}
          {post.directAnswer && (
            <div className="bg-white border-2 border-[#0F1012] rounded-lg p-6 sm:p-8 space-y-3 shadow-subtle speakable-answer">
              <div className="text-xs font-mono font-bold text-[#737887] uppercase tracking-widest flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C84B27]" />
                DIRECT ANSWER SUMMARY
              </div>
              <p className="text-base text-[#0F1012] font-medium leading-relaxed">
                {post.directAnswer}
              </p>
            </div>
          )}

          {/* Main Article Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Card */}
          <div className="bg-white border border-[#E6E1D6] rounded-lg p-6 sm:p-8 flex items-start gap-4 shadow-subtle">
            <div className="w-12 h-12 rounded-full bg-[#0F1012] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div className="space-y-1">
              <div className="font-bold text-base text-[#0F1012]">{post.author.name}</div>
              <div className="text-xs font-mono text-[#737887]">{post.author.role}</div>
              <p className="text-xs text-[#4A4E58] pt-1">
                Principal author &amp; business conversion consultant at Naxolutions.
              </p>
            </div>
          </div>

          {/* Related Service Banner */}
          {post.relatedServiceSlug && post.relatedServiceTitle && (
            <div className="bg-[#0F1012] text-white p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#C84B27] uppercase tracking-wider font-bold">
                  RECOMMENDED SYSTEM SERVICE
                </span>
                <h3 className="text-xl font-bold text-white">{post.relatedServiceTitle}</h3>
              </div>
              <Link
                href={`/services/${post.relatedServiceSlug}`}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C84B27] hover:bg-[#B23E1C] rounded transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>View Service Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
