import { ContactsHero } from "@/components/organisms/ContactsHero";
import { ContactsContent } from "@/components/organisms/ContactsContent";

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <ContactsHero />
      <ContactsContent />
    </main>
  );
}
