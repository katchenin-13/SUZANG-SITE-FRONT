"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: nextLocale });
  };

  if (isMobile) {
    return (
      <div className="mt-8 flex justify-center">
        <button 
          onClick={toggleLanguage}
          className="flex items-center text-white font-bold text-[20px] px-8 py-3 rounded-md bg-[#4a4a4a] hover:bg-[#f9b442] hover:text-black cursor-pointer transition-all duration-300"
        >
          <span>{locale.toUpperCase()} <span className="text-[16px] ml-2">⇄</span></span>
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={toggleLanguage}
      className="hidden lg:flex shrink-0 items-center font-bold text-[18px] px-4 py-2 rounded text-white bg-[#4a4a4a] hover:bg-[#5a5a5a] cursor-pointer transition-all duration-300 mt-6 ml-auto"
    >
      <span>{locale.toUpperCase()} <span className="text-[14px] ml-1">⇄</span></span>
    </button>
  );
}
