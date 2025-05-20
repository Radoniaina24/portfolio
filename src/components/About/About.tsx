import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import {
  FaAward,
  FaCode,
  FaDownload,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  const { darkMode } = usePortfolio();
  return (
    <section
      id="a-propos"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          À propos de moi
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20male%20web%20developer%20portrait%2C%20confident%20pose%2C%20modern%20office%20environment%2C%20working%20with%20multiple%20screens%20showing%20code%2C%20professional%20attire%2C%20soft%20lighting%2C%20high%20quality%20professional%20photo&width=600&height=700&seq=8&orientation=portrait"
              alt="Jean Dupont - Développeur Full Stack"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Développeur Full Stack passionné
            </h3>
            <p className="text-lg mb-6">
              Avec plus de 5 ans d'expérience dans le développement web, je me
              spécialise dans la stack MERN (MongoDB, Express, React, Node.js)
              et Next.js pour créer des applications web modernes, performantes
              et évolutives.
            </p>
            <p className="text-lg mb-8">
              Ma passion pour les nouvelles technologies et mon approche
              orientée solution me permettent de transformer des idées complexes
              en produits digitaux élégants et fonctionnels.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaCode className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">5+</h4>
                  <p>Années d'expérience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaLaptopCode className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">50+</h4>
                  <p>Projets réalisés</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaUsers className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">30+</h4>
                  <p>Clients satisfaits</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaAward className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold">15+</h4>
                  <p>Certifications</p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="px-6 py-3 flex items-center justify-center gap-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300  cursor-pointer whitespace-nowrap"
            >
              <FaDownload className="" /> Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
