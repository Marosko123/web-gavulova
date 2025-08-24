import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Prípadové štúdie",
  description: "Detailné analýzy úspešných projektov s konkrétnymi výsledkami a metrikami.",
  path: "/pripady-studie",
});

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
          Prípadové štúdie
        </h1>
        <p className="text-lg text-white/70 mb-12 max-w-2xl">
          Detailné analýzy úspešných projektov s konkrétnými výsledkami.
        </p>
        
        <div className="text-center py-20">
          <p className="text-white/60">
            Prípadové štúdie budú doplnené s reálnymi projektmi a výsledkami.
          </p>
        </div>
      </div>
    </div>
  );
}
