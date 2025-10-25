import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechStart",
    content:
      "Abhishek transformed our vision into a stunning reality. The website not only looks incredible but also drives real business results.",
    result: "+200% conversion",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, GrowthLabs",
    content:
      "Working with Abhishek was a game-changer. His attention to detail and strategic thinking helped us scale faster than expected.",
    result: "+150% engagement",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director, Bloom",
    content:
      "The video campaign Abhishek created for us was nothing short of brilliant. It captured our brand essence perfectly.",
    result: "2M+ views",
  },
];

export const Testimonials = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">
              Client Success Stories
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
              Don't just take my word for it — here's what clients say about
              working together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="glass-panel p-6 scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60 mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
