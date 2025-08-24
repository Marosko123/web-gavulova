"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: content.navigation.home },
    { href: "/portfolio", label: content.navigation.portfolio },
    { href: "/sluzby", label: content.navigation.services },
    { href: "/pripady-studie", label: content.navigation.caseStudies },
    { href: "/o-mne", label: content.navigation.about },
    { href: "/kontakt", label: content.navigation.contact },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="font-heading text-xl lg:text-2xl font-bold relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              {/* Animated gradient text */}
              <motion.span 
                className="relative z-10 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Tatiana
              </motion.span>
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-0"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              
              <motion.span 
                className="ml-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                Gavulová
              </motion.span>
              
              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-white/90 hover:text-white transition-all duration-300 text-base font-medium group py-3 px-4 rounded-lg"
                  >
                    {item.label}
                    
                    {/* Animated underline */}
                    <motion.span 
                      className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                    />
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <Link href={content.personal.calendar} target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 border-0 px-6 py-3 text-base font-semibold"
                >
                  <span className="relative z-10">{content.hero.primaryCta}</span>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{
                      translateX: ["100%", "-100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear"
                    }}
                  />
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden text-white hover:text-pink-400 transition-colors p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-pink-400/30"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: isMobileOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMobileOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-2xl",
            isMobileOpen ? "block" : "hidden"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isMobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-white/90 hover:text-white transition-all duration-300 font-medium py-4 px-6 rounded-xl hover:bg-white/10 group relative overflow-hidden"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span className="flex items-center justify-between relative z-10">
                      {item.label}
                      <motion.span 
                        className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                    
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6 border-t border-white/10 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link href={content.personal.calendar} target="_blank" className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg border-0 py-4 text-lg font-semibold relative overflow-hidden"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <span className="relative z-10">{content.hero.primaryCta}</span>
                      
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-lg"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20"
        initial={{ scaleX: 0 }}
        style={{
          scaleX: isScrolled ? 1 : 0,
          transformOrigin: "left",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-full"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </motion.div>
    </motion.header>
  );
}
