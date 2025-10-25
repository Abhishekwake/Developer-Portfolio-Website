import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Youtube, Github, Send, Mail, Copy, Calendar, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@yourusername", label: "YouTube" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const emailAddress = "abhishekwake111@gmail.com";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-7 scroll-fade-in">
            <h2 className="text-6xl md:text-7xl premium-heading font-bold mb-6 bg-gradient-to-r from-white via-[#a1a1aa] to-white bg-clip-text text-transparent">
              Let’s Connect in Style ✦
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
              Got a vision, project, or idea? Let’s turn it into something extraordinary.
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-panel scroll-fade-in p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-3xl bg-gradient-to-br from-white/5.4 via-white/10 to-white/5 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all duration-500">
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:border-primary"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-transparent border border-white/20 text-white placeholder:text-white/40 focus:border-primary resize-none"
              /> */}

              {/* <Button type="submit" size="lg" className="glass-button w-full group bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form> */}

            {/* Quick Actions */}
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Button variant="outline" onClick={handleEmailClick} className="glass-button bg-white/10 hover:bg-white/20">
                <Mail className="w-5 h-5 mr-2" /> Email Me
              </Button>

              <Button variant="outline" onClick={handleCopyEmail} className="glass-button bg-white/10 hover:bg-white/20">
                <Copy className="w-5 h-5 mr-2" /> Copy Email
              </Button>

              <a href="https://calendly.com/abhishekwake222" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="glass-button bg-white/10 hover:bg-white/20 w-full">
                  <Calendar className="w-5 h-5 mr-2" /> Schedule Meet
                </Button>
              </a>

              <a href="https://wa.me/918080127679" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="glass-button bg-white/10 hover:bg-white/20 w-full">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Me
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-center text-white/60 mb-6">Or connect with me on</p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
