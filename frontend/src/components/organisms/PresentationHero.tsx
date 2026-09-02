"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export function PresentationHero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides = [
    "/images/RECADRAGE/RECADRAGE-12.png",
    "/images/RECADRAGE/RECADRAGE-09.png",
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-28 pb-12 px-4 md:px-12 lg:px-24">
      <div className="relative w-full max-w-7xl">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {slides.map((src, index) => (
              <CarouselItem key={index} className="relative pl-0 h-[60vh] md:h-[75vh] w-full">
                <Image
                  src={src}
                  alt={`Presentation Slide ${index + 1}`}
                  fill
                  className="object-cover object-center rounded-xl"
                  priority={index === 0}
                />
                {/* <div className="absolute inset-0 bg-black/20 rounded-xl" /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Custom Pagination Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i + 1 ? "bg-red-600 scale-110" : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
