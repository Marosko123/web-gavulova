"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, MessageSquare, ThumbsUp, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Peter Novák",
    position: "CEO, TechCorp",
    company: "TechCorp s.r.o.",
    rating: 5,
    text: "Tatiana nám pomohla nielen s rebrandingom, ale aj s nastavením celej marketingovej stratégie. Výsledky prekročili naše očakávania - nárast konverzií o 89% za 3 mesiace.",
    project: "Komplexný rebranding + growth strategy",
    results: "+89% konverzií, +156% brand awareness",
    avatar: "/avatars/peter.jpg"
  },
  {
    id: 2,
    name: "Mária Svobodová",
    position: "Marketing Manager",
    company: "Fashion Studio",
    rating: 5,
    text: "Profesionálny prístup a skvelé výsledky. Naše PPC kampane konečne fungují a vidíme jasný ROI. Tatiana má talent spojiť kreativitu s dátami.",
    project: "Performance marketing campaigns",
    results: "+284% ROI, -43% CPA",
    avatar: "/avatars/maria.jpg"
  },
  {
    id: 3,
    name: "Tomáš Krejčí",
    position: "Founder",
    company: "GreenTech Startup",
    rating: 5,
    text: "Ako startup sme potrebovali niekoho, kto rozumie rýchlemu rastu. Tatiana nám nastavila systémy, ktoré škálujeme dodnes. Investícia sa vrátila už po mesiaci.",
    project: "Growth marketing setup",
    results: "+245% organic reach, +92% leads",
    avatar: "/avatars/tomas.jpg"
  },
  {
    id: 4,
    name: "Anna Bartošová",
    position: "Brand Manager",
    company: "Wellness centrum",
    rating: 5,
    text: "Tatianin dizajn a contentová stratégia úplne zmenili náš online dosah. Konečne máme konzistentnú identitu a naši klienti nás ľahšie rozoznávajú.",
    project: "Brand identity + content strategy",
    results: "+178% engagement, +67% lead quality",
    avatar: "/avatars/anna.jpg"
  },
  {
    id: 5,
    name: "Lukáš Horný",
    position: "E-commerce Manager",
    company: "SportShop",
    rating: 5,
    text: "Najlepšia investícia do marketingu, akú sme urobili. Tatiana optimalizovala naše kampane tak, že sme znížili náklady o 40% a zvýšili predaje o 120%.",
    project: "E-commerce optimization",
    results: "-40% náklady, +120% predaje",
    avatar: "/avatars/lukas.jpg"
  },
  {
    id: 6,
    name: "Zuzana Veselá",
    position: "CMO",
    company: "SaaS Platforma",
    rating: 5,
    text: "Konečne marketérka, ktorá myslí ako podnikateľ. Každý návrh má jasné odôvodnenie a merateľné ciele. Naša spolupráca priniesla najlepšie kvartálne výsledky v histórii firmy.",
    project: "B2B marketing strategy",
    results: "+310% MQL, +85% close rate",
    avatar: "/avatars/zuzana.jpg"
  }
];

const stats = [
  { label: "Spokojných klientov", value: "25+", icon: ThumbsUp },
  { label: "Úspešných projektov", value: "40+", icon: Star },
  { label: "Priemerné hodnotenie", value: "4.9/5", icon: Heart },
  { label: "Odporučení", value: "98%", icon: MessageSquare }
];

export function ReferencesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
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
              Referencie
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Pozrite si, čo hovoria klienti o našej spolupráci a výsledkoch, ktoré sme spolu dosiahli.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-pink-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Project & Results */}
                    <div className="mb-6 p-4 bg-black/20 rounded-lg border border-white/10">
                      <div className="text-sm text-gray-400 mb-1">Projekt:</div>
                      <div className="text-white text-sm mb-3">{testimonial.project}</div>
                      <div className="text-sm text-gray-400 mb-1">Výsledky:</div>
                      <div className="text-pink-400 text-sm font-semibold">{testimonial.results}</div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.position}
                        </div>
                        <div className="text-pink-400 text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Chcete byť ďalší spokojný klient?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Poďme spolu vytvoriť váš úspešný projekt. Začneme bezplatnou konzultáciou, 
                kde si prejdeme vaše ciele a navrhneme stratégiu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all"
                >
                  Bezplatná konzultácia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Pozrieť portfólio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
