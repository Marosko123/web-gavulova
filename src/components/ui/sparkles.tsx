"use client";

import { HTMLAttributes, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export function Sparkles({ className, count = 3, ...props }: SparklesProps) {
  // Generate stable positions to avoid hydration mismatch
  const sparklePositions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      left: [62.19, 49.14, 38.55][i % 3] || 50,
      top: [16.55, 32.44, 16.90][i % 3] || 25,
    }));
  }, [count]);

  return (
    <div className={cn("relative", className)} {...props}>
      {sparklePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
