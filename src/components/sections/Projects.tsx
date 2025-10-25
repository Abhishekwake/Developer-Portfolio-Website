import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "Modern analytics platform with real-time data visualization and AI insights.",
    stack: ["React", "TypeScript", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack marketplace with payments, inventory management, and admin panel.",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Brand Identity System",
    description:
      "Complete visual identity including logo, typography, and brand guidelines.",
    stack: ["Figma", "After Effects", "Illustrator"],
    demo: "#",
    github: "#",
  },
  {
    title: "Video Campaign",
    description:
      "30-second product launch video with motion graphics and sound design.",
    stack: ["Premiere Pro", "After Effects", "DaVinci"],
    demo: "#",
    github: "#",
  },
];

export const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">
              Featured Work
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
              A selection of projects that showcase my design, development, and
              storytelling capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-panel p-8 group hover:border-primary/50 transition-all duration-500 scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Thumbnail */}
                <div className="aspect-video bg-gradient-primary rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 rounded-md text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-button flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-button flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
