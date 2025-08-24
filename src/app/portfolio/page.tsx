import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Portfólio",
  description: "Pozrite si ukázky mojej práce v oblasti growth marketingu, brandingu a grafického dizajnu.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
          Portfólio
        </h1>
        <p className="text-lg text-white/70 mb-12 max-w-2xl">
          Ukázky projektov, na ktorých som pracovala.
        </p>
        
        <div className="text-center py-20">
          <p className="text-white/60">
            Portfólio bude doplnené s reálnymi projektmi a case studies.
          </p>
        </div>
      </div>
    </div>
  );
}
