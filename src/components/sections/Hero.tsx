import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/3dstars-KeEUOau7Sor4oifre1L8BJQz/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Stars Background"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-panel px-5 py-2.5 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/90">
              Available for new projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl premium-heading leading-[0.95] animate-fade-in">
            Design. Develop.
            <br />
            Dominate.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
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

          {/* Mockup preview */}
          <div className="mt-20 animate-fade-in">
            <div className="glass-panel p-6 max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
                <div className="relative z-10 text-center">
                  <Sparkles className="w-20 h-20 mx-auto mb-4 text-accent/80 animate-glow-pulse" />
                  <p className="text-foreground/50 text-sm font-medium">Featured Work Showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
