"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { promotions } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";

function useCountdown() {
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const diff = Math.max(0, end.getTime() - now.getTime());
      setT({
        h: Math.floor(diff / 3.6e6),
        m: Math.floor((diff % 3.6e6) / 6e4),
        s: Math.floor((diff % 6e4) / 1e3),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Promotions() {
  const t = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden py-12">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-rumbaOrange/20 bg-gradient-to-br from-ink-900 to-ink-950 p-8 shadow-luxe md:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-rumbaOrange/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-rumbaGreen/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="eyebrow">
                  <Sparkles className="h-4 w-4" />
                  Limited-Time Offers
                </span>
                <h3 className="mt-4 font-heading text-3xl font-bold text-cream md:text-4xl">
                  Special deals, gone before you know it.
                </h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {promotions.map((p) => (
                    <div
                      key={p.title}
                      className="glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-rumbaOrange">
                        <Tag className="h-3.5 w-3.5" />
                        {p.detail}
                      </div>
                      <div className="mt-2 font-display text-3xl text-gradient-orange">
                        {p.highlight}
                      </div>
                      <div className="mt-1 font-heading text-sm font-semibold text-cream">
                        {p.title}
                      </div>
                      <p className="mt-1 text-xs text-smoke">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Countdown */}
              <div className="glass-dark rounded-3xl p-8 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-rumbaOrange">
                  <Clock className="h-4 w-4" />
                  Today&apos;s offer ends in
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  {[
                    { v: t.h, l: "Hrs" },
                    { v: t.m, l: "Min" },
                    { v: t.s, l: "Sec" },
                  ].map((u, i) => (
                    <div key={u.l} className="flex items-center gap-3">
                      <div>
                        <motion.div
                          key={u.v}
                          initial={{ y: -8, opacity: 0.4 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="grid h-16 w-16 place-items-center rounded-xl border border-rumbaOrange/30 bg-ink-950 font-display text-3xl text-cream md:h-20 md:w-20 md:text-4xl"
                        >
                          {pad(u.v)}
                        </motion.div>
                        <div className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-smoke">
                          {u.l}
                        </div>
                      </div>
                      {i < 2 && <span className="font-display text-2xl text-rumbaOrange">:</span>}
                    </div>
                  ))}
                </div>
                <Magnetic className="mt-8 block">
                  <Button variant="orange" className="w-full font-bold" onClick={() => go("#menu")}>
                    Claim the Deal
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function go(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}
