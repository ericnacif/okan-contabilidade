import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Plans } from "./components/Plans";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppBtn } from "./components/WhatsAppBtn";

function App() {
  // Lógica da Barra de Progresso
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-moreira-200 selection:text-moreira-900">
      {/* A Barra de Progresso Fixa no Topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-moreira-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Benefits />
        <Plans />
        <Contact />
      </main>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
