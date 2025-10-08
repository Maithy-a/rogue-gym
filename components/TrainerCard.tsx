import Image from "next/image";

interface TrainerCardProps {
    name: string;
    specialty: string;
    image: string;
    bio: string;
    qualities: string[];
}

export default function TrainerCard({
    name,
    specialty,
    image,
    bio,
    qualities,
}: TrainerCardProps) {
    return (
        <div className="bg-white p-6 flex flex-col items-center text-center rounded-3xl">
            <div className="relative w-32 h-32 mb-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="rounded-full object-cover ring-4"
                />
            </div>

            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{specialty}</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">{bio}</p>

            <div className="flex flex-wrap justify-center gap-2">
                {qualities.map((quality, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full dark:bg-orange-400/20 dark:text-orange-300"
                    >
                        {quality}
                    </span>
                ))}
            </div>
        </div>

    );
}