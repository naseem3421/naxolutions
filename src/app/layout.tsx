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
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Naxolutions',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/logo.png`,
  description:
    'Naxolutions is a Business Conversion Consultancy that helps businesses identify and fix the structural gaps between customer attention, enquiries, sales conversations, and revenue. Build • Grow • Scale.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context Specification" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Entity Specification" />
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
