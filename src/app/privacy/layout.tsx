import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Naxolutions Business Conversion Consultancy',
  description:
    'Privacy Policy and data governance practices for Naxolutions Business Conversion Consultancy, Chennai, Tamil Nadu, India.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
