import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ReferencesSection } from "@/components/sections/references";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <div id="o-mne">
        <AboutSection />
      </div>
      <div id="sluzby">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="referencie">
        <ReferencesSection />
      </div>
      <div id="kontakt">
        <ContactSection />
      </div>
    </>
  );
}
