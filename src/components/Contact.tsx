import { Phone, Mail, User, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-moreira-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              Preencha o formulário abaixo e retornaremos em breve.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-moreira-500">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Contador Responsável</p>
                  <p className="font-semibold text-lg">
                    Augusto Moreira Raulino
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-moreira-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Telefone / WhatsApp</p>
                  <p className="font-semibold text-lg hover:text-moreira-500 transition-colors cursor-pointer">
                    (33) 98428-6959
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-moreira-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">E-mail</p>
                  <p className="font-semibold text-lg hover:text-moreira-500 transition-colors cursor-pointer">
                    moreiracontabilidadee@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Funcional */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <form
              action="https://formsubmit.co/moreiracontabilidadee@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Configurações Ocultas do FormSubmit */}
              <input
                type="hidden"
                name="_subject"
                value="Novo Contato via Site - Moreira Contabilidade"
              />
              <input type="hidden" name="_captcha" value="false" />{" "}
              {/* Desativa captcha para ser mais rápido */}
              <input type="hidden" name="_template" value="table" />{" "}
              {/* Formata o email bonitinho */}
              <input
                type="hidden"
                name="_next"
                value="https://moreiracontabilidade.vercel.app/"
              />{" "}
              {/* Opcional: Redirecionar após envio */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-moreira-500 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-moreira-500 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-moreira-500 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-moreira-500 text-white font-bold rounded-lg hover:bg-moreira-600 transition-all flex justify-center items-center gap-2 shadow-lg shadow-moreira-500/20"
              >
                Enviar Contato <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
