import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="w-full relative bg-white pt-[120px] md:pt-[160px] lg:pt-[220px] pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px]">
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/RECADRAGE/RECADRAGE-12.png"
            alt="Services Hero"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-1000"
            priority
          />
        </div>
      </div>
    </section>
  );
}
