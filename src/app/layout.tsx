import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";
import { generateSEO } from "@/lib/seo";
import { generatePersonSchema, generateServiceSchema } from "@/lib/schema";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", 
  display: "swap",
  preload: true,
});

export const metadata: Metadata = generateSEO({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = generatePersonSchema();
  const serviceSchema = generateServiceSchema();

  return (
    <html lang="sk" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body 
        className="font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white min-h-screen"
        suppressHydrationWarning={true}
      >
        <Analytics />
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
