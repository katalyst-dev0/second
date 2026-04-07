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
import WorldMapDemo from "@/components/world-map-demo";
import Testimonial1 from "@/components/ui/testimonial-1";
import { TestimonialsScrolling } from "@/components/testimonials-scrolling";

const LandingPage = () => {
  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const target = document.querySelector(id) as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-transparent text-white relative font-sans flex flex-col">
      <GradientBackground />
      
      <Navbar scrollToSection={handleScrollToSection} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <HomeHero />

        {/* 3. Our Core services */}
        <CoreServices />

        {/* 5. Helping small Businesses grow & 6. Book a free consultation */}
        <GrowthSupport />

        {/* 7. Global reach, community, and testimonials */}
        <WorldMapDemo />
        <Testimonial1 />
        <TestimonialsScrolling />
      </main>

      {/* 7. Footer */}
      <Footer />
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
