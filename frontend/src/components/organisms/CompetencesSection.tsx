import Image from "next/image";

export function CompetencesSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-end overflow-hidden px-4 md:px-10 xl:px-[120px] pt-[80px] pb-20 bg-black">
      
      {/* Background Image Container (Absolute) */}
      <div className="absolute left-0 top-0 bottom-0 z-0 w-full lg:w-[60%] h-full">
        <Image
          src="/images/RECADRAGE/RECADRAGE-05.png"
          alt="Personnages"
          fill
          className="object-contain md:object-cover object-bottom md:object-left"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full lg:w-[50%] flex flex-col items-end gap-8 mt-12 lg:mt-0">
        
        <div className="w-full max-w-[800px] flex flex-col items-end">
          {/* Title Area */}
          <div className="flex flex-col items-end gap-2 mb-8 md:mb-12">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-normal uppercase leading-tight text-right">
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
              className="object-contain object-right-top"
              priority
            />
          </div>
          
          {/* Brands / Entities */}
          <div className="w-[90%] md:w-[85%] lg:w-[80%] ml-auto flex flex-wrap items-center justify-start gap-3 md:gap-4 text-white text-sm md:text-base lg:text-lg font-bold tracking-wide mt-2">
            <span>APPATAM</span>
            <span>|</span>
            <span>DJELA</span>
            <span>|</span>
            <span>SOCOPI</span>
            <span>|</span>
            <span>SUZANG</span>
            <span>|</span>
            <span>YEFIEN</span>
          </div>
        </div>

      </div>

    </section>
  );
}
