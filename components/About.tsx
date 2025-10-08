"use client";

import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Dumbbell, Users, HeartPulse, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 space-y-20">

                <div className="flex flex-col md:flex-row items-start gap-10">
                    <div className="md:w-1/2">
                        <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
                            <Image
                                src="/images/gym-items.jpg"
                                alt="About Rogue Gym Rongai"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
                            Who We Are
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Rogue Gym Rongai is a premier fitness center located in the heart
                            of Rongai. We are dedicated to providing our members with a
                            world-class fitness experience. Our state-of-the-art facility is
                            equipped with the latest cardio and strength training equipment,
                            and we offer a wide range of group fitness classes to suit all
                            levels and interests.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mt-4">
                            Our team of certified personal trainers is passionate about
                            helping you achieve your fitness goals. Whether you are a beginner
                            or a seasoned athlete, we are here to support you on your journey
                            to a healthier, stronger you.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-10 text-gray-900">
                            Why Choose Us
                        </h2>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full max-w-3xl mx-auto"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    <div className="flex items-center gap-3">
                                        <Dumbbell className="w-5 h-5 text-orange-600" />
                                        Modern Equipment
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    Train with top-of-the-line cardio, strength, and functional
                                    training equipment. Our facility is regularly upgraded to ensure
                                    you always have access to the best tools for your fitness
                                    journey.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-orange-600" />
                                        Expert Trainers
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    Our certified trainers provide personalized guidance, helping
                                    you design workouts and nutrition plans that match your goals —
                                    whether it&apos;s weight loss, muscle building, or overall wellness.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                    <div className="flex items-center gap-3">
                                        <HeartPulse className="w-5 h-5 text-orange-600" />
                                        Community & Support
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    At Rogue Gym, you&apos;re more than just a member. You&apos;re part of a
                                    community that motivates and supports each other through every
                                    rep, class, and milestone.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-orange-600" />
                                        Clean & Welcoming Space
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    Our facility is maintained to the highest standards of hygiene
                                    and comfort, ensuring a safe and motivating environment where
                                    you can focus on achieving your best self.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
                        <div>
                            <h3 className="text-4xl font-bold text-orange-600">1,200+</h3>
                            <p className="text-gray-700 mt-2">Active Members</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-orange-600">50+</h3>
                            <p className="text-gray-700 mt-2">Weekly Classes</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-orange-600">20+</h3>
                            <p className="text-gray-700 mt-2">Expert Trainers</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-orange-600">100%</h3>
                            <p className="text-gray-700 mt-2">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
