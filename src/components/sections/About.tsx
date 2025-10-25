import { useEffect, useRef } from "react";
import { Code2, Server, Database, Cloud } from "lucide-react"; // updated icons for dev
import gsap from "gsap";

const skills = [
  { name: "Frontend Development", icon: Code2 },
  { name: "Backend Development", icon: Server },
  { name: "Database Design", icon: Database },
  { name: "Cloud & APIs", icon: Cloud },
];

const animatedWords = ["Design", "Development", "Deployment", "Distribute"];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  // Scroll fade-in effect
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".scroll-fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // GSAP animated tagline
  useEffect(() => {
    if (!wordRef.current) return;

    let index = 0;

    const animateWord = () => {
      if (!wordRef.current) return;

      gsap.to(wordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        onComplete: () => {
          wordRef.current!.textContent = animatedWords[index];
          gsap.fromTo(
            wordRef.current!,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 }
          );
          index = (index + 1) % animatedWords.length;
        },
      });
    };

    animateWord();
    const interval = setInterval(animateWord, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Left: Tagline + Description */}
          <div className="md:w-1/2 scroll-fade-in flex flex-col justify-center gap-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-white">Hi,</h1>
            <h2 className="text-5xl md:text-6xl font-semibold text-white">I’m Abhishek</h2>
            <h3 className="text-5xl md:text-6xl font-semibold text-gray-100">Passionate About</h3>
            <h3 className="text-5xl md:text-6xl font-semibold">
              <span ref={wordRef} className="text-accent">
                {animatedWords[0]}
              </span>
            </h3>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-xl">
              Final Year CSE student and Fullstack Developer. I specialize in building scalable web applications using React, Next.js, Node.js, Express, and databases like MongoDB & MySQL.
              Experienced with cloud deployment on Vercel, Render, and Firebase, and integrating AI APIs like OpenAI & GenAI.
              I focus on problem-solving, clean architecture, and developing efficient, maintainable code.
              Open to software development and fullstack engineering opportunities. 🚀
            </p>
          </div>

          {/* Right: Photo */}
          <div className="md:w-1/2 flex justify-center scroll-fade-in">
            <div className="rounded-xl overflow-hidden border-4 border-primary shadow-xl
                  w-82 h-66 md:w-[544px] md:h-[508px]">
              <img
                src="public/assets/abhihyderabad.jpg"
                alt="Abhishek Wake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 scroll-fade-in">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-panel p-6 text-center group hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground/80">{skill.name}</p>
              </div>
            );
          })}
        </div>

        {/* Tools / Tech Stack */}
        <div className="mt-12 scroll-fade-in">
          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Vercel",
                "Render",
                "Firebase",
                "OpenAI API",
                "GenAI",
                "Postman ",
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
    </section>
  );
};
