'use client';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black py-8 px-4 flex flex-col items-center justify-center">
      
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-white text-[13px] md:text-[14px]">
          © Copyright 2023 <span className="font-bold">Suzang</span>. All Rights Reserved
        </p>
        <p className="text-white/50 text-[12px] md:text-[13px]">
          Designed by <span className="font-semibold text-white/70">APPATAM</span>
        </p>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute right-4 md:right-10 xl:right-[120px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#f9b442] hover:bg-[#e5a02e] flex items-center justify-center rounded-sm transition-colors"
        aria-label="Retour en haut"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

    </footer>
  );
}
