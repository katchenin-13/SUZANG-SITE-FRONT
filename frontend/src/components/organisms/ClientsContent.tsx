import Image from "next/image";

const partners = [
  { id: 1, logo: "/images/reference/ref1.png", name: "Partenaire 1" },
  { id: 2, logo: "/images/reference/ref2.png", name: "Partenaire 2" },
  { id: 3, logo: "/images/reference/ref3.png", name: "Partenaire 3" },
  { id: 4, logo: "/images/reference/ref4.png", name: "Partenaire 4" },
  { id: 5, logo: "/images/reference/ref5.png", name: "Partenaire 5" },
  { id: 6, logo: "/images/reference/ref6.png", name: "Partenaire 6" },
  { id: 7, logo: "/images/reference/ref7.png", name: "Partenaire 7" },
];

export function ClientsContent() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-10 xl:px-[120px] bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <div className="w-full flex flex-col items-start gap-4 mb-16">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold uppercase text-[#1a2b3c] tracking-wider">
            ILS NOUS FONT CONFIANCE
          </h2>
          <div className="h-[4px] w-[150px] bg-[#f9b442] rounded-sm"></div>
        </div>

        {/* Partners Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-8 h-[160px] md:h-[200px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 cursor-default"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain object-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
