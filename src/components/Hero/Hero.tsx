import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import { FaArrowRight, FaChevronDown, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const { scrollToSection } = usePortfolio();
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20abstract%20geometric%20shapes%20with%20soft%20gradients%20in%20blue%20and%20purple%20tones%2C%20professional%20minimalist%20design%20with%20clean%20lines%20and%20subtle%20lighting%20effects%2C%20perfect%20for%20hero%20section%20background&width=1440&height=800&seq=7&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm mb-6">
            Développeur Full Stack MERN & Next.js
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Créons ensemble votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              succès digital
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-8 font-light tracking-wide">
            Solutions web innovantes et performantes pour votre entreprise
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
            Je transforme vos idées en applications web modernes, élégantes et
            évolutives qui dépassent vos attentes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection("projets")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-center cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              Voir mes projets
              <FaArrowRight className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg hover:bg-white/20 transition-all duration-300 text-center cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              Me contacter
              <FaEnvelope className="ml-3 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#a-propos" className="text-white text-4xl cursor-pointer">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
}
