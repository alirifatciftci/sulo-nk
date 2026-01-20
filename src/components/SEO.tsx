import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Süleyman Değirmenci | İstanbul Dövme Sanatçısı | Istanbul Tattoo Artist",
  description = "İstanbul Nişantaşı'nda profesyonel dövme sanatçısı. Realism, blackwork ve fine line dövme konusunda uzman. Professional tattoo artist in Istanbul, Nişantaşı specializing in realism, blackwork, and fine line tattoos.",
  keywords = "istanbul dövme, istanbul dövme stüdyosu, istanbul dövmeci, istanbul tattoo, istanbul tattoo studio, nişantaşı dövme, tattoo artist istanbul, piercing istanbul, dövme sanatçısı, realism tattoo, blackwork tattoo, fine line tattoo, süleyman değirmenci",
  image = "/og-image.jpg",
  url = "https://suleymandegirmenci.com",
  type = "website"
}: SEOProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://suleymandegirmenci.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : url;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Süleyman Değirmenci Tattoo Studio",
    "image": imageUrl,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nişantaşı",
      "addressLocality": "Istanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0534",
      "longitude": "28.9943"
    },
    "url": siteUrl,
    "telephone": "+905534310982",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://instagram.com/soulinkk"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Süleyman Değirmenci" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Süleyman Değirmenci Tattoo" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@soulinkk" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
