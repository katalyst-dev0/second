import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Meta, Google, and TikTok designed for maximum ROI.",
  },
  {
    title: "AI Automation",
    description: "Custom AI agents and automated workflows that eliminate manual tasks and increase capacity.",
  },
  {
    title: "Conversion Optimization",
    description: "Surgical improvements to your landing pages and funnels to turn clicks into customers.",
  },
  {
    title: "Growth Strategy",
    description: "Comprehensive roadmap identifying untapped opportunities and architecting expansion.",
  },
  {
    title: "Market Intelligence",
    description: "Deep competitor analysis and trend auditing to keep your brand ahead of the curve.",
  },
  {
    title: "Creative Engine",
    description: "High-performance ad creatives and copy designed to stop the scroll and drive action.",
  }
];

export const CoreServices = () => {
  return (
    <section id="services" className="w-full py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16">
        <div className="text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-6 tracking-tight leading-[1.1]">
            Our <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">Core Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We provide the technical foundation and strategic excellence required to dominate in today's digital economy.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[16rem] md:auto-rows-[18rem]">
          {services.map((service, index) => {
            // Bento Grid Span Logic
            let gridSpan = "";
            if (index === 0) gridSpan = "md:col-span-2 md:row-span-2"; // Big Card
            else if (index === 1) gridSpan = "md:col-span-1 md:row-span-2"; // Tall Card
            else if (index === 5) gridSpan = "md:col-span-3 md:row-span-1"; // Wide Card
            else gridSpan = "md:col-span-1 md:row-span-1"; // Small Card

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-8 md:p-10 rounded-[2rem] flex flex-col justify-end group hover:bg-white/[0.03] transition-colors border border-white/5 overflow-hidden relative ${gridSpan}`}
              >
                {/* Decorative background element for the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal max-w-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
