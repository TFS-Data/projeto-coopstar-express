"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Somos", to: "sobre" },
    { name: "Serviços", to: "servicos" },
    { name: "Como Funciona", to: "como-funciona" },
    { name: "Galeria", to: "galeria" },
    { name: "Contato", to: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-950/95 backdrop-blur-lg shadow-2xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo  */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/30">
            <span className="text-white font-black text-lg">C</span>
          </div>
          <div className="text-xl font-bold text-white uppercase tracking-wider">
            <span className="text-primary-500">Coopstar</span>{" "}
            <span className="font-normal text-dark-300">Express</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center text-dark-200 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-primary-400 cursor-pointer transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          ))}
          <a
            href="tel:+5511987654321"
            className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
          >
            <Phone size={16} className="text-primary-500" />
            <span>(11) 9876-54321</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden bg-dark-950/98 backdrop-blur-xl border-t border-dark-800"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-dark-200 text-lg hover:text-primary-400 cursor-pointer transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg shadow-green-600/30 transition-all"
              >
                <FaWhatsapp size={22} />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
