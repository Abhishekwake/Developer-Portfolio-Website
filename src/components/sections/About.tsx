import { useEffect, useRef } from "react";
import { Code2, Film, Palette, TrendingUp } from "lucide-react";

const skills = [
  { name: "React & Next.js", icon: Code2 },
  { name: "Video Editing", icon: Film },
  { name: "UI/UX Design", icon: Palette },
  { name: "Growth Marketing", icon: TrendingUp },
];

export const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Who I Am
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              A multi-disciplinary creative technologist with a passion for
              blending storytelling, design, and code. I started as a filmmaker,
              evolved into a developer, and now help startups and creators build
              digital experiences that convert and inspire.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="glass-panel p-6 text-center group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground/80">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tools/Tech Stack */}
          <div className="mt-12 scroll-fade-in">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind",
                  "Figma",
                  "After Effects",
                  "Premiere Pro",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/80 border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
