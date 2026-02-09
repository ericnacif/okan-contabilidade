import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white"
    >
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-bl from-okan-100/50 via-transparent to-transparent blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-okan-50 to-transparent blur-3xl opacity-40" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1, duration: 0.8 },
              },
            }}
            className="lg:w-1/2"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-okan-100 shadow-sm text-okan-600 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Star
                size={14}
                className="fill-okan-500 text-okan-500 animate-pulse"
              />
              Especialista em MEI
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
            >
              Contabilidade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-okan-500 to-orange-600">
                Estratégica
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              A <strong>OKAN Contabilidade</strong> entrega a inteligência
              financeira que o seu negócio precisa para crescer com segurança.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                className="px-8 py-4 bg-okan-900 text-white rounded-xl font-bold hover:bg-okan-500 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xl shadow-slate-900/10 hover:shadow-okan-500/20 hover:-translate-y-1"
              >
                Quero Regularizar
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500 font-medium"
            >
              <span className="flex items-center gap-2 hover:text-okan-500 transition-colors cursor-default">
                <CheckCircle2 size={18} className="text-green-500" />{" "}
                Atendimento Humanizado
              </span>
              <span className="flex items-center gap-2 hover:text-okan-500 transition-colors cursor-default">
                <CheckCircle2 size={18} className="text-green-500" /> 100%
                Digital
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-okan-500/10 to-transparent blur-3xl rounded-full -z-10"></div>
              {/* LOGO NOVA AQUI TAMBÉM */}
              <img
                src="/okan-logo.JPG"
                alt="Logo OKAN Contabilidade"
                className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl border border-white/50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
