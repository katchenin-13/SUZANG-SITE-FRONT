import { ClientsHero } from "@/components/organisms/ClientsHero";
import { ClientsContent } from "@/components/organisms/ClientsContent";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <ClientsHero />
      <ClientsContent />
    </main>
  );
}
