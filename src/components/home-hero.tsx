import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center overflow-hidden">
      {/* Side Graphics - Left */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[-5%] top-[20%] w-[300px] h-[400px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl rotate-12 opacity-20 border border-white/10" />
      </motion.div>

      {/* Side Graphics - Right */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-[-5%] bottom-[20%] w-[300px] h-[400px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl -rotate-12 opacity-20 border border-white/10" />
      </motion.div>

      <div 
        className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${
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

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed mx-auto">
          At Katalyst, we bridge the gap between human ambition and technological precision. We build the systems that define tomorrow's market leaders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center mx-auto">
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
      </div>
      
      <div className="relative mx-auto w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] glass-card shadow-2xl mt-16">
        <WebGLShader />
      </div>
    </section>
  );
};
