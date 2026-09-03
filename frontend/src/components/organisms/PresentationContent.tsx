import Link from "next/link";
import Image from "next/image";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function PresentationContent() {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-10 xl:px-[120px] bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-[28px] md:text-[36px] font-normal uppercase text-slate-800 tracking-wide">
              LES CHASSEURS RELÂCHÉS DANS LA VILLE
            </h2>
            <div className="h-[4px] w-[120px] bg-[#f9b442] rounded-sm"></div>
          </div>

          <div className="flex flex-col gap-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed text-justify">
            <p>
              Suzang group SARL est une entreprise au capital de 5, 000,000 FCFA fondée par de jeunes ivoiriens et enregistrée sous dépôt au greffe N. 677 du 31 Janvier 2014 RCCM CI-ABJ-2014-B-2409
            </p>
            <p>
              Notre vision c'est d'être la référence et le leader de l'entrepreneuriat ivoirien. De ce fait nous nous assignons comme mission d'apporter à notre clientèle une gamme variée de produits et services innovateurs, de qualité et qui répondent exactement à leurs besoins
            </p>
            <p>
              Suzang group, c'est une équipe dynamique et passionnée. Une équipe issue de divers domaines allant de l'informatique (conception web, conception de logiciel, infographie, multimédia...)au management (consultance en création d'entreprise, gestion de projet...)
            </p>
            <p>
              Notre équipe est constituée de personnes ayant un esprit vif et dynamique, de personnes qui chaque jour se surpassent et repoussent les limites de leurs capacités
            </p>

            <div className="mt-4">
              <h3 className="font-bold text-[16px] text-black uppercase mb-2">NOTRE MISSION</h3>
              <p>
                Chez SUZANG GROUP, notre mission est au service de nos clients et pas l'inverse. Nous nous engageons à vous offrir des solutions de qualité qui tiennent compte des défis concurrentiels auxquels vous faites face. Nous croyons en la technologie au service de la société. Pour nous, l'innovation technologique, les outils et techniques les plus innovants doivent être mis à votre service pour apporter des changements positifs et concrets dans votre environnement.
              </p>
          </div>
        </div>
        </div>

        {/* Right Column - Social Links */}
        <div className="w-full lg:w-[400px] flex flex-col items-center pt-8 lg:pt-0">
          
          <div className="w-full bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center">
            
            <h3 className="text-center text-[22px] font-bold text-slate-800 mb-3">
              Nos références médias
            </h3>
            
            <div className="h-[3px] w-[40px] bg-[#f9b442] rounded-full mb-6"></div>

            <p className="text-center text-slate-600 text-[14px] mb-8 leading-relaxed">
              Votre avis compte. Nous vous invitons à nous suivre sur nos différentes plateformes pour rester informé.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Facebook */}
              <Link href="#" className="group flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#f9b442] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700 group-hover:text-black">Facebook</span>
              </Link>
              
              {/* Twitter */}
              <Link href="#" className="group flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#f9b442] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  <TwitterIcon className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700 group-hover:text-black">Twitter</span>
              </Link>

              {/* LinkedIn */}
              <Link href="#" className="group flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#f9b442] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700 group-hover:text-black">LinkedIn</span>
              </Link>

              {/* Youtube */}
              <Link href="#" className="group flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#f9b442] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
                <span className="text-[13px] font-semibold text-slate-700 group-hover:text-black">YouTube</span>
              </Link>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
