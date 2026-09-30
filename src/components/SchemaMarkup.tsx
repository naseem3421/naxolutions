import React from 'react';
import { seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';

interface SchemaMarkupProps {
  type?: 'home' | 'service' | 'article' | 'page';
  title?: string;
  description?: string;
  url?: string;
  breadcrumbs?: { name: string; url: string }[];
  faqItems?: { question: string; answer: string }[];
}

export default function SchemaMarkup({
  type = 'page',
  title,
  description,
  url,
  breadcrumbs = [],
  faqItems = [],
}: SchemaMarkupProps) {
  const currentUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;
  const pageTitle = title ? `${title} | Naxolutions` : seoConfig.defaultTitle;
  const pageDesc = description || seoConfig.defaultDescription;

  // 1. Core Organization & Local Business Graph Node
  const organizationNode = {
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.brandName,
    legalName: seoConfig.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/icon.svg`,
    image: `${seoConfig.siteUrl}/og-image.png`,
    description: seoConfig.defaultDescription,
    telephone: siteConfig.contact.whatsappNumber
      ? `+${siteConfig.contact.whatsappNumber}`
      : undefined,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seoConfig.location.addressLocality,
      addressRegion: seoConfig.location.addressRegion,
      postalCode: seoConfig.location.postalCode,
      addressCountry: seoConfig.location.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.location.geo.latitude,
      longitude: seoConfig.location.geo.longitude,
    },
    areaServed: seoConfig.location.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    founder: {
      '@type': 'Person',
      '@id': `${seoConfig.siteUrl}/#founder-naseem`,
      name: seoConfig.founder.name,
      jobTitle: seoConfig.founder.jobTitle,
      description: seoConfig.founder.description,
      worksFor: {
        '@id': `${seoConfig.siteUrl}/#organization`,
      },
    },
    knowsAbout: seoConfig.primaryEntities,
    sameAs: [
      siteConfig.contact.linkedin,
      siteConfig.contact.instagram,
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Business Conversion Systems & Architecture',
      itemListElement: seoConfig.services.map((svc, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${seoConfig.siteUrl}${svc.path}/#service`,
          name: svc.name,
          description: svc.shortDescription,
          url: `${seoConfig.siteUrl}${svc.path}`,
          provider: {
            '@id': `${seoConfig.siteUrl}/#organization`,
          },
        },
        position: idx + 1,
      })),
    },
  };

  // 2. WebSite Graph Node
  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${seoConfig.siteUrl}/#website`,
    url: seoConfig.siteUrl,
    name: seoConfig.brandName,
    description: seoConfig.defaultDescription,
    publisher: {
      '@id': `${seoConfig.siteUrl}/#organization`,
    },
    inLanguage: 'en-US',
  };

  // 3. WebPage Graph Node
  const webpageNode = {
    '@type': 'WebPage',
    '@id': `${currentUrl}/#webpage`,
    url: currentUrl,
    name: pageTitle,
    description: pageDesc,
    isPartOf: {
      '@id': `${seoConfig.siteUrl}/#website`,
    },
    about: {
      '@id': `${seoConfig.siteUrl}/#organization`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.editorial-heading', '.speakable-answer'],
    },
  };

  // 4. Defined Terms Set Node (GEO & AEO Knowledge Graph Engine)
  const definedTermSetNode = {
    '@type': 'DefinedTermSet',
    '@id': `${seoConfig.siteUrl}/#knowledge-graph-terms`,
    name: 'Naxolutions Business Conversion Framework',
    definedTerm: seoConfig.definedTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      inDefinedTermSet: `${seoConfig.siteUrl}/#knowledge-graph-terms`,
    })),
  };

  // 5. Breadcrumb List Node
  const breadcrumbNode =
    breadcrumbs.length > 0
      ? {
          '@type': 'BreadcrumbList',
          '@id': `${currentUrl}/#breadcrumb`,
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: `${seoConfig.siteUrl}${crumb.url}`,
          })),
        }
      : null;

  // 6. FAQ Page Node (if FAQ items exist)
  const faqNode =
    faqItems.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${currentUrl}/#faqpage`,
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const graphArray = [
    organizationNode,
    websiteNode,
    webpageNode,
    definedTermSetNode,
    breadcrumbNode,
    faqNode,
  ].filter(Boolean);

  const fullSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': graphArray,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchemaGraph) }}
    />
  );
}
