"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const navLinks = [
    { name: t('accueil'), href: "/" },
    { name: t('presentation'), href: "/presentation" },
    { name: t('atouts'), href: "/atouts" },
    { name: t('services'), href: "/services" },
    { name: t('clients'), href: "/clients" },
    { name: t('carriere'), href: "/carriere" },
    { name: t('contacts'), href: "/contacts" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);



  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full py-3 md:py-6 px-4 md:px-10 xl:px-[120px] flex items-center justify-between transition-colors duration-300 ${isScrolled || isMobileMenuOpen || pathname !== '/' ? 'bg-black/95 shadow-xl' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      {/* Logo */}
      <Link href="/" className="relative h-[60px] w-[140px] md:h-[100px] md:w-[200px] lg:h-[150px] lg:w-[300px] shrink-0 z-50" onClick={() => setIsMobileMenuOpen(false)}>
        <Image
          src="/images/logo.png"
          alt="Suzang Group"
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      {/* Nav Menu (Desktop) */}
      <div className="hidden lg:flex items-center mt-6">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="text-white flex gap-4 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <NavigationMenuItem key={link.name}>
                   <NavigationMenuLink
                    render={<Link href={link.href} />}
                    active={isActive}
                    className={`flex items-center justify-center py-2 px-2 xl:px-2 text-[26px] font-bold text-white hover:border-white whitespace-nowrap transition-all duration-300 hover:text-[#f9b442] focus:text-[#f9b442] !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[active]:!bg-transparent data-[state=open]:!bg-transparent data-[active]:text-[#f9b442] data-[active]:underline data-[active]:underline-offset-[6px] data-[active]:decoration-1 outline-none ring-0 border border-transparent rounded-md`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Language Switcher (Desktop) */}
      <LanguageSwitcher />

      {/* Mobile Menu Toggle Button */}
      <button 
        className={`lg:hidden p-2 z-50 mt-4 focus:outline-none transition-colors text-white`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-start pt-[200px] lg:hidden animate-in fade-in duration-300 overflow-y-auto pb-10">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[26px] font-bold uppercase transition-colors ${pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? 'text-[#f9b442] underline decoration-2 underline-offset-8' : 'text-white hover:text-[#f9b442]'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <LanguageSwitcher isMobile={true} />
          </nav>
        </div>
      )}
    </header>
  );
}
