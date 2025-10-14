import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

interface HeaderLinkProps {
    href: string;
    label: string;
}

import { HeaderLinks } from "@/constants";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white/70 border-b-2 border-white/10 backdrop-blur-2xl shadow-sm w-full px-10 py-6 fixed top-0 left-0 right-0 z-50">
            <Link href="/" className=" flex text-2xl font-semibold items-center">
                <Image
                    src="/favicon.svg"
                    alt="Rogue Gym"
                    width={34}
                    height={34}
                />
                <span className="ml-2">Rogue gym</span>
            </Link>

            <nav>
                {HeaderLinks.map(({ href, label }: HeaderLinkProps, index) => (
                    <Link key={index} href={href} className="mx-2 text-gray-600 hover:text-orange-600">
                        {label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-2">
                <Button size="lg"
                    variant="outline"
                    className="border rounded-xl" >
                    <Link href="#contact">Contact Us</Link>
                </Button>
                <SignedOut>
                    <SignInButton >
                        <Button
                            className="mr-4 px-6 py-4 rounded-xl"
                            variant="default"
                            size="lg"
                        >
                            Sign In
                        </Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <Button
                        className="mr-4 px-6 py-4 rounded-xl"
                        variant="default"
                        size="lg"
                    >
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </Button>
                </SignedIn>
            </div>
        </header>
    );
}
