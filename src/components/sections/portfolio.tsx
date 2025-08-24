"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { ArrowRight, Star } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Growth Campaign",
    category: "Performance Marketing",
    description: "Komplexná PPC kampaň pre módny e-shop s fokusem na ROI a škálovanie.",
    results: [
      { metric: "ROI", value: "+284%" },
      { metric: "CPA", value: "-43%" },
      { metric: "CTR", value: "+89%" }
    ],
    image: "/projects/ecommerce.jpg",
    tags: ["Meta Ads", "Google Ads", "Analytics"],
    status: "completed"
  },
  {
    id: 2,
    title: "Tech Startup Rebrand",
    category: "Branding & Design",
    description: "Kompletný rebrand technologického startupu vrátane loga, identityy a web dizajnu.",
    results: [
      { metric: "Brand Awareness", value: "+156%" },
      { metric: "Lead Quality", value: "+67%" },
      { metric: "Conversion Rate", value: "+34%" }
    ],
    image: "/projects/startup.jpg",
    tags: ["Logo Design", "Brand Identity", "Web Design"],
    status: "completed"
  },
  {
    id: 3,
    title: "SaaS Content Strategy",
    category: "Content & Growth",
    description: "Obsahová stratégia a video kampane pre B2B SaaS platformu.",
    results: [
      { metric: "Organic Reach", value: "+245%" },
      { metric: "Engagement", value: "+178%" },
      { metric: "Leads", value: "+92%" }
    ],
    image: "/projects/saas.jpg",
    tags: ["Video Production", "Content Strategy", "LinkedIn"],
    status: "in-progress"
  }
];

const brands = [
  { name: "TechCorp", category: "Technology" },
  { name: "Fashion Nova", category: "E-commerce" },
  { name: "EcoGreen", category: "Sustainability" },
  { name: "FinanceHub", category: "Fintech" },
  { name: "HealthPlus", category: "Healthcare" },
  { name: "EduTech Pro", category: "Education" },
  { name: "FoodChain", category: "F&B" },
  { name: "AutoDrive", category: "Automotive" },
  { name: "SportMax", category: "Sports" },
  { name: "HomeDesign", category: "Interior" },
  { name: "TravelEase", category: "Travel" },
  { name: "MusicStream", category: "Entertainment" },
  { name: "CloudTech", category: "SaaS" },
  { name: "RetailPro", category: "Retail" },
  { name: "GrowthLab", category: "Consulting" }
];

export function PortfolioSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>
      
      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Portfólio
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
              Pozrite si moje najlepšie projekty a prípadové štúdie s reálnymi výsledkami. 
              Každý projekt kombinuje strategické myslenie, kreatívny dizajn a merateľné výsledky.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-600/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status === 'completed' ? 'Dokončené' : 'V procese'}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-pink-400">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-400">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 transition-all group"
                      >
                        Zobraziť projekt
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Brands Section - Transparent Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            {/* First Row - Left to Right */}
            <div className="mb-8">
              <Marquee className="[--duration:30s]" pauseOnHover={true}>
                {brands.slice(0, 8).map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[200px] h-16 mx-4 bg-transparent border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-bold text-white text-lg">{brand.name}</div>
                      <div className="text-purple-300 text-xs uppercase tracking-wide opacity-60">{brand.category}</div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Second Row - Right to Left */}
            <div className="mb-8">
              <Marquee className="[--duration:35s]" direction="right" pauseOnHover={true}>
                {brands.slice(8, 15).map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[200px] h-16 mx-4 bg-transparent border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-bold text-white text-lg">{brand.name}</div>
                      <div className="text-pink-300 text-xs uppercase tracking-wide opacity-60">{brand.category}</div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Third Row - Left to Right (Slower) */}
            <div>
              <Marquee className="[--duration:40s]" pauseOnHover={true}>
                {[...brands.slice(0, 7), ...brands.slice(7, 14)].map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[180px] h-14 mx-3 bg-transparent border border-violet-500/10 hover:border-violet-500/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="font-semibold text-white">{brand.name}</div>
                      <div className="text-violet-300 text-xs uppercase tracking-wide opacity-60">{brand.category}</div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>

          {/* Coming Soon Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Pripravujem ďalšie projekty
              </h3>
              <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
                Práve dokončujem detailné prípadové štúdie ďalších úspešných projektov. 
                Zatiaľ si môžete rezervovať konzultáciu a porozprávať si o vašich cieľoch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all"
                >
                  Konzultácia zdarma
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Zobraziť všetky služby
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
