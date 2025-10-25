import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "PromptGuru AI SaaS Platform",
    description: "Helps you analyze, improve, and master prompt engineering.",
    stack: ["Next", "TypeScript", "Tailwind", "Express", "MongoDB", "OpenAI API"],
    demo: "https://prompt-guru-tech.vercel.app/",
    github: "https://github.com/Abhishekwake/PromptGuru.Tech",
    image: "/assets/PrompGuru.jpg", // ✅ already correct
  },
  {
    title: "HomeServ",
    description: "Home Services Marketplace, real-time tracking, and secure payments.",
    stack: ["React.js", "Tailwind", "Supabase","Web Sockets"],
    demo: "https://home-serv-pezfsbfsf-tushars-projects-1bbd2003.vercel.app/",
    github: "#",
    image: "/assets/home.png", // ✅ fixed: removed "Public/"
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
    <section id="projects" ref={sectionRef} className=" relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">Featured Work</h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
            A curated selection of projects that exemplify cutting-edge design, development, and storytelling mastery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className="glass-panel p-4 md:p-8 group hover:border-primary/50 transition-all duration-500 scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden mb-4 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-cover transition-transform group-hover:scale-105"
                  />
                </a>

                {/* Project Info */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
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

                {/* Demo & Code Buttons */}
                <div className="flex gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="glass-button w-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="glass-button w-full flex items-center justify-center">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
