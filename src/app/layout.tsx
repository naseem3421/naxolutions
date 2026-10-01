import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Naxolutions Business Conversion Consultancy',
  },
  description: siteConfig.description,
  keywords: [
    'Business Conversion Consultant',
    'Business Conversion Consultancy',
    'Revenue Conversion System',
    'Lead Conversion System',
    'Customer Conversion',
    'Sales Conversion',
    'Business Growth System',
    'Conversion Strategy',
    'Chennai Business Conversion Consultant',
    'WhatsApp Sales Systems',
    'Marketing to Sales Systems',
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Naxolutions Business Conversion Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Naxolutions',
  url: siteConfig.url,
  description:
    'Naxolutions is a Business Conversion Consultancy that helps businesses identify and fix the structural gaps between customer attention, enquiries, sales conversations, and revenue.',
  knowsAbout: [
    'Business Conversion Strategy',
    'Revenue Journey Diagnosis',
    'Sales Qualification Architecture',
    'Lead Conversion Optimization',
  ],
  serviceType: 'Business Conversion Consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#0F1012] antialiased selection:bg-[#C84B27] selection:text-white font-sans min-h-screen flex flex-col">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
