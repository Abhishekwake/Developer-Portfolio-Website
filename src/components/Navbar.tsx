import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 
        ${scrolled ? "backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg" : "bg-white/5"} 
        rounded-2xl w-[70%] px-8 py-4 glass-nav`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            Abhishek Wake
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden backdrop-blur-md bg-black/60">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white/10 backdrop-blur-2xl border-l border-white/20 p-8 flex flex-col gap-6 rounded-l-2xl">
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-xl font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
