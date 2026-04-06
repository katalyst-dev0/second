import React, { useEffect, useRef, useState } from "react";
import { Star, Menu, X } from "lucide-react";
import type LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import AboutUsSection from "@/components/ui/about-us-section";
import WorldMapDemo from "@/components/world-map-demo";
import Testimonial1 from "@/components/ui/testimonial-1";
import { TestimonialsScrolling } from "@/components/testimonials-scrolling";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { KatalystLogo } from "@/components/ui/katalyst-logo";
import { Footer } from "@/components/ui/footer-section";

const DESKTOP_BREAKPOINT = 1024;

const scrollOptions = {
  smooth: true,
  lerp: 0.15,
  multiplier: 1.4,
  class: "is-revealed",
  smartphone: { smooth: false, breakpoint: 768 },
  tablet: { smooth: false, breakpoint: 1024 },
};

const KatalystCore = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [useLoco, setUseLoco] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setUseLoco(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!useLoco) {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
      return;
    }

    const el = scrollContainerRef.current;
    if (!el) return;

    let isMounted = true;

    const init = async () => {
      const LocomotiveModule = await import("locomotive-scroll");
      if (!isMounted || !useLoco) return;

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
  }, [useLoco]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    closeMobileMenu();

    const target = document.querySelector(id) as HTMLElement;
    if (target && locoScrollRef.current) {
      locoScrollRef.current.scrollTo(target, {
        duration: 1.5,
        easing: [0.16, 1, 0.3, 1],
      });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GradientBackground />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] md:hidden animate-fade-in-overlay flex flex-col p-6 h-[100dvh] w-full">
          <div className="flex items-center justify-between mb-12">
            <KatalystLogo width={140} height={30} />
            <button
              onClick={closeMobileMenu}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors border border-white/10"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
            <a
              href="#process"
              onClick={(e) => scrollToSection(e, "#process")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Our Process
            </a>
            <a
              href="#reach"
              onClick={(e) => scrollToSection(e, "#reach")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Global Reach
            </a>
            <a
              href="#community"
              onClick={(e) => scrollToSection(e, "#community")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="#feedback"
              onClick={(e) => scrollToSection(e, "#feedback")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Feedback
            </a>

            <div className="w-12 h-px bg-white/20 my-2" />

            <a
              href="https://calendly.com/kompanykatalyst/discovery-call"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold shadow-xl text-center active:scale-95 transition-transform w-full max-w-[280px]"
            >
              Schedule a consult
            </a>
          </div>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        {...(useLoco ? { "data-scroll-container": true } : {})}
        className="min-h-screen bg-transparent font-sans text-white relative z-10"
      >
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto relative z-50">
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => {
                  if (locoScrollRef.current) {
                    locoScrollRef.current.scrollTo(0, { duration: 1.5 });
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  closeMobileMenu();
                }}
                className="cursor-pointer bg-transparent border-none p-0"
              >
                <div className="hidden sm:block">
                  <KatalystLogo width={200} height={43} />
                </div>
                <div className="sm:hidden">
                  <KatalystLogo width={140} height={30} />
                </div>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#process"
                onClick={(e) => scrollToSection(e, "#process")}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Our Process
              </a>
              <a
                href="#reach"
                onClick={(e) => scrollToSection(e, "#reach")}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Global Reach
              </a>
              <a
                href="#community"
                onClick={(e) => scrollToSection(e, "#community")}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Community
              </a>
              <a
                href="#feedback"
                onClick={(e) => scrollToSection(e, "#feedback")}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Feedback
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://calendly.com/kompanykatalyst/discovery-call"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors shadow-sm border border-white/10 whitespace-nowrap"
              >
                Book an Appointment
              </a>
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>

          <header
            className={`px-6 pt-16 md:pt-24 pb-20 md:pb-32 max-w-7xl mx-auto text-center relative overflow-hidden ${
              heroVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-6 h-6 border border-white/20 rounded flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="text-sm font-medium text-white">
                4.9 rating from 18.3K+ users
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal leading-tight md:leading-[1.1] tracking-tight mb-5">
              Katalyst Marketing
              <br />
              <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
                Performance that scales
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              From high-performance ad campaigns to data-driven growth strategies, we build systems that produce measurable results and predictable ROI.
            </p>

            <div className="mb-12">
              <a
                href="https://calendly.com/kompanykatalyst/discovery-call"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/20 transition-colors shadow-lg shadow-white/5 border border-white/10 inline-flex items-center justify-center"
              >
                Schedule a growth consult
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] glass-card shadow-2xl">
              <WebGLShader />
            </div>

            <div className="mt-16 md:mt-24 pb-12 flex justify-center px-4">
              <div className="logo-cloud glass-card relative overflow-hidden opacity-90 py-5 md:py-6 px-6 md:px-12 rounded-full w-full max-w-lg md:max-w-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[mask-image:none]">
                <div className="flex md:hidden items-center gap-12 animate-marquee whitespace-nowrap">
                  {[1, 2].map((iteration) => (
                    <div key={iteration} className="flex items-center gap-12 shrink-0">
                      <span className="text-xs font-bold tracking-tighter text-white">
                        META ADS
                      </span>
                      <span className="text-xs font-bold flex items-center gap-1 text-white">
                        <div className="w-2.5 h-2.5 bg-white rounded-full shrink-0" /> GOOGLE ADS
                      </span>
                      <span className="text-xs font-medium flex items-center gap-2 text-white">
                        <div className="grid grid-cols-2 gap-0.5 shrink-0">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
                          ))}
                        </div>
                        SEO STRATEGY
                      </span>
                      <span className="text-lg font-serif italic font-bold text-white">
                        EMAIL
                      </span>
                      <span className="text-xs font-bold flex items-center gap-2 text-white">
                        <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center text-[7px] shrink-0">
                          AN
                        </div>
                        ANALYTICS
                      </span>
                      <span className="text-xs font-semibold flex items-center gap-1.5 text-white">
                        <div className="flex gap-0.5 shrink-0">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
                          ))}
                        </div>
                        CONTENT
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                  <span className="text-xl font-bold tracking-tighter text-white">
                    META ADS
                  </span>
                  <span className="text-xl font-bold flex items-center gap-1 text-white">
                    <div className="w-5 h-5 bg-white rounded-full" /> GOOGLE ADS
                  </span>
                  <span className="text-lg font-medium flex items-center gap-2 text-white">
                    <div className="grid grid-cols-2 gap-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full" />
                      ))}
                    </div>
                    SEO STRATEGY
                  </span>
                  <span className="text-2xl font-serif italic font-bold text-white">
                    EMAIL
                  </span>
                  <span className="text-lg font-bold flex items-center gap-2 text-white">
                    <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center text-[10px]">
                      AN
                    </div>
                    ANALYTICS
                  </span>
                  <span className="text-lg font-semibold flex items-center gap-1.5 text-white">
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full" />
                      ))}
                    </div>
                    CONTENT
                  </span>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <AboutUsSection />
        </section>
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <WorldMapDemo />
        </section>
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <Testimonial1 />
        </section>
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <TestimonialsScrolling />
        </section>
        <section {...(useLoco ? { "data-scroll-section": true } : {})}>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default KatalystCore;
