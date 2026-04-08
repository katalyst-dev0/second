import React, { useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import KatalystAutomationPage from "@/components/KatalystAutomationPage";
import KatalystGrowthPage from "@/components/KatalystGrowthPage";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer-section";
import { HomeHero } from "@/components/home-hero";
import { CoreServices } from "@/components/core-services";
import { GrowthSupport } from "@/components/growth-support";

const LandingPage = () => {
  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const target = document.querySelector(id) as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <div className="min-h-screen bg-transparent text-white relative font-sans flex flex-col">
      <GradientBackground />

      <Navbar scrollToSection={handleScrollToSection} />

      <main className="flex-1 w-full overflow-x-hidden flex justify-center">
        <div className="w-[80vw] max-w-[1600px] flex flex-col gap-16 py-12">
          {/* 2. Hero Section */}
          <HomeHero />

          {/* 3. Our Core services */}
          <CoreServices />

          {/* 5. Helping small Businesses grow & 6. Book a free consultation */}
          <GrowthSupport />

          <Footer />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/katalyst-growth" element={<KatalystGrowthPage />} />
      <Route path="/katalyst-automation" element={<KatalystAutomationPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
