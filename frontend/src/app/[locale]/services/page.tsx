import { ServicesHero } from "@/components/organisms/ServicesHero";
import { ServicesContent } from "@/components/organisms/ServicesContent";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesContent />
    </main>
  );
}
