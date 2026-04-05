"use client"

import { useEffect, useRef, useState } from "react"
import {
  Search,
  FileText,
  Sparkles,
  Zap,
  BarChart3,
  TrendingUp,
  Award,
  Users,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion"

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Market Audit",
    description:
      "Analyze trends, competitor strategies, and current campaign performance to identify growth opportunities.",
    position: "left",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Strategy",
    description:
      "Craft bold marketing plans that balance creative storytelling with technical precision and target accuracy.",
    position: "left",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Creative",
    description:
      "High-performance ad creatives and copy designed to stop the scroll and drive immediate action.",
    position: "left",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Execution",
    description:
      "Launching and managing multi-channel campaigns with absolute focus on efficiency and budget control.",
    position: "right",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Performance",
    description:
      "Real-time analytics and attribution to ensure every dollar of ad spend is accounted for and working.",
    position: "right",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
    title: "Scaling",
    description:
      "Continuously refining targets and creative to scale performance without diminishing returns on investment.",
    position: "right",
  },
]

const stats = [
  { icon: <Award className="w-6 h-6" />, value: 100, label: "Campaigns Launched", suffix: "+" },
  { icon: <Users className="w-6 h-6" />, value: 1500, label: "Growth Goals Met", suffix: "+" },
  { icon: <Target className="w-6 h-6" />, value: 10, label: "Views Generated", suffix: "M+" },
  { icon: <TrendingUp className="w-6 h-6" />, value: 98, label: "ROI Target Success", suffix: "%" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const isInView = useInView(sectionRef, { once: false, amount: 0.25 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 })
  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-transparent text-white overflow-hidden relative"
    >
      <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl" style={{ y: y1, rotate: rotate1 }} />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gray-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/10"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-red-500/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div className="container mx-auto max-w-6xl relative z-10" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-white font-medium mb-2 flex items-center gap-2 text-sm tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR METHODOLOGY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center tracking-tight">Our Process</h2>
          <motion.div
            className="w-24 h-1 bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-gray-400 leading-relaxed"
          variants={fadeVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          We are a team of performance marketers and creative strategists dedicated to scaling brands through data-driven campaigns and absolute transparency.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, idx) => (
                <ServiceItem key={`left-${idx}`} service={service} delay={idx * 0.2} direction="left" />
              ))}
          </div>

        <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
          <motion.div className="relative w-full max-w-xs" variants={fadeVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="/im.png"
                  alt="Digital Performance"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Results <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-2 border-red-500/20 rounded-3xl -m-4 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-red-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-gray-500/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, idx) => (
                <ServiceItem key={`right-${idx}`} service={service} delay={idx * 0.2} direction="right" />
              ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter key={stat.label} stat={stat} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div
          className="glass-card mt-20 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight">Ready to scale your brand?</h3>
            <p className="text-gray-300 text-lg">Let's create something profitable together.</p>
          </div>
          <motion.button
            className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-2 font-bold transition-all shadow-xl hover:shadow-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  service: (typeof services)[0]
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ service, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className={`flex flex-col group ${direction === "left" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className={`flex items-center gap-4 mb-4 ${direction === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div className="glass-card p-4 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:text-black shadow-sm" whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}>
          {service.icon}
          {service.secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300 tracking-tight">{service.title}</h3>
      </motion.div>
      <motion.p
        className={`text-sm text-gray-400 leading-relaxed ${direction === "left" ? "md:pr-0" : "md:pl-0"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {service.description}
      </motion.p>
      <motion.div
        className={`mt-4 flex items-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ${direction === "left" ? "md:justify-end" : "md:justify-start"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1 cursor-pointer">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  stat: (typeof stats)[0]
  delay: number
}

function StatCounter({ stat, delay }: StatCounterProps) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const step = stat.value / 60
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= stat.value) {
        setValue(stat.value)
        clearInterval(id)
      } else {
        setValue(Math.floor(current))
      }
    }, 20)
    return () => clearInterval(id)
  }, [stat.value])

  return (
    <motion.div
      className="flex flex-col items-start gap-2 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white">{stat.icon}</div>
      <p className="text-2xl font-semibold">
        {value}
        {stat.suffix}
      </p>
      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{stat.label}</p>
    </motion.div>
  )
}
