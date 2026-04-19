"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  const topics = [
    "Atendimento 24 horas, de segunda a segunda",
    "Frota monitorada em tempo real",
    "Entregas limpas e corporativas",
    "Agendamento flexível com hora marcada",
  ];

  return (
    <section id="sobre" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/logistics_op.png"
                  alt="Operação de Logística Coopstar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-dark-100">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-primary-600 leading-none">+9</span>
                  <span className="text-xs font-bold text-dark-600 text-center uppercase tracking-widest mt-1">
                    Anos de<br />Experiência
                  </span>
                </div>
              </div>
              {/* Red accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 mb-8 leading-tight">
              Sua parceira de confiança em{" "}
              <span className="text-primary-600">coletas e entregas</span>.
            </h2>

            <p className="text-dark-500 text-lg mb-6 leading-relaxed">
              A Coopstar Express é especializada em entregas corporativas e logísticas. Com mais de nove anos de mercado, garantimos que seu fluxo operacional nunca pare.
            </p>

            <p className="text-dark-500 text-lg mb-10 leading-relaxed">
              Agilizamos os serviços dos nossos parceiros B2B em São Paulo e Grande SP com altíssimo nível de dedicação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {topics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-dark-700 font-medium text-sm">{topic}</span>
                </div>
              ))}
            </div>

            {/* CTA — WhatsApp repeat */}
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:-translate-y-0.5"
            >
              <FaWhatsapp size={20} />
              Fale com a gente
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
