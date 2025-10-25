import { useEffect, useRef } from "react";
import { Code2, Server, Database, Cloud } from "lucide-react";
import gsap from "gsap";

const skills = [
  { name: "Frontend Development", icon: Code2, tailwind: "from-[#FF4C61] to-[#FF758C]" },
  { name: "Backend Development", icon: Server, tailwind: "from-[#2E3A99] to-[#5A6FFF]" },
  { name: "Database Design", icon: Database, tailwind: "from-[#1AA897] to-[#3CE6C4]" },
  { name: "Cloud & APIs", icon: Cloud, tailwind: "from-[#7C3AED] to-[#B279FF]" },
  // Add more skills here if needed
];

const tools = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript",
  "Node.js", "Express.js", "MongoDB", "MySQL", "Vercel", "Render",
  "Firebase", "OpenAI API", "GenAI", "Postman" ,"Git","Github"
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);

  // Scroll fade-in
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

  // Animated tagline
  useEffect(() => {
    if (!wordRef.current) return;
    let index = 0;
    const words = ["Design", "Development", "Deployment", "Distribute"];
    const animateWord = () => {
      if (!wordRef.current) return;
      gsap.to(wordRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        onComplete: () => {
          wordRef.current!.textContent = words[index];
          gsap.fromTo(wordRef.current!, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
          index = (index + 1) % words.length;
        },
      });
    };
    animateWord();
    const interval = setInterval(animateWord, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        {/* Left + Right */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 scroll-fade-in flex flex-col justify-center gap-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Hi,</h1>
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">I’m Abhishek</h2>
            <h3 className="text-5xl md:text-6xl font-semibold text-gray-100 drop-shadow-md">Passionate About</h3>
            <h3 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-md">
              <span ref={wordRef} className="text-accent" style={{ textShadow: "0 0 6px #fff55, 0 0 12px #fff33" }}>Design</span>
            </h3>
           <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-xl">
              Final Year CSE student and Fullstack Developer. I specialize in building scalable web applications using React, Next.js, Node.js, Express, and databases like MongoDB & MySQL.
              Experienced with cloud deployment on Vercel, Render, and Firebase, and integrating AI APIs like OpenAI & GenAI.
              I focus on problem-solving, clean architecture, and developing efficient, maintainable code.
              Open to software development and fullstack engineering opportunities. 🚀
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center scroll-fade-in">
            <div className="rounded-xl overflow-hidden border-4 border-primary shadow-2xl w-[404px] h-[39Postman0px] md:w-[544px] md:h-[588px] animate-float">
              <img src="public/assets/abhihyderabad.jpg" alt="Abhishek Wake" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Horizontal Rolling Skills */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {skills.concat(skills).map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 mx-4 p-6 rounded-2xl text-white shadow-2xl bg-gradient-to-br ${skill.tailwind} flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500`}
                >
                  <Icon className="w-10 h-10 mb-2" />
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools / Tech Stack */}
        <div className="mt-12 scroll-fade-in">
          <div className="glass-panel p-8 rounded-2xl shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold mb-4 text-center text-white drop-shadow-md">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white border border-white/20 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all shadow-md hover:shadow-2xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style >{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .scroll-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        .scroll-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-scroll {
          display: flex;
          gap: 1.5rem;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
