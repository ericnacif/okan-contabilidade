import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, Mail, User, ArrowRight, Instagram, Linkedin } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const contactItems = [
  {
    icon: <User size={20} />,
    label: "Contador Responsável",
    value: "Augusto Moreira Raulino",
    href: undefined,
  },
  {
    icon: <Phone size={20} />,
    label: "Telefone / WhatsApp",
    value: "(33) 98428-6959",
    href: "https://wa.me/5533984286959",
  },
  {
    icon: <Mail size={20} />,
    label: "E-mail",
    value: "moreiracontabilidadee@gmail.com",
    href: "mailto:moreiracontabilidadee@gmail.com",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-slate-900 text-white relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-okan-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

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
              Contato
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="origin-left h-px bg-slate-700 w-14"
            />
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            Vamos{" "}
            <span className="text-okan-500 italic">conversar.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Lado esquerdo — informações */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-12 leading-relaxed">
              Preencha o formulário e entraremos em contato em breve.
            </motion.p>

            <div className="space-y-8">
              {contactItems.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-okan-500 shrink-0 border border-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-okan-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Redes sociais */}
            <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-slate-800">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
                Acompanhe nas redes
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/okancontabilidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-okan-500 transition-colors"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/augusto-moreira-28176331a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-okan-500 transition-colors"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado direito — formulário */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/30">
              <form
                action="https://formsubmit.co/moreiracontabilidadee@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="Novo Contato via Site - OKAN" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://moreiracontabilidade.vercel.app/" />

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-okan-500 outline-none transition-all text-slate-900 text-sm"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-okan-500 outline-none transition-all text-slate-900 text-sm"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-okan-500 outline-none transition-all text-slate-900 text-sm resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-black rounded-xl hover:bg-okan-500 transition-all duration-300 flex justify-center items-center gap-2 text-sm uppercase tracking-widest shadow-lg"
                >
                  Enviar Contato <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};