"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const details = [
  { icon: MapPin, title: "Visit Us", lines: ["Roomy Signature, Block 7, Agha Khan Rd", "F-6 Markaz, Islamabad, 44000"] },
  { icon: Phone, title: "Call Us", lines: ["(051) 8434755", "Reservations & queries"] },
  { icon: Mail, title: "Email", lines: ["hello@rumbathemeatfactory.com", "We reply within a day"] },
  { icon: Clock, title: "Hours", lines: ["Mon – Sun", "Open · Closes 11:30 pm"] },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Come Say Hello"
          title="Find your nearest"
          highlight="steakhouse"
          description="Drop in for a steak, book a table, or just say hi — we love a full house."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {details.map((d) => (
              <RevealItem
                key={d.title}
                className="glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-rumbaGreen/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-green-gradient text-ink-950 shadow-green transition-transform duration-500 group-hover:scale-110">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-cream">
                  {d.title}
                </h3>
                {d.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-smoke">
                    {l}
                  </p>
                ))}
              </RevealItem>
            ))}
            <RevealItem className="glass col-span-full flex items-center justify-between gap-4 rounded-2xl p-6">
              <span className="font-heading font-semibold text-cream">
                Follow the flavour
              </span>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:-translate-y-1 hover:border-rumbaGreen/40 hover:bg-green-gradient hover:text-ink-950"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Designed map */}
          <RevealItem className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-luxe">
            <StyledMap />
          </RevealItem>
        </div>
      </div>
    </section>
  );
}

function StyledMap() {
  return (
    <div className="relative h-full w-full bg-ink-900">
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Map showing our location"
      >
        <rect width="400" height="300" fill="#0d0d0f" />
        {/* roads */}
        {[40, 100, 160, 220, 260].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#1c1c20" strokeWidth="10" />
        ))}
        {[60, 140, 220, 300, 360].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#1c1c20" strokeWidth="10" />
        ))}
        <path d="M0 200 Q 200 160 400 220" stroke="#26262b" strokeWidth="14" fill="none" />
        {/* accent road */}
        <line x1="140" y1="0" x2="140" y2="300" stroke="#8bd94e" strokeWidth="2" opacity="0.35" />
        {/* blocks */}
        {[
          [70, 50, 60, 40], [230, 50, 60, 40], [70, 150, 60, 40], [300, 160, 50, 50],
        ].map((b, i) => (
          <rect key={i} x={b[0]} y={b[1]} width={b[2]} height={b[3]} fill="#141417" rx="4" />
        ))}
      </svg>

      {/* Pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <div className="relative flex flex-col items-center">
          <div className="glass-dark whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-rumbaGreen shadow-luxe">
            Rumba - The Meat Factory
          </div>
          <span className="mt-1 grid h-10 w-10 place-items-center rounded-full bg-green-gradient text-ink-950 shadow-green">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="h-3 w-3 -translate-y-1 rotate-45 bg-rumbaGreen" />
          <span className="absolute top-12 h-4 w-8 rounded-[50%] bg-black/40 blur-sm" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
    </div>
  );
}
