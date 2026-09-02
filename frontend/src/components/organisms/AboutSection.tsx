import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative min-h-screen w-full flex items-start justify-start overflow-hidden px-4 md:px-10 xl:px-[120px] pt-[80px] pb-20 bg-black" id="about">
      
      {/* Background Image Container (Absolute) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/RECADRAGE/RECADRAGE-02.png"
          alt="About Drummer"
          fill
          className="object-contain md:object-cover object-bottom md:object-[90%_0%]"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full md:w-[60%] lg:w-[50%] flex flex-col items-start gap-8">

        {/* Title Area */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-[24px] md:text-[32px] font-normal uppercase leading-tight">
            LES CHASSEURS RELÂCHÉS DANS LA VILLE
          </h2>
          <div className="h-[4px] w-[60px] bg-[#f9b442] rounded-sm"></div>
        </div>

        {/* Text content */}
        <p className="text-white/90 text-[17px] leading-[1.6] text-justify max-w-[600px]">
          Nous sommes SUZANG GROUP, nous sortons du bois sacré. Une armée de chasseurs initiés aux arts de la guérilla urbaine. Nous chassons le consommateur, traquons ses attentes, reniflons ses besoins. Depuis 2014 nous pistons les tendances des marchés, pour accrocher le succès à votre tableau de chasse. "Si nous traquons le gibier c'est pour l'accrocher à votre tableau."
        </p>

        {/* Button & Graphic container */}
        <div className="flex flex-col items-end w-full max-w-[600px] mt-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 bg-[#f9b442] hover:bg-[#e5a02e] text-black font-semibold rounded-md text-[15px] transition-all duration-300"
          >
            En savoir plus
          </Link>

          <div className="w-full -mt-10 md:-mt-12 flex justify-start -ml-24 scale-125 origin-top-left md:-ml-12 md:scale-100 pointer-events-none">
            <div className="relative w-full max-w-[600px] md:max-w-[400px] h-[150px] md:h-[150px]">
              <Image
                src="/images/RECADRAGE/RECADRAGE-08.png"
                alt="Decoration Ligne"
                fill
                className="object-contain object-left-top"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
