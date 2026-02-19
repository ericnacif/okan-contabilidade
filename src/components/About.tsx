import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import type { Variants } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Componente de contador animado
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
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

// Linha decorativa animada
const AnimatedLine = ({ delay = 0 }: { delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: easeOut }}
      className="origin-left h-px bg-slate-200"
    />
  );
};

const stats = [
  {
    value: 2,
    suffix: "+",
    prefix: "",
    label: "Anos de Experiência",
    duration: 2,
  },
  {
    value: 100,
    suffix: "",
    prefix: "+",
    label: "Clientes Atendidos",
    duration: 2.5,
  },
];

export const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-white relative overflow-hidden"
    >
      {/* Fundos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-okan-50 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/4" />
      </div>

      {/* Watermark decorativo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-slate-50 select-none pointer-events-none leading-none tracking-tighter">
        AM
      </div>

      <div className="container mx-auto px-6 relative">

        {/* Header da seção */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 lg:mb-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-okan-500">
              Sobre Mim
            </span>
            <div className="flex-1 max-w-[60px]">
              <AnimatedLine delay={0.3} />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight"
          >
            Mais que contabilidade.{" "}
            <span className="text-okan-500 italic">Inteligência financeira.</span>
          </motion.h2>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Coluna da foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="lg:col-span-4"
          >
            <motion.div style={{ y: photoY }} className="relative">
              {/* Card da foto — limpo e reto */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80 border border-slate-100">
                <div className="overflow-hidden">
                  <motion.img
                    src="/foto-augusto.jpeg"
                    alt="Augusto Moreira Raulino"
                    className="w-full aspect-[3/4] object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: easeOut }}
                  />
                </div>

                {/* Rodapé do card */}
                <div className="px-5 py-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-base leading-tight">
                    Augusto Moreira Raulino
                  </p>
                  <p className="text-xs text-okan-500 font-semibold tracking-wider uppercase mt-1">
                    Contador & Estrategista
                  </p>
                </div>
              </div>

              {/* Badge CPA flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: easeOut }}
                className="absolute -right-4 top-8 bg-okan-500 text-white rounded-xl px-4 py-2.5 shadow-lg shadow-okan-200"
              >
                <div className="flex items-center gap-2">
                  <Award size={14} />
                  <span className="text-xs font-black tracking-wide uppercase">
                    CPA-20
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Coluna de texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            {/* Texto */}
            <motion.div variants={fadeUp} className="space-y-5 mb-12">
              <p className="text-slate-600 text-lg leading-relaxed">
                Meu nome é{" "}
                <strong className="text-slate-900 font-bold">
                  Augusto Moreira Raulino
                </strong>
                . Atuo na área fiscal e tributária, unindo precisão técnica com
                uma visão estratégica de negócios.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Com experiência prática em escrituração, apuração de tributos e
                obrigações acessórias, meu foco não é apenas manter sua empresa
                regular, mas usar os dados contábeis para{" "}
                <span className="text-okan-500 font-semibold">
                  impulsionar seu crescimento financeiro
                </span>
                .
              </p>
            </motion.div>

            <AnimatedLine delay={0.2} />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-10 mt-10 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="group cursor-default"
                >
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-slate-900 leading-none tabular-nums">
                      {stat.prefix}
                      <Counter value={stat.value} duration={stat.duration} />
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: easeOut }}
                    className="mt-3 h-0.5 bg-okan-500 origin-left w-8"
                  />
                </motion.div>
              ))}
            </div>

            <AnimatedLine delay={0.4} />

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 group w-fit"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-slate-900 group-hover:text-okan-500 transition-colors duration-300">
                Vamos conversar
              </span>
              <motion.div
                className="w-8 h-8 rounded-full bg-okan-500 flex items-center justify-center text-white"
                whileHover={{ x: 4, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={14} />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};