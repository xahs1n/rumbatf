"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DiamondPattern } from "@/components/ui/Decor";

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);

  function paginate(d: number) {
    setState(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  }

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, []);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-28 md:py-36">
      <DiamondPattern />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Guest Love"
          title="Loved by"
          highlight="thousands"
          description="Don't take our word for it — here's what our guests keep coming back to say."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative h-[22rem] sm:h-72">
            <AnimatePresence mode="popLayout" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -80 : 80 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="glass flex h-full flex-col items-center justify-center rounded-[2rem] p-8 text-center md:p-12">
                  <Quote className="h-10 w-10 text-rumbaOrange" />
                  <div className="mt-5 flex gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-rumbaOrange text-rumbaOrange" />
                    ))}
                  </div>
                  <p className="mt-6 text-xl font-medium leading-relaxed text-cream md:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Avatar initials={active.initials} accent={active.accent} />
                    <div className="text-left">
                      <div className="font-heading font-semibold text-cream">
                        {active.name}
                      </div>
                      <div className="text-sm text-smoke">{active.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <NavBtn onClick={() => paginate(-1)} label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </NavBtn>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-green-gradient" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <NavBtn onClick={() => paginate(1)} label="Next">
              <ChevronRight className="h-5 w-5" />
            </NavBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavBtn({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream transition-colors hover:border-rumbaGreen/40 hover:text-rumbaGreen"
    >
      {children}
    </button>
  );
}

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div
      className="grid h-12 w-12 place-items-center rounded-full font-heading font-bold text-ink-950"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${accent}, #a67c1f)`,
      }}
    >
      {initials}
    </div>
  );
}
