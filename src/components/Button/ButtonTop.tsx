import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ButtonTop() {
  const { darkMode, scrollToSection, showScrollTop } = usePortfolio();
  return (
    <button
      onClick={() => scrollToSection("accueil")}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full ${
        darkMode ? "bg-gray-700" : "bg-white"
      } shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap transform ${
        showScrollTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } transition-all duration-300`}
    >
      <FaArrowUp />
    </button>
  );
}
