"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import content from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/30 to-indigo-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-2xl"
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          {/* Motto Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge 
              variant="glass" 
              className="text-sm px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
            >
              ✨ {content.personal.motto}
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              {content.personal.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl lg:text-3xl text-white/90 mb-4 font-medium"
          >
            {content.personal.roles}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {content.hero.usp}
          </motion.p>

          {/* Pills */}
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center justify-center space-x-3 text-white/70 text-sm">
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Dáta</span>
              <span className="text-pink-300">→</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Dizajn</span>
              <span className="text-pink-300">→</span>
              <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Výsledky</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <div className="relative group">
              <Link href={content.personal.calendar} target="_blank">
                <Button 
                  size="xl" 
                  className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  <span className="relative z-10">{content.hero.primaryCta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
              </Link>
            </div>
            <Link href={content.personal.calendar} target="_blank">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 px-6 py-3"
              >
                {content.hero.secondaryCta}
              </Button>
            </Link>
          </motion.div>

          {/* Quick Note */}
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-sm mb-16 font-light"
          >
            ✨ {content.hero.quickNote}
          </motion.p>

          {/* Quick Contacts */}
          <motion.div
            variants={fadeInUp}
            className="backdrop-blur-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <Link
                href={`tel:${content.personal.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-2xl hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-pink-300" />
                </div>
                <div>
                  <p className="font-medium text-sm">Telefón</p>
                  <p className="text-xs text-white/60">{content.personal.phone}</p>
                </div>
              </Link>
              
              <Link
                href={`mailto:${content.personal.email}`}
                className="flex items-center justify-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group p-4 rounded-2xl hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-pink-300" />
                </div>
                <div>
                  <p className="font-medium text-sm">E-mail</p>
                  <p className="text-xs text-white/60">Kontakt</p>
                </div>
              </Link>
              
              <div className="flex items-center justify-center space-x-3 text-white/80 p-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-pink-300" />
                </div>
                <div>
                  <p className="font-medium text-sm">Lokalita</p>
                  <p className="text-xs text-white/60">{content.personal.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
