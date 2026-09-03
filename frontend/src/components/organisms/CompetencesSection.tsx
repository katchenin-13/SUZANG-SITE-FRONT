import Image from "next/image";

export function CompetencesSection() {
  return (
    <section className="relative lg:min-h-screen w-full flex flex-col lg:flex-row items-center justify-end overflow-hidden px-4 md:px-10 xl:px-[120px] pt-12 lg:pt-[80px] pb-10 lg:pb-20 bg-black">
      
      {/* Background Image Container (Relative on mobile, Absolute on desktop) */}
      <div className="relative lg:absolute left-0 top-0 bottom-0 z-0 w-full lg:w-[60%] h-[300px] md:h-[400px] lg:h-full order-2 lg:order-none mt-2 lg:mt-0">
        <Image
          src="/images/RECADRAGE/RECADRAGE-05.png"
          alt="Personnages"
          fill
          className="object-cover object-[25%_bottom] lg:object-left"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full lg:w-[50%] flex flex-col items-start lg:items-end gap-5 lg:gap-8 mt-6 lg:mt-0 order-1 lg:order-none">
        
        <div className="w-full max-w-[800px] flex flex-col items-start lg:items-end">
          {/* Title Area */}
          <div className="flex flex-col items-start lg:items-end gap-2 mb-4 md:mb-12">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-normal uppercase leading-tight text-left lg:text-right">
              DOMAINES DE COMPÉTENCES
            </h2>
            <div className="h-[4px] w-[80px] bg-[#f9b442] rounded-sm"></div>
          </div>

          {/* Competences Image */}
          <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[16/10] mb-8">
            <Image
              src="/images/RECADRAGE/RECADRAGE-14.png"
              alt="Liste des domaines de compétences"
              fill
              className="object-contain object-left-top lg:object-right-top"
              priority
            />
          </div>
          
          {/* Brands / Entities */}
          <div className="w-full flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 md:gap-4 text-white text-[11.5px] sm:text-[13px] md:text-base lg:text-lg font-bold tracking-wide mt-2">
            <span>APPATAM</span>
            <span className="opacity-50">|</span>
            <span>DJELA</span>
            <span className="opacity-50">|</span>
            <span>SOCOPI</span>
            <span className="opacity-50">|</span>
            <span>SUZANG</span>
            <span className="opacity-50">|</span>
            <span>YEFIEN</span>
          </div>
        </div>

      </div>

    </section>
  );
}
