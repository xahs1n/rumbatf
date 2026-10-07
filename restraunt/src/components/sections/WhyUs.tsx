"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup } from "@/components/ui/Reveal";
import { whyUs, type WhyUsItem } from "@/data/content";
import { Blob } from "@/components/ui/Decor";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <Blob className="right-0 top-1/4 h-80 w-80" color="rgba(255,127,17,0.10)" />
      <Blob className="left-0 bottom-1/4 h-72 w-72" color="rgba(139,217,78,0.08)" delay={1.2} />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Why Rumba"
          title="Obsessed with"
          highlight="every detail"
          description="Premium ingredients, patient technique, and a standard we refuse to compromise."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {whyUs.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function WhyCard({ item, index }: { item: WhyUsItem; index: number }) {
  const Icon = item.icon;
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-900/40 shadow-luxe transition-colors duration-500 hover:border-rumbaOrange/40"
    >
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/25" />

        {/* Shine sweep */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />

        {/* Tag */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-rumbaOrange backdrop-blur-md">
          {item.tag}
        </span>

        {/* Number index */}
        <span className="absolute right-4 top-4 font-display text-3xl text-white/25 transition-colors duration-500 group-hover:text-rumbaOrange/60">
          0{index + 1}
        </span>

        {/* Floating icon badge straddling the photo edge */}
        <div className="absolute -bottom-6 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-orange-gradient text-ink-950 shadow-orange transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-10">
        <h3 className="font-heading text-xl font-semibold text-cream">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-smoke">{item.description}</p>

        {/* Stat footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-gradient-orange">{item.stat}</span>
            <span className="text-xs uppercase tracking-wider text-smoke">
              {item.statLabel}
            </span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-rumbaOrange/40 text-rumbaOrange transition-all duration-300 group-hover:bg-orange-gradient group-hover:text-ink-950">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Corner glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rumbaOrange/0 blur-3xl transition-colors duration-500 group-hover:bg-rumbaOrange/20" />
    </motion.article>
  );
}
