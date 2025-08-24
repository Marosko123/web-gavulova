"use client";

import { motion } from "framer-motion";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export function ResultsSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-pink-900/10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                {content.results.title}
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Merateľné výsledky pre vaše investície
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {content.results.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:border-pink-400/30 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 group">
                  <div className="text-5xl lg:text-6xl font-heading font-bold mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-white/90 text-lg lg:text-xl font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center mt-12 lg:mt-16"
          >
            <p className="text-white/60 text-sm">
              * Konkrétne čísla budú doplnené na základe reálnych projektov
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
