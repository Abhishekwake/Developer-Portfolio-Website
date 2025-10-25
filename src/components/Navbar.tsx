import { useState, useEffect } from "react";
import { Menu, X, Search, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  // { name: "Services", href: "#services" },
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[80%] px-8 py-3 rounded-2xl transition-all duration-500
          ${scrolled 
            ? "backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.2)]" 
            : "backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          }
        `}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:text-indigo-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            AW
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-white text-sm font-medium px-2 py-0.5 hover:text-indigo-400 transition-colors duration-300
                  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] 
                  before:bg-gradient-to-r before:from-indigo-400 before:via-pink-400 before:to-indigo-400 
                  before:transition-all before:duration-500 hover:before:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Menu / Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex p-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              <Search size={18} className="text-white" />
            </button>
            <button className="hidden md:flex p-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              <User size={18} className="text-white" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden backdrop-blur-md bg-black/70">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white/5 backdrop-blur-3xl border-l border-white/20 p-8 flex flex-col gap-6 rounded-l-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            <div className="flex justify-end mb-6">
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
                className="text-xl font-semibold text-white hover:text-indigo-400 transition duration-300"
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
