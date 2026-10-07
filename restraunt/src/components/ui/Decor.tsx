"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Soft animated gradient blob used for luxury background lighting. */
export function Blob({
  className,
  color = "rgba(212,165,55,0.22)",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{ background: color }}
      animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Subtle repeating diamond pattern used as a decorative texture. */
export function DiamondPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 opacity-[0.05]", className)}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='none' stroke='%23d4a537' stroke-width='1'/%3E%3C/svg%3E\")",
        backgroundSize: "40px 40px",
      }}
    />
  );
}
