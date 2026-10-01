import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Conversion Case Studies & Teardowns | Naxolutions',
  description:
    'Explore real-world business conversion teardowns, pipeline fixes, lead latency reductions, and revenue optimizations implemented by Naxolutions.',
  alternates: {
    canonical: `${seoConfig.siteUrl}/case-studies`,
  },
  openGraph: {
    title: 'Conversion Case Studies & Teardowns | Naxolutions',
    description:
      'Real baseline transformations showing before-and-after conversion system performance across B2B software, real estate, and healthcare technology.',
    url: `${seoConfig.siteUrl}/case-studies`,
    siteName: 'Naxolutions',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <SchemaMarkup
        type="page"
        title="Conversion Case Studies & Teardowns"
        description="Explore real-world business conversion teardowns, pipeline fixes, lead latency reductions, and revenue optimizations implemented by Naxolutions."
        url="/case-studies"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
        ]}
      />
      <CaseStudiesClient />
    </>
  );
}
