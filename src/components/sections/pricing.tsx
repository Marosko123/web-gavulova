"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import content from "@/lib/content";

export function PricingSection() {
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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl" />
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
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            {content.pricing.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Vyberte si balíček, ktorý najlepšie vyhovuje vašim potrebám
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content.pricing.packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl ${
                index === 1 ? 'scale-105 border-purple-300/50' : ''
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: index === 1 ? 1.07 : 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Popular badge for middle package */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Najpopulárnejšie
                  </div>
                </div>
              )}

              <div className="text-center space-y-6">
                {/* Package Name */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 capitalize text-lg">
                    {pkg.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {pkg.note}
                  </p>
                </div>

                {/* Features placeholder */}
                <div className="space-y-4 py-8">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <span className="text-purple-600 font-medium">
                      Detaily na konzultácii
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl' 
                      : 'bg-white border-2 border-purple-200 text-purple-600 hover:border-purple-400 hover:bg-purple-50'
                  }`}
                >
                  {content.pricing.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Všetky ceny sú individuálne podľa rozsahu projektu. Počas konzultácie si prejdeme vaše potreby a navrhneme najvhodnejšie riešenie.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
