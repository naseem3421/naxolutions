import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diagnostic Intake Confirmed | Naxolutions',
  description: 'Your conversion journey diagnostic request has been received.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
