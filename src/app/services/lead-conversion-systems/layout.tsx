import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Lead Conversion Systems | Stop Inbound Pipeline Leaks | Naxolutions',
  description:
    'Stop losing qualified leads between form submission and sales call. We build instant response workflows, qualification intake filters, and calendar booking systems.',
  alternates: {
    canonical: '/services/lead-conversion-systems',
  },
  openGraph: {
    title: 'Lead Conversion Systems | Naxolutions',
    description:
      'Transform inbound marketing enquiries into qualified sales conversations with zero response delay.',
    url: `${seoConfig.siteUrl}/services/lead-conversion-systems`,
  },
};

export default function LeadConversionSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
