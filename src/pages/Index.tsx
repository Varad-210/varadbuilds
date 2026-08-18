import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStripSection } from "@/components/home/TrustStripSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ServiceSelectionSection } from "@/components/home/ServiceSelectionSection";
import { OutcomeSection } from "@/components/home/OutcomeSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustStripSection />
      <ProblemSection />
      <SolutionSection />
      <ServiceSelectionSection />
      <OutcomeSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
