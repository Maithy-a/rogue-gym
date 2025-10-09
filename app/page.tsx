import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Membership />
    </main>
  );
}
