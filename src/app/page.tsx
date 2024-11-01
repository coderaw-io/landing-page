import { Footer } from "@/components/shared/page/footer";
import { Header } from "@/components/shared/page/header";
import { HeroSection } from "@/components/shared/page/hero-section";

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}
