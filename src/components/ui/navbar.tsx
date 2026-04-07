import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { KatalystLogo } from "@/components/ui/katalyst-logo";

interface NavbarProps {
  scrollToSection?: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  locoScroll?: any;
}

export const Navbar = ({ scrollToSection, locoScroll }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
      // Default scrolling behavior if no custom scrollToSection is provided
      e.preventDefault();
      const target = document.querySelector(id) as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else if (!isHomePage) {
        // If we are not on the page that has the section, we might need to navigate first
        // But for now, let's just use the current behavior
        window.location.href = "/" + id;
      }
    }
  };

  const handleLogoClick = () => {
    if (locoScroll) {
      locoScroll.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[100] md:hidden animate-fade-in-overlay flex flex-col p-6 h-[100dvh] w-full">
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
                className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
              >
                Home
              </Link>
            )}
            <a
              href="#reach"
              onClick={(e) => handleScrollToSection(e, "#reach")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Global Reach
            </a>
            <a
              href="#community"
              onClick={(e) => handleScrollToSection(e, "#community")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Community
            </a>
            <a
              href="#feedback"
              onClick={(e) => handleScrollToSection(e, "#feedback")}
              className="text-4xl font-light tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              Feedback
            </a>

            <div className="w-12 h-px bg-white/20 my-2" />

            <a
              href="https://calendly.com/kompanykatalyst/discovery-call"
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold shadow-xl text-center active:scale-95 transition-transform w-full max-w-[280px]"
            >
              Schedule a consult
            </a>
          </div>
        </div>
      )}

      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto relative z-50">
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleLogoClick}
            className="cursor-pointer bg-transparent border-none p-0"
          >
            <div className="hidden sm:block">
              <KatalystLogo width={200} height={43} />
            </div>
            <div className="sm:hidden">
              <KatalystLogo width={140} height={30} />
            </div>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {!isHomePage && (
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
          )}
          <a
            href="#reach"
            onClick={(e) => handleScrollToSection(e, "#reach")}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Global Reach
          </a>

          <a
            href="#community"
            onClick={(e) => handleScrollToSection(e, "#community")}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Community
          </a>
          <a
            href="#feedback"
            onClick={(e) => handleScrollToSection(e, "#feedback")}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Feedback
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/kompanykatalyst/discovery-call"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors shadow-sm border border-white/10 whitespace-nowrap"
          >
            Book an Appointment
          </a>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
