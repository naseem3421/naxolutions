import type { Metadata } from 'next';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  title: 'WhatsApp Sales Systems | Turn Inbound Chats Into Revenue | Naxolutions',
  description:
    'Stop losing revenue on delayed, un-followed WhatsApp messages. We architect automated initial response triggers, CRM sync, and structured sales rep follow-up protocols.',
  alternates: {
    canonical: '/services/whatsapp-sales-systems',
  },
  openGraph: {
    title: 'WhatsApp Sales Systems | Naxolutions Architecture',
    description:
      'Moving inbound WhatsApp chats from raw price-checking to structured commercial dialogues.',
    url: `${seoConfig.siteUrl}/services/whatsapp-sales-systems`,
  },
};

export default function WhatsAppSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
