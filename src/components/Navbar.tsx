import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "home" },
    { name: "Sobre", to: "about" },
    { name: "Benefícios", to: "benefits" },
    { name: "Planos", to: "plans" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/90 backdrop-blur-lg shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer z-50">
            {/* LOGO NOVA */}
            <img
              src="/okan-logo.JPG"
              alt="OKAN Contabilidade"
              className="h-10 w-auto rounded-md shadow-sm"
            />
            <span
              className={`text-xl font-bold tracking-tight ${scrolled || isOpen ? "text-slate-900" : "text-slate-900"}`}
            >
              OKAN<span className="text-okan-500">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-slate-600 hover:text-okan-600 font-medium cursor-pointer transition-colors text-sm uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-okan-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="contact"
              smooth={true}
              className="bg-okan-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-okan-500 transition-all cursor-pointer flex items-center gap-2 text-sm shadow-lg hover:shadow-okan-500/25"
            >
              <Phone size={18} /> Fale Conosco
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 z-50 p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-slate-800 hover:text-okan-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-okan-500 text-white px-8 py-3 rounded-full font-bold text-lg"
            >
              Falar com Consultor
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
