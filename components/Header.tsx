"use client";

import Link from "next/link";
import Image from "next/image"
import { Button } from "@/components/ui/button";

interface HeaderLinkProps {
    href: string;
    label: string;
}

import { HeaderLinks } from "@/constants";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md w-full">
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

            <div>
                <Button
                    className="mr-4 px-6 py-4 text-[15px] rounded-full"
                    variant="outline"
                >
                    Sign In
                </Button>
                <Button
                    className="mr-4 px-6 py-4 text-[15px] rounded-full"
                    variant="default"
                >
                    Sign Up
                </Button>
            </div>
        </header>
    );
}
