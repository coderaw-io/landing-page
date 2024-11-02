import { Footer } from "@/components/shared/page/footer";
import { Header } from "@/components/shared/page/header";
import { HeroSection } from "@/components/shared/page/hero-section";
import { IntegrationsSection } from "@/components/shared/page/integrations-section";
import { ToolsSection } from "@/components/shared/page/tools-section";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <HeroSection />
      </div>
      <IntegrationsSection />
      <ToolsSection />
      <Footer />
    </>
  );
}
