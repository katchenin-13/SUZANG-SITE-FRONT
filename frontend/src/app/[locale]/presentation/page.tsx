import { PresentationHero } from "@/components/organisms/PresentationHero";
import { PresentationContent } from "@/components/organisms/PresentationContent";
import { PresentationCompetences } from "@/components/organisms/PresentationCompetences";
import { PresentationNetworks } from "@/components/organisms/PresentationNetworks";

import Image from "next/image";

export default function PresentationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PresentationHero />
      <PresentationContent />
      <PresentationCompetences />
      <PresentationNetworks />
      
      {/* Decorative Graphic before footer */}
      <div className="w-full bg-white flex justify-center items-center pt-4 pb-8 pointer-events-none">
        <div className="relative w-full max-w-[600px] h-[80px] md:h-[100px]">
          <Image
            src="/images/RECADRAGE/RECADRAGE-081.png"
            alt="Decoration"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </main>
  );
}
