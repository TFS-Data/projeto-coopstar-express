"use client";

import { motion } from "framer-motion";
import { Package, Truck, Compass, Clock, ShieldCheck, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <Package size={28} />,
      title: "Moto Frete",
      description:
        "Entregas rápidas de documentos e volumes leves. Serviços bancários, cartórios e despachos em aeroportos.",
    },
    {
      icon: <Truck size={28} />,
      title: "Delivery Corporativo",
      description:
        "Alto volume de documentos ou encomendas? Implantamos serviço B2B fixo na sua empresa.",
    },
    {
      icon: <Compass size={28} />,
      title: "Fora da Capital",
      description:
        "Envios para interior e litoral com tabela competitiva e qualidade Coopstar.",
    },
  ];

  const differentials = [
    {
      icon: <Clock size={22} />,
      title: "Agilidade Total",
      description: "Coletas em minutos. Suprimos a urgência da sua empresa.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Segurança Garantida",
      description: "Entregas rastreadas com equipe verificada e treinada.",
    },
    {
      icon: <Zap size={22} />,
      title: "24h por dia",
      description: "Funcionamos todos os dias, inclusive feriados. Sempre prontos.",
    },
  ];

  return (
    <section id="servicos" className="py-28 bg-dark-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            O que fazemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-extrabold text-dark-900 mb-5"
          >
            Nossos <span className="text-primary-600">Serviços</span>
          </motion.h2>
          <p className="text-dark-500 text-lg">
            Soluções completas de entrega para que seu negócio nunca pare.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-2xl border border-dark-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Red accent line top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>
              <p className="text-dark-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Differentials Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-900 text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
            <div className="lg:w-2/5">
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4 block">
                Diferenciais
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Por que escolher a{" "}
                <span className="text-primary-500">Coopstar?</span>
              </h3>
              <p className="text-dark-400 text-lg mb-8 leading-relaxed">
                Somos uma extensão logística da sua equipe. Trabalhamos lado a lado para entregas rápidas e eficientes.
              </p>
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:-translate-y-0.5"
              >
                <FaWhatsapp size={20} />
                Solicitar agora
              </a>
            </div>

            <div className="lg:w-3/5 w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
              {differentials.map((diff, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400">
                    {diff.icon}
                  </div>
                  <h4 className="font-bold text-lg">{diff.title}</h4>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
