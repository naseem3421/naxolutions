import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Conversion-Focused Websites | Naxolutions Architecture',
  description:
    'Not a decorative online brochure. Naxolutions builds commercially structured conversion websites designed to eliminate buyer objections and turn visitor attention into qualified enquiries.',
  alternates: {
    canonical: '/services/conversion-websites',
  },
  openGraph: {
    title: 'Conversion-Focused Websites | Naxolutions Architecture',
    description:
      'Where attention becomes clear commercial intent. Purpose-built conversion websites for commercial enterprises.',
    url: `${seoConfig.siteUrl}/services/conversion-websites`,
  },
};

export default function ConversionWebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
