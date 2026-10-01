import type { Metadata } from 'next';
import ApproachClient from './ApproachClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Business Conversion Methodology & Approach | Naxolutions',
  description:
    'Discover how Naxolutions diagnoses and eliminates structural revenue leaks across the 10-stage customer journey. End-to-end principal conversion consulting.',
  alternates: {
    canonical: `${seoConfig.siteUrl}/approach`,
  },
  openGraph: {
    title: 'Business Conversion Methodology & Approach | Naxolutions',
    description:
      'Connecting fragmented marketing vendors, websites, WhatsApp systems, and sales follow-up into a single revenue engine.',
    url: `${seoConfig.siteUrl}/approach`,
    siteName: 'Naxolutions',
    type: 'website',
  },
};

export default function ApproachPage() {
  return (
    <>
      <SchemaMarkup
        type="page"
        title="Business Conversion Methodology & Approach"
        description="Discover how Naxolutions diagnoses and eliminates structural revenue leaks across the 10-stage customer journey."
        url="/approach"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Methodology', url: '/approach' },
        ]}
      />
      <ApproachClient />
    </>
  );
}
