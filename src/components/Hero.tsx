"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-950"
    >
      {/* Background Image + Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="Motoboy entregador profissional"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Red gradient overlay — requested */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(120, 0, 0, 0.75), rgba(220, 38, 38, 0.45))",
          }}
        />
        {/* Bottom fade to dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <MapPin size={14} className="text-primary-400" />
            <span>São Paulo e Grande SP</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8"
          >
            Entregas rápidas<br />
            e{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              seguras
            </span>{" "}
            na sua região
          </motion.h1>

          {/* Subheadline — Short & direct */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed"
          >
            Coletamos em minutos. Resolva sua entrega sem complicação.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary: WhatsApp — Hero highlight */}
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl shadow-green-600/30 hover:shadow-green-500/40 hover:-translate-y-0.5 text-lg"
            >
              <FaWhatsapp size={26} />
              Chamar no WhatsApp
            </a>
            {/* Secondary */}
            <a
              href="#servicos"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-5 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Conhecer Serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Role para baixo</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
