"use client";

import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles, Star, X } from "lucide-react";
import { useState } from "react";
import { galleryImages, type GalleryImage } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Gallery"
          title="A feast for"
          highlight="the eyes"
          description="Wood-fired steaks, tender cuts and flame-kissed detail — every plate a work of art."
        />

        <div className="mt-14 grid auto-rows-[230px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {galleryImages.map((img, i) => (
            <GalleryCard key={img.src} img={img} index={i} onOpen={() => setActive(img)} />
          ))}
        </div>
      </div>

      <Lightbox active={active} onClose={() => setActive(null)} />
    </section>
  );
}

const overlayReveal: Variants = {
  rest: {},
  hover: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const lineReveal: Variants = {
  rest: { y: 14, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function GalleryCard({
  img,
  index,
  onOpen,
}: {
  img: GalleryImage;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border border-white/10 text-left transition-shadow duration-500 hover:border-rumbaGreen/40 hover:shadow-green",
        img.span,
      )}
    >
      <motion.div initial="rest" whileHover="hover" animate="rest" className="absolute inset-0">
        {/* Image */}
        <Image
          src={img.src}
          alt={img.title}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
        />

        {/* Base + hover gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
        <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/40" />

        {/* Shine sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />

        {/* Animated green corner accents */}
        <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-rumbaGreen/0 transition-all duration-500 group-hover:left-4 group-hover:top-4 group-hover:border-rumbaGreen/80" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-rumbaGreen/0 transition-all duration-500 group-hover:bottom-4 group-hover:right-4 group-hover:border-rumbaGreen/80" />

        {/* Top row: category + rating */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/90 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-rumbaOrange" />
            {img.category}
          </span>
          {img.tag && (
            <span className="rounded-full bg-orange-gradient px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink-950 shadow-orange">
              {img.tag}
            </span>
          )}
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-2 flex items-center gap-1 text-rumbaOrange">
            <Star className="h-3.5 w-3.5 fill-rumbaOrange" />
            <span className="text-xs font-semibold">{img.rating.toFixed(1)}</span>
          </div>
          <h3 className="font-heading text-lg font-bold leading-tight text-cream drop-shadow-md">
            {img.title}
          </h3>

          {/* Revealed detail on hover */}
          <motion.div variants={overlayReveal} className="overflow-hidden">
            <motion.p
              variants={lineReveal}
              className="mt-1.5 max-h-0 text-sm leading-snug text-cream/80 opacity-0 transition-[max-height] duration-500 group-hover:max-h-24"
            >
              {img.description}
            </motion.p>
            <motion.div variants={lineReveal} className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-medium text-cream/90 backdrop-blur-sm">
                <Flame className="h-3 w-3 text-rumbaOrange" />
                {img.cook}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-rumbaOrange">
                View
                <span className="grid h-7 w-7 place-items-center rounded-full bg-orange-gradient text-ink-950">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.button>
  );
}

function Lightbox({
  active,
  onClose,
}: {
  active: GalleryImage | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/90 p-6 backdrop-blur-md"
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-cream transition-colors hover:border-rumbaGreen/40 hover:text-rumbaGreen"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-rumbaGreen/20 shadow-luxe"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image src={active.src} alt={active.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/90 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-rumbaOrange" />
                  {active.category}
                </span>
                {active.tag && (
                  <span className="rounded-full bg-orange-gradient px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-ink-950">
                    {active.tag}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs font-semibold text-rumbaOrange">
                  <Star className="h-3.5 w-3.5 fill-rumbaOrange" />
                  {active.rating.toFixed(1)}
                </span>
              </div>
              <h3 className="font-display text-4xl leading-none text-cream md:text-5xl">
                {active.title}
              </h3>
              <p className="max-w-xl text-sm text-cream/80 md:text-base">
                {active.description}
              </p>
              <span className="mt-1 flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cream/90 backdrop-blur-sm">
                <Flame className="h-3.5 w-3.5 text-rumbaOrange" />
                {active.cook}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
