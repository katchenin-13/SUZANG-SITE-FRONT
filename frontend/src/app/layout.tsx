import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/organisms/Header";

const raleway = Raleway({
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
    <html lang="fr" className={raleway.className}>
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
