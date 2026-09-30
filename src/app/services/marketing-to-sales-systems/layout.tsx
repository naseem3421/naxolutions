import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Marketing-to-Sales Systems | Connect Ad Spend to Revenue | Naxolutions',
  description:
    'Bridge the disconnect between marketing ad spend and closed sales. We align customer acquisition, web intake, sales qualification, and bank revenue into one unified pipeline.',
  alternates: {
    canonical: '/services/marketing-to-sales-systems',
  },
  openGraph: {
    title: 'Marketing-to-Sales Systems | Naxolutions',
    description:
      'Connecting acquisition channels, landing experiences, CRM workflows, and sales rep consultations into a unified revenue pipeline.',
    url: `${seoConfig.siteUrl}/services/marketing-to-sales-systems`,
  },
};

export default function MarketingToSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
