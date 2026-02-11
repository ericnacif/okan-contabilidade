import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";

// Pequeno componente para animar os números
const Counter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000, // converte para ms
  });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Transforma o número quebrado (ex: 1.54) em inteiro (1, 2)
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest),
  );

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Elemento Decorativo de Fundo (Sutil) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-moreira-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          {/* Lado Esquerdo: FOTO EM CARD */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 lg:w-4/12 relative"
          >
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <img
                src="/foto-augusto.jpeg"
                alt="Augusto Moreira Raulino"
                className="w-full aspect-[3/4] object-cover rounded-xl filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-4 text-center pb-2">
                <p className="font-bold text-slate-900 text-lg">
                  Augusto Moreira
                </p>
                <p className="text-xs text-moreira-500 font-medium tracking-wide uppercase">
                  Contador & Estrategista
                </p>
              </div>
            </div>

          </motion.div>

          {/* Lado Direito: TEXTO E DADOS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-moreira-50 text-moreira-600 text-xs font-bold tracking-wider uppercase mb-4 w-fit">
              Sobre Mim
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Mais que contabilidade. <br />
              <span className="text-moreira-500">Inteligência financeira.</span>
            </h2>

            <div className="text-slate-600 text-lg leading-relaxed space-y-4 mb-10 text-justify">
              <p>
                Meu nome é <strong>Augusto Moreira Raulino</strong>. Atuo na
                área fiscal e tributária, unindo precisão técnica com uma visão
                estratégica de negócios.
              </p>
              <p>
                Com experiência prática em escrituração, apuração de tributos e
                obrigações acessórias, meu foco não é apenas manter sua empresa
                regular, mas usar os dados contábeis para impulsionar seu
                crescimento financeiro.
              </p>
            </div>

            {/* Barra de Estatísticas com Animação */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div className="flex flex-col gap-1 group cursor-default">
                <div className="flex items-center gap-1 text-moreira-500 mb-1">
                  <TrendingUp
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold text-3xl">
                    <Counter value={2} />+
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Anos de Experiência
                </p>
              </div>

              <div className="flex flex-col gap-1 group cursor-default">
                <div className="flex items-center gap-1 text-moreira-500 mb-1">
                  <Users
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold text-3xl">
                    +<Counter value={100} duration={2.5} />
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Clientes Atendidos
                </p>
              </div>

              <div className="hidden md:flex flex-col gap-1 group cursor-default">
                <div className="flex items-center gap-2 text-moreira-500 mb-1">
                  <Award
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-bold text-2xl">Certificado</span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Profissional CPA-20
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
