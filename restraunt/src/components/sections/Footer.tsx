"use client";

import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { DiamondPattern } from "@/components/ui/Decor";

const columns = [
  {
    title: "Explore",
    links: ["About", "Menu", "Gallery", "Reviews", "Reserve"],
  },
  {
    title: "Menu",
    links: ["Steaks", "Platters", "Chicken", "Burgers & Sandwiches", "Desserts"],
  },
  {
    title: "Company",
    links: ["Careers", "Franchise", "Catering", "Press", "Contact"],
  },
];

const socials = [Instagram, Facebook, Twitter, Youtube];

export function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20">
      <DiamondPattern />
      <div className="container-luxe relative">
        {/* Newsletter */}
        <div className="glass-dark mb-16 grid gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:items-center md:p-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-cream md:text-3xl">
              Join the <span className="text-gradient-orange">Rumba Club</span>
            </h3>
            <p className="mt-2 text-smoke">
              Exclusive offers, secret menu drops and a free side on your birthday.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/10 bg-ink-950 px-5 py-3.5 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-rumbaOrange/60"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-6 py-3.5 font-heading font-semibold text-ink-950 shadow-orange transition-transform hover:-translate-y-0.5"
            >
              {sent ? "Subscribed!" : "Subscribe"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Main */}
        <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
              The gold standard of premium steaks. Wood-fired, dry-aged, and crafted for the meat lovers.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-rumbaOrange/40 hover:text-rumbaOrange"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-rumbaGreen">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-sm text-smoke transition-colors hover:text-cream"
                    >
                      <span className="mr-0 h-px w-0 bg-rumbaGreen transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-smoke md:flex-row">
          <p>© {new Date().getFullYear()} Rumba - The Meat Factory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-rumbaGreen">Privacy</a>
            <a href="#" className="transition-colors hover:text-rumbaGreen">Terms</a>
            <a href="#" className="transition-colors hover:text-rumbaGreen">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
