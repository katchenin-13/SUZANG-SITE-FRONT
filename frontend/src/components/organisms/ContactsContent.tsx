"use client";

export function ContactsContent() {
  return (
    <section className="w-full pb-24 bg-white">
      
      {/* Decorative grey bar with yellow line */}
      <div className="w-full h-[120px] bg-gray-50 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px]">
          <div className="w-[120px] h-[4px] bg-[#fbb03b] mt-4 rounded-sm"></div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[350px] md:h-[400px] bg-gray-200 mt-6 max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1648011210813!2d-3.993444484661858!3d5.399581896083163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc194bb816654b1%3A0x6e9f9bd0f7e492e7!2sCocody%2C%20Abidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1689345233161!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-sm border border-gray-100 rounded-md"
        ></iframe>
      </div>

      {/* Contact Info and Form */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 xl:px-[120px] mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-10">
          
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbb03b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <h3 className="text-[18px] font-bold text-gray-800">Adresse:</h3>
              <p className="text-[15px] text-gray-500 font-light">villa 69 cité Belle vue, Cocody Angré 8ème tranche</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbb03b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <h3 className="text-[18px] font-bold text-gray-800">Email:</h3>
              <p className="text-[15px] text-gray-500 font-light">contactsite@suzang-group.com</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbb03b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <div className="flex flex-col gap-1.5 mt-1">
              <h3 className="text-[18px] font-bold text-gray-800">TELEPHONE:</h3>
              <p className="text-[15px] text-gray-500 font-light">(225) 22 42 14 83</p>
              <p className="text-[15px] text-gray-500 font-light">(225) 07 77 63 61 40 / 07 77 63 63 07</p>
            </div>
          </div>

        </div>

        {/* Right Column - Form */}
        <div>
          <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); alert("Message envoyé !"); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Nom et Prenom" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 outline-none focus:border-[#fbb03b] focus:ring-1 focus:ring-[#fbb03b] transition-all text-[14px]"
              />
              <input 
                type="tel" 
                placeholder="Telephone" 
                required
                className="w-full border border-gray-200 rounded-md px-4 py-3.5 outline-none focus:border-[#fbb03b] focus:ring-1 focus:ring-[#fbb03b] transition-all text-[14px]"
              />
            </div>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              required
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 outline-none focus:border-[#fbb03b] focus:ring-1 focus:ring-[#fbb03b] transition-all text-[14px]"
            />
            <input 
              type="text" 
              placeholder="Objet" 
              required
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 outline-none focus:border-[#fbb03b] focus:ring-1 focus:ring-[#fbb03b] transition-all text-[14px]"
            />
            <textarea 
              placeholder="Message" 
              required
              rows={5}
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 outline-none focus:border-[#fbb03b] focus:ring-1 focus:ring-[#fbb03b] transition-all text-[14px] resize-none"
            ></textarea>
            
            <div className="flex justify-center md:justify-end mt-2">
              <button 
                type="submit" 
                className="px-10 py-3 bg-[#fbb03b] hover:bg-[#e0992a] text-white text-[15px] font-bold rounded-md shadow-md transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
