import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Zap, 
  Target, 
  TrendingUp, 
  Search, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <BarChart3 className="w-4 h-4 text-black" />,
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Meta, Google, and TikTok designed for maximum ROI.",
    gradient: "from-black to-red-950",
    tag: "Marketing",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80 L60 40 L100 60 L140 20 L180 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="80" width="10" height="0" fill="white" opacity="0.3">
          <animate attributeName="height" from="0" to="20" dur="2s" fill="freeze" />
          <animate attributeName="y" from="80" to="60" dur="2s" fill="freeze" />
        </rect>
        <rect x="55" y="80" width="10" height="0" fill="white" opacity="0.3">
          <animate attributeName="height" from="0" to="40" dur="2.2s" fill="freeze" />
          <animate attributeName="y" from="80" to="40" dur="2.2s" fill="freeze" />
        </rect>
        <rect x="90" y="80" width="10" height="0" fill="white" opacity="0.3">
          <animate attributeName="height" from="0" to="30" dur="2.4s" fill="freeze" />
          <animate attributeName="y" from="80" to="50" dur="2.4s" fill="freeze" />
        </rect>
        <circle cx="140" cy="20" r="4" fill="white">
          <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  },
  {
    icon: <Zap className="w-4 h-4 text-black" />,
    title: "AI Automation",
    description: "Custom AI agents and automated workflows that eliminate manual tasks and increase capacity.",
    gradient: "from-[#0a0a0a] to-[#450a0a]",
    tag: "Automation",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="15" stroke="white" strokeWidth="1" />
        <circle cx="60" cy="30" r="8" stroke="white" strokeWidth="1" />
        <circle cx="60" cy="70" r="8" stroke="white" strokeWidth="1" />
        <circle cx="140" cy="30" r="8" stroke="white" strokeWidth="1" />
        <circle cx="140" cy="70" r="8" stroke="white" strokeWidth="1" />
        <path d="M75 40 L85 45" stroke="white" strokeWidth="1" />
        <path d="M75 60 L85 55" stroke="white" strokeWidth="1" />
        <path d="M125 40 L115 45" stroke="white" strokeWidth="1" />
        <path d="M125 60 L115 55" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="50" r="3" fill="white">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  },
  {
    icon: <Target className="w-4 h-4 text-black" />,
    title: "Conversion Optimization",
    description: "Surgical improvements to your landing pages and funnels to turn clicks into customers.",
    gradient: "from-black to-red-900",
    tag: "Optimization",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="40" stroke="white" strokeWidth="1" opacity="0.2" />
        <circle cx="100" cy="50" r="30" stroke="white" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="50" r="20" stroke="white" strokeWidth="1" opacity="0.6" />
        <circle cx="100" cy="50" r="10" stroke="white" strokeWidth="2" />
        <path d="M140 20 L110 40" stroke="white" strokeWidth="2" strokeLinecap="round">
          <animateTransform attributeName="transform" type="translate" from="20 -20" to="0 0" dur="1s" fill="freeze" />
        </path>
      </svg>
    )
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-black" />,
    title: "Growth Strategy",
    description: "Comprehensive roadmap identifying untapped opportunities and architecting expansion.",
    gradient: "from-[#111111] to-[#7f1d1d]",
    tag: "Strategy",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 80 Q 100 80, 160 20" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="40" cy="80" r="4" fill="white" />
        <circle cx="160" cy="20" r="4" fill="white" />
        <path d="M140 20 H 160 V 40" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  {
    icon: <Search className="w-4 h-4 text-black" />,
    title: "Market Intelligence",
    description: "Deep competitor analysis and trend auditing to keep your brand ahead of the curve.",
    gradient: "from-black to-[#3f0000]",
    tag: "Intelligence",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="45" r="25" stroke="white" strokeWidth="2" />
        <line x1="110" y1="65" x2="130" y2="85" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <rect x="75" y="35" width="30" height="2" fill="white" opacity="0.5" />
        <rect x="75" y="45" width="20" height="2" fill="white" opacity="0.5" />
        <rect x="75" y="55" width="25" height="2" fill="white" opacity="0.5" />
      </svg>
    )
  },
  {
    icon: <Sparkles className="w-4 h-4 text-black" />,
    title: "Creative Engine",
    description: "High-performance ad creatives and copy designed to stop the scroll and drive action.",
    gradient: "from-[#050505] to-[#5a0000]",
    tag: "Creative",
    illustration: (
      <svg className="w-full h-full opacity-40" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 50 L150 50 M100 20 L100 80" stroke="white" strokeWidth="1" opacity="0.2" />
        <path d="M70 30 L130 70 M130 30 L70 70" stroke="white" strokeWidth="1" opacity="0.2" />
        <circle cx="100" cy="50" r="5" fill="white">
          <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="30" r="3" fill="white">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="70" r="3" fill="white">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  }
];

const steps = [
  {
    number: "01",
    title: "Audit & Analysis",
    description: "We deep dive into your current systems to identify bottlenecks and growth levers."
  },
  {
    number: "02",
    title: "Strategic Blueprint",
    description: "Architecting a custom solution tailored to your specific scale and goals."
  },
  {
    number: "03",
    title: "System Implementation",
    description: "Deploying high-performance campaigns and automated workflows."
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "Continuous refinement and scaling of what works to maximize your results."
  }
];

export const CoreServices = () => {
  return (
    <section id="services" className="w-full py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide the technical foundation and strategic excellence required to dominate in today's digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full bg-[#111111] border border-white/5 rounded-[30px] overflow-hidden transition-all duration-300 hover:cursor-pointer hover:shadow-2xl hover:shadow-white/5 group"
            >
              {/* Illustration Top Section */}
              <div className={`h-32 w-full bg-gradient-to-r ${service.gradient} flex justify-end items-start p-5 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {service.illustration}
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="bg-white rounded-[10px] w-[34px] h-[34px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 z-10 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Text Content Section */}
              <div className="p-7 flex flex-col">
                <h3 className="text-[18px] font-semibold text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-6 h-12 overflow-hidden">
                  {service.description}
                </p>

                {/* Bottom Icon Box */}
                <div className="icon-box w-fit px-4 py-2 bg-white/5 border border-white/10 rounded-[12px] flex items-center gap-3 transition-colors group-hover:bg-white/10">
                  <div className="w-4 h-4 text-gray-300">
                     <Sparkles className="w-full h-full" />
                  </div>
                  <span className="text-[13px] font-medium text-gray-300">
                    {service.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight">4 Steps to Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-white/80 mb-6 select-none leading-none">{step.number}</div>
                <div className="absolute top-6 left-0">
                  <h4 className="text-xl font-semibold mb-3 text-white drop-shadow-md">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed drop-shadow-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
