
import { AtoutsHero } from "@/components/organisms/AtoutsHero";
import { AtoutsContent } from "@/components/organisms/AtoutsContent";

export default function AtoutsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AtoutsHero />
      <AtoutsContent />
    </main>
  );
}
