import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import KatalystAutomationPage from "@/components/KatalystAutomationPage";
import KatalystGrowthPage from "@/components/KatalystGrowthPage";
import { KatalystLogo } from "@/components/ui/katalyst-logo";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { Star } from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden font-sans">
      <GradientBackground />
      
      <nav className="px-6 py-6 flex items-center justify-center max-w-7xl mx-auto relative z-50">
        <KatalystLogo width={200} height={43} />
      </nav>

      <main 
        className={`flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-5 h-5 border border-white/20 rounded flex items-center justify-center">
            <Star className="w-3 h-3 text-white fill-white" />
          </div>
          <span className="text-xs font-medium tracking-wide text-white/80">
            Performance & Automation Excellence
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight mb-8">
          The future of growth,
          <br />
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
            architected for scale.
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          Choose your path to excellence. Whether it's high-performance marketing or AI-driven automation, we build the systems that define tomorrow's leaders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
          <Link
            to="/katalyst-growth"
            className="group relative inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-white/10 overflow-hidden"
          >
            <span className="relative z-10">Katalyst Growth</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            to="/katalyst-automation"
            className="inline-flex items-center justify-center bg-white/5 text-white border border-white/10 backdrop-blur-md rounded-full px-8 py-4 text-lg font-semibold transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98] shadow-xl"
          >
            Katalyst Automation
          </Link>
        </div>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase z-10">
        <span>Strategy</span>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <span>Performance</span>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <span>Automation</span>
      </div>
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
