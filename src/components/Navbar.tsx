import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navLinks = [
  { name: "Início", to: "home" },
  { name: "Sobre", to: "about" },
  { name: "Benefícios", to: "benefits" },
  { name: "Planos", to: "plans" },
  { name: "Contato", to: "contact" },
];

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navLinks.map((l) => l.to);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen
            ? "bg-white/95 backdrop-blur-lg shadow-sm py-4 border-b border-slate-100"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer z-50">
            <img
              src="/okan-logo.JPG"
              alt="OKAN Contabilidade"
              className="h-9 w-auto rounded-lg shadow-sm"
            />
            <span className="text-xl font-black tracking-tight text-slate-900">
              OKAN<span className="text-okan-500">.</span>
            </span>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="relative cursor-pointer group"
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-okan-500" : "text-slate-500 hover:text-okan-500"
                      }`}
                  >
                    {link.name}
                  </span>

                  {/* Indicador underline animado */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-okan-500 rounded-full"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: easeOut }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              to="contact"
              smooth={true}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-okan-500 transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-okan-500/25"
            >
              <Phone size={15} /> Fale Conosco
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 z-50 p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.to;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: easeOut, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-black transition-colors cursor-pointer uppercase tracking-tight ${isActive ? "text-okan-500" : "text-slate-900 hover:text-okan-500"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: easeOut, duration: 0.4 }}
            >
              <Link
                to="contact"
                smooth={true}
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-okan-500 text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest cursor-pointer shadow-lg shadow-okan-500/30"
              >
                Falar com Consultor
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};