import Image from "next/image";
import Link from "next/link";

export function ExcellenceSection() {
  return (
    <section className="relative lg:min-h-screen w-full flex flex-col lg:flex-row items-center justify-start overflow-hidden px-4 md:px-10 xl:px-[120px] pt-12 lg:pt-[80px] pb-10 lg:pb-20 bg-black">
      
      {/* Background Image Container (Relative on mobile, Absolute on desktop) */}
      <div className="relative lg:absolute right-0 top-0 bottom-0 z-0 w-full lg:w-[60%] h-[300px] md:h-[400px] lg:h-full order-2 lg:order-none mt-2 lg:mt-0">
        <Image
          src="/images/RECADRAGE/RECADRAGE-04.png"
          alt="Excellence"
          fill
          className="object-cover object-[75%_bottom] lg:object-right"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full lg:w-[45%] xl:w-[40%] flex flex-col items-start gap-5 lg:gap-8 order-1 lg:order-none">
        
        <div className="w-full max-w-[800px] flex flex-col items-start">
          {/* Title Area */}
          <div className="flex flex-col items-start gap-2 mb-4 lg:mb-10">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-normal uppercase leading-tight text-left">
              LE MEILLEUR, RIEN DE MOINS
            </h2>
            <div className="h-[4px] w-[80px] bg-[#f9b442] rounded-sm"></div>
          </div>

          {/* Text content - Two columns */}
          <div className="text-white/90 text-[16px] leading-[1.7] text-justify columns-1 md:columns-2 gap-8 w-full">
            <p>
              L'environnement est exigeant, tout comme le bois sacré. Nous avons forgé une culture du courage, incluant la capacité à nous remettre en question. La confidentialité n'est pas qu'une simple règle, elle est une stratégie à part entière, aussi essentielle que la communication. Car dans l'art de la chasse, l'élément de surprise est une force qui crée l'avantage. Animés par la quête de l'excellence, nous explorons les technologies les plus avancées et traquons les solutions les plus adaptées pour relever avec vous chaque défi
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 w-full flex justify-start lg:justify-end">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#f9b442] hover:bg-[#e5a02e] text-black font-semibold rounded-md text-[15px] transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>

          {/* Decorative Graphic */}
          <div className="w-full mt-2 md:-mt-8 flex justify-start pointer-events-none scale-110 lg:scale-125 origin-left lg:origin-top-left">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] h-[80px] lg:h-[150px]">
              <Image
                src="/images/RECADRAGE/RECADRAGE-08.png"
                alt="Decoration Ligne"
                fill
                className="object-contain object-left lg:object-left-top"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
