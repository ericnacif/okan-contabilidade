import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, Zap, Clock, Check } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const items = [
  {
    icon: <ShieldCheck size={28} className="text-white" />,
    bg: "bg-blue-500",
    accent: "from-blue-500/10",
    title: "Segurança Total",
    subtitle: "Mitigação de Riscos",
    desc: "Durma tranquilo sabendo que sua empresa cumpre 100% das obrigações fiscais sem erros.",
  },
  {
    icon: <Zap size={28} className="text-white" />,
    bg: "bg-okan-500",
    accent: "from-okan-500/10",
    title: "Agilidade",
    subtitle: "Processos Otimizados",
    desc: "Esqueça a burocracia lenta. Identificamos créditos e reduzimos impostos de forma lícita.",
  },
  {
    icon: <Clock size={28} className="text-white" />,
    bg: "bg-emerald-500",
    accent: "from-emerald-500/10",
    title: "Pontualidade",
    subtitle: "Compromisso Sério",
    desc: "Prazos são sagrados. Entregas precisas para você nunca pagar multa por atraso.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 lg:py-36 bg-slate-50 relative overflow-hidden">
      {/* Fundo pontilhado */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="container mx-auto px-6 relative z-10">
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
              Diferenciais
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="origin-left h-px bg-slate-300 w-14"
            />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Por que nos{" "}
            <span className="text-okan-500 italic">escolher?</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: easeOut } }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group flex flex-col"
            >
              {/* Gradiente topo */}
              <div className={`h-1 w-full ${item.bg}`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Ícone */}
                <div
                  className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-slate-500 leading-relaxed text-sm flex-1">{item.desc}</p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
                  <Check size={14} className="text-green-500" /> Garantia OKAN
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};