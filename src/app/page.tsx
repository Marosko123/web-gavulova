import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services";
import { ResultsSection } from "@/components/sections/results";
import { CaseStudiesSection } from "@/components/sections/case-studies";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ResultsSection />
      <CaseStudiesSection />
    </>
  );
}
