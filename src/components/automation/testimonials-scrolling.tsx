"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    text: "Katalyst Automation replaced our manual reporting, freeing the ops team to focus on clients again.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Automating invoicing and scheduling was done in a week. We started seeing time savings immediately.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Director",
  },
  {
    text: "They understand how small businesses operate. The AI copilots feel like a new teammate.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Support Lead",
  },
  {
    text: "Our service delivery became reliable overnight. Manual handoffs vanished after the automation sprint.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "The automation playbook makes it easy for our staff to trust the bots and still keep a human touch.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Lead",
  },
  {
    text: "We gained clarity across every process, from quotes to follow-ups, and the system proactively nudges owners.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Analyst",
  },
  {
    text: "Automation cut our response time in half while increasing booking volume. Our team finally breathes again.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Customer Success Head",
  },
  {
    text: "Katalyst is our operations brain. Distance is irrelevant when bots own the routine work.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Lead",
  },
  {
    text: "Transparency, automation, and growth—it's the new standard for small business workflow.",
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
          <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">Client Wins</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-normal tracking-tighter mb-6 leading-tight text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Automation for real teams.<br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
              Proven by small business owners.
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the small business leaders who now run smoother operations, save hours, and accelerate growth with AI copilots.
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
