import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import KatalystAutomationPage from "@/components/KatalystAutomationPage";
import KatalystGrowthPage from "@/components/KatalystGrowthPage";

const LandingPage = () => (
  <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center gap-6">
    <p className="text-xs uppercase tracking-[0.5em] text-white/60">Katalyst Growth</p>
    <h1 className="text-4xl md:text-5xl font-semibold text-white">
      Performance marketing, now at /katalyst-growth
    </h1>
    <p className="max-w-xl text-base md:text-lg text-white/70">
      Launch the immersive Katalyst experience from either growth or automation.
    </p>
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Link
        to="/katalyst-growth"
        className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-3 text-lg font-semibold shadow-2xl transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        View Katalyst Growth
      </Link>
      <Link
        to="/katalyst-automation"
        className="inline-flex items-center justify-center bg-white/10 text-white border border-white/30 rounded-full px-8 py-3 text-lg font-semibold shadow-2xl transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        View Katalyst Automation
      </Link>
    </div>
  </main>
);

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
