"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPinned, Package, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle size={28} />,
      title: "Fale conosco",
      description: "Entre em contato pelo WhatsApp ou telefone e descreva sua necessidade.",
    },
    {
      number: "02",
      icon: <Package size={28} />,
      title: "Coletamos",
      description: "Um motoboy profissional chega até você em minutos para a coleta.",
    },
    {
      number: "03",
      icon: <MapPinned size={28} />,
      title: "Entregamos",
      description: "Seu envio é entregue com segurança, rastreamento e comprovante.",
    },
  ];

  return (
    <section id="como-funciona" className="py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            Passo a Passo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-extrabold text-dark-900 mb-5"
          >
            Como <span className="text-primary-600">funciona?</span>
          </motion.h2>
          <p className="text-dark-500 text-lg">
            Simples, rápido e sem burocracia de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line — desktop */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary-600/30 relative z-10">
                {step.icon}
              </div>
              <span className="text-6xl font-black text-dark-100 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none pointer-events-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                {step.title}
              </h3>
              <p className="text-dark-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://wa.me/5511987654321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl shadow-green-600/20 hover:-translate-y-0.5 text-lg"
          >
            <FaWhatsapp size={24} />
            Solicitar entrega agora
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
