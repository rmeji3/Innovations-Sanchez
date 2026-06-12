import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { business, siteUrl } from "@/lib/business";

export default function LocalBusinessJsonLd({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    description: dict.meta.description,
    url: `${siteUrl}/${lang}`,
    telephone: `+1-${business.phoneDisplay}`,
    email: business.email,
    image: `${siteUrl}/images/pic1.png`,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [business.facebook],
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Harvey" },
      { "@type": "AdministrativeArea", name: "Chicagoland" },
    ],
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
    makesOffer: dict.services.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.title },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
