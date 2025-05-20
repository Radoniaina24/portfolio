"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Footer() {
  const { darkMode } = usePortfolio();
  return (
    <footer
      className={`py-12 ${darkMode ? "bg-gray-900" : "bg-gray-800"} text-white`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Radoniaina Michael</h3>
            <p className="max-w-md">
              Développeur Full Stack MERN spécialisé dans la création
              d'applications web modernes et performantes.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a
              href="/path-to-your-cv.pdf"
              download="Jean_Dupont_CV.pdf"
              className="px-6 py-2 flex items-center gap-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap group"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/path-to-your-cv.pdf";
                link.download = "Jean_Dupont_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FaDownload className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Télécharger CV
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Radoniaina Michael. Tous droits réservés.</p>
          <div className="flex mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-3 transition-colors duration-300 cursor-pointer"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-3 transition-colors duration-300 cursor-pointer"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
