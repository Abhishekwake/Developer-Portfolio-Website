import { useEffect, useRef } from "react";
import { Code2, Palette, Film, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Custom websites and web apps built with modern frameworks like React and Next.js.",
  },
  {
    icon: Palette,
    title: "Branding & Visual Identity",
    description:
      "Logo design, brand guidelines, and visual systems that tell your story.",
  },
  {
    icon: Film,
    title: "Video Editing & Motion Design",
    description:
      "Cinematic editing, motion graphics, and visual effects for compelling content.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Growth Strategy",
    description:
      "Data-driven campaigns, SEO, and social media strategies that scale.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">
              What I Do
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
              From concept to launch, I provide end-to-end solutions that bring
              your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
              <div
                  key={service.title}
                  className="glass-panel p-10 group hover:border-primary/50 transition-all duration-500 scroll-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-10 h-10 mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
