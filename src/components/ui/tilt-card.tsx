"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
}

export function TiltCard({ 
  children, 
  className, 
  tiltDegree = 5,
}: TiltCardProps) {
  return (
    <motion.div
      className={cn("transform-gpu", className)}
      whileHover={{
        rotateX: tiltDegree,
        rotateY: tiltDegree,
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      style={{
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
