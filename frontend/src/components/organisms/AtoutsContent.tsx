"use client";

import { useState } from "react";
import Image from "next/image";

type CardData = {
  id: number;
  title: string;
  shortText: string;
  fullText: string;
};

const atoutsData: CardData[] = [
  {
    id: 1,
    title: "Relation client",
    shortText: "Nous cultivons une relation de proximité avec nos clients en leur offrant une écoute active et un accompagnement personnalisé.",
    fullText: "Nous cultivons une relation de proximité avec nos clients en leur offrant une écoute active et un accompagnement personnalisé. Grâce à un service après-vente réactif et efficace, nous anticipons leurs besoins et leur apportons des solutions adaptées, renforçant ainsi leur confiance et notre partenariat sur le long terme."
  },
  {
    id: 2,
    title: "PERSONNALISATION",
    shortText: "Equipe dynamique et passionnée, issue de divers domaines professionnels allant de l'informatique au management....",
    fullText: "Equipe dynamique et passionnée, issue de divers domaines professionnels allant de l'informatique au management. Nous mettons un point d'honneur à personnaliser chaque interaction pour garantir une expérience unique à chaque client."
  },
  {
    id: 3,
    title: "Mantra",
    shortText: "Synergie et innovation sont les deux mots qui encapsulent l'esprit et la force directrice qui prévalent à Suzang....",
    fullText: "Synergie et innovation sont les deux mots qui encapsulent l'esprit et la force directrice qui prévalent à Suzang. C'est ce mantra qui nous pousse chaque jour à concevoir des solutions hors du commun pour répondre à vos exigences."
  },
  {
    id: 4,
    title: "LA FORCE D'UNE SYNERGIE",
    shortText: "Nous croyons en l'esprit d'équipe et en ses vertus. De ce fait, chaque projet que nous réalisons est soumis...",
    fullText: "Nous croyons en l'esprit d'équipe et en ses vertus. De ce fait, chaque projet que nous réalisons est soumis à l'expertise combinée de plusieurs spécialistes, garantissant ainsi un résultat robuste, complet et performant."
  }
];

export function AtoutsContent() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section className="w-full py-16 px-4 md:px-10 xl:px-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <div className="w-full flex flex-col items-start gap-2 mb-10">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-normal uppercase text-[#1a2b3c] tracking-wide">
            UNE INITIATION ,DEUX MAÎTRES
          </h2>
          <div className="h-[4px] w-[80px] bg-[#f9b442] rounded-sm"></div>
        </div>

        {/* Text Intro */}
        <div className="w-full text-[15px] md:text-[16px] text-gray-700 leading-relaxed text-justify mb-16">
          <div className="columns-1 md:columns-2 gap-12">
            <p>
              Le terrain est impitoyable, tout comme le bois sacré, y compris le courage de la culture du courage de se remettre en cause. Nous manions la confidentialité comme une stratégie à part entière au même titre que la publicité. Car en matière de chasse, la surprise est un art qui permet de prendre d'avantage. Nous visons l'excellence. Nous débusquons les meilleures technologies pourchassons les meilleures solutions pour appâter les réponses les plus adaptées aux défis que vous affrontez Sur tous les canaux, nous planifions, préparons et organisons minutieusement cette rencontre entre vous et le client. "Si nous traquons le gibier c'est pour l'accrocher à votre tableau."
            </p>
          </div>
        </div>

        {/* Grid Area */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {atoutsData.map((card) => (
            <div key={card.id} className="bg-[#fcfcfc] rounded-lg p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex gap-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="shrink-0 mt-1">
                {/* Red Chevron Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e02424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 22 8"></polyline>
                  <polyline points="2 13 7 18 17 8"></polyline>
                </svg>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-[17px] font-bold text-gray-900 uppercase mb-3">{card.title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                  {card.shortText}
                </p>
                <button 
                  onClick={() => setSelectedCard(card)}
                  className="self-end text-[14px] font-bold text-black hover:text-[#f9b442] transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

      {/* Detail Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedCard(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-[800px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#1a2b3c] uppercase tracking-wider">{selectedCard.title}</h3>
                <div className="w-12 h-1 bg-[#f9b442] rounded-full"></div>
              </div>
              <button 
                onClick={() => setSelectedCard(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-all duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 overflow-y-auto">
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-10 text-justify font-light">
                {selectedCard.fullText}
              </p>

              {/* Graphic */}
              <div className="w-full flex justify-center mb-12">
                <div className="relative w-full max-w-[500px] h-[120px] md:h-[160px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <Image 
                    src="/images/RECADRAGE/RECADRAGE-081.png"
                    alt="Décoration"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Brands */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Appatam", "Djela", "Suzang", "Socopi", "Yefien"].map((brand) => (
                  <span key={brand} className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50/80 text-gray-700 text-[14px] font-medium tracking-wide hover:border-[#f9b442] hover:text-[#f9b442] hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end p-6 bg-gray-50/80 border-t border-gray-100">
              <button 
                onClick={() => setSelectedCard(null)}
                className="px-8 py-3 bg-[#1a2b3c] hover:bg-[#f9b442] text-white hover:text-black font-semibold rounded-lg text-[15px] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
