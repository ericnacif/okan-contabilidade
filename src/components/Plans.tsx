import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export const Plans = () => {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Seção Escolha seu Perfil */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Escolha seu Perfil
            </h2>
            <p className="text-slate-600">
              Selecione a opção que melhor se encaixa na sua situação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border hover:border-moreira-500 transition-colors flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Não tenho MEI</h3>
              <p className="text-slate-600 mb-6">
                Quero abrir minha empresa e regularizar meu negócio.
              </p>
              <Link
                to="contact"
                smooth={true}
                className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium cursor-pointer hover:bg-slate-800"
              >
                Quero Abrir meu MEI
              </Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border hover:border-moreira-500 transition-colors flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Já tenho MEI</h3>
              <p className="text-slate-600 mb-6">
                Preciso de contabilidade para organizar minhas finanças.
              </p>
              <Link
                to="contact"
                smooth={true}
                className="w-full py-3 bg-moreira-500 text-white rounded-lg font-medium cursor-pointer hover:bg-moreira-600"
              >
                Falar com Contador
              </Link>
            </div>
          </div>
        </div>

        {/* Seção Nossos Planos */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Nossos Planos</h2>
            <p className="text-slate-600">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Start */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Start</h3>
              <div className="my-4">
                <span className="text-3xl font-bold text-slate-900">
                  R$ 79,90
                </span>
                /mês
              </div>
              <ul className="space-y-3 mb-8 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Emissão de
                  notas fiscais
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Suporte
                  Financeiro
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Contabilidade
                  Completa
                </li>
              </ul>
              <Link
                to="contact"
                smooth={true}
                className="block w-full py-3 border border-slate-900 text-slate-900 text-center rounded-lg font-bold hover:bg-slate-50 cursor-pointer"
              >
                Contratar
              </Link>
            </div>

            {/* Premium (Destaque) */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-900 transform md:scale-105 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-moreira-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold text-white">Premium</h3>
              <div className="my-4 text-white">
                <span className="text-4xl font-bold">R$ 199,90</span>/mês
              </div>
              <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-moreira-500" /> Emissão de
                  notas fiscais
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-moreira-500" /> Suporte
                  Financeiro
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-moreira-500" /> Contabilidade
                  Completa
                </li>
              </ul>
              <Link
                to="contact"
                smooth={true}
                className="block w-full py-3 bg-moreira-500 text-white text-center rounded-lg font-bold hover:bg-moreira-600 cursor-pointer"
              >
                Contratar
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Pro</h3>
              <div className="my-4">
                <span className="text-3xl font-bold text-slate-900">
                  R$ 149,90
                </span>
                /mês
              </div>
              <ul className="space-y-3 mb-8 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Emissão de
                  notas fiscais
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Suporte
                  Financeiro
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-500" /> Contabilidade
                  Completa
                </li>
              </ul>
              <Link
                to="contact"
                smooth={true}
                className="block w-full py-3 border border-slate-900 text-slate-900 text-center rounded-lg font-bold hover:bg-slate-50 cursor-pointer"
              >
                Contratar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
