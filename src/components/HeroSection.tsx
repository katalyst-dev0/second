import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Features", hasChevron: true },
  { label: "Solutions" },
  { label: "Plans" },
  { label: "Learning", hasChevron: true },
];

const ChevronDown = () => (
  <svg className="h-3 w-3" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InternalNavbar = () => (
  <header className="w-full py-5 px-8 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} height={32} width={32} alt="Aceternity mark" className="h-8 w-auto" />
        <span className="text-lg font-semibold text-foreground">Aceternity</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-foreground/90 text-base">
        {navLinks.map(({ label, hasChevron }) => (
          <button key={label} className="flex items-center gap-1 transition hover:text-foreground">
            <span>{label}</span>
            {hasChevron && <ChevronDown />}
          </button>
        ))}
      </nav>
      <Button variant="outline" size="sm" className="rounded-full px-4">
        Sign Up
      </Button>
    </div>
    <div className="mt-[3px] w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
  </header>
);

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background text-center min-h-[80vh] flex flex-col items-center">
    <InternalNavbar />
    <div className="flex flex-col items-center pt-20 px-4 max-w-7xl">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[120px] md:text-[230px] font-normal leading-[1.02] tracking-[-0.024em] font-sans text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)",
        }}
      >
        Scale
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-muted-foreground text-center text-lg md:text-xl leading-8 max-w-md mt-4"
      >
        The most powerful performance marketing
        <br />
        for scalable brands
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 mb-[66px]"
      >
        <Button variant="default" size="lg" className="rounded-full px-8 h-12 text-base font-normal">
          Schedule a Consult
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
