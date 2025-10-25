import { Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="glass-panel py-12 mt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Logo/Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold glow-text"
            >
              Abhishek Wake
            </a>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Copyright & Tagline */}
            <div className="text-center space-y-2">
              <p className="text-sm text-foreground/60">
                © 2025 Abhishek Wake. All rights reserved.
              </p>
              <p className="text-sm text-foreground/50 flex items-center gap-1 justify-center">
                Built with <Heart className="w-4 h-4 text-accent fill-accent" /> & caffeine
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
