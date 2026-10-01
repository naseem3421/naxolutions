import type { Metadata } from 'next';
import WhatWeBuildClient from './WhatWeBuildClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Business Conversion Architecture & Building Blocks | Naxolutions',
  description:
    'Explore the 7 custom conversion system building blocks Naxolutions deploys: conversion websites, intake qualification, WhatsApp systems, follow-up, and measurement.',
  alternates: {
    canonical: `${seoConfig.siteUrl}/what-we-build`,
  },
  openGraph: {
    title: 'Business Conversion Architecture & Building Blocks | Naxolutions',
    description:
      'We select and build the specific system components required to fix your business revenue leaks.',
    url: `${seoConfig.siteUrl}/what-we-build`,
    siteName: 'Naxolutions',
    type: 'website',
  },
};

export default function WhatWeBuildPage() {
  return (
    <>
      <SchemaMarkup
        type="page"
        title="Business Conversion Architecture & Building Blocks"
        description="Explore the 7 custom conversion system building blocks Naxolutions deploys to fix business revenue leaks."
        url="/what-we-build"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'What We Build', url: '/what-we-build' },
        ]}
      />
      <WhatWeBuildClient />
    </>
  );
}
