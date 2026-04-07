import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, ShieldCheck, ArrowRight, Calendar } from "lucide-react";

const cards = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Save Your Time",
    description: "Our AI-driven automation handles the repetitive tasks, allowing your team to focus on high-level strategy and creative work."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Scale Your Systems",
    description: "We don't just add more leads; we build the infrastructure that can handle 10x the volume without breaking a sweat."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Drive Your Profit",
    description: "Every campaign is optimized for ROI. We focus on the metrics that actually impact your bottom line, not just vanity numbers."
  }
];

export const GrowthSupport = () => {
  return (
    <section className="w-full py-24 px-6 relative bg-transparent overflow-hidden">
      {/* Helping Small Businesses Grow */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Helping Small Businesses Grow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide the enterprise-level expertise and technology small businesses need to compete and win in a crowded market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative group hover:bg-white/5 transition-colors"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book a free consultation */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden text-center"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-normal mb-8 tracking-tight">Ready to architect your future?</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Schedule a free 15-minute discovery call to see how we can transform your business with performance marketing and AI automation.
            </p>
            
            <a
              href="https://calendly.com/kompanykatalyst/discovery-call"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-[1.05] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-6 h-6" />
              Book a free consultation
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
