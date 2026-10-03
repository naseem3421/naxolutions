import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Naxolutions | Business Conversion Consultancy Chennai',
  description:
    'Naxolutions is a Business Conversion Consultancy based in Chennai, India. We identify and fix the structural gaps between customer attention, enquiries, sales conversations, follow-up, and revenue.',
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    title: 'Naxolutions | Business Conversion Consultancy',
    description:
      'Identify and fix structural revenue leaks across attention, enquiry, sales qualification, conversation, and revenue.',
    url: seoConfig.siteUrl,
    siteName: 'Naxolutions',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <SchemaMarkup type="home" />
      <HomeClient />
    </>
  );
}
