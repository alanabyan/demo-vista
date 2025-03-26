"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { images } from "../../../utils/constants/images";
import { Button } from "../ui/button";

export default function TourismCategory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    { name: "Bali", image: images.Bali },
    { name: "Jogja", image: images.Jogja },
    { name: "Riau", image: images.Riau },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length
    );
  };
  return (
    <div className=" mt-7">
      <div className="md:flex-row flex flex-col md:justify-between md:items-center gap-y-8 md:gap-y-0">
        <h1 className="text-5xl font-normal max-w-[542px] w-full leading-[1.2]">
          <span className="font-semibold">Your</span> next{" "}
          <span className="font-semibold">favorite</span> place awaits
        </h1>
        <p className="text-2xl w-full max-w-[317px]">
          The most talked about places among travelers
        </p>
        <div className="flex gap-x-5">
          <div className="border-[3px] border-black rounded-full w-[64px] h-[64px] flex justify-center items-center transition-all duration-300 ease-in hover:scale-110" onClick={prevSlide}>
            <Icon icon="iconamoon:arrow-left-2-light" width="64" height="64" />
          </div>
          <div className="border-[3px] border-black rounded-full w-[64px] h-[64px] flex justify-center items-center transition-all duration-300 ease-in hover:scale-110" onClick={nextSlide}>
            <Icon icon="iconamoon:arrow-right-2-light" width="64" height="64" />
          </div>
        </div>
      </div>
      <div className="relative w-full mt-10">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 lg:gap-x-[70px] md:gap-x-[40px] sm:gap-x-[20px] gap-x-[10px] w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-[120px] sm:gap-y-[150px] md:gap-y-[190px] lg:gap-y-[250px] w-full max-w-[300px] lg:max-w-[430px] rounded-2xl h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <Button variant={"totalDestination"} className="w-full text-[8px] md:text-base max-w-[70px] md:max-w-[155px] lg:max-w-[215px] h-[20px] md:h-[48px] mt-2 ml-2 sm:mt-[13px] sm:ml-[14px]">14 Destination</Button>
                <h1 className="font-medium text-xl sm:text-2xl text-white px-6">
                  {dest.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[34px]">
          {destinations.map((_, index) => (
            <div
              key={index}
              className={`h-0.5 w-[205px] mx-1 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-black" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
