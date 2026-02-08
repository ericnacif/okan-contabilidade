import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Plans } from "./components/Plans";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-moreira-50 min-h-screen font-sans text-slate-900 selection:bg-moreira-200 selection:text-moreira-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
