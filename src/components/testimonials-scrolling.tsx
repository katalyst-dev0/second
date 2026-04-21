"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 9);

export function TestimonialsScrolling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="feedback"
      ref={containerRef}
      className="bg-transparent py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-red-400" />
            <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">Feedback</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-normal tracking-tighter mb-6 leading-tight text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Loved by builders.<br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
              Trusted by the world.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of brands who have elevated their growth and unlocked new levels of performance with Katalyst.
          </motion.p>
        </div>

        {/* Scrolling Columns Container */}
        <div 
          className="relative w-full opacity-0 animate-fade-in-up"
          style={{ 
            animationDelay: "0.4s", 
            animationFillMode: "forwards",
          }}
        >
          <div 
            className="flex justify-center gap-6 py-4 overflow-hidden h-[700px]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </div>
      
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
    </section>
  );
}
