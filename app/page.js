import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-cyber text-text-primary relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="fixed inset-0 cyber-bg opacity-30 pointer-events-none"></div>
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-dark-950/50 to-dark-900/80 pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
