import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Meta, Google, and TikTok designed for maximum ROI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16l4-8 3 6 5-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    visualization: (
      <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M10,60 L40,45 L70,50 L100,30 L130,35 L160,20 L190,25" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1" 
          fill="none"
          className="transition-all duration-400 group-hover:stroke-white/25"
        />
        <path 
          d="M10,60 L40,45 L70,50 L100,30 L130,35 L160,20 L190,25 L190,70 L10,70 Z" 
          stroke="none" 
          fill="rgba(255,255,255,0.03)"
          className="transition-all duration-400 group-hover:fill-white/6"
        />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    description: "Custom AI agents and automated workflows that eliminate manual tasks and increase capacity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 11v2a2 2 0 002 2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v6l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21v-6l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    visualization: (
      <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="25" r="3" fill="rgba(255,255,255,0.12)" className="transition-all duration-400 group-hover:fill-white/20"/>
        <circle cx="150" cy="25" r="3" fill="rgba(255,255,255,0.12)" className="transition-all duration-400 group-hover:fill-white/20"/>
        <circle cx="100" cy="55" r="3" fill="rgba(255,255,255,0.12)" className="transition-all duration-400 group-hover:fill-white/20"/>
        <path d="M50,25 L100,55 L150,25" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/20"/>
        <path d="M50,25 L100,55" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/15"/>
        <path d="M150,25 L100,55" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/15"/>
      </svg>
    ),
  },
  {
    title: "Conversion Optimization",
    description: "Surgical improvements to your landing pages and funnels to turn clicks into customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M3 12h18m-9-9v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 8l4 4-4 4m10-8l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    visualization: (
      <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M60,20 L140,20 L120,60 L80,60 Z" 
          stroke="rgba(255,255,255,0.12)" 
          strokeWidth="1" 
          fill="none"
          className="transition-all duration-400 group-hover:stroke-white/20"
        />
        <path 
          d="M60,20 L140,20 L120,60 L80,60 Z" 
          stroke="none" 
          fill="rgba(255,255,255,0.03)"
          className="transition-all duration-400 group-hover:fill-white/6"
        />
      </svg>
    ),
  },
  {
    title: "Growth Strategy",
    description: "Comprehensive roadmap identifying untapped opportunities and architecting expansion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    visualization: (
      <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M30,60 L30,50 L70,50 L70,40 L110,40 L110,30 L150,30 L150,20 L170,20" 
          stroke="rgba(255,255,255,0.12)" 
          strokeWidth="1" 
          fill="none"
          className="transition-all duration-400 group-hover:stroke-white/20"
        />
      </svg>
    ),
  },
  {
    title: "Market Intelligence",
    description: "Deep competitor analysis and trend auditing to keep your brand ahead of the curve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M21 21l-6-6m6 6v-4.5m0 4.5h-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    visualization: (
      <svg className="w-full h-full" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="40" r="25" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/20"/>
        <path d="M100,15 L100,65 M75,40 L125,40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="transition-all duration-400 group-hover:stroke-white/15"/>
        <path d="M100,15 L120,25 L120,55 L100,65" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/12"/>
        <path d="M100,15 L80,25 L80,55 L100,65" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/12"/>
        <path d="M100,15 L120,25 L80,25" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" className="transition-all duration-400 group-hover:stroke-white/12"/>
      </svg>
    ),
  }
];

export const CoreServices = () => {
  return (
    <section id="services" className="w-full py-12 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center relative z-10 max-w-4xl"
        >
          <h2 className="font-light mb-4 tracking-tight leading-[1.05] premium-heading" style={{fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', letterSpacing: '-0.03em'}}>
            Our <span className="font-medium text-white">Core Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light" style={{color: 'rgba(255,255,255,0.45)'}}>
            We provide the technical foundation and strategic excellence required to dominate in today's digital economy.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 auto-rows-[20rem] md:auto-rows-[22rem] lg:auto-rows-[24rem]" style={{gap: '16px', marginTop: '32px'}}>
          {services.map((service, index) => {
            // Responsive Grid Logic with hierarchy
            let gridSpan = "";
            let isLargeCard = index === 0;
            
            if (isLargeCard) {
              // Featured card spans full width on mobile, 2 columns on tablet+, 2 columns on desktop
              gridSpan = "sm:col-span-2 md:col-span-2 lg:col-span-2";
            } else {
              // Regular cards are 1 column on all screens
              gridSpan = "sm:col-span-1 md:col-span-1 lg:col-span-1";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card rounded-3xl flex flex-col justify-between group hover:bg-white/[0.06] transition-all duration-700 border border-white/8 overflow-hidden relative ${gridSpan}`}
                style={{ 
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  background: isLargeCard ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                  padding: isLargeCard ? 'clamp(24px, 4vw, 40px)' : 'clamp(20px, 3vw, 28px)'
                }}
              >
                {/* Data Visualization - responsive height */}
                <div className="flex items-center justify-center" style={{height: 'clamp(80px, 12vw, 128px)'}}>
                  {service.visualization}
                </div>
                
                <div className="relative z-10" style={{marginTop: 'clamp(12px, 2vw, 20px)'}}>
                  <div className="icon-container" style={{
                    width: isLargeCard ? 'clamp(40px, 6vw, 56px)' : 'clamp(28px, 4vw, 36px)', 
                    height: isLargeCard ? 'clamp(40px, 6vw, 56px)' : 'clamp(28px, 4vw, 36px)',
                    marginBottom: 'clamp(8px, 1.5vw, 12px)'
                  }}>
                    <div className="text-white/90" style={{
                      width: isLargeCard ? 'clamp(32px, 5vw, 48px)' : 'clamp(16px, 3vw, 24px)',
                      height: isLargeCard ? 'clamp(32px, 5vw, 48px)' : 'clamp(16px, 3vw, 24px)'
                    }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="tracking-tight text-white mb-3" style={{
                    fontSize: isLargeCard ? 'clamp(20px, 3.5vw, 28px)' : 'clamp(16px, 2.5vw, 20px)',
                    fontWeight: '500',
                    lineHeight: '1.2'
                  }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed font-light" style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    lineHeight: '1.6',
                    fontWeight: '400'
                  }}>
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
