import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import {
  FaCode,
  FaCss3,
  FaDatabase,
  FaJs,
  FaLock,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";

export default function Skills() {
  const { darkMode } = usePortfolio();
  return (
    <section
      id="competences"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Mes compétences
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Front-end
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaReact className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">React</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-36 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaJs className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">JavaScript</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-36 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaCss3 className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">TailwindCSS</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-38 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-code text-blue-600 text-xl"></i>
                    <FaCode className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Next.js</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-36 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Back-end
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaNodeJs className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Node.js</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-34 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaServer className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Express</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-34 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-database text-blue-600 text-xl"></i>
                    <FaDatabase className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">MongoDB</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-32 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-lock text-blue-600 text-xl"></i>
                    <FaLock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">API REST</h4>
                    <div className="w-40 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-36 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div id="skills-chart" className="w-full h-80"></div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            React
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Node.js
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Express
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            MongoDB
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            TailwindCSS
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Redux
          </span>

          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Git
          </span>
        </div>
      </div>
    </section>
  );
}
