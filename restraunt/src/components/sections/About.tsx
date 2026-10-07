"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, timeline } from "@/data/content";
import { Blob } from "@/components/ui/Decor";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-36">
      <Blob className="-left-20 top-20 h-72 w-72" color="rgba(139,217,78,0.10)" />
      <div className="container-luxe">
        <SectionHeading
          align="left"
          eyebrow="Our Story"
          title="A decade of"
          highlight="grilling obsession"
          className="max-w-3xl"
          description="From a single grill to the region's most-loved premium steakhouse, one thing never changed — the relentless pursuit of the perfect sear."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-luxe">
                <Image
                  src="/images/about/chef.jpg"
                  alt="Our head chef preparing the signature recipe"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-8 -right-4 w-56 overflow-hidden rounded-2xl border border-white/10 shadow-luxe sm:-right-8"
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/about/kitchen.jpg"
                    alt="Inside our kitchen"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <div className="glass-dark absolute -left-4 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8">
                <div className="font-display text-4xl text-gradient-green">R</div>
                <div className="text-xs leading-tight text-cream/70">
                  Signature <br /> Dry Aging
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story + timeline */}
          <div className="flex flex-col gap-8">
            <Reveal direction="left">
              <div className="glass relative rounded-2xl p-6">
                <Quote className="absolute -top-3 left-6 h-8 w-8 text-rumbaOrange" />
                <p className="pt-2 text-lg leading-relaxed text-cream/90">
                  &ldquo;Patience is the secret ingredient. We dry-age our premium cuts for 21 days — because greatness can&apos;t be rushed.&rdquo;
                </p>
                <div className="mt-4 font-heading text-sm font-semibold text-rumbaGreen">
                  Rumba — Master Grillers
                </div>
              </div>
            </Reveal>

            <div className="relative flex flex-col gap-6 pl-6">
              <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-rumbaGreen via-rumbaGreen/40 to-transparent" />
              {timeline.map((t, i) => (
                <Reveal key={t.year} direction="left" delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full bg-rumbaGreen shadow-green" />
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl text-gradient-orange">
                        {t.year}
                      </span>
                      <span className="font-heading text-base font-semibold text-cream">
                        {t.title}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-smoke">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass group rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1.5">
                <div className="font-display text-5xl text-gradient-green md:text-6xl">
                  <CountUp
                    to={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-smoke">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
