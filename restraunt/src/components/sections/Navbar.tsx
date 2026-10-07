"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between px-6 transition-all duration-500 md:px-10",
            scrolled
              ? "mt-3 max-w-6xl rounded-full border border-white/10 bg-ink-950/70 py-3 shadow-luxe backdrop-blur-xl"
              : "max-w-7xl border border-transparent py-5",
          )}
        >
          <a href="#home" aria-label="Rumba - The Meat Factory home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-heading text-sm font-medium text-cream/80 transition-colors hover:text-rumbaGreen"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-rumbaGreen transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+92518434755"
              className="hidden items-center gap-2 text-sm text-cream/70 transition-colors hover:text-rumbaGreen md:flex"
            >
              <Phone className="h-4 w-4" />
              (051) 8434755
            </a>
            <Magnetic className="hidden sm:block">
              <Button size="sm" onClick={() => scrollTo("#reserve")}>
                Reserve
              </Button>
            </Magnetic>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="glass-dark absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-8 p-8"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="border-b border-white/5 py-4 font-heading text-2xl text-cream transition-colors hover:text-rumbaGreen"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <Button
                className="mt-auto w-full"
                onClick={() => {
                  setOpen(false);
                  scrollTo("#reserve");
                }}
              >
                Reserve a Table
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function scrollTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}
