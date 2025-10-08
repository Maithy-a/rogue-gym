import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-[#FAFAFA]">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
