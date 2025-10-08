"use client";

import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from "@/components/ui/carousel";
import { trainers } from "@/constants";
import TrainerCard from "./TrainerCard";

export default function CarouselTrainers() {
    return (
        <div className="relative w-full px-4 py-12">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                Meet Our Trainers
            </h2>
            <Carousel>
                <CarouselContent className="-ml-4">
                    {trainers.map((trainer, index) => (
                        <CarouselItem key={index} className="basis-1/3 pl-4">
                            <TrainerCard
                                // name={trainer.name}
                                // specialty={trainer.specialty}
                                // image={trainer.image}
                                // qualities={trainer.qualities}
                                // bio={trainer.bio}
                                {...trainer}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselNavigation
                    className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
                    classNameButton='bg-primary *:stroke-zinc-50 dark:bg-primary dark:*:stroke-zinc-800'
                    alwaysShow
                />
            </Carousel>
        </div>
    );
}