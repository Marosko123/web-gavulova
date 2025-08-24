"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/ui/sparkles";
import content from "@/lib/content";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a0b2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)
        `,
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 animate-float"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              background: `radial-gradient(circle, ${
                ['rgba(236, 72, 153, 0.4)', 'rgba(147, 51, 234, 0.4)', 'rgba(59, 130, 246, 0.4)', 
                 'rgba(16, 185, 129, 0.4)', 'rgba(245, 158, 11, 0.4)', 'rgba(239, 68, 68, 0.4)'][i]
              } 0%, transparent 70%)`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            initial={{
              left: `${[20, 70, 10, 80, 50, 30][i]}%`,
              top: `${[10, 60, 80, 20, 40, 70][i]}%`,
            }}
          />
        ))}
      </div>

      <div style={{ padding: "0 30px" }}>
        <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Content Side */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* Main Heading with Gradient Text */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p 
                className="text-pink-300 text-lg font-medium tracking-wide opacity-80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Ahoj, som
              </motion.p>
              <motion.h1 
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                  {content.personal.name.split(' ')[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {content.personal.name.split(' ')[1]}
                </span>
              </motion.h1>
            </motion.div>

            {/* Dynamic Role Display */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  className="inline-block"
                  animate={{ rotateX: [0, 360] }}
                  transition={{ duration: 2, delay: 1.2 }}
                >
                  {content.personal.roles.split('&')[0].trim()}
                </motion.span>
                <span className="text-pink-400 mx-2">&</span>
                <motion.span
                  className="inline-block"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 2, delay: 1.5 }}
                >
                  {content.personal.roles.split('&')[1].trim()}
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                {content.hero.usp}
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Link href={content.personal.calendar} target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button 
                    size="lg"
                    className="relative overflow-hidden group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none px-5 py-3 text-base font-semibold rounded-full shadow-2xl transition-all duration-300 animate-pulse-glow"
                  >
                    <span className="relative z-10">{content.hero.primaryCta}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: "-100%" }}
                      animate={{ x: isHovered ? "0%" : "-100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 text-white px-5 py-3 text-base font-medium rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  Moje služby
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      backgroundSize: '200px 100%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Note */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-white/60 text-sm"
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>{content.hero.quickNote}</span>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image Side */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Floating Geometric Shapes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: `${20 + i * 8}px`,
                    height: `${20 + i * 8}px`,
                    left: `${Math.sin(i) * 100 + 50}%`,
                    top: `${Math.cos(i) * 100 + 50}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  <div 
                    className={`w-full h-full ${
                      i % 3 === 0 ? 'rounded-full bg-gradient-to-r from-pink-400 to-purple-400' :
                      i % 3 === 1 ? 'rotate-45 bg-gradient-to-r from-blue-400 to-cyan-400' :
                      'rounded-lg bg-gradient-to-r from-purple-400 to-pink-400'
                    } opacity-60 blur-sm`}
                  />
                </motion.div>
              ))}

              {/* Main Profile Container */}
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: 0.5 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `conic-gradient(from 0deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)`,
                    padding: '4px',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-900/90 to-purple-900/90 rounded-3xl" />
                </motion.div>

                {/* Glass Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-3 border border-white/20 shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/profile/profile-400.png"
                      alt={content.personal.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto transition-transform duration-500 hover:scale-110"
                      priority
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-pink-500/10 pointer-events-none" />
                  </div>
                </div>

                {/* Floating Skills Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles count={5} className="w-6 h-6" />
                </motion.div>

                {/* Enhanced Designer Element */}
                <motion.div
                  className="absolute -bottom-6 -left-6"
                  animate={{ 
                    rotate: [0, 360],
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="relative">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-60" />
                    {/* Main container */}
                    <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl px-4 py-3 shadow-2xl">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <motion.div 
                          className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        {/* Text */}
                        <div>
                          <div className="text-white font-bold text-sm">Designer</div>
                          <div className="text-blue-200 text-xs">Visual Identity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Marketer Element */}
                <motion.div
                  className="absolute top-1/2 -right-10"
                  animate={{ 
                    x: [0, -15, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="relative">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-60" />
                    {/* Main container */}
                    <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl px-4 py-3 shadow-2xl">
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <motion.div 
                          className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                        </motion.div>
                        {/* Text */}
                        <div>
                          <div className="text-white font-bold text-sm">Marketer</div>
                          <div className="text-purple-200 text-xs">Growth Strategy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors">
            Scroll down
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                y: [0, 8, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      </div>
    </section>
  );
}
