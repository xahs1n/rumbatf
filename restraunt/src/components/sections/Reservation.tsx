"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Check, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Blob } from "@/components/ui/Decor";

export function Reservation() {
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <section id="reserve" className="relative overflow-hidden py-28 md:py-36">
      <Blob className="left-1/3 top-10 h-80 w-80" color="rgba(139,217,78,0.12)" />
      <div className="container-luxe relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <CalendarCheck className="h-4 w-4" />
              Reserve a Table
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-cream md:text-6xl">
              Your premium table <span className="text-gradient-orange">awaits</span>
            </h2>
            <p className="mt-5 max-w-md text-smoke">
              Book an unforgettable evening of premium steaks. Intimate
              dinners, family feasts and celebrations — we&apos;ll make it perfect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Clock, label: "Open 11am – 12am" },
                { icon: Users, label: "Groups up to 40" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream/80"
                >
                  <f.icon className="h-4 w-4 text-rumbaGreen" />
                  {f.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-luxe">
              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 grid place-items-center bg-ink-950/90 backdrop-blur-sm"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-gradient text-ink-950"
                      >
                        <Check className="h-8 w-8" strokeWidth={3} />
                      </motion.div>
                      <h3 className="mt-4 font-heading text-xl font-semibold text-cream">
                        Request received!
                      </h3>
                      <p className="mt-1 text-sm text-smoke">
                        Our team will confirm your table shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={submit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="Jane Doe" />
                  <Field label="Phone" placeholder="+1 800 000 0000" type="tel" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Date" type="date" />
                  <Field label="Time" type="time" />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-cream/70">
                    Guests
                  </label>
                  <select className="rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-cream outline-none transition-colors focus:border-rumbaGreen/60">
                    {["1–2", "3–4", "5–6", "7+"].map((g) => (
                      <option key={g}>{g} guests</option>
                    ))}
                  </select>
                </div>
                <Button type="submit" size="lg" className="mt-2 w-full">
                  Request Reservation
                </Button>
                <p className="text-center text-xs text-smoke">
                  No payment required · Confirmation by phone
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-cream/70">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-ink-950 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-rumbaGreen/60 [color-scheme:dark]"
      />
    </div>
  );
}
