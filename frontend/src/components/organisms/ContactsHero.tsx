import Image from "next/image";

export function ContactsHero() {
  return (
    <section className="w-full relative bg-white pt-[120px] md:pt-[160px] lg:pt-[220px] pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px]">
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
          <Image
            src="/images/RECADRAGE/RECADRAGE-12.png"
            alt="Contacts Hero"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            priority
          />
        </div>
      </div>
    </section>
  );
}
