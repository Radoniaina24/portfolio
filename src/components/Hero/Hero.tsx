import { usePortfolio } from "@/context/PortfolioContext";
import React, { useEffect, useState, useCallback } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

// Composant pour les icônes tech flottantes
const FloatingTechIcon = ({
  Icon,
  className,
  delay,
  size = 24,
  color = "text-white/60",
}: {
  Icon: React.ElementType;
  className: string;
  delay: number;
  size?: number;
  color?: string;
}) => (
  <div
    className={`absolute p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 
                ${color} hover:text-white hover:bg-white/10 hover:scale-110 
                transition-all duration-500 animate-float-slow cursor-pointer
                shadow-lg shadow-blue-500/5 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon size={size} />
  </div>
);

// Composant pour le terminal animé avec PHP/Laravel
const AnimatedTerminal = () => {
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState<"js" | "php">("js");

  const jsCode = `const developer = {
  name: "ANDRIAMBOLA Radoniaina Michael",
  skills: ["React", "Next.js", "Node.js", "Nest.js"],
  passion: "Créer des expériences web",
  available: true
};`;

  const phpCode = `<?php

class Developer extends Controller
{
    public $name = "ANDRIAMBOLA Radoniaina Michael";
    public $skills = [
        "Laravel", "PHP", "MySQL"
    ];
    
    public function isAvailable(): bool
    {
        return true;
    }
}`;

  const fullText = activeTab === "js" ? jsCode : phpCode;

  useEffect(() => {
    setText("");
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [activeTab, fullText]);

  const highlightCode = (code: string, lang: "js" | "php") => {
    if (lang === "js") {
      return code
        .replace(
          /(const|let|var|true|false)/g,
          '<span class="text-purple-400">$1</span>',
        )
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/(\[|\]|\{|\})/g, '<span class="text-yellow-400">$1</span>');
    } else {
      return code
        .replace(/(<\?php)/g, '<span class="text-yellow-400">$1</span>')
        .replace(
          /(class|extends|public|function|return|true|false)/g,
          '<span class="text-purple-400">$1</span>',
        )
        .replace(/(".*?"|'.*?')/g, '<span class="text-green-400">$1</span>')
        .replace(/(\$\w+)/g, '<span class="text-blue-400">$1</span>')
        .replace(
          /(Developer|Controller)/g,
          '<span class="text-cyan-400">$1</span>',
        )
        .replace(/(bool)/g, '<span class="text-orange-400">$1</span>')
        .replace(
          /(\[|\]|\{|\}|\(|\))/g,
          '<span class="text-yellow-400">$1</span>',
        );
    }
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 
                      rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
      />

      <div
        className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 
                      overflow-hidden shadow-2xl"
      >
        {/* Header du terminal avec tabs */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gray-900/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-gray-800/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("js")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer
                ${
                  activeTab === "js"
                    ? "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              <SiTypescript size={12} />
              developer.js
            </button>
            <button
              onClick={() => setActiveTab("php")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer
                ${
                  activeTab === "php"
                    ? "bg-gradient-to-r from-purple-500/20 to-red-500/20 text-purple-400 border border-purple-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              <SiLaravel size={12} />
              Developer.php
            </button>
          </div>
        </div>

        {/* Code avec syntax highlighting */}
        <div className="p-6 font-mono text-sm min-h-[280px]">
          <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
            <code>
              {text.split("\n").map((line, i) => (
                <div
                  key={i}
                  className="flex hover:bg-white/5 -mx-2 px-2 rounded transition-colors"
                >
                  <span className="text-gray-600 mr-4 select-none w-6 text-right">
                    {i + 1}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightCode(line, activeTab),
                    }}
                  />
                </div>
              ))}
            </code>
            <span className="animate-pulse text-blue-400">|</span>
          </pre>
        </div>

        {/* Footer avec tech stack */}
        <div className="px-4 py-3 border-t border-white/10 bg-gray-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {activeTab === "js" ? (
              <>
                <FaReact className="text-cyan-400" size={14} />
                <SiNextdotjs className="text-white" size={14} />
                <FaNodeJs className="text-green-500" size={14} />
              </>
            ) : (
              <>
                <FaPhp className="text-indigo-400" size={16} />
                <SiLaravel className="text-red-500" size={14} />
                <SiMysql className="text-blue-400" size={16} />
              </>
            )}
          </div>
          <span className="text-gray-500 text-xs">
            {activeTab === "js" ? "MERN Stack" : "Laravel Stack"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Composant Tech Stack Pills
const TechStackPills = () => {
  const stacks = [
    {
      name: "React",
      icon: FaReact,
      color: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "from-gray-500/20 to-gray-600/20 text-white border-gray-500/30",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color:
        "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      color: "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color:
        "from-indigo-500/20 to-indigo-600/20 text-indigo-400 border-indigo-500/30",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color:
        "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {stacks.map((tech, index) => (
        <div
          key={tech.name}
          className={`group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${tech.color} 
                     border backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-default
                     animate-fade-in-up`}
          style={{ animationDelay: `${0.5 + index * 0.05}s` }}
        >
          <tech.icon
            size={14}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-xs font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

// Composant Stats

export default function Hero() {
  const { scrollToSection } = usePortfolio();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full 
                     bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[120px] animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full 
                     bg-gradient-to-r from-red-600/30 to-orange-600/30 blur-[100px] animate-pulse-slow"
          style={{
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full 
                     bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-[80px] animate-pulse-slow"
          style={{
            animationDelay: "4s",
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")',
          }}
        />
      </div>
      {/* Floating particles */}
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <FloatingTechIcon
          Icon={FaReact}
          className="top-[15%] left-[30%]"
          delay={0}
          size={28}
          color="text-cyan-400/60"
        />
        <FloatingTechIcon
          Icon={SiNextdotjs}
          className="top-[20%] right-[8%]"
          delay={1}
          size={26}
        />
        <FloatingTechIcon
          Icon={FaNodeJs}
          className="bottom-[55%] left-[45%]"
          delay={2}
          size={28}
          color="text-green-400/60"
        />
        <FloatingTechIcon
          Icon={SiLaravel}
          className="top-[45%] right-[2%]"
          delay={3}
          size={26}
          color="text-red-400/60"
        />
        <FloatingTechIcon
          Icon={FaPhp}
          className="bottom-[20%] right-[12%]"
          delay={4}
          size={30}
          color="text-indigo-400/60"
        />
        <FloatingTechIcon
          Icon={SiMongodb}
          className="bottom-[15%] left-[15%]"
          delay={5}
          size={26}
          color="text-green-400/60"
        />
        <FloatingTechIcon
          Icon={SiMysql}
          className="top-[10%] right-[25%]"
          delay={6}
          size={28}
          color="text-blue-400/60"
        />
        <FloatingTechIcon
          Icon={SiTailwindcss}
          className="top-[75%] left-[3%]"
          delay={7}
          size={26}
          color="text-cyan-400/60"
        />
      </div>
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md 
                          rounded-full border border-white/10 animate-fade-in-up"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-gray-300 text-sm font-medium">
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Main heading */}
            <div
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Développeur
                <br />
                <span className="relative">
                  <span
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r 
                                 from-blue-400 via-purple-400 to-red-400 animate-gradient-x"
                  >
                    Full Stack
                  </span>
                  {/* Underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 4 100 4 150 7C200 10 250 6 298 3"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="animate-draw-line"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="50%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#f87171" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light flex flex-wrap items-center gap-2">
                <span>Expert</span>
                <span
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                               text-cyan-400 border border-cyan-500/30 text-sm md:text-base"
                >
                  MERN Stack
                </span>
                <span>and</span>
                <span
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 
                               text-red-400 border border-red-500/30 text-sm md:text-base"
                >
                  Laravel/PHP
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-lg text-gray-400 leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Je transforme vos idées ambitieuses en{" "}
              <span className="text-white font-medium">
                expériences web exceptionnelles
              </span>
              . Du frontend React au backend Laravel, des solutions complètes
              pour propulser votre business.
            </p>

            {/* Tech Stack Pills */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              <TechStackPills />
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={() => scrollToSection("projets")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 
                         rounded-full text-white font-semibold text-lg overflow-hidden
                         hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500
                         cursor-pointer"
              >
                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 
                              animate-gradient-x"
                />
                <div className="absolute inset-[2px] rounded-full bg-[#0a0a1a]" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                transition-transform duration-1000 bg-gradient-to-r from-transparent 
                                via-white/20 to-transparent"
                  />
                </div>

                <span
                  className="relative flex items-center justify-center gap-3 bg-gradient-to-r 
                               from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent
                               group-hover:text-white transition-colors duration-300"
                >
                  Découvrir mes projets
                  <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 
                         text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20
                         transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center justify-center gap-3">
                  <FaEnvelope className="group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300" />
                  Me contacter
                </span>
              </button>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-gray-500 text-sm">Retrouvez-moi sur</span>
              <div className="flex gap-3">
                {[
                  { Icon: FaGithub, href: "#", hoverColor: "hover:text-white" },
                  {
                    Icon: FaLinkedin,
                    href: "#",
                    hoverColor: "hover:text-blue-400",
                  },
                  {
                    Icon: FaTwitter,
                    href: "#",
                    hoverColor: "hover:text-cyan-400",
                  },
                ].map(({ Icon, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400
                             hover:bg-white/10 ${hoverColor} hover:border-white/20 hover:-translate-y-1
                             transition-all duration-300`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Terminal + Stats */}
          <div
            className="space-y-6 hidden lg:block animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Animated Terminal */}
            <div
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <AnimatedTerminal />
            </div>

            {/* Stats grid */}
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              <StatCard
                number="50+"
                label="Projets réalisés"
                icon={<FaDatabase size={24} className="text-blue-400" />}
                gradient="from-blue-500 to-purple-500"
              />
              <StatCard
                number="5+"
                label="Années d'expérience"
                icon={<SiLaravel size={24} className="text-red-400" />}
                gradient="from-red-500 to-orange-500"
              />
            </div> */}

            {/* Additional mini stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "React/Next.js",
                  icon: <FaReact className="text-cyan-400" />,
                },
                {
                  label: "Laravel/PHP",
                  icon: <SiLaravel className="text-red-400" />,
                },
                {
                  label: "Node.js",
                  icon: <FaNodeJs className="text-green-400" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm 
                                      rounded-xl border border-white/10 hover:border-white/20 
                                      transition-all duration-300 cursor-default group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ={/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
    </section>
  );
}
