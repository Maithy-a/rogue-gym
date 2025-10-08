"use client";

import { plans } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

interface Plan {
    name: string;
    period: string;
    description: string;
    isPopular?: boolean;
    price: number;
    buttonText: string;
    features: { title: string }[];
}


const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  py-12 px-6">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Membership Packages</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10 text-center">
                Choose the right plan for your fitness goals. From a single workout to year-round access,
                Rogue Gym Rongai has something for everyone.
            </p>

            <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {plans.map(({ name, period, description, isPopular, price, buttonText, features }: Plan) => (
                    <div
                        key={name}
                        className={cn("relative border rounded-xl p-6 hover:shadow-lg transition", {
                            "border-2 border-primary py-10": isPopular,
                        })}
                    >
                        {isPopular && (
                            <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                                Most Popular
                            </Badge>
                        )}

                        <h3 className="text-lg font-medium">{name}</h3>
                        <p className="mt-2 text-4xl font-bold">
                            {price} KES
                            <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                                /{period}
                            </span>
                        </p>
                        <p className="mt-4 font-medium text-muted-foreground">
                            {description}
                        </p>

                        <Button
                            variant={isPopular ? "default" : "outline"}
                            size="lg"
                            className="w-full mt-6"
                        >
                            {buttonText}
                        </Button>
                        <Separator className="my-8" />
                        <ul className="space-y-2">
                            {features.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-1.5">
                                    <CircleCheck className="h-4 w-4 mt-1 text-primary" />
                                    {feature.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
