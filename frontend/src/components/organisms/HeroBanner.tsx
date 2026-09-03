import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/RECADRAGE/RECADRAGE-01.png"
          alt="Tree background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Subtle overlay to enhance text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>



      {/* Main Content (Animation) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none w-full">
         <Image 
           src="/images/RECADRAGE/ANIMATION.gif"
           alt="Animation Faces"
           width={1920}
           height={600}
           className="w-full h-auto"
           unoptimized
         />
      </div>

      {/* Bottom Slogan */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center w-full px-4">
        <h2 className="text-[#f9b442] text-[22px] sm:text-[28px] md:text-[48px] font-sans font-bold uppercase tracking-widest text-center drop-shadow-2xl">
          Se poser sans s'imposer
        </h2>
      </div>
    </section>
  );
}
