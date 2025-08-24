import content from "./content";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.personal.name,
    jobTitle: content.personal.roles,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Žilina",
      addressCountry: "SK"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: content.personal.phone,
      email: content.personal.email,
      contactType: "customer service"
    },
    sameAs: [
      content.personal.social.instagram,
      content.personal.social.linkedin,
      content.personal.social.pretlak,
      content.personal.social.doucma
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tatianagavulova.sk",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://tatianagavulova.sk"}/tatiana-photo.jpg`
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Growth Marketing & Graphic Design Services",
    description: content.hero.usp,
    provider: {
      "@type": "Person",
      name: content.personal.name,
      telephone: content.personal.phone,
      email: content.personal.email
    },
    serviceType: [
      "Growth Marketing",
      "Graphic Design", 
      "Branding",
      "PPC Campaign Management",
      "Visual Identity Design"
    ],
    areaServed: {
      "@type": "Place",
      name: "Žilina, Slovakia"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing & Design Services",
      itemListElement: content.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        }
      }))
    }
  };
}
