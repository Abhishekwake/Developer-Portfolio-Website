  import { Button } from "@/components/ui/button";
  import { ArrowRight, Sparkles } from "lucide-react";
  import ReactPlayer from "react-player";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
 gsap.registerPlugin(ScrollTrigger);
 import { Particles } from "react-tsparticles";

 
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
            // src="https://my.spline.design/3dstars-KeEUOau7Sor4oifre1L8BJQz/"
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
          <div className="max-w-6xl mx-auto text-center ">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-panel px-5 py-2.5 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground/90">
                Available for new projects
              </span>
            </div>  

            {/* Main heading */}
            <h1 className="mt-16 text-6xl md:text-8xl lg:text-9xl premium-heading leading-[0.95] animate-fade-in">
              Websites & Apps
              <br />
              Developer.
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light ">
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
            {/* Mockup preview replaced with local image */}
            {/* Featured Work Showcase */}
            <div className="mt-20 animate-fade-in">
              <div className="glass-panel p-1 max-w-5xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  {/* Background overlay pattern */}
                  <div className="absolute inset-0 bg-[url('/assets/overlay.svg')] opacity-20" />

                  {/* Main image */}
                  <img
                    src="/assets/PrompGuru.jpg" // correct path for public folder
                    alt="Featured Work Showcase"
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  {/* Overlay text + Sparkles at the top */}
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
