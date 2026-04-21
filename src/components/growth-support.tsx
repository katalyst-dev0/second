import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, ShieldCheck, ArrowRight, Calendar, Zap, Users, Target } from "lucide-react";

const cards = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Save Your Time",
    description: "Our AI-driven automation handles repetitive tasks, allowing your team to focus on high-level strategy and creative work.",
    stats: "40+ hrs/week saved"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Scale Your Systems",
    description: "We don't just add more leads; we build infrastructure that can handle 10x volume without breaking a sweat.",
    stats: "10x growth capacity"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Drive Your Profit",
    description: "Every campaign is optimized for ROI. We focus on metrics that actually impact your bottom line, not just vanity numbers.",
    stats: "3.5x avg ROI"
  }
];

export const GrowthSupport = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-12 relative bg-transparent overflow-hidden">
      {/* Helping Small Businesses Grow */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8" style={{background: 'var(--icon-bg)', border: '1px solid var(--card-border)'}}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-[1.05] premium-heading">
            Helping Small Businesses <span className="font-medium text-white">Grow</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light" style={{color: 'var(--text-secondary)'}}>
            We provide enterprise-level expertise and technology small businesses need to compete and win in a crowded market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-3xl border border-white/8 relative group hover:bg-white/[0.06] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-6 icon-container w-fit group-hover:scale-105 transition-transform duration-700">
                  {card.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">{card.title}</h3>
                <p className="leading-relaxed mb-6 font-light text-lg" style={{color: 'var(--text-secondary)'}}>
                  {card.description}
                </p>
                <div className="flex items-center gap-3 text-sm font-medium" style={{color: 'var(--text-secondary)'}}>
                  <Target className="w-4 h-4" />
                  <span>{card.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book a free consultation */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-16 md:p-20 rounded-[3rem] border border-white/8 relative overflow-hidden text-center sm:text-left transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/30"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{background: 'var(--icon-bg)', border: '1px solid var(--card-border)'}}>
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white/90">500+ Businesses Transformed</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-[1.05] premium-heading text-center sm:text-left">
              Ready to architect your <span className="font-medium" style={{color: 'var(--accent-red)'}}>future</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light text-center sm:text-left" style={{color: 'var(--text-secondary)'}}>
              Schedule a free 15-minute discovery call to see how we can transform your business with performance marketing and AI automation.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://calendly.com/kompanykatalyst/discovery-call"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center sm:justify-start gap-4 bg-white text-black px-12 py-6 text-lg font-medium transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 active:scale-[0.98] w-full sm:w-auto"
                style={{borderRadius: '980px'}}
              >
                <Calendar className="w-6 h-6 transition-transform duration-700 group-hover:rotate-12" />
                Book a free consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-1" />
              </a>
              <p className="text-sm mt-6 font-light text-center sm:text-left" style={{color: 'var(--text-secondary)'}}>No commitment • 15 minutes • Free strategy session</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
