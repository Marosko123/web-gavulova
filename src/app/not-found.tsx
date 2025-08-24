"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/ui/sparkles";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Sparkles />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stránka nenájdená
          </motion.h2>
          
          <motion.p 
            className="text-xl text-purple-200 max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Táto stránka neexistuje, ale naše spolupráca môže existovať!
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none px-8 py-4 text-lg font-semibold rounded-full shadow-2xl mr-4"
              >
                Späť domov
              </Button>
            </motion.div>
          </Link>
          
          <Link 
            href="/kontakt"
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Kontaktovať
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <p className="text-purple-300 text-sm">
            &ldquo;Od nápadu k výsledkom.&rdquo; - Tatiana Gavulová
          </p>
        </motion.div>
      </div>
    </div>
  );
}
