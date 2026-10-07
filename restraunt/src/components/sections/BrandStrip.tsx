import { Flame } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const phrases = [
  "21-Day Dry Aged",
  "Wood-Fired Sear",
  "Prime Grade Beef",
  "100% Halal Certified",
  "Fresh · Never Frozen",
  "The Meat Factory",
  "Charcoal Flame Finished",
];

export function BrandStrip() {
  return (
    <div className="relative border-y border-white/10 bg-ink-950 py-5">
      <Marquee speed={30}>
        {phrases.map((p) => (
          <span key={p} className="flex items-center gap-10">
            <span className="font-display text-2xl uppercase tracking-[0.2em] text-cream/80">
              {p}
            </span>
            <Flame className="h-5 w-5 text-rumbaOrange" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
