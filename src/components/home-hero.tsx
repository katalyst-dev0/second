import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Button } from "@/components/ui/button";

export const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-32 text-center overflow-hidden">
      {/* Subtle side elements */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 0.2 } : {}}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[2%] top-[30%] w-[200px] h-[300px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl rotate-6 border border-white/5 shadow-2xl" />
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 0.2 } : {}}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[2%] bottom-[30%] w-[200px] h-[300px] hidden lg:block pointer-events-none"
      >
        <div className="w-full h-full glass-card rounded-3xl -rotate-6 border border-white/5 shadow-2xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/80">
              Excellence in Performance & Automation
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.05] tracking-tight mb-8 premium-heading"
        >
          The future of growth,
          <br />
          <span className="font-medium bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            architected for scale.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-lg md:text-xl lg:text-2xl mb-16 leading-relaxed mx-auto font-light text-white/60"
        >
          At Katalyst, we bridge the gap between human ambition and technological precision. 
          We build systems that define tomorrow's market leaders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mx-auto"
        >
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 group"
          >
            <Link to="/katalyst-growth">
              Digital Marketing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 bg-white/5 border-white/10 hover:bg-white/10 group"
          >
            <Link to="/katalyst-automation">
              AI Automation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-7xl rounded-3xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] glass-card shadow-2xl mt-24"
      >
        <WebGLShader />
      </motion.div>
    </section>
  );
};
