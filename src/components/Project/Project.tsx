import { usePortfolio } from "@/context/PortfolioContext";
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import * as echarts from "echarts";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description:
        "Une plateforme complète avec panier, paiement et gestion des utilisateurs.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20shopping%20cart%20functionality%2C%20product%20grid%20layout%2C%20minimalist%20style%2C%20soft%20shadows%2C%20white%20background%20with%20blue%20accents%2C%20professional%20UI%20design&width=600&height=400&seq=1&orientation=landscape",
      demoLink: "#",
      githubLink: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description:
        "Application permettant de gérer des projets et des tâches avec des fonctionnalités de collaboration.",
      technologies: ["React", "Next.js", "MongoDB", "TailwindCSS"],
      image:
        "https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%2C%20task%20cards%2C%20progress%20tracking%2C%20clean%20modern%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20project%20management%20UI&width=600&height=400&seq=2&orientation=landscape",
      demoLink: "#",
      githubLink: "#",
      category: "Front-end",
    },
    {
      id: 3,
      title: "API REST pour Système de Réservation",
      description:
        "Backend robuste pour un système de réservation avec authentification et autorisation.",
      technologies: ["Node.js", "Express", "MongoDB"],
      image:
        "https://readdy.ai/api/search-image?query=REST%20API%20documentation%20interface%2C%20endpoint%20visualization%2C%20JSON%20data%20structure%20examples%2C%20clean%20technical%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20developer%20interface&width=600&height=400&seq=3&orientation=landscape",
      demoLink: "#",
      githubLink: "#",
      category: "Back-end",
    },
  ];
  // useEffect(() => {
  //   const skillsChart = echarts.init(document.getElementById("skills-chart"));
  //   const option = {
  //     animation: false,
  //     radar: {
  //       indicator: [
  //         { name: "React", max: 100 },
  //         { name: "Node.js", max: 100 },
  //         { name: "MongoDB", max: 100 },
  //         { name: "Express", max: 100 },
  //         { name: "Next.js", max: 100 },
  //         { name: "TailwindCSS", max: 100 },
  //       ],
  //       radius: 130,
  //       splitNumber: 4,
  //       axisName: {
  //         color: "#333",
  //         fontSize: 12,
  //       },
  //     },
  //     series: [
  //       {
  //         type: "radar",
  //         data: [
  //           {
  //             value: [90, 85, 80, 85, 88, 92],
  //             name: "Compétences",
  //             areaStyle: {
  //               color: "rgba(59, 130, 246, 0.6)",
  //             },
  //             lineStyle: {
  //               color: "rgba(59, 130, 246, 1)",
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   };
  //   skillsChart.setOption(option);
  //   const handleResize = () => {
  //     skillsChart.resize();
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     skillsChart.dispose();
  //   };
  // }, []);
  const { darkMode, setActiveFilter, activeFilter } = usePortfolio();
  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <section
      id="projets"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Mes projets
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Découvrez une sélection de mes projets récents utilisant la stack MERN
          et Next.js.
        </p>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveFilter("Tous")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                activeFilter === "Tous"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter("Front-end")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                activeFilter === "Front-end"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Front-end
            </button>
            <button
              onClick={() => setActiveFilter("Back-end")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                activeFilter === "Back-end"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Back-end
            </button>
            <button
              onClick={() => setActiveFilter("Full Stack")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                activeFilter === "Full Stack"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: any) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: any, index: any) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer whitespace-nowrap"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer whitespace-nowrap"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors duration-300 inline-block cursor-pointer whitespace-nowrap"
          >
            Voir plus de projets
          </a>
        </div> */}
      </div>
    </section>
  );
}
