"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaDownload,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import {
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
} from "react-icons/hi";

export default function About() {
  const { darkMode } = usePortfolio();
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const CV_URL =
    "https://res.cloudinary.com/dx3xhdaym/image/upload/v1769999155/CV_tcwd82.pdf";
  const CV_FILENAME = "ANDRIAMBOLA_Radoniaina_Michael_CV.pdf";

  // Intersection Observer pour animations à l'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation de compteurs
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCounters({
        years: Math.round(2 * eased),
        projects: Math.round(10 * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const highlights = [
    {
      icon: <HiOutlineSparkles className="text-xl" />,
      text: "Stack MERN (MongoDB, Express, React, Node.js)",
    },
    {
      icon: <HiOutlineLightBulb className="text-xl" />,
      text: "Next.js & TypeScript",
    },
    {
      icon: <HiOutlineAcademicCap className="text-xl" />,
      text: "PHP & Laravel",
    },
    {
      icon: <FaRocket className="text-xl" />,
      text: "Applications performantes & évolutives",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className={`
        relative py-24 lg:py-32 overflow-hidden transition-colors duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
        }
      `}
    >
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cercle gradient flou en haut à droite */}
        <div
          className={`
            absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20
            ${darkMode ? "bg-blue-600" : "bg-blue-400"}
          `}
        />
        {/* Cercle gradient flou en bas à gauche */}
        <div
          className={`
            absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15
            ${darkMode ? "bg-purple-600" : "bg-indigo-300"}
          `}
        />
        {/* Grille de points décorative */}
        <div
          className={`
            absolute inset-0 opacity-[0.03]
            ${darkMode ? "opacity-[0.05]" : "opacity-[0.03]"}
          `}
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* En-tête de section */}
        <div
          className={`
            text-center mb-16 lg:mb-20 transition-all duration-1000
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <span
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
              tracking-wider uppercase mb-4
              ${
                darkMode
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "bg-blue-100 text-blue-700 border border-blue-200"
              }
            `}
          >
            <HiOutlineSparkles className="text-lg" />À propos
          </span>
          <h2
            className={`
              text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight
              ${darkMode ? "text-white" : "text-gray-900"}
            `}
          >
            Qui suis-je
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              {" "}
              ?
            </span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Colonne image */}
          <div
            className={`
              w-full lg:w-5/12 transition-all duration-1000 delay-200
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }
            `}
          >
            <div className="relative group">
              {/* Cadre décoratif derrière l'image */}
              <div
                className={`
                  absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600
                  opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500
                `}
              />
              <div
                className={`
                  absolute -bottom-4 -right-4 w-full h-full rounded-2xl
                  border-2 border-dashed
                  ${darkMode ? "border-blue-500/30" : "border-blue-300/50"}
                `}
              />

              {/* Image principale */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1770636473/photo3_ejjgpg.png"
                  alt="ANDRIAMBOLA Radoniaina Michael - Développeur Full Stack"
                  className="w-full h-auto object-cover object-top transform
                             group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient sur l'image */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Badge flottant "Disponible" */}
              <div
                className={`
                  absolute -top-2 -left-2 sm:top-4 sm:left-4 z-10 flex items-center gap-2
                  px-4 py-2 rounded-full shadow-lg backdrop-blur-md text-sm font-semibold
                  animate-pulse
                  ${
                    darkMode
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }
                `}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Disponible
              </div>
            </div>
          </div>

          {/* Colonne texte */}
          <div
            className={`
              w-full lg:w-7/12 transition-all duration-1000 delay-400
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }
            `}
          >
            {/* Titre */}
            <h3
              className={`
                text-2xl sm:text-3xl font-bold mb-6
                ${darkMode ? "text-white" : "text-gray-900"}
              `}
            >
              Développeur Full Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                passionné
              </span>
            </h3>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p
                className={`
                  text-base sm:text-lg leading-relaxed
                  ${darkMode ? "text-gray-300" : "text-gray-600"}
                `}
              >
                Avec plus de{" "}
                <span className="font-semibold text-blue-500">
                  2 ans d&apos;expérience
                </span>{" "}
                dans le développement web, je me spécialise dans la création
                d&apos;applications web modernes, performantes et évolutives qui
                répondent parfaitement aux besoins métiers.
              </p>
              <p
                className={`
                  text-base sm:text-lg leading-relaxed
                  ${darkMode ? "text-gray-300" : "text-gray-600"}
                `}
              >
                Ma passion pour les nouvelles technologies et mon approche
                orientée solution me permettent de transformer des idées
                complexes en{" "}
                <span className="font-semibold text-purple-500">
                  produits digitaux élégants
                </span>{" "}
                et fonctionnels.
              </p>
            </div>

            {/* Compétences clés */}
            <div className="mb-8">
              <h4
                className={`
                  text-sm font-bold uppercase tracking-wider mb-4
                  ${darkMode ? "text-gray-400" : "text-gray-500"}
                `}
              >
                Compétences clés
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300 hover:scale-[1.02]
                      ${
                        darkMode
                          ? "bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50"
                          : "bg-white hover:bg-blue-50 border border-gray-100 shadow-sm hover:shadow-md"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <span
                      className={`
                        flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                        ${
                          darkMode
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                        }
                      `}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`
                        text-sm font-medium
                        ${darkMode ? "text-gray-200" : "text-gray-700"}
                      `}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
              {/* Stat 1 */}
              <div
                className={`
                  relative overflow-hidden rounded-2xl p-6 text-center
                  transition-all duration-300 hover:scale-[1.03] group/stat
                  ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-600/50"
                      : "bg-white border border-gray-100 shadow-lg hover:shadow-xl"
                  }
                `}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5
                              opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"
                />
                <div
                  className={`
                    relative mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3
                    ${
                      darkMode
                        ? "bg-blue-500/20"
                        : "bg-gradient-to-br from-blue-100 to-blue-50"
                    }
                  `}
                >
                  <FaCode
                    className={`text-2xl ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>
                <div
                  className={`
                    text-3xl sm:text-4xl font-extrabold mb-1
                    text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700
                  `}
                >
                  {counters.years}+
                </div>
                <p
                  className={`
                    text-sm font-medium
                    ${darkMode ? "text-gray-400" : "text-gray-500"}
                  `}
                >
                  Années d&apos;expérience
                </p>
              </div>

              {/* Stat 2 */}
              <div
                className={`
                  relative overflow-hidden rounded-2xl p-6 text-center
                  transition-all duration-300 hover:scale-[1.03] group/stat
                  ${
                    darkMode
                      ? "bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-600/50"
                      : "bg-white border border-gray-100 shadow-lg hover:shadow-xl"
                  }
                `}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5
                              opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"
                />
                <div
                  className={`
                    relative mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3
                    ${
                      darkMode
                        ? "bg-purple-500/20"
                        : "bg-gradient-to-br from-purple-100 to-purple-50"
                    }
                  `}
                >
                  <FaLaptopCode
                    className={`text-2xl ${
                      darkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                </div>
                <div
                  className={`
                    text-3xl sm:text-4xl font-extrabold mb-1
                    text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700
                  `}
                >
                  {counters.projects}+
                </div>
                <p
                  className={`
                    text-sm font-medium
                    ${darkMode ? "text-gray-400" : "text-gray-500"}
                  `}
                >
                  Projets réalisés
                </p>
              </div>
            </div>

            {/* Bouton CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CV_URL}
                download={CV_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative inline-flex items-center justify-center gap-3
                  px-8 py-4 rounded-full font-semibold text-white text-base
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:from-blue-700 hover:to-purple-700
                  shadow-lg hover:shadow-xl hover:shadow-blue-500/25
                  transform hover:-translate-y-0.5
                  transition-all duration-300
                  overflow-hidden cursor-pointer
                "
              >
                {/* Effet de brillance au hover */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"
                />
                <FaDownload className="relative text-lg group-hover:animate-bounce" />
                <span className="relative">Télécharger mon CV</span>
              </a>

              <a
                href="#contact"
                className={`
                  inline-flex items-center justify-center gap-3
                  px-8 py-4 rounded-full font-semibold text-base
                  border-2 transform hover:-translate-y-0.5
                  transition-all duration-300
                  ${
                    darkMode
                      ? "border-gray-500 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10"
                      : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  }
                `}
              >
                <FaCheckCircle className="text-lg" />
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
