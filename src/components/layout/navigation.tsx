"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import content from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Define sections in order of appearance on the page
      const sections = [
        { id: '', element: document.querySelector('.hero-section') as HTMLElement, name: 'home' },
        { id: 'o-mne', element: document.getElementById('o-mne') as HTMLElement, name: 'about' },
        { id: 'sluzby', element: document.getElementById('sluzby') as HTMLElement, name: 'services' },
        { id: 'portfolio', element: document.getElementById('portfolio') as HTMLElement, name: 'portfolio' },
        { id: 'referencie', element: document.getElementById('referencie') as HTMLElement, name: 'references' },
        { id: 'kontakt', element: document.getElementById('kontakt') as HTMLElement, name: 'contact' },
      ];

      const navHeight = 80;
      const scrollPosition = window.scrollY + navHeight + 100; // Add some offset for better detection
      
      // Find the current section
      let currentSection = '';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      // Update URL if section changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        const newUrl = currentSection ? `#${currentSection}` : '/';
        
        // Only update URL if it's different from current
        if (window.location.hash !== (currentSection ? `#${currentSection}` : '')) {
          window.history.replaceState(null, '', newUrl);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const navItems = [
    { href: "#o-mne", label: content.navigation.about },
    { href: "#sluzby", label: content.navigation.services },
    { href: "#portfolio", label: content.navigation.portfolio },
    { href: "#referencie", label: "Referencie" },
    { href: "#kontakt", label: content.navigation.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        const navHeight = 80; // Navigation height
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        // Update URL
        window.history.pushState(null, '', href);
      }
      setIsMobileOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Update URL to home
    window.history.pushState(null, '', '/');
    setIsMobileOpen(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "backdrop-blur-2xl bg-black/20 border-b border-white/5"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full py-2 lg:py-3" style={{ padding: "0 30px" }}>
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo - Full Name with Animation */}
          <Link href="/" onClick={handleLogoClick} className="relative z-10">
            <motion.div
              className="font-heading text-lg lg:text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25,
                delay: 0.3
              }}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Tatiana Gavulová
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Fixed Spacing */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center" style={{ gap: "3rem" }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "transition-all duration-300 text-sm font-medium relative group cursor-pointer",
                      isActive 
                        ? "text-white" 
                        : "text-white/80 hover:text-white"
                    )}
                    style={{ padding: "0.5rem 0" }}
                  >
                    {item.label}
                    <motion.div
                      className={cn(
                        "absolute bottom-0 left-0 h-px bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* CTA Button - Fixed Styles */}
          <div className="hidden lg:block">
            <Link href={content.personal.calendar} target="_blank">
              <Button 
                variant="outline" 
                size="sm"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  borderRadius: "9999px"
                }}
                className="hover:bg-white/10 transition-all duration-300"
              >
                Konzultácia
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-white transition-all duration-300",
                  isMobileOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Modern and Clean */}
        {isMobileOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 w-full bg-black/90 backdrop-blur-2xl border-t border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="w-full">
              <div className="px-12 py-8">
                <nav className="space-y-6">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "block transition-colors duration-300 text-lg font-medium py-2 cursor-pointer",
                          isActive ? "text-white" : "text-white/80 hover:text-white"
                        )}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
                
                <div className="pt-6 border-t border-white/10">
                  <Link href={content.personal.calendar} target="_blank">
                    <Button 
                      variant="outline" 
                      size="sm"
                      style={{
                        width: "100%",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(12px)",
                        color: "white",
                        padding: "0.75rem 1rem",
                        fontSize: "1rem",
                        fontWeight: "500",
                        borderRadius: "9999px"
                      }}
                      className="hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      Konzultácia
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  );
}
