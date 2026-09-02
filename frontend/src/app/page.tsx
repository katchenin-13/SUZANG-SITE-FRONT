import { HeroBanner } from "@/components/organisms/HeroBanner";
import { AboutSection } from "@/components/organisms/AboutSection";
import { InitiationSection } from "@/components/organisms/InitiationSection";
import { ExcellenceSection } from "@/components/organisms/ExcellenceSection";
import { CompetencesSection } from "@/components/organisms/CompetencesSection";
import { ReferencesSection } from "@/components/organisms/ReferencesSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HeroBanner />
      <AboutSection />
      <InitiationSection />
      <ExcellenceSection />
      <CompetencesSection />
      <ReferencesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
