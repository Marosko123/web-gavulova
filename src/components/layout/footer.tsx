import Link from "next/link";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";
import content from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: content.personal.social.instagram,
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: content.personal.social.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: content.personal.social.pretlak,
      icon: ExternalLink,
      label: "Pretlak",
    },
    {
      href: content.personal.social.doucma,
      icon: ExternalLink,
      label: "Doučma",
    },
  ];

  const navItems = [
    { href: "/", label: content.navigation.home },
    { href: "/portfolio", label: content.navigation.portfolio },
    { href: "/sluzby", label: content.navigation.services },
    { href: "/pripady-studie", label: content.navigation.caseStudies },
    { href: "/o-mne", label: content.navigation.about },
    { href: "/kontakt", label: content.navigation.contact },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black/30 via-purple-900/20 to-pink-900/20 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                {content.personal.name}
              </span>
            </h3>
            <p className="text-white/80 mb-8 max-w-md font-medium leading-relaxed">
              {content.footer.tagline}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Navigácia</h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white/80 hover:text-pink-400 transition-all duration-300 font-medium hover:translate-x-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Kontakt</h4>
            <div className="space-y-3 text-white/80">
              <p className="font-medium">{content.personal.location}</p>
              <Link
                href={`tel:${content.personal.phone.replace(/\s/g, "")}`}
                className="block hover:text-pink-400 transition-colors font-medium"
              >
                {content.personal.phone}
              </Link>
              <Link
                href={`mailto:${content.personal.email}`}
                className="block hover:text-pink-400 transition-colors font-medium"
              >
                {content.personal.email}
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-12" />

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-white/70">
          <p className="font-medium">© {currentYear} {content.personal.name}. Všetky práva vyhradené.</p>
          <Link
            href="/privacy"
            className="hover:text-pink-400 transition-colors font-medium"
          >
            {content.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
