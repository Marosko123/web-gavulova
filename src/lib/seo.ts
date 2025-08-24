import { Metadata } from "next";
import content from "./content";

export function generateSEO({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tatianagavulova.sk";
  const fullTitle = title 
    ? `${title} | ${content.personal.name}`
    : content.seo.defaultTitle;

  return {
    title: fullTitle,
    description: description || content.seo.defaultDescription,
    keywords: content.seo.keywords,
    authors: [{ name: content.personal.name }],
    creator: content.personal.name,
    openGraph: {
      type: "website",
      locale: "sk_SK",
      url: `${siteUrl}${path}`,
      title: fullTitle,
      description: description || content.seo.defaultDescription,
      siteName: content.personal.name,
      images: [
        {
          url: image || `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || content.seo.defaultDescription,
      images: [image || `${siteUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}
