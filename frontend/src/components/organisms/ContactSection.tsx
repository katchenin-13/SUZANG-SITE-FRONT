export function ContactSection() {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-10 xl:px-[120px] flex justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left side: Contact Info */}
        <div className="w-full flex flex-col items-center lg:items-start lg:pl-10">
          <div className="flex flex-col gap-10 w-full max-w-[400px]">
            <h2 className="text-white text-[28px] md:text-[32px] font-medium text-center">
              Contactez Nous
            </h2>

            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="text-[#f9b442] shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="flex flex-col text-white">
                  <span className="font-bold uppercase tracking-wider mb-1 text-[15px]">ADRESSE</span>
                  <span className="text-white text-[15px]">Villa 69 cité Belle vue, Cocody Angré 8ème tranche</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="text-[#f9b442] shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div className="flex flex-col text-white">
                  <span className="font-bold uppercase tracking-wider mb-1 text-[15px]">TELEPHONE</span>
                  <span className="text-white text-[15px] leading-[1.8]">
                    (225) 27 22 42 14 83<br/>
                    (225) 07 77 63 61 40 / 07 77 63 63 07
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="text-[#f9b442] shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
                </div>
                <div className="flex flex-col text-white">
                  <span className="font-bold uppercase tracking-wider mb-1 text-[15px]">EMAIL</span>
                  <span className="text-white text-[15px]">contactsite@suzang-group.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Newsletter Form */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] bg-[#603514] p-8 md:p-12 rounded-sm flex flex-col gap-8 shadow-xl">
            <h2 className="text-white text-[28px] md:text-[32px] font-medium text-center">
              Newsletter
            </h2>
            
            <form className="flex flex-col gap-5">
              <input 
                type="text" 
                placeholder="nom" 
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f9b442] transition-shadow"
                required
              />
              <input 
                type="email" 
                placeholder="email" 
                className="w-full px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f9b442] transition-shadow"
                required
              />
              <button 
                type="submit" 
                className="w-full mt-2 px-4 py-3 bg-[#f9b442] hover:bg-[#e5a02e] text-black font-semibold rounded-md transition-colors"
              >
                Souscrire
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
