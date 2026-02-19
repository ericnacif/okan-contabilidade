import { Link } from "react-scroll";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              OKAN<span className="text-okan-500">.</span>
            </h2>
            <p className="text-slate-500 mb-6 max-w-sm">
              Contabilidade estratégica focada no crescimento do seu MEI.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/okancontabilidade/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-okan-500 hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/augusto-moreira-28176331a/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-okan-500 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  className="hover:text-okan-500 cursor-pointer transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  className="hover:text-okan-500 cursor-pointer transition-colors"
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  to="plans"
                  smooth={true}
                  className="hover:text-okan-500 cursor-pointer transition-colors"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  className="hover:text-okan-500 cursor-pointer transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-okan-500" /> (33) 98428-6959
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-okan-500" />{" "}
                moreiracontabilidadee@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-okan-500" /> Manhuaçu, MG
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} OKAN Contabilidade. Todos os
            direitos reservados.
          </p>
          <p className="text-xs">
            Desenvolvido por{" "}
            <a
              href="https://ericnacif.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-400 hover:text-okan-500 transition-colors"
            >
              Eric Nacif
            </a>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};