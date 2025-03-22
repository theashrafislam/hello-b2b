import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative w-full h-[1358px]">
            {/* Background Image */}
            <Image
                src="/bg.png"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col text-white text-center bg-black/50">
                <div className="mt-[133px] text-left">
                    <h1 className="text-[35px] font-semibold text-[#FFFBFB] ml-[374px]">Welcome to Halal Fly</h1>
                    <h1 className="ml-[336px] font-semibold text-[50px] text-[#FFF]">Discover Halal Experiences</h1>
                    <h1 className="ml-[600px] font-semibold text-[50px] text-[#FFF]">Not Just Travel</h1>
                    <h1 className="text-[#FFF] ml-[337px] font-semibold text-[35px]">
                        We provide Travel and Umrah Package all over the world
                    </h1>
                </div>
            </div>

            {/* Booking Section Image */}
            <div className="max-w-6xl mx-auto">
                {/* <Image
                    src="/book.png"
                    alt="Hero Booking"
                    width={1200}  // Adjust width as needed
                    height={450}  // Adjust height as needed
                    quality={100}
                    priority
                /> */}
                <img src="/book.png" alt="Hero Booking" className="w-[1100px] top-[1140px] absolute"/>
            </div>
        </div>
    );
};

export default HeroSection;