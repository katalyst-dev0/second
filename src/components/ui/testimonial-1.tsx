"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ArrowDown, ArrowUp, Users } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonial1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  interface StatItem {
    percentage: string;
    logo: string;
    label: string;
    isIncrease: boolean;
  }

  const stats: StatItem[] = [
    {
      percentage: "4.2x",
      label: "ROAS on Meta Ads",
      isIncrease: true,
      logo: "META",
    },
    {
      percentage: "38%",
      label: "CPA Reduction (Google)",
      isIncrease: false,
      logo: "GOOGLE",
    },
    {
      percentage: "2.5x",
      label: "Lead Volume (LinkedIn)",
      isIncrease: true,
      logo: "LINKEDIN",
    },
    {
      percentage: "1.2M",
      label: "YouTube Reach",
      isIncrease: true,
      logo: "YOUTUBE",
    },
  ];

  return (
    <div 
      id="community"
      ref={containerRef}
      className="bg-transparent py-32 px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Community Badge */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            <Users className="w-3.5 h-3.5 text-red-400" />
            <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">Our Impact</span>
          </div>
        </motion.div>

        {/* Main Heading with Images */}
        <div className="text-center max-w-4xl mx-auto relative text-white mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[72px] font-normal leading-[1.05] tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We make it easy for
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-3 align-middle relative group cursor-pointer">
                    <div className="relative overflow-hidden sm:w-20 w-14 h-14 transition-all duration-500 rounded-full border-2 border-white/20 shadow-xl group-hover:w-48">
                      <img
                        src={`https://pro-section.ui-layouts.com/people/aam1.png`}
                        alt="Brand owner"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-gray-900 text-white p-4 rounded-xl shadow-2xl border border-white/10 z-50 animate-in fade-in zoom-in duration-200"
                >
                  <p className="mb-2 text-xs leading-relaxed opacity-90">
                    "Katalyst transformed our ad spend into pure profit. The transparency in reporting is exactly what we needed."
                  </p>
                  <p className="font-bold text-[10px] uppercase tracking-wider text-red-400">Marcus Thorne</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            brands
            <br />
            and their
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-3 align-middle group cursor-pointer">
                    <div className="relative overflow-hidden sm:w-20 w-14 h-14 transition-all duration-500 rounded-full border-2 border-white/20 shadow-xl group-hover:w-48">
                      <img
                        src={`https://pro-section.ui-layouts.com/people/aam3.jpg`}
                        alt="Marketing director"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-gray-900 text-white p-4 rounded-xl shadow-2xl border border-white/10 z-50 animate-in fade-in zoom-in duration-200"
                >
                  <p className="mb-2 text-xs leading-relaxed opacity-90">
                    "Scaling globally became a data-driven process rather than a guessing game. Our ROI has never been higher."
                  </p>
                  <p className="font-bold text-[10px] uppercase tracking-wider text-red-400">Elena Rodriguez</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            audiences to connect.
          </motion.h2>
          
          <motion.h3 
            className="text-4xl md:text-5xl lg:text-[72px] font-normal tracking-tighter bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Scale your performance marketing.
          </motion.h3>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat?.label}
              className="glass-card p-10 rounded-3xl group relative flex flex-col items-center justify-center min-h-[160px] hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-full relative h-12 overflow-hidden flex items-center justify-center">
                {/* Logo that slides up on hover */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:-translate-y-16 group-hover:opacity-0 transition-all duration-500 ease-in-out">
                  <span className="text-xl font-black tracking-tighter text-white/40 uppercase">
                    {stat.logo}
                  </span>
                </div>
                
                {/* Stat that slides in from bottom on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="flex items-center gap-1.5">
                    {stat.isIncrease ? (
                      <ArrowUp className="w-5 h-5 text-green-400" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-red-400" />
                    )}
                    <span className="text-3xl font-black tracking-tighter text-white">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 text-center">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
