import CountdownTimer from "@/components/CountdownTimer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import BonusSection from "@/components/BonusSection";
import ValueStackSection from "@/components/ValueStackSection";
import FinalCTASection from "@/components/FinalCTASection";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <CountdownTimer />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <WhyItWorksSection />
      <BonusSection />
      <ValueStackSection />
      <FinalCTASection />
      <MobileCTA />
    </main>
  );
};

export default Index;
