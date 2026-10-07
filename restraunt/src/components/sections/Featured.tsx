"use client";

import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { featured } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Featured() {
  const [hero, ...rest] = featured;

  return (
    <section className="relative py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          align="left"
          eyebrow="Chef's Picks"
          title="The pieces we're"
          highlight="famous for"
          description="Hand-selected favourites that keep our guests coming back, week after week."
          className="max-w-2xl"
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Big feature card */}
          <RevealItem className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-luxe">
            <div className="relative h-full min-h-[26rem]">
              <Image
                src={hero.image}
                alt={hero.name}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="eyebrow mb-3">Signature</span>
                <h3 className="font-display text-5xl leading-none text-cream">
                  {hero.name}
                </h3>
                <p className="mt-3 max-w-md text-smoke">{hero.description}</p>
                <div className="mt-6 flex items-center gap-5">
                  <span className="font-display text-4xl text-gradient-green">
                    ${hero.price.toFixed(2)}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-rumbaOrange">
                    <Star className="h-4 w-4 fill-rumbaOrange" /> {hero.rating}
                  </span>
                </div>
              </div>
            </div>
          </RevealItem>

          {/* Smaller cards */}
          <div className="grid gap-6 sm:grid-cols-1">
            {rest.map((item) => (
              <RevealItem
                key={item.id}
                className="group relative flex overflow-hidden rounded-[1.5rem] border border-white/10 glass"
              >
                <div className="relative w-40 shrink-0 overflow-hidden sm:w-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-rumbaOrange">
                    <Star className="h-3.5 w-3.5 fill-rumbaOrange" /> {item.rating}
                  </div>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-cream">
                    {item.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-smoke">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-2xl text-gradient-green">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-rumbaOrange/40 text-rumbaOrange transition-all duration-300 group-hover:bg-orange-gradient group-hover:text-ink-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
