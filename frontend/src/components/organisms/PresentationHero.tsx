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
    <section className="w-full relative bg-white pt-[120px] md:pt-[160px] lg:pt-[220px] pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px]">
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] max-w-full group">
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
            className="w-full h-full"
          >
            <CarouselContent className="-ml-0">
              {slides.map((src, index) => (
                <CarouselItem key={index} className="relative pl-0 h-[250px] md:h-[350px] lg:h-[450px] w-full">
                  <Image
                    src={src}
                    alt={`Presentation Slide ${index + 1}`}
                    fill
                    className="object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-1000"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center items-center gap-3">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === i + 1 ? "bg-red-600 scale-110" : "bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
