import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Featured } from "@/components/sections/Featured";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Promotions } from "@/components/sections/Promotions";
import { Reservation } from "@/components/sections/Reservation";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BrandStrip />
        <About />
        <Menu />
        <Featured />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Promotions />
        <Reservation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
