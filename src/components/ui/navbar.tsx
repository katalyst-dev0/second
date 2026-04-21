import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KatalystLogo } from "@/components/ui/katalyst-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  scrollToSection?: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  locoScroll?: any;
}

export const Navbar = ({ scrollToSection, locoScroll }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    closeMobileMenu();
    if (scrollToSection) {
      scrollToSection(e, id);
    } else {
      e.preventDefault();
      const target = document.querySelector(id) as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else if (!isHomePage) {
        navigate("/" + id);
      }
      }
      };


  const handleLogoClick = () => {
    if (!isHomePage) {
      navigate("/");
    } else {
      if (locoScroll) {
        locoScroll.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] md:hidden flex flex-col p-6 h-[100dvh] w-full"
          >
            <div className="flex items-center justify-between mb-12">
              <KatalystLogo width={140} height={30} />
              <button
                onClick={closeMobileMenu}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors border border-white/10"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
              {!isHomePage && (
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-4xl font-light tracking-tighter text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              )}
              {["reach", "community", "feedback"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleScrollToSection(e, `#${item}`)}
                  className="text-4xl font-light tracking-tighter text-white/60 hover:text-white capitalize transition-colors"
                >
                  {item.replace("-", " ")}
                </a>
              ))}

              <div className="w-12 h-px bg-white/20 my-2" />

              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full px-10 py-6 text-lg font-bold w-full max-w-[280px]"
              >
                <a
                  href="https://calendly.com/kompanykatalyst/discovery-call"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                >
                  Schedule a consult
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav 
        className={cn(
          "fixed top-0 w-full flex items-center justify-center z-[100] transition-all duration-500 py-4 px-6",
          scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="md:hidden w-full flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-none p-0 transition-opacity hover:opacity-90"
          >
            <KatalystLogo width={130} height={28} />
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center border border-white/10 rounded-full pl-6 pr-2 py-1.5 gap-8 shadow-2xl bg-black/40 backdrop-blur-xl"
        >
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-none p-0 transition-opacity hover:opacity-90 pr-4 border-r border-white/10"
          >
            <KatalystLogo width={140} height={30} />
          </button>

          <div className="flex items-center gap-8 lg:gap-10">
            {!isHomePage && (
              <Link
                to="/"
                className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                Home
              </Link>
            )}
            {["reach", "community", "feedback"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleScrollToSection(e, `#${item}`)}
                className="text-sm text-white/60 hover:text-white transition-colors font-medium tracking-wide whitespace-nowrap capitalize"
              >
                {item.replace("-", " ")}
              </a>
            ))}
          </div>

          <Button
            asChild
            variant="default"
            className="rounded-full px-6 py-2 h-auto text-sm font-bold"
          >
            <a
              href="https://calendly.com/kompanykatalyst/discovery-call"
              target="_blank"
              rel="noreferrer"
            >
              Book an Appointment
            </a>
          </Button>
        </motion.div>
      </nav>
    </>
  );
};
