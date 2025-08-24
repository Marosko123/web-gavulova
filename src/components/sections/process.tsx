"use client";

import { motion } from "framer-motion";
import content from "@/lib/content";

export function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            {content.process.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ako prebieha naša spolupráca od prvého kontaktu po merateľné výsledky
          </motion.p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 hidden lg:block" />

          <div className="space-y-12">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex items-start gap-8">
                  {/* Step Number */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-white/20">
                      {index + 1}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-50 -z-10" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-purple-200 text-lg capitalize">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-purple-200 text-lg mb-6"
            variants={itemVariants}
          >
            Pripravená začať? Rezervujme si úvodnú konzultáciu
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Začnime spoločne
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
