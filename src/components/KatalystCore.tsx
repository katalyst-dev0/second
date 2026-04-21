import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import AboutUsSection from "@/components/ui/about-us-section";
import WorldMapDemo from "@/components/world-map-demo";
import Testimonial1 from "@/components/ui/testimonial-1";
import { TestimonialsScrolling } from "@/components/testimonials-scrolling";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Footer } from "@/components/ui/footer-section";
import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import { SECTION_WIDTH_CLASS } from "@/data";

const KatalystCore = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(id) as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GradientBackground />
      <Navbar 
        scrollToSection={scrollToSection} 
      />

      <div
        ref={scrollContainerRef}
        className="min-h-screen bg-transparent font-sans text-white relative z-10"
      >
        <section
          className={SECTION_WIDTH_CLASS}
        >
          <header
            className="px-6 pt-16 md:pt-24 pb-20 md:pb-32 max-w-7xl mx-auto text-center relative overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
            >
              <div className="w-5 h-5 border border-white/20 rounded flex items-center justify-center bg-white/10">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
                4.9 rating from 18.3K+ users
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal leading-tight md:leading-[1.1] tracking-tight mb-5"
            >
              Katalyst Marketing
              <br />
              <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
                Performance that scales
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
            >
              From high-performance ad campaigns to data-driven growth strategies, we build systems that produce measurable results and predictable ROI.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full px-8 py-4 h-auto text-base font-medium shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                <a
                  href="https://calendly.com/kompanykatalyst/discovery-call"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a growth consult
                </a>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] glass-card shadow-2xl"
            >
              <WebGLShader />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={heroVisible ? { opacity: 0.9 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16 md:mt-24 pb-12 flex justify-center px-4"
            >
              <div className="logo-cloud glass-card relative overflow-hidden py-5 md:py-6 px-6 md:px-12 rounded-full w-full max-w-lg md:max-w-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[mask-image:none]">
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
            </motion.div>
          </header>
        </section>
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
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default KatalystCore;
