import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PricingAnchor } from "@/components/home/PricingAnchor";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IndustriesSection />
      <ProcessSection />
      <PricingAnchor />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
