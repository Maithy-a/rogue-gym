import { services } from "@/constants";
import Image from "next/image";

interface Service {
    title: string;
    description: string;
    icon: string;
}

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-extrabold text-center mb-14">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(({ title, description, icon }: Service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 border-gray-200 rounded-3xl shadow-sm hover:shadow-md ring-6 ring-gray-100"
                        >
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-orange-100">
                                <Image
                                    src={icon}
                                    alt={title}
                                    width={64}
                                    height={64}
                                    className="object-contain border-2 border-orange-100 rounded-full shadow-sm"
                                />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
