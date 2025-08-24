"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/lib/content";

export function AboutSection() {
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
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content Side */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                O mne
              </motion.h2>
              
              <motion.div 
                className="space-y-6 text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  {content.about.intro}
                </p>
                <p>
                  {content.about.work}
                </p>
              </motion.div>
            </div>

            {/* Values/Badges */}
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {content.about.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 rounded-full text-purple-700 font-medium text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />

              {/* Main container */}
              <div className="relative bg-gradient-to-br from-white/60 to-purple-50/60 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile/profile-400.png"
                    alt={content.personal.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
