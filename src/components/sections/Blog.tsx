import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "design-systems-2024",
    title: "Master Prompt Engineering in 10 Minutes",
    excerpt: "Prompt engineering is a must-have skill in tech. Developers, marketers, and AI enthusiasts can use it to get better, precise AI outputs. In just 10 minutes, you can learn the basics and start crafting effective prompts.",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    image: "/blogs/blog1.png", // ✅ fixed
  },
  {
    id: "react-performance",
    title: "Start Using Notion from Now",
    excerpt: "Notion is more than just a note-taking app — it’s your personal productivity hub that helps you organize your ideas, projects, and goals in one place.",
    date: "July 12, 2025",
    readTime: "7 min read",
    image: "/blogs/blog2.png", // ✅ fixed
  },
  {
    id: "video-marketing",
    title: "Automate Inventory Management with n8n and OpenAI API.",
    excerpt: "n8n is a powerful workflow automation tool that lets you connect apps, APIs, and automate tasks — no code required.",
    date: "Aug 28, 2025",
    readTime: "6 min read",
    image: "/blogs/blog3.png", // ✅ fixed
  },
];


export const Blog = () => {
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
      id="blog"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">
              Insights And Blogs
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
              Explore high-value ideas, tools, and innovations in design,
              development, productivity, AI, and everything I love.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="glass-panel p-6 group hover:border-primary/50 transition-all duration-300 scroll-fade-in block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Blog Thumbnail */}
                <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-foreground/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-medium text-sm hover:bg-transparent group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
