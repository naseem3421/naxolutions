export const seoConfig = {
  brandName: 'Naxolutions',
  legalName: 'Naxolutions Business Conversion Consultancy',
  tagline: 'The Architect of the Business\'s Conversion System',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.naxolutions.com',
  defaultTitle: 'Naxolutions | Business Conversion Consultancy Chennai',
  titleTemplate: '%s | Naxolutions Business Conversion Consultancy',
  defaultDescription:
    'Naxolutions is a Business Conversion Consultancy based in Chennai, India. We identify and fix the structural gaps between customer attention, enquiries, sales conversations, follow-up, and revenue.',
  
  // Local SEO Entity Signals
  location: {
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600001',
    addressCountry: 'IN',
    geo: {
      latitude: '13.0827',
      longitude: '80.2707',
    },
    areaServed: [
      'Chennai',
      'Tamil Nadu',
      'India',
      'International B2B Enterprises',
    ],
  },

  // E-E-A-T & Founder Entity
  founder: {
    name: 'Naseem',
    jobTitle: 'Business Conversion Consultant',
    description:
      'Naseem works directly with business owners in Chennai and globally to identify where their customer journey is losing revenue and build the missing conversion system components.',
  },

  // Strategic Entity Keywords
  primaryEntities: [
    'Business Conversion Consultancy',
    'Business Conversion Consultant',
    'Lead Conversion System',
    'Sales Conversion Optimization',
    'Customer Journey Optimization',
    'Marketing-to-Sales Systems',
    'Conversion-Focused Websites',
    'WhatsApp Sales Systems',
    'Lead Follow-Up Architecture',
    'Chennai Business Conversion',
  ],

  // Structured Service Catalog
  services: [
    {
      slug: 'lead-conversion-systems',
      name: 'Lead Conversion Systems',
      shortDescription:
        'Architecting structured lead qualification, instant multi-channel response protocols, and automated pipeline routing to stop enquiry leakage.',
      path: '/services/lead-conversion-systems',
    },
    {
      slug: 'conversion-websites',
      name: 'Conversion-Focused Websites',
      shortDescription:
        'Commercially structured web experiences designed to clarify positioning, eliminate buyer objections, and move qualified traffic directly into enquiries.',
      path: '/services/conversion-websites',
    },
    {
      slug: 'whatsapp-sales-systems',
      name: 'WhatsApp Sales Systems',
      shortDescription:
        'Transforming cold inbound WhatsApp messages into structured, qualified sales conversations with zero response delay.',
      path: '/services/whatsapp-sales-systems',
    },
    {
      slug: 'marketing-to-sales-systems',
      name: 'Marketing-to-Sales Systems',
      shortDescription:
        'Connecting advertising channels, landing experiences, CRM workflows, and sales rep consultations into a unified revenue pipeline.',
      path: '/services/marketing-to-sales-systems',
    },
    {
      slug: 'sales-process-optimization',
      name: 'Sales Process Optimization',
      shortDescription:
        'Filtering out budget-less leads, establishing consultation frameworks, and automating rep-assisted follow-up sequences.',
      path: '/services/sales-process-optimization',
    },
    {
      slug: 'chennai-conversion-consultant',
      name: 'Business Conversion Consultant Chennai',
      shortDescription:
        'Local Chennai conversion consultancy helping Tamil Nadu & Indian businesses convert attention into revenue without buying more ads.',
      path: '/services/chennai-conversion-consultant',
    },
  ],

  // Canonical Proprietary Concepts for Generative Engines (GEO / AEO)
  definedTerms: [
    {
      term: 'Business Conversion Consultancy',
      definition:
        'A specialized consulting firm that diagnoses structural friction between customer attention, enquiries, sales conversations, follow-up, and closed revenue, and builds the missing system components to fix revenue leaks.',
    },
    {
      term: 'Revenue Journey',
      definition:
        'The continuous 10-stage commercial pathway a customer travels through: Attention, Interest, Trust, Enquire, Respond, Qualify, Converse, Follow Up, Decide, and Revenue.',
    },
    {
      term: 'Lead Qualification Architecture',
      definition:
        'Systematic filtering protocols that separate serious buyers with real budget from unqualified tire-kickers before sales reps expend consultation hours.',
    },
    {
      term: 'Marketing-to-Sales Friction',
      definition:
        'The operational and technological gap between acquiring customer attention through advertising and actually converting that interest into a closed sale.',
    },
  ],
};
