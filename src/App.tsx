import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import type LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import AboutUsSection from "@/components/ui/about-us-section";
import WorldMapDemo from "@/components/world-map-demo";
import Testimonial1 from "@/components/ui/testimonial-1";
import { TestimonialsScrolling } from "@/components/testimonials-scrolling";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { KatalystLogo } from "@/components/ui/katalyst-logo";

const scrollOptions = {
  smooth: true,
  lerp: 0.15,
  multiplier: 1.4,
  class: "is-revealed",
  smartphone: { smooth: true },
  tablet: { smooth: true },
};

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let isMounted = true;

    const init = async () => {
      const LocomotiveModule = await import("locomotive-scroll");
      if (!isMounted) return;

      locoScrollRef.current = new LocomotiveModule.default({
        el,
        ...scrollOptions,
      });
    };

    init().catch(() => null);

    return () => {
      isMounted = false;
      locoScrollRef.current?.destroy();
      locoScrollRef.current = null;
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <GradientBackground />
      <div
        ref={scrollContainerRef}
        data-scroll-container
        className="min-h-screen bg-transparent font-sans text-white relative z-10"
      >
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-shrink-0">
            <KatalystLogo width={180} height={48} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Services</button>
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Case Studies</button>
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Insights</button>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Log in</button>
            <a
              href="https://calendly.com/kompanykatalyst/discovery-call"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors shadow-sm border border-white/10"
            >
              Let's Talk
            </a>
          </div>
        </nav>

      {/* Hero Section */}
      <header
        className={`px-6 pt-24 pb-32 max-w-7xl mx-auto text-center relative overflow-hidden ${
          heroVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Reviews Badge */}
      <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-6 h-6 border border-white/20 rounded flex items-center justify-center">
            <Star className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span className="text-sm font-medium text-white">
            4.9 rating from 18.3K+ users
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5"
        >
          Katalyst Growth
          <br />
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Digital performance that scales
          </span>
        </h1>

        {/* Subheading */}
        <p
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Integrated marketing, creative, and analytics systems keep your campaigns accountable and always in motion.
        </p>

        {/* CTA */}
        <div
        className="mb-12"
        >
          <a
            href="https://calendly.com/kompanykatalyst/discovery-call"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/20 transition-colors shadow-lg shadow-white/5 border border-white/10 inline-flex items-center justify-center"
          >
            Schedule a growth consult
          </a>
        </div>

        {/* Video Section */}
        <div className="relative mx-auto w-[92vw] max-w-5xl rounded-3xl overflow-hidden h-[320px] md:h-[420px] glass-card shadow-2xl">
          <WebGLShader />
        </div>

        {/* Company Logos */}
        <div className="mt-24 pb-12 flex justify-center">
          <div className="logo-cloud glass-card flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-90">
            <span className="text-xl font-bold tracking-tighter text-white">
              INTERSCOPE
            </span>
            <span className="text-xl font-bold flex items-center gap-1 text-white">
              <div className="w-5 h-5 bg-white rounded-full" /> SPOTIFY
            </span>
            <span className="text-lg font-medium flex items-center gap-2 text-white">
              <div className="grid grid-cols-2 gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>
              Nexera
            </span>
            <span className="text-2xl font-serif italic font-bold text-white">
              M3
            </span>
            <span className="text-lg font-bold flex items-center gap-2 text-white">
              <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center text-[10px]">
                LC
              </div>
              LAURA COLE
            </span>
            <span className="text-lg font-semibold flex items-center gap-1.5 text-white">
              <div className="flex gap-0.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>
              vertex
            </span>
          </div>
        </div>
      </header>
      <section>
        <AboutUsSection />
      </section>
      <section>
        <WorldMapDemo />
      </section>
      <section>
        <Testimonial1 />
      </section>
      <section>
        <TestimonialsScrolling />
      </section>
      </div>
    </>
  );
};

export default App;
