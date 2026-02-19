import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-scroll";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const plans = [
  {
    name: "Start",
    desc: "Para quem está começando",
    price: "79,90",
    featured: false,
    items: ["Emissão de notas fiscais", "Suporte Financeiro"],
  },
  {
    name: "Premium",
    desc: "Para quem quer crescer rápido",
    price: "199,90",
    featured: true,
    items: ["Tudo do plano Pro", "Gestão Fiscal Completa", "Consultoria Estratégica"],
  },
  {
    name: "Pro",
    desc: "Para empresas consolidadas",
    price: "149,90",
    featured: false,
    items: ["Emissão de notas fiscais", "Suporte Prioritário", "Contabilidade Completa"],
  },
];

export const Plans = () => {
  return (
    <section id="plans" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-okan-50 rounded-full blur-[120px] opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-okan-500">
              Investimento Inteligente
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="origin-left h-px bg-slate-200 w-14"
            />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Escolha o plano{" "}
            <span className="text-okan-500 italic">ideal.</span>
          </h2>
        </motion.div>

        {/* Grid de planos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-end"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: easeOut } }}
              className={`rounded-2xl flex flex-col relative overflow-hidden transition-shadow duration-300 ${plan.featured
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 md:-mt-6"
                  : "bg-white border border-slate-100 shadow-sm hover:shadow-xl"
                }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-okan-500 text-white px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl text-xs font-black uppercase flex items-center gap-1">
                  <Zap size={11} fill="currentColor" /> Mais Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <h3 className={`text-xl font-black mb-1 ${plan.featured ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? "text-slate-400" : "text-slate-400"}`}>
                    R$
                  </span>
                  <span className={`text-5xl font-black ml-1 ${plan.featured ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.featured ? "text-slate-400" : "text-slate-400"}`}>/mês</span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? "bg-okan-500" : "bg-green-100"}`}>
                        <Check size={12} className={plan.featured ? "text-white" : "text-green-600"} />
                      </div>
                      <span className={plan.featured ? "text-slate-300" : "text-slate-600"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="contact"
                  smooth={true}
                  className={`w-full py-4 rounded-xl font-bold text-sm text-center cursor-pointer flex justify-center items-center gap-2 transition-all duration-300 ${plan.featured
                      ? "bg-okan-500 text-white hover:bg-okan-600 shadow-lg shadow-okan-500/30"
                      : "border-2 border-slate-100 text-slate-900 hover:border-okan-500 hover:text-okan-500"
                    }`}
                >
                  {plan.featured ? (
                    <>Contratar Premium <ArrowRight size={16} /></>
                  ) : (
                    "Começar Agora"
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};