import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-scroll";

export const Plans = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-moreira-500 font-bold tracking-wider uppercase text-sm">
            Investimento Inteligente
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
            Escolha o plano ideal
          </h2>
        </div>

        {/* Grid de Planos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch" // items-stretch para alturas iguais
        >
          {/* Plano Start */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-moreira-200 hover:shadow-xl transition-all flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-900">Start</h3>
            <p className="text-slate-500 text-sm mt-1">
              Para quem está começando
            </p>
            <div className="my-6">
              <span className="text-4xl font-bold text-slate-900">
                R$ 79,90
              </span>
              /mês
            </div>
            <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={14} className="text-green-600" />
                </div>{" "}
                Emissão de notas fiscais
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={14} className="text-green-600" />
                </div>{" "}
                Suporte Financeiro
              </li>
            </ul>
            <Link
              to="contact"
              smooth={true}
              className="w-full py-4 border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-moreira-500 hover:text-moreira-500 transition-all text-center cursor-pointer"
            >
              Começar Agora
            </Link>
          </motion.div>

          {/* Plano Premium (Destaque) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative flex flex-col md:-mt-8 md:mb-8 z-10"
          >
            <div className="absolute top-0 right-0 bg-moreira-500 text-white px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-xs font-bold uppercase flex items-center gap-1">
              <Zap size={12} fill="currentColor" /> Mais Popular
            </div>
            <h3 className="text-xl font-bold text-white">Premium</h3>
            <p className="text-slate-400 text-sm mt-1">
              Para quem quer crescer rápido
            </p>
            <div className="my-6">
              <span className="text-5xl font-bold text-white">R$ 199,90</span>
              <span className="text-slate-400">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-300 text-sm flex-1">
              <li className="flex items-center gap-3">
                <div className="bg-moreira-500 p-1 rounded-full">
                  <Check size={14} className="text-white" />
                </div>{" "}
                Tudo do plano Pro
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-moreira-500 p-1 rounded-full">
                  <Check size={14} className="text-white" />
                </div>{" "}
                Gestão Fiscal Completa
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-moreira-500 p-1 rounded-full">
                  <Check size={14} className="text-white" />
                </div>{" "}
                Consultoria Estratégica
              </li>
            </ul>
            <Link
              to="contact"
              smooth={true}
              className="w-full py-4 bg-moreira-500 text-white rounded-xl font-bold hover:bg-moreira-600 hover:shadow-lg hover:shadow-moreira-500/30 transition-all flex justify-center items-center gap-2 cursor-pointer"
            >
              Contratar Premium <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Plano Pro */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-moreira-200 hover:shadow-xl transition-all flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-900">Pro</h3>
            <p className="text-slate-500 text-sm mt-1">
              Para empresas consolidadas
            </p>
            <div className="my-6">
              <span className="text-4xl font-bold text-slate-900">
                R$ 149,90
              </span>
              /mês
            </div>
            <ul className="space-y-4 mb-8 text-slate-600 text-sm flex-1">
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={14} className="text-green-600" />
                </div>{" "}
                Emissão de notas fiscais
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={14} className="text-green-600" />
                </div>{" "}
                Suporte Prioritário
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={14} className="text-green-600" />
                </div>{" "}
                Contabilidade Completa
              </li>
            </ul>
            <Link
              to="contact"
              smooth={true}
              className="w-full py-4 border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-moreira-500 hover:text-moreira-500 transition-all text-center cursor-pointer"
            >
              Começar Agora
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
