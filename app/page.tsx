import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-[#FAFAFA]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Membership />
    </main>
  );
}
