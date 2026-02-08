import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white"
    >
      {/* Background sutil */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-moreira-50 to-transparent opacity-60" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Lado Esquerdo: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moreira-100 text-moreira-600 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-moreira-500 animate-pulse"></span>
              Especialista em MEI
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Contabilidade completa e{" "}
              <span className="text-moreira-500">estratégica</span> para MEIs
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Soluções fiscais e tributárias com precisão técnica e visão
              estratégica para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                className="px-8 py-4 bg-moreira-500 text-white rounded-lg font-semibold hover:bg-moreira-600 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-moreira-500/25"
              >
                Entre em Contato
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-moreira-500" /> Precisão
                Técnica
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-moreira-500" /> Visão
                Estratégica
              </span>
            </div>
          </motion.div>

          {/* Lado Direito: LOGO (Novo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative z-10 p-8">
              {/* Efeito de brilho atrás da logo */}
              <div className="absolute inset-0 bg-moreira-500/10 blur-3xl rounded-full -z-10"></div>

              <img
                src="/logo-moreira-contabilidade.jpeg"
                alt="Logo Moreira Contabilidade"
                className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
