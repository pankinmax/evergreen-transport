import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Executive } from "@/components/sections/executive";
import { Benefits } from "@/components/sections/benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Executive />
      <Benefits />
    </>
  );
}
