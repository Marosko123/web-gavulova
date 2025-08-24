"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Palette, 
  PenTool, 
  Video, 
  Users,
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export function ServicesSection() {
  const serviceIcons = [
    TrendingUp,
    Target,
    Palette,
    PenTool,
    Video,
    Users,
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" />
      
      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                {content.services.title}
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Komplexné riešenia pre rast vašej značky
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {content.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <TiltCard>
                    <Card className="h-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardHeader className="relative z-10 p-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-pink-500/10">
                          <Icon className="w-8 h-8 text-pink-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <CardTitle className="text-white group-hover:text-white transition-colors text-xl lg:text-2xl font-bold mb-3">
                          {service.title}
                        </CardTitle>
                        {service.subtitle && (
                          <CardDescription className="text-sm lg:text-base font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {service.subtitle}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="relative z-10 p-8 pt-0">
                        <p className="text-white/90 mb-10 leading-relaxed font-medium text-base lg:text-lg">
                          {service.description}
                        </p>
                        <Link href="/sluzby">
                          <Button 
                            variant="ghost" 
                            size="lg"
                            className="text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 group/btn border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300"
                          >
                            {content.services.cta}
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
