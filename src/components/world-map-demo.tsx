"use client";
import WorldMap from "@/components/ui/world-map";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe2 } from "lucide-react";

export default function WorldMapDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <div 
      id="reach"
      ref={containerRef}
      className="py-32 bg-transparent w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Globe2 className="w-3.5 h-3.5 text-red-400" />
          <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">Global Network</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-6xl font-normal tracking-tighter mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Global{" "}
          <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent italic">
            {"Performance".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <br />
          Unbound.
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Break free from traditional boundaries. Reach audiences anywhere, with the
          power of high-performance digital marketing. Perfect for brands that demand 
          absolute scalability and predictable growth.
        </motion.p>
      </div>

      {/* Map Container - Centered and limited width */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative rounded-3xl overflow-hidden glass-card p-2 shadow-2xl shadow-black/50">
          <WorldMap
          lineColor="#dc2626" 
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}
