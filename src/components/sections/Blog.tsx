import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "design-systems-2024",
    title: "Building Scalable Design Systems in 2024",
    excerpt:
      "Learn how to create design systems that grow with your product and team.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
  },
  {
    id: "react-performance",
    title: "React Performance: Beyond the Basics",
    excerpt:
      "Advanced techniques for optimizing React apps and reducing bundle sizes.",
    date: "Mar 8, 2024",
    readTime: "12 min read",
  },
  {
    id: "video-marketing",
    title: "The Art of Video Marketing in the AI Era",
    excerpt:
      "How to leverage video content to stand out in an increasingly competitive landscape.",
    date: "Feb 28, 2024",
    readTime: "6 min read",
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
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-7xl premium-heading mb-8">
              From My Blog
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light">
              Thoughts on design, development, and the creative process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="glass-panel p-6 group hover:border-primary/50 transition-all duration-300 scroll-fade-in block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Blog Thumbnail */}
                <div className="aspect-video bg-gradient-primary rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
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
