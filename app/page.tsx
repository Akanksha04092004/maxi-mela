import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <ResourcesSection />
      <Footer />
    </main>
  );
}
