import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Blobs de fundo */}
      <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-okan-50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Texto */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-okan-100 shadow-sm text-okan-600 text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Star size={13} className="fill-okan-500 text-okan-500 animate-pulse" />
              Especialista em MEI
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              Contabilidade{" "}
              <span className="text-okan-500 italic">Estratégica</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed"
            >
              A <strong className="text-slate-900">OKAN Contabilidade</strong> entrega a inteligência
              financeira que o seu negócio precisa para crescer com segurança.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-okan-500 transition-all duration-300 cursor-pointer shadow-xl shadow-slate-900/10 hover:shadow-okan-500/20 hover:-translate-y-1 group"
              >
                Quero Regularizar
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400 font-medium"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Atendimento Humanizado
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> 100% Digital
              </span>
            </motion.div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-okan-500/10 to-transparent blur-3xl rounded-full -z-10" />
              <img
                src="/okan-logo.JPG"
                alt="Logo OKAN Contabilidade"
                className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl border border-slate-100"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};