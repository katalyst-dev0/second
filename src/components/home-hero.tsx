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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center overflow-hidden">
      {/* Subtle side elements */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 0.3 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-[2%] top-[30%] w-[200px] h-[300px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl rotate-6 border border-white/5" />
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 0.3 } : {}}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute right-[2%] bottom-[30%] w-[200px] h-[300px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl -rotate-6 border border-white/5" />
      </motion.div>

      <div 
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-1200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{background: 'var(--icon-bg)', border: '1px solid var(--card-border)'}}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/90">
              Performance & Automation Excellence
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.05] tracking-tight mb-8 premium-heading"
        >
          The future of growth,
          <br />
          <span className="font-medium text-white">
            architected for scale.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-xl md:text-2xl mb-16 leading-relaxed mx-auto font-light"
          style={{color: 'var(--text-secondary)'}}
        >
          At Katalyst, we bridge the gap between human ambition and technological precision. 
          We build systems that define tomorrow's market leaders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mx-auto"
        >
          <Link
            to="/katalyst-growth"
            className="bubbles group px-8 py-4 text-[15px] tracking-wide"
          >
            <span className="text flex items-center pr-1">
              Digital Marketing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-500" />
            </span>
          </Link>
          <Link
            to="/katalyst-automation"
            className="bubbles group px-8 py-4 text-[15px] tracking-wide"
          >
            <span className="text flex items-center pr-1">
              AI automation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-500" />
            </span>
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-7xl rounded-3xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] glass-card shadow-2xl mt-20"
      >
        <WebGLShader />
      </motion.div>
    </section>
  );
};
