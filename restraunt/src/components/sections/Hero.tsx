"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, UtensilsCrossed } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { Blob } from "@/components/ui/Decor";

const words = ["Wood-Fired.", "Premium.", "Iconic."];

const floaters = [
  { src: "/images/menu/chicken-bucket.jpg", className: "left-[4%] top-[24%] h-28 w-28 md:h-36 md:w-36", depth: 34, delay: 0 },
  { src: "/images/menu/hot-wings.jpg", className: "right-[5%] top-[18%] h-24 w-24 md:h-32 md:w-32", depth: -28, delay: 0.6 },
  { src: "/images/menu/chicken-burger.jpg", className: "left-[8%] bottom-[16%] h-24 w-24 md:h-28 md:w-28", depth: 22, delay: 1.1 },
  { src: "/images/menu/loaded-fries.jpg", className: "right-[8%] bottom-[20%] h-24 w-24 md:h-32 md:w-32", depth: -34, delay: 0.3 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video autoplay prevented by browser policy:", err);
        });
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  function onMouse(e: React.MouseEvent) {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 2);
    my.set((e.clientY / innerHeight - 0.5) * 2);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouse}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <motion.div style={{ scale: scaleVideo }} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/banner.png"
          className="h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/70" />
      <div className="absolute inset-0 bg-radial-fade" />

      <Blob className="left-1/4 top-1/3 h-72 w-72" color="rgba(139,217,78,0.18)" />
      <Blob className="right-1/4 bottom-1/4 h-80 w-80" color="rgba(255,127,17,0.16)" delay={1.5} />

      {/* Floating spice particles */}
      {Array.from({ length: 22 }).map((_, i) => (
        <Particle key={i} i={i} />
      ))}

      {/* Floating food images */}
      {floaters.map((f, i) => (
        <Floater key={i} f={f} i={i} smx={smx} smy={smy} />
      ))}

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-luxe relative z-20 flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-rumbaOrange"
        >
          <Star className="h-3.5 w-3.5 fill-rumbaOrange" />
          Rated 4.9 · The Gold Standard
        </motion.span>

        <h1 className="font-display text-[16vw] leading-[0.82] tracking-tight text-cream sm:text-[13vw] md:text-[11rem]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              RUMBA
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gradient-green"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              The Meat Factory
            </motion.span>
          </span>
        </h1>

        <div className="mt-4 flex h-8 items-center gap-3 overflow-hidden font-heading text-lg font-semibold tracking-wide text-cream/90 md:text-2xl">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-rumbaOrange" />}
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-smoke md:text-lg"
        >
          A 21-day dry age, a premium wood-fired grill, and the finest cuts of beef. Steaks elevated into an experience worth gathering for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <Button size="lg" onClick={() => go("#menu")}>
              Explore the Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" onClick={() => go("#reserve")}>
              <UtensilsCrossed className="h-4 w-4" />
              Reserve a Table
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-cream/50">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border border-cream/30 pt-1.5">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-rumbaGreen"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

type FloaterDef = { src: string; className: string; depth: number; delay: number };

function Floater({
  f,
  i,
  smx,
  smy,
}: {
  f: FloaterDef;
  i: number;
  smx: import("framer-motion").MotionValue<number>;
  smy: import("framer-motion").MotionValue<number>;
}) {
  const x = useTransform(smx, (v) => v * f.depth);
  const y = useTransform(smy, (v) => v * f.depth);
  return (
    <motion.div
      className={`absolute z-10 hidden overflow-hidden rounded-3xl border border-white/10 shadow-luxe sm:block ${f.className}`}
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="animate-float h-full w-full" style={{ animationDelay: `${f.delay}s` }}>
        <Image src={f.src} alt="" fill sizes="160px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
      </div>
    </motion.div>
  );
}

function Particle({ i }: { i: number }) {
  const left = (i * 47) % 100;
  const size = 2 + (i % 4);
  const duration = 6 + (i % 6);
  const delay = (i % 10) * 0.7;
  return (
    <motion.span
      aria-hidden
      className="absolute rounded-full bg-rumbaOrange/60"
      style={{ left: `${left}%`, bottom: -10, width: size, height: size }}
      animate={{ y: [0, -560], opacity: [0, 0.9, 0], x: [0, (i % 2 ? 30 : -30)] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function go(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}
