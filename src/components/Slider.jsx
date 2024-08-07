import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider({getSlidersList}) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {getSlidersList.map((slider, index) => (
            <CarouselItem key={index}>
              <Image
                className="w-full h-[200px] sm:h-[300px]  md:h-[450px] overflow-hidden object-cover rounded-2xl"
                width={1000}
                height={400}
                src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${slider?.attributes?.image?.data[0]?.attributes?.url}`}
                unoptimized={true}
                alt="slider image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;
