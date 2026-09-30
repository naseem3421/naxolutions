import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'Business Conversion Consultant Chennai | Naxolutions',
  description:
    'Specialized Business Conversion Consultancy based in Chennai, Tamil Nadu. We diagnose customer journey leaks and build connected marketing-to-sales systems for Indian & international enterprises.',
  alternates: {
    canonical: '/services/chennai-conversion-consultant',
  },
  openGraph: {
    title: 'Business Conversion Consultant in Chennai | Naxolutions',
    description:
      'Turn existing customer attention into bank revenue without buying more ads. Local conversion consultancy for Chennai & Tamil Nadu businesses.',
    url: `${seoConfig.siteUrl}/services/chennai-conversion-consultant`,
  },
};

export default function ChennaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
