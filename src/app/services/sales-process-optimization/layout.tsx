import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Sales Process Optimization | Eliminate Call Waste & Ghosting | Naxolutions',
  description:
    'Eliminate sales call waste, qualify prospects automatically, and establish structured multi-touch follow-up sequences for higher closed contract velocity.',
  alternates: {
    canonical: '/services/sales-process-optimization',
  },
  openGraph: {
    title: 'Sales Process Optimization | Naxolutions',
    description:
      'Focusing sales capacity 100% on high-fit prospects with real budget and clear buying intent.',
    url: `${seoConfig.siteUrl}/services/sales-process-optimization`,
  },
};

export default function SalesProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
