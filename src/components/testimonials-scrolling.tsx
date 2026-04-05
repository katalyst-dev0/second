"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    text: "Katalyst has completely transformed how our brand scales. The performance insights are a total game-changer.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementation of our ad strategy was seamless. We saw positive ROI in days, not weeks. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Director",
  },
  {
    text: "The marketing team at Katalyst is unparalleled. They actually understand technical hurdles and guide you to growth.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Support Lead",
  },
  {
    text: "A truly scalable solution that keeps pace with our rapid growth. It's the marketing infrastructure every startup needs.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Robust, reliable, and incredibly fast campaign execution. It's rare to find a partner that delivers like this.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Lead",
  },
  {
    text: "The level of creative customization available is incredible. It finally feels like we have a strategy built just for us.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Analyst",
  },
  {
    text: "Our conversion efficiency has jumped 40% since migrating our ads. The ROI was evident within the first month.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Head",
  },
  {
    text: "Katalyst is the secret weapon for our global reach. Distance no longer matters for high-fidelity performance.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Lead",
  },
  {
    text: "Beautifully designed campaigns and technically sound attribution. It's the standard for modern marketing.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsScrolling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

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

        {/* Scrolling Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden opacity-0 animate-fade-in-up"
             style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
      
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
    </section>
  );
}
