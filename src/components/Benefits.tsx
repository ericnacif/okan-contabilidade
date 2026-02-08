import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock } from "lucide-react";

export const Benefits = () => {
  const items = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Objetivos",
      subtitle: "Conformidade fiscal e mitigação de riscos",
      desc: "Garantia de cumprimento de todas as obrigações fiscais e tributárias, minimizando riscos e evitando penalidades.",
    },
    {
      icon: <Zap size={32} />,
      title: "Vantagens",
      subtitle: "Agilidade e aproveitamento de créditos",
      desc: "Processos otimizados que identificam oportunidades de economia e maximizam o aproveitamento de créditos fiscais.",
    },
    {
      icon: <Clock size={32} />,
      title: "Garantia",
      subtitle: "Rigor com prazos e integridade de dados",
      desc: "Compromisso com a pontualidade e precisão em todas as entregas, assegurando dados confiáveis e íntegros.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-moreira-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Por Que Escolher?
          </h2>
          <p className="text-slate-600 text-lg">
            Serviços especializados que garantem conformidade e otimização
            fiscal
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
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="w-14 h-14 bg-moreira-100 rounded-xl flex items-center justify-center text-moreira-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-moreira-500 mb-4">
                {item.subtitle}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
