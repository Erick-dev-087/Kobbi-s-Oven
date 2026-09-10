import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedTreats } from "@/components/sections/FeaturedTreats";
import { ExpandingBakeryImage } from "@/components/sections/ExpandingBakeryImage";
import { OccasionCakes } from "@/components/sections/OccasionCakes";
import { Locations } from "@/components/sections/Locations";
import { MenuCTA } from "@/components/sections/MenuCTA";
import { OrderCTA } from "@/components/sections/OrderCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedTreats />
      <ExpandingBakeryImage />
      <OccasionCakes />
      <Locations />
      <MenuCTA />
      <OrderCTA />
    </>
  );
}
