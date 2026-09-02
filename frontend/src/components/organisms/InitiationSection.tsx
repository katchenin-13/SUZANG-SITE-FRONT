import Image from "next/image";
import Link from "next/link";

export function InitiationSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-end overflow-hidden px-4 md:px-10 xl:px-[120px] pt-[80px] pb-20 bg-black">
      
      {/* Background Image Container (Absolute) */}
      <div className="absolute left-0 top-0 bottom-0 z-0 w-full lg:w-[60%] h-full">
        <Image
          src="/images/RECADRAGE/RECADRAGE-03.png"
          alt="Initiation"
          fill
          className="object-contain md:object-cover object-bottom md:object-left"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full lg:w-[50%] flex flex-col items-end gap-8">
        
        <div className="w-full max-w-[800px] flex flex-col items-end">
          {/* Title Area */}
          <div className="flex flex-col items-end gap-2 mb-10">
            <h2 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-normal uppercase leading-tight text-right">
              UNE INITIATION ,DEUX MAÎTRES
            </h2>
            <div className="h-[4px] w-[80px] bg-[#f9b442] rounded-sm"></div>
          </div>

          {/* Text content - Two columns */}
          <div className="text-white/90 text-[16px] leading-[1.7] text-justify columns-1 md:columns-2 gap-8 w-full">
            <p>
              Le terrain est impitoyable tout comme le bois sacré... y compris le courage et la culture de se remettre en cause. Nous manions la confidentialité comme une stratégie à part entière au même titre que la publicité. Car en matière de chasse, la surprise est un art qui permet de prendre l'avantage. Nous visons l'excellence. Nous débusquons les meilleures technologies pourchassons les meilleures solutions pour appâter les réponses les plus adaptées aux défis que vous affrontez. Sur tous les canaux, nous planifions, préparons et organisons minutieusement cette rencontre entre vous et le client. Sur tous les canaux, nous planifions, préparons et organisons minutieusement cette rencontre entre vous et le client chasse. "Si nous traquons le gibier c'est pour l'accrocher à votre tableau."
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 w-full flex justify-end">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#f9b442] hover:bg-[#e5a02e] text-black font-semibold rounded-md text-[15px] transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
