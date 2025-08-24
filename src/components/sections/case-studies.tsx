"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("Všetko");

  // Mock case studies data - would be replaced with real data
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce rebranding",
      challenge: "Zvýšenie konverzií pre online obchod",
      result: "Nárast predajov o 40%",
      tags: ["Branding", "Kampane"],
      image: "/placeholder-case1.jpg"
    },
    {
      id: 2,
      title: "SaaS growth kampane",
      challenge: "Efektívne získavanie nových užívateľov",
      result: "CPA znížené o 60%",
      tags: ["Kampane", "Dizajn"],
      image: "/placeholder-case2.jpg"
    },
    {
      id: 3,
      title: "Startup vizuálna identita",
      challenge: "Kompletný branding od nuly",
      result: "Úspešné fundraising",
      tags: ["Branding", "Dizajn"],
      image: "/placeholder-case3.jpg"
    },
    {
      id: 4,
      title: "Social media obsah",
      challenge: "Zvýšenie engagement na sociálnych sieťach",
      result: "Reach zvýšený 3x",
      tags: ["Video", "Dizajn"],
      image: "/placeholder-case4.jpg"
    },
  ];

  const filteredCases = activeFilter === "Všetko" 
    ? caseStudies 
    : caseStudies.filter(caseStudy => 
        caseStudy.tags.includes(activeFilter)
      );

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">
              {content.caseStudies.title}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Pozrite si ukázky môjej práce a výsledky, ktoré som dosiahla pre klientov
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12">
            {content.caseStudies.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Case Studies Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {filteredCases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TiltCard>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                      {/* Image placeholder */}
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent-violet/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white/60 text-sm">Ukázka projektu</span>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {caseStudy.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-white group-hover:text-primary transition-colors">
                          {caseStudy.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-white/80 text-sm mb-3">
                          {caseStudy.challenge}
                        </p>
                        <div className="font-semibold text-primary">
                          {caseStudy.result}
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-white/60 text-sm mb-4">
              Zaujíma vás detailný rozpis projektov?
            </p>
            <a
              href="/pripady-studie"
              className="inline-flex items-center text-primary hover:text-white transition-colors font-medium"
            >
              Pozrieť všetky prípadové štúdie
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
