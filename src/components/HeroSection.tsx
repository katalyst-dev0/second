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

const Navbar = () => (
  <header className="w-full py-5 px-8 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} height={32} width={32} alt="Aceternity mark" className="h-8 w-auto" />
        <span className="text-lg font-semibold text-foreground">Aceternity</span>
      </div>
      <nav className="flex items-center gap-6 text-foreground/90 text-base">
        {navLinks.map(({ label, hasChevron }) => (
          <button key={label} className="flex items-center gap-1 transition hover:text-foreground">
            <span>{label}</span>
            {hasChevron && <ChevronDown />}
          </button>
        ))}
      </nav>
      <Button variant="heroSecondary" size="sm" className="rounded-full px-4 py-2">
        Sign Up
      </Button>
    </div>
    <div className="mt-[3px] w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
  </header>
);

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background text-center">
    <Navbar />
    <div className="flex flex-col items-center pt-20 px-4">
      <h1
        className="text-[230px] font-normal leading-[1.02] tracking-[-0.024em] font-['General Sans',sans-serif] text-transparent"
        style={{
          backgroundImage: "linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Grow
      </h1>
      <p className="text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80">
        The most powerful AI ever deployed
        <br />
        in talent acquisition
      </p>
      <div className="mt-8 mb-[66px]">
        <Button variant="heroSecondary" className="px-[29px] py-[24px] text-base font-normal">
          Schedule a Consult
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
