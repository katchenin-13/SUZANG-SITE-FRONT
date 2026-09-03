import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="relative lg:min-h-screen w-full flex flex-col lg:flex-row items-start justify-start overflow-hidden px-4 md:px-10 xl:px-[120px] pt-12 lg:pt-[80px] pb-10 lg:pb-20 bg-black" id="about">
      
      {/* Background Image Container (Relative on mobile, Absolute on desktop) */}
      <div className="relative lg:absolute right-0 top-0 bottom-0 z-0 w-full lg:w-[60%] h-[300px] md:h-[400px] lg:h-full order-2 lg:order-none mt-2 lg:mt-0">
        <Image
          src="/images/RECADRAGE/RECADRAGE-02.png"
          alt="About Drummer"
          fill
          className="object-cover object-[75%_bottom] lg:object-right"
          priority
        />
      </div>

      {/* Content Container (Relative foreground) */}
      <div className="relative z-10 w-full md:w-[80%] lg:w-[45%] xl:w-[40%] flex flex-col items-start gap-5 lg:gap-8 order-1 lg:order-none">

        {/* Title Area */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white text-[24px] md:text-[32px] font-normal uppercase leading-tight text-left">
            {t('title')}
          </h2>
          <div className="h-[4px] w-[60px] bg-[#f9b442] rounded-sm"></div>
        </div>

        {/* Text content */}
        <p className="text-white/90 text-[16px] leading-[1.6] text-justify max-w-[600px]">
          {t('description')}
        </p>

        {/* Button & Graphic container */}
        <div className="flex flex-col items-start w-full max-w-[600px] mt-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 bg-[#f9b442] hover:bg-[#e5a02e] text-black font-semibold rounded-md text-[15px] transition-all duration-300"
          >
            {t('button')}
          </Link>

          <div className="w-full mt-4 lg:mt-6 flex justify-start scale-110 lg:scale-100 pointer-events-none origin-left">
            <div className="relative w-full max-w-[400px] h-[80px] md:h-[120px] lg:h-[150px]">
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
