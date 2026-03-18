import { useState } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import UseCasesSection from "@/components/UseCasesSection";
import EAASection from "@/components/EAASection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProposalForm from "@/components/ProposalForm";
import CookieBanner from "@/components/CookieBanner";
import { clearConsent } from "@/lib/cookieConsent";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [cookieKey, setCookieKey] = useState(0); // increment to re-show banner

  const reopenCookieSettings = () => {
    clearConsent();
    setCookieKey((k) => k + 1);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <Marquee variant="accent" />
        <ProblemSection />
        <HowItWorks />
        <Marquee />
        <SocialProof />
        <UseCasesSection />
        <EAASection />
        <TeamSection />
        <ServicesSection onOpenForm={() => setFormOpen(true)} />
        <PricingSection onOpenForm={() => setFormOpen(true)} />
        <ContactSection onOpenForm={() => setFormOpen(true)} />
        <Footer onCookieSettings={reopenCookieSettings} />
        <ProposalForm open={formOpen} onClose={() => setFormOpen(false)} />
        <CookieBanner key={cookieKey} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
