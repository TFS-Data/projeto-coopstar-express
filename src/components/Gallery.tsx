"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "/team_riders.png",
      title: "Frota Profissional",
      desc: "Equipe preparada e altamente qualificada para cada missão.",
    },
    {
      src: "/delivery_action.png",
      title: "Tecnologia e Rapidez",
      desc: "Rotas inteligentes e rastreio em tempo real.",
    },
    {
      src: "/logistics_op.png",
      title: "Parceria B2B",
      desc: "Entregas corporativas com agilidade e zero burocracia.",
    },
  ];

  return (
    <section id="galeria" className="py-28 bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            Nossa operação
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-5"
          >
            Infraestrutura &{" "}
            <span className="text-primary-500">Ação</span>
          </motion.h2>
          <p className="text-dark-400 text-lg">
            Um vislumbre da nossa operação no dia a dia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative aspect-[4/5] group rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Red accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                  <p className="text-dark-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {img.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
