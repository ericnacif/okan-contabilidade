import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, Check } from "lucide-react";

export const Benefits = () => {
  const items = [
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      bg: "bg-blue-500",
      title: "Segurança Total",
      subtitle: "Mitigação de Riscos",
      desc: "Durma tranquilo sabendo que sua empresa cumpre 100% das obrigações fiscais sem erros.",
    },
    {
      icon: <Zap size={28} className="text-white" />,
      bg: "bg-amber-500",
      title: "Agilidade",
      subtitle: "Processos Otimizados",
      desc: "Esqueça a burocracia lenta. Identificamos créditos e reduzimos impostos de forma lícita.",
    },
    {
      icon: <Clock size={28} className="text-white" />,
      bg: "bg-emerald-500",
      title: "Pontualidade",
      subtitle: "Compromisso Sério",
      desc: "Prazos são sagrados. Entregas precisas para você nunca pagar multa por atraso.",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-24 bg-moreira-50 relative overflow-hidden"
    >
      {/* Background Pattern (Pontinhos) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Por Que Escolher?
          </h2>
          <p className="text-slate-600 text-lg">
            Diferenciais que colocam sua empresa à frente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group relative overflow-hidden"
            >
              {/* Barra Colorida Topo */}
              <div
                className={`absolute top-0 left-0 w-full h-1 ${item.bg}`}
              ></div>

              <div
                className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                {item.subtitle}
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-slate-800 transition-colors">
                <Check size={14} className="text-green-500" /> Garantia Moreira
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
