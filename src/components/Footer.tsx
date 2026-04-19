"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark-950 text-dark-300">
      {/* CTA Banner */}
      <div className="border-b border-dark-800">
        <div className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Precisa de uma entrega?
              </h3>
              <p className="text-primary-100 text-lg">
                Fale agora e receba atendimento imediato.
              </p>
            </div>
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-700 hover:bg-dark-50 font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-lg whitespace-nowrap relative z-10"
            >
              <FaWhatsapp size={24} className="text-green-600" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">C</span>
              </div>
              <div className="text-xl font-bold text-white uppercase tracking-wider">
                <span className="text-primary-500">Coopstar</span>{" "}
                <span className="font-normal text-dark-400">Express</span>
              </div>
            </div>
            <p className="text-dark-400 max-w-sm leading-relaxed">
              Sua parceira logística estratégica em São Paulo. Entregas ágeis, seguras e focadas no setor corporativo.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5511987654321"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300"
                >
                  <FaWhatsapp size={16} className="text-green-500 shrink-0" />
                  <span>(11) 9876-54321</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary-500 shrink-0" />
                  <span>(11) 1234-5678</span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:coopstar_express@hotmail.com"
                  className="flex items-center gap-3 hover:text-primary-400 transition-colors duration-300"
                >
                  <Mail size={16} className="text-primary-500 shrink-0" />
                  <span>coopstar_express@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Localização
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    Av. Jurucê, 898
                    <br />
                    Moema — São Paulo, SP
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    24 horas
                    <br />
                    Segunda a Segunda
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-500">
          <p>
            © {new Date().getFullYear()} Coopstar Express. Todos os direitos
            reservados.
          </p>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://github.com/TFS-Data"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              TFS Data
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
