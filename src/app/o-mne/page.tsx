"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
              {content.about.title}
            </h1>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Photo placeholder */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent-violet/20 rounded-2xl flex items-center justify-center">
                  <span className="text-white/60">Foto Tatiany</span>
                </div>
              </div>

              {/* Bio */}
              <div className="order-1 lg:order-2">
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6"
                >
                  {content.about.bio}
                </motion.p>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-white/80 mb-8"
                >
                  {content.about.workStyle}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {content.about.traits.map((trait, index) => (
                    <Badge key={index} variant="glass" className="px-4 py-2">
                      {trait}
                    </Badge>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Process Section */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-8 text-center">
                {content.process.title}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                  >
                    <Card className="h-full text-center">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
