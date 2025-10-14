import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Membership />
    </main>
  );
}
