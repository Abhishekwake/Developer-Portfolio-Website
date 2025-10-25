import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
// import { Services } from "@/components/sections/Services";
// import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
// import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
