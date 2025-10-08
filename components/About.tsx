import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/about-gym.jpg"
                            alt="About Rogue Gym Rongai"
                            width={650}
                            height={400}
                        />

                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h1 className="text-4xl font-semibold mb-4" >Who we are</h1>
                        <p className="text-lg text-gray-700">Rogue Gym Rongai is a premier fitness center located in the heart of Rongai. We are dedicated to providing our members with a world-class fitness experience. Our state-of-the-art facility is equipped with the latest cardio and strength training equipment, and we offer a wide range of group fitness classes to suit all levels and interests.</p>
                        <p className="text-lg text-gray-700 mt-4">Our team of certified personal trainers is passionate about helping you achieve your fitness goals. Whether you are a beginner or a seasoned athlete, we are here to support you on your journey to a healthier, stronger you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}