"use client";
import { usePortfolio } from "@/context/PortfolioContext";
import React, { useState } from "react";
import { FaBars, FaDownload, FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const { darkMode, scrollToSection, activeSection, setDarkMode } =
    usePortfolio();
  return (
    <header
      className={`fixed w-full z-50 ${
        darkMode ? "bg-gray-800/90" : "bg-white/90"
      } backdrop-blur-sm shadow-lg`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Radoniaina Michael
            </span>
          </div>
          <nav className="hidden md:flex space-x-10">
            {[
              { id: "accueil", label: "Accueil" },
              { id: "a-propos", label: "À propos" },
              { id: "competences", label: "Compétences" },
              { id: "projets", label: "Projets" },
              // { id: "temoignages", label: "Témoignages" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <div key={id} className="relative">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative pb-1.5 hover:text-blue-600 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                    activeSection === id ? "text-blue-600" : ""
                  }`}
                >
                  {label}
                </button>
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                    activeSection === id ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="/path-to-your-cv.pdf"
              download="Jean_Dupont_CV.pdf"
              className="px-4 py-2 flex gap-1 items-center text-sm  bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap group"
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
              <FaDownload className=" group-hover:-translate-y-1 transition-transform duration-300" />
              Télécharger CV
            </a>
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
            >
              {darkMode ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button> */}
            <button className="md:hidden text-xl cursor-pointer !rounded-button whitespace-nowrap">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
