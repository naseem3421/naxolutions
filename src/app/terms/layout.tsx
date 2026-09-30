import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Naxolutions Business Conversion Consultancy',
  description:
    'Terms of Service, diagnostic evaluation scope, and advisory agreements for Naxolutions Business Conversion Consultancy, Chennai, India.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
