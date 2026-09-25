/**
 * Real-estate structured data (JSON-LD).
 * Only verifiable facts are included: brand, realtor name, phone, and
 * service areas. No ratings, addresses, or credentials are invented.
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://wesleyhousing.example/#organization',
        name: 'Wesley Housing',
        description:
          'Real-estate practice helping buyers, sellers, and renters across New York, Florida, Illinois, Texas, California, and Georgia.',
        telephone: '+1-708-730-2617',
        employee: {
          '@type': 'Person',
          name: 'Believe Pessar',
          jobTitle: 'Realtor',
          telephone: '+1-708-730-2617',
        },
        areaServed: [
          { '@type': 'State', name: 'New York' },
          { '@type': 'State', name: 'Florida' },
          { '@type': 'State', name: 'Illinois' },
          { '@type': 'State', name: 'Texas' },
          { '@type': 'State', name: 'California' },
          { '@type': 'State', name: 'Georgia' },
        ],
        knowsLanguage: 'en',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://wesleyhousing.example/#website',
        name: 'Wesley Housing',
        publisher: { '@id': 'https://wesleyhousing.example/#organization' },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
