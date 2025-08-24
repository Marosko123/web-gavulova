"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import content from "@/lib/content";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="py-24 bg-gradient-to-br from-white to-purple-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl" />
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
            {content.faq.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Odpovede na najčastejšie otázky o spolupráci
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content.faq.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-5 h-5 text-purple-600" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? "auto" : 0,
                  opacity: openItems.includes(index) ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            className="text-gray-600 text-lg mb-6"
            variants={itemVariants}
          >
            Máte ďalšie otázky? Neváhajte sa ozvať!
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Napíšte mi
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
