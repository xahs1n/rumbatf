"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const button = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-heading font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rumbaGreen/70 disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-green-gradient text-ink-950 shadow-green hover:shadow-[0_20px_50px_-10px_rgba(139,217,78,0.6)]",
        orange: "bg-orange-gradient text-ink-950 shadow-orange hover:shadow-[0_20px_50px_-10px_rgba(255,127,17,0.6)]",
        ember: "bg-orange-gradient text-ink-950 shadow-orange",
        outline:
          "border-2 border-rumbaGreen/60 text-cream hover:border-rumbaGreen hover:text-rumbaGreen hover:bg-rumbaGreen/10 bg-black/40 backdrop-blur-md",
        ghost: "text-cream hover:text-rumbaGreen",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-sm",
        lg: "px-9 py-4 text-base",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  VariantProps<typeof button> & { shine?: boolean; children?: ReactNode };

export function Button({
  className,
  variant,
  size,
  children,
  shine = true,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(button({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {shine && (variant === "gold" || variant === "orange" || variant == null) && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </motion.button>
  );
}

