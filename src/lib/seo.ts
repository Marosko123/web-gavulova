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
    icons: {
      icon: [
        { url: "/images/profile/profile-64.png", sizes: "32x32", type: "image/png" },
        { url: "/images/profile/profile-64.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/images/profile/profile-200.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/images/profile/profile-64.png",
    },
    openGraph: {
      type: "website",
      locale: "sk_SK",
      url: `${siteUrl}${path}`,
      title: fullTitle,
      description: description || content.seo.defaultDescription,
      siteName: content.personal.name,
      images: [
        {
          url: image || `${siteUrl}/og-image.png`,
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
      images: [image || `${siteUrl}/og-image.png`],
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
