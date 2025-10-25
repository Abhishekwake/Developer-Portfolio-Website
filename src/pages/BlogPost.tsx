import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  image?: string; // optional featured image
  content: string[];
}> = {
  "design-systems-2024": {
    title: "Master Prompt Engineering in 10 Minutes",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "/public/blogs/blog1.png",
    content: [
      "Prompt engineering is a must-have skill in today’s tech world. It helps developers, marketers, and AI enthusiasts get precise and effective AI outputs.",
      "In this article, we'll explore the key steps to master prompt engineering quickly and easily.",
      "First, be clear and specific. Give AI precise instructions and context, like explaining technical concepts in simple language for beginners.",
      "Next, provide examples. Show the AI the style or format you want, so it can mimic your tone and structure accurately.",
      "Then, ask for step-by-step explanations. For complex topics, instruct AI to break down answers in a structured, easy-to-follow manner.",
      "Use role-playing for more aKccuracy. Assign AI a role, like senior engineer or mentor, to get expert-level guidance tailored to your audience.",
      "Finally, iterate and experiment. Tweak prompts for tone, length, and context to refine outputs and achieve better results every time."
    ],
  },
  "react-performance": {
    title: "Start Using Notion from Now",
    date: "Mar 8, 2024",
    readTime: "8 min read",
    image: "/public/blogs/blog2.png",
    content: [
  "Notion is more than just a note-taking app — it’s your personal productivity hub that helps you organize your ideas, projects, and goals in one place.",
  "In this article, you'll discover why you should start using Notion today and how it can completely change the way you work and think.",
  "First, Notion is an all-in-one workspace. You can manage your notes, to-do lists, projects, and even build dashboards without switching between different apps.",
  "Next, it lets you create your own system. Whether you’re a student, developer, or creator, you can design pages and templates that fit your workflow perfectly.",
  "Then, it helps you stay consistent. With Notion’s templates, reminders, and linked databases, you can track your habits, goals, and progress easily.",
  "Use it to build your second brain. Store your ideas, bookmarks, notes, and plans in a structured way so you never lose important thoughts again.",
  "Finally, start small and grow. Begin with a simple daily planner or task list, and as you get comfortable, expand into full systems for productivity, learning, or creativity."
]
  },
  "video-marketing": {
    title: "Automate Inventory Management with n8n and OpenAI API",
    date: "Feb 28, 2025",
    readTime: "10 min read",
    image: "/public/blogs/blog3.png", // optional featured image
    content: [
  "n8n is a powerful workflow automation tool that lets you connect apps, APIs, and automate tasks — no code required.",
  "In this short tutorial, you'll learn how to use n8n with the OpenAI API to manage inventory and generate email summaries automatically.",
  "First, set up n8n locally or on cloud and create a new workflow.",
  "Add an HTTP Request node to fetch your inventory data from a Google Sheet, database, or API endpoint.",
  "Next, connect an OpenAI node. Send the fetched inventory data as input and prompt OpenAI to create a summary like ‘Summarize today’s inventory status and highlight low-stock items.’",
  "Then, add an Email node. Use the OpenAI summary output as the email body and send it to your team or manager automatically.",
  "Finally, schedule the workflow to run daily. You’ll get AI-generated inventory summaries in your inbox — saving time and improving efficiency."
]
,
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

        {/* Featured Image (optional) */}
        {post.image && (
          <div className="aspect-video glass-panel p-4 mb-12">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}

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
