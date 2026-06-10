import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Showreel />
      <Services />
      <Clients />
      <Projects />
      <Reviews />
      <Awards />
      <Footer />
    </main>
  );
}
