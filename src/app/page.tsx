import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Benefits />
    </>
  );
}
