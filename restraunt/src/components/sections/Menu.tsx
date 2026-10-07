"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Plus, Star } from "lucide-react";
import { useState } from "react";
import { categories, menu, type MenuCategory } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { DiamondPattern } from "@/components/ui/Decor";
import { cn } from "@/lib/utils";

export function Menu() {
  const [active, setActive] = useState<MenuCategory>("Steaks");
  const items = menu.filter((m) => m.category === active);

  return (
    <section id="menu" className="relative overflow-hidden py-28 md:py-36">
      <DiamondPattern />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Signature Menu"
          title="Crafted to be"
          highlight="unforgettable"
          description="Every item is made to order with premium ingredients and our wood-fired grill."
        />

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "relative rounded-full px-5 py-2.5 font-heading text-sm font-medium transition-colors",
                active === c ? "text-ink-950" : "text-cream/70 hover:text-rumbaOrange",
              )}
            >
              {active === c && (
                <motion.span
                  layoutId="menu-pill"
                  className="absolute inset-0 rounded-full bg-orange-gradient"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <MenuCard item={menu.find((m) => m.id === item.id)!} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: (typeof menu)[number] }) {
  return (
    <TiltCard className="group h-full">
      <div className="glass relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-shadow duration-500 hover:shadow-orange">
        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          {item.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-ember-gradient px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-ember">
              {item.tag}
            </span>
          )}
          <div className="glass-dark absolute right-4 top-4 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-rumbaOrange">
            <Star className="h-3 w-3 fill-rumbaOrange" />
            {item.rating}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-lg font-semibold text-cream">
              {item.name}
            </h3>
            <span className="whitespace-nowrap font-display text-2xl text-gradient-orange">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-smoke">
            {item.description}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-cream/60">
              <Flame className="h-3.5 w-3.5 text-ember" />
              {item.calories} cal
            </span>
            <button className="flex items-center gap-2 rounded-full border border-rumbaOrange/40 px-4 py-2 text-xs font-semibold text-rumbaOrange transition-all duration-300 hover:bg-orange-gradient hover:text-ink-950">
              <Plus className="h-3.5 w-3.5" />
              Add
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
