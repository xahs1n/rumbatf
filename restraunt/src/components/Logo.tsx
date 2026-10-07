import { cn } from "@/lib/utils";

type LogoVariant = "gold" | "white" | "dark" | "mono";

const palettes: Record<
  LogoVariant,
  { primary: string; secondary: string; flame: string; ring: string }
> = {
  gold: { primary: "#f0cd6a", secondary: "#d4a537", flame: "#d63a1e", ring: "#d4a537" },
  white: { primary: "#ffffff", secondary: "#e5e5e5", flame: "#ffffff", ring: "#ffffff" },
  dark: { primary: "#0a0a0b", secondary: "#0a0a0b", flame: "#0a0a0b", ring: "#0a0a0b" },
  mono: { primary: "#a1a1aa", secondary: "#71717a", flame: "#a1a1aa", ring: "#71717a" },
};

/** The Ahsan Fry Chicken emblem — luxury badge, flame, and crispy chicken drumstick. */
export function LogoMark({
  variant = "gold",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const c = palettes[variant];
  const gid = `lg-${variant}`;
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Ahsan Fry Chicken emblem"
    >
      <defs>
        <linearGradient id={`${gid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.primary} />
          <stop offset="1" stopColor={c.secondary} />
        </linearGradient>
        <linearGradient id={`${gid}-f`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor={c.flame} />
          <stop offset="1" stopColor={c.primary} />
        </linearGradient>
      </defs>

      {/* Badge ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={c.ring} strokeWidth="1.4" opacity="0.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke={`url(#${gid}-g)`} strokeWidth="2.4" />

      {/* decorative crispy dots ring */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <circle
            key={i}
            cx={50 + Math.cos(a) * 38}
            cy={50 + Math.sin(a) * 38}
            r={i % 2 ? 0.9 : 0.5}
            fill={c.ring}
            opacity="0.55"
          />
        );
      })}

      {/* Flame */}
      <path
        d="M50 20c5 6 3 10 6 14 2 3 6 4 6 10a12 12 0 0 1-24 0c0-4 2-6 4-9 1 3 3 4 4 3-2-6 1-13 0-18z"
        fill={`url(#${gid}-f)`}
      />

      {/* Drumstick */}
      <g>
        <path
          d="M38 52c-4 4-6 9-4 14 2 5 8 7 13 5l3-1 9 9c1.5 1.5 4 1.5 5.5 0s1.5-4 0-5.5l-9-9 1-3c2-5 0-11-5-13-5-2-10 0-13.5 3.5z"
          fill={`url(#${gid}-g)`}
        />
        <circle cx="65" cy="76" r="4.4" fill={c.primary} />
        <path d="M63 74l4 4M67 74l-4 4" stroke={c.secondary} strokeWidth="1" opacity="0.5" />
      </g>

      {/* monogram */}
      <text
        x="50"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="2"
        fill={c.ring}
        opacity="0.7"
      >
        EST · AFC
      </text>
    </svg>
  );
}

export function Logo({
  variant = "gold",
  className,
  showText = true,
}: {
  variant?: "gold" | "white" | "dark" | "mono";
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="shrink-0 flex items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-black border border-rumbaGreen/20">
        <img src="/logo.jpg" alt="Rumba - The Meat Factory" className="h-full w-full object-cover" />
      </div>
      {showText && (
        <div className="leading-none flex flex-col justify-center">
          <span
            className={cn(
              "block font-display text-2xl tracking-[0.14em]",
              variant === "gold" ? "text-gradient-green" : "text-white",
            )}
          >
            RUMBA
          </span>
          <span
            className={cn(
              "block font-heading text-[0.6rem] font-semibold uppercase tracking-[0.42em]",
              variant === "dark" ? "text-ink-950/70" : "text-rumbaOrange",
            )}
          >
            The Meat Factory
          </span>
        </div>
      )}
    </div>
  );
}
