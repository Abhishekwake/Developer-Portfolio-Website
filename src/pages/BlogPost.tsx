import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "design-systems-2024": {
    title: "Building Scalable Design Systems in 2024",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    content: [
      "Design systems have become the backbone of modern product development. They ensure consistency, accelerate workflows, and empower teams to build better products faster.",
      "In this article, we'll explore the key principles of building a design system that scales with your organization.",
      "First, start with foundations. Define your color palette, typography scale, spacing system, and elevation tokens. These are the atoms of your design language.",
      "Next, build component libraries. Create reusable UI components that implement your design tokens. Document their usage, variations, and best practices.",
      "Finally, establish governance. Create guidelines for how the design system evolves, who can contribute, and how changes are reviewed and approved.",
    ],
  },
  "react-performance": {
    title: "React Performance: Beyond the Basics",
    date: "Mar 8, 2024",
    readTime: "12 min read",
    content: [
      "React performance optimization is crucial for delivering fast, responsive user experiences. Let's dive into advanced techniques that go beyond the standard React.memo() and useCallback().",
      "Code splitting is your first line of defense. Use dynamic imports and React.lazy() to split your bundle into smaller chunks that load on demand.",
      "Virtual scrolling can dramatically improve performance when rendering large lists. Libraries like react-window make this easy to implement.",
      "Consider using web workers for heavy computational tasks. This keeps your main thread free and your UI responsive.",
      "Monitor your app's performance with React DevTools Profiler. Measure before and after optimizations to ensure they're effective.",
    ],
  },
  "video-marketing": {
    title: "The Art of Video Marketing in the AI Era",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    content: [
      "Video marketing has evolved dramatically with AI tools, but the fundamentals of storytelling remain unchanged. Let's explore how to create compelling video content in 2024.",
      "Start with a strong hook. You have 3 seconds to capture attention. Make every frame count.",
      "Tell stories, not features. People connect with narratives and emotions, not technical specifications.",
      "Optimize for platforms. What works on YouTube might not work on TikTok. Understand each platform's unique audience and format.",
      "Use AI tools wisely. They can accelerate production, but human creativity and strategic thinking are irreplaceable.",
      "Measure and iterate. Track engagement metrics, learn from what works, and continuously refine your approach.",
    ],
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button className="glass-button">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-panel py-6 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-secondary/50">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Blog Content */}
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl premium-heading mb-8">
            {post.title}
          </h1>

        {/* Featured Image */}
        <div className="aspect-video glass-panel p-4 mb-12">
          <div className="w-full h-full bg-gradient-primary rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground/80 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/">
            <Button className="glass-button">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
