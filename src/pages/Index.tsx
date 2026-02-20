import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import UseCasesSection from "@/components/UseCasesSection";
import EAASection from "@/components/EAASection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <SocialProof />
        <UseCasesSection />
        <EAASection />
        <TeamSection />
        <PricingSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

