import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suzang Group | Se poser sans s'imposer",
  description: "Suzang Group - Cabinet de conseil, analyse de données, marketing politique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(inter.variable, "font-sans", geist.variable)}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
