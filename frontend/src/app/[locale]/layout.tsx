import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suzang Group | Se poser sans s'imposer",
  description: "Suzang Group - Cabinet de conseil, analyse de données, marketing politique.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={raleway.className}>
      <body className="bg-black">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
