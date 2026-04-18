import React, { useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import KatalystAutomationPage from "@/components/KatalystAutomationPage";
import KatalystGrowthPage from "@/components/KatalystGrowthPage";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer-section";
import { HomeHero } from "@/components/home-hero";
import { CoreServices } from "@/components/core-services";
import { GrowthSupport } from "@/components/growth-support";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

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

      <main className="flex-1 w-full overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-20 lg:gap-24 py-16 lg:py-20">
            {/* 2. Hero Section */}
            <section className="-mt-32">
              <HomeHero />
            </section>

            {/* 3. Our Core services */}
            <section>
              <CoreServices />
            </section>

            {/* 5. Helping small Businesses grow & 6. Book a free consultation */}
            <section>
              <GrowthSupport />
            </section>

            {/* Footer */}
            <section className="pt-16">
              <Footer />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable default browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    };

    resetScroll();
    // Fire slightly later to beat any layout shifts
    const t1 = setTimeout(resetScroll, 10);
    const t2 = setTimeout(resetScroll, 50);
    const t3 = setTimeout(resetScroll, 100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalyst-growth" element={<KatalystGrowthPage />} />
        <Route path="/katalyst-automation" element={<KatalystAutomationPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  );
};

export default App;
