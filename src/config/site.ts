export const siteConfig = {
  name: 'Naxolutions',
  title: 'Naxolutions | Business Conversion Consultancy',
  description:
    'Naxolutions helps businesses identify and fix the structural gaps between customer attention, enquiries, sales conversations, and revenue. THE ARCHITECT OF THE BUSINESS\'S CONVERSION SYSTEM.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.naxolutions.com',
  ogImage: '/og-image.png',
  logo: '/logo.png',
  logoWhite: '/logo-white.png',
  logoDark: '/logo-dark.png',
  logoMark: '/logo-mark-white.png',
  motto: 'Build • Grow • Scale',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@naxolutions.com',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
    whatsappPrefilledMessage:
      "Hello Naxolutions, I'd like to discuss where my business may be losing revenue across our customer journey.",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  },
};
