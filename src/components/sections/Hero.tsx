import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Optimized, Lazy-loaded Spline background
export const SplineBackground = () => {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setLoaded(true);
          else setLoaded(false);
        });
      },
      { root: null, threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* 🌑 Static Background Image (Moon Glow) */}
      <img
        src="public/assets/moon-glow-bg.jpg"
        alt="Moon Glow Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          backgroundColor: "#040406", // fallback color
          filter: "brightness(1.1)",
        }}
      />

      {/* ✨ Spline Stars Layer */}
      {loaded ? (
        <iframe
          src="https://my.spline.design/3dstars-KeEUOau7Sor4oifre1L8BJQz/"
          frameBorder="0"
          loading="lazy"
          className="absolute inset-0 w-full h-full pointer-events-none"
          title="3D Stars Background"
          allow="autoplay; fullscreen"
          style={{
            opacity: 0.9,
            mixBlendMode: "screen",
            transition: "opacity 0.6s ease",
          }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-black via-slate-900 to-slate-950 animate-pulse" />
      )}
    </div>
  );
};


// 🔹 Main Hero Section
export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Optimized 3D Background */}
      <SplineBackground />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] z-[1]" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-panel px-5 py-2.5 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/90">
              Available for new projects
            </span>
          </div>

          {/* Heading */}
   <h1 className="mt-16 text-6xl md:text-8xl lg:text-9xl premium-heading leading-[0.95] animate-fade-in text-white drop-shadow-[0_4px_15px_rgba(255,255,255,0.3)]">
  Websites & Apps
  <br />
  Developer
</h1>


          {/* Subheading */}
          <p className="mt-6 text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
            I help startups and creators build world-class websites, apps, and
            brands that scale.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="glass-button text-base font-semibold px-10 py-7 group text-foreground"
            >
              Let's Build Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Featured Work Showcase */}
          <div className="mt-20 animate-fade-in">
            <div className="glass-panel p-1 max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/overlay.svg')] opacity-20" />

                <img
                  src="/assets/PrompGuru.jpg"
                  alt="Featured Work Showcase"
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                  <Sparkles className="w-16 h-16 mb-2 text-accent/75 animate-glow-pulse" />
                  <p className="text-white/75 text-base md:text-sm font-medium text-center">
                    Recent Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
