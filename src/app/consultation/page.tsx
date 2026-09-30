import type { Metadata } from 'next';
import ConsultationClient from './ConsultationClient';

export const metadata: Metadata = {
  title: 'Business Growth Consultation & Revenue Diagnostic | Naxolutions',
  description:
    'Get a structured business growth and conversion diagnostic from Naxolutions. Identify customer acquisition, funnel and conversion bottlenecks with a focused 1:1 consultation.',
  alternates: {
    canonical: '/consultation',
  },
};

export default function ConsultationPage() {
  return <ConsultationClient />;
}
