import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Služby",
  description: "Komplexné marketingové a dizajnové služby pre rast vašej značky. PPC kampane, branding, grafický dizajn a konzultácie.",
  path: "/sluzby",
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
          Služby
        </h1>
        <p className="text-lg text-white/70 mb-12 max-w-2xl">
          Detailný prehľad všetkých služieb a balíčkov, ktoré ponúkam.
        </p>
        
        <div className="text-center py-20">
          <p className="text-white/60">
            Stránka služieb bude doplnená s podrobnými informáciami o každej službe, cenníkmi a balíčkami.
          </p>
        </div>
      </div>
    </div>
  );
}
