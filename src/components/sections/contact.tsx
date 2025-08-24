"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import content from "@/lib/content";

export function ContactSection() {
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            {content.contact.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {content.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Primary CTA */}
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              variants={itemVariants}
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Začnime spoluprácu
                </h3>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={content.personal.calendar} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300"
                    >
                      {content.contact.primaryCta}
                    </Button>
                  </a>
                </motion.div>
                
                <p className="text-purple-200 text-sm">
                  {content.contact.secondaryCta}
                </p>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Rýchly kontakt
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`tel:${content.personal.phone}`}
                  className="flex items-center gap-4 text-purple-200 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>{content.personal.phone}</span>
                </motion.a>

                <motion.a
                  href={`mailto:${content.personal.email}`}
                  className="flex items-center gap-4 text-purple-200 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MailIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>{content.personal.email}</span>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-purple-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <span>{content.personal.location}</span>
                </motion.div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-purple-200 text-sm leading-relaxed">
                  {content.contact.quickContact}
                </p>
                <p className="text-purple-300 text-sm mt-2">
                  {content.contact.locationNote}
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Sledujte ma
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href={content.personal.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg"></div>
                  <span className="text-white text-sm font-medium">Instagram</span>
                </motion.a>

                <motion.a
                  href={content.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"></div>
                  <span className="text-white text-sm font-medium">LinkedIn</span>
                </motion.a>

                <motion.a
                  href={content.personal.social.pretlak}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
                  <span className="text-white text-sm font-medium">Pretlak</span>
                </motion.a>

                <motion.a
                  href={content.personal.social.doucma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg"></div>
                  <span className="text-white text-sm font-medium">Doučma</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Calendar Embed */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Rezervácia konzultácie
            </h3>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1tfegxU-jH_Cv8wstN30nA0-45Q04bGrosn7O0nWKFOQKOdmldtPaeINFBLpLGgcfCUY3V6ndD"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-2xl"
                title="Rezervácia konzultácie"
              />
            </div>
            
            <p className="text-purple-200 text-sm text-center mt-4">
              Vyberte si vhodný termín a ja sa vám ozvem s detailmi
            </p>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
