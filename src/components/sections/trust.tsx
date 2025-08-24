"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import content from "@/lib/content";
import { fadeInUp } from "@/lib/utils";

export function TrustSection() {
  // Placeholder logos - these would be replaced with actual client logos
  const logos = [
    "Logo 1",
    "Logo 2", 
    "Logo 3",
    "Logo 4",
    "Logo 5",
    "Logo 6",
    "Logo 7",
    "Logo 8",
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 via-purple-900/5 to-pink-900/10" />
      
      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
              {content.trust.title}
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Marquee className="py-8" speed={30}>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-12 min-w-[140px]"
              >
                <div className="h-20 w-36 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-pink-400/30 transition-all duration-500 group shadow-lg shadow-pink-500/5">
                  <span className="text-white/70 text-base font-semibold group-hover:text-pink-300 transition-colors duration-300">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
