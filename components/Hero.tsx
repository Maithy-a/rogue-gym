import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/about-gym.jpg')" }}        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            <div className="relative z-10 text-white text-center max-w-3xl px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Welcome to <span className="text-primary">Rogue Gym Rongai</span>
                </h1>
                <p className="mt-6 text-lg md:text-2xl font-light text-gray-200">
                    Your fitness journey starts here. Train harder, feel stronger, and become unstoppable.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg"
                        variant={"default"}
                        asChild
                        className="px-8 py-6 text-lg rounded-2xl shadow-lg">
                        <Link href="/signup">Get Started</Link>
                    </Button>
                    <Button
                        size="lg"
                        asChild
                        variant={"secondary"}
                        className="px-8 py-6 text-lg rounded-2xl border-2"
                    >
                        <Link href="/about">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
