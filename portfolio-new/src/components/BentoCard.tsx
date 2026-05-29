"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes safely.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * BentoCard Component
 * 
 * A high-end glassmorphic card component designed for the Cyber-Bento aesthetic.
 * Features include:
 * - Backdrop blur and semi-transparent surface.
 * - Subtle border with top-edge reflection.
 * - Haptic spring-based hover animations.
 * - Modern dark mode styling.
 */
export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 90 
      }}
      className={cn(
        // Glassmorphism Base
        "relative overflow-hidden rounded-3xl border border-border bg-surface p-6 backdrop-blur-[15px]",
        // Interactive state feedback
        "transition-colors duration-300 hover:border-white/20",
        "group cursor-default",
        className
      )}
    >
      {/* Inner reflection: subtle top-edge highlight (linear-gradient) */}
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" 
        aria-hidden="true"
      />
      
      {/* Subtle secondary hover gradient for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <div className="relative z-10 h-full w-full font-sans antialiased text-foreground">
        {children}
      </div>
    </motion.div>
  );
};
