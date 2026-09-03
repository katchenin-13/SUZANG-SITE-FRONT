"use client";

import { useState } from "react";
import Image from "next/image";

type ServiceCard = {
  id: number;
  title: string;
  text: string;
  fullText: string;
};

const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: "COMMUNICATION",
    text: "Se différencier au sein d'un marché concurrentiel est votre défi, nous en faisons notre affaire. Nous vous accompagnons pour forger une identité unique et impactante.",
    fullText: "Se différencier au sein d'un marché concurrentiel est votre défi, nous en faisons notre affaire. Nous vous accompagnons pour forger une identité unique et impactante en déployant des stratégies de communication innovantes. De la conception de votre image de marque à son rayonnement sur tous les canaux, nous assurons que votre message résonne parfaitement auprès de votre audience."
  },
  {
    id: 2,
    title: "STRATÉGIE ET DÉVELOPPEMENT DES ORGANISATIONS",
    text: "Vous avez des ambitions, nous avons de l'expertise pour servir ces ambitions. Entreprises, organisations, institutions privées ou publiques, nous optimisons votre croissance.",
    fullText: "Vous avez des ambitions, nous avons de l'expertise pour servir ces ambitions. Entreprises, organisations, institutions privées ou publiques, nous optimisons votre croissance. À travers un audit profond de vos processus, nous identifions les leviers de performance et mettons en place des plans de développement structurés pour assurer votre succès sur le long terme."
  },
  {
    id: 3,
    title: "MARKETING POLITIQUE",
    text: "Vous êtes une personnalité politique, une autorité locale ? À travers notre pôle Marketing Politique, nous vous proposons des stratégies sur mesure pour asseoir votre vision.",
    fullText: "Vous êtes une personnalité politique, une autorité locale ? À travers notre pôle Marketing Politique, nous vous proposons des stratégies sur mesure pour asseoir votre vision. Nous organisons vos campagnes, affinons votre positionnement public, et maîtrisons la communication de crise pour vous garantir une image forte, crédible et en phase avec les attentes des citoyens."
  }
];

const brands = ["Appatam", "Djela", "Suzang", "Yefien", "Socopi"];

export function ServicesContent() {
  const [selectedCard, setSelectedCard] = useState<ServiceCard | null>(null);

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-10 xl:px-[120px] bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <div className="w-full flex flex-col items-start gap-4 mb-8">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold uppercase text-[#1a2b3c] tracking-wider">
            NOS ÉQUIPES POUR VOUS SERVIR
          </h2>
          <div className="h-[4px] w-[120px] bg-[#f9b442] rounded-sm"></div>
        </div>

        {/* Text Intro */}
        <div className="w-full text-[16px] md:text-[18px] text-gray-600 leading-relaxed text-justify mb-16 font-light">
          <p className="max-w-[1000px]">
            Nous sommes une équipe de jeunes dynamiques et déterminés. Nous aimons nous surpasser, repousser nos limites pour vous accompagner dans la création de valeur. Nous sommes une armée d'experts opérant dans des domaines multiples allant du management stratégique à l'informatique, la communication, le marketing, la gestion, et le développement de projets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((card) => (
            <div 
              key={card.id} 
              onClick={() => setSelectedCard(card)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Card Header (Orange/Gold) */}
              <div className="bg-gradient-to-r from-[#fbb03b] to-[#f9b442] p-6 min-h-[100px] flex items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                <h3 className="text-[18px] md:text-[20px] font-extrabold text-[#1a2b3c] uppercase tracking-wide leading-snug group-hover:scale-105 transition-transform duration-300 relative z-10">
                  {card.title}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150 z-0"></div>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-8 relative z-10 font-light">
                  {card.text}
                </p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCard(card);
                  }}
                  className="self-end text-[14px] font-bold text-[#1a2b3c] uppercase tracking-wider group-hover:text-[#f9b442] flex items-center gap-2 transition-colors duration-300 relative z-10"
                >
                  En savoir plus
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Footer */}
        <div className="w-full flex justify-center items-center py-10 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={brand} className="flex items-center gap-4 md:gap-8">
                <span className="text-[20px] md:text-[28px] font-light text-gray-400 lowercase tracking-widest hover:text-[#1a2b3c] transition-colors duration-300 cursor-pointer">
                  {brand}
                </span>
                {index < brands.length - 1 && (
                  <span className="text-gray-300 text-2xl font-light">|</span>
                )}
              </div>
            ))}
          </div>
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
                <h3 className="text-[20px] md:text-[24px] font-extrabold text-[#1a2b3c] uppercase tracking-wider">{selectedCard.title}</h3>
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
                {brands.map((brand) => (
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
