import Image from "next/image";

export function ReferencesSection() {
  const references = [
    "/images/reference/ref1.png",
    "/images/reference/ref2.png",
    "/images/reference/ref3.png",
    "/images/reference/ref4.png",
    "/images/reference/ref5.png",
    "/images/reference/ref6.png",
    "/images/reference/ref7.png",
  ];

  return (
    <section className="w-full bg-[#f8f8f8] pt-4 md:pt-6 pb-8 md:pb-16 px-4 md:px-10 xl:px-[120px] flex flex-col items-center overflow-hidden">
      
      <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-black mb-6 md:mb-12">
        Références
      </h2>

      <div className="w-full flex overflow-x-auto flex-nowrap items-center justify-start xl:justify-center gap-6 md:gap-16 lg:gap-20 px-2 py-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {references.map((src, idx) => (
          <div key={idx} className="relative shrink-0 w-[100px] md:w-[120px] lg:w-[140px] h-[50px] md:h-[80px]">
            <Image
              src={src}
              alt={`Référence ${idx + 1}`}
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
