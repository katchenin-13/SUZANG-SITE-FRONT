import { CarriereHero } from "@/components/organisms/CarriereHero";
import { CarriereContent } from "@/components/organisms/CarriereContent";

export default function CarrierePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CarriereHero />
      <CarriereContent />
    </main>
  );
}
