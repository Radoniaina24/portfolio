"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Footer() {
  const { darkMode } = usePortfolio();
  const CV_URL =
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1769999155/CV_tcwd82.pdf";
  const CV_FILENAME = "ANDRIAMBOLA_Radoniaina_Michael_CV.pdf";
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
              href={CV_URL}
              download={CV_FILENAME}
              target="_blanck"
              className="px-6 py-2 flex items-center gap-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap group"
            >
              <FaDownload className="mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Télécharger CV
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Radoniaina Michael. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
