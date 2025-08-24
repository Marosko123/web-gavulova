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
    <section className="py-16 lg:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                {content.services.title}
              </span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
              Komplexné riešenia pre rast vašej značky
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <TiltCard>
                    <Card className="h-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardHeader className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-pink-500/10">
                          <Icon className="w-7 h-7 text-pink-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <CardTitle className="text-white group-hover:text-white transition-colors text-xl font-bold mb-2">
                          {service.title}
                        </CardTitle>
                        {service.subtitle && (
                          <CardDescription className="text-sm font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {service.subtitle}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-white/90 mb-8 leading-relaxed font-medium">
                          {service.description}
                        </p>
                        <Link href="/sluzby">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 group/btn border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300"
                          >
                            {content.services.cta}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
    </section>
  );
}
