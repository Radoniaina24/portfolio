import { usePortfolio } from "@/context/PortfolioContext";
import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  FaCode,
  FaCss3,
  FaDatabase,
  FaJs,
  FaLaravel,
  FaLock,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiGit, SiNextdotjs } from "react-icons/si";

/* ─── data ─────────────────────────────────────── */

interface Skill {
  name: string;
  level: number; // 0‑100
  icon: React.ReactNode;
}

const frontendSkills: Skill[] = [
  { name: "React", level: 90, icon: <FaReact /> },
  { name: "JavaScript", level: 90, icon: <FaJs /> },
  { name: "TailwindCSS", level: 95, icon: <FaCss3 /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, icon: <FaNodeJs /> },
  { name: "Express", level: 85, icon: <FaServer /> },
  { name: "Laravel", level: 80, icon: <FaLaravel /> },
  { name: "PHP", level: 80, icon: <FaPhp /> },
  { name: "MongoDB", level: 75, icon: <FaDatabase /> },
  { name: "API REST", level: 90, icon: <FaLock /> },
];

const chartData = [
  { subject: "React", A: 90 },
  { subject: "JavaScript", A: 90 },
  { subject: "TailwindCSS", A: 95 },
  { subject: "Next.js", A: 85 },
  { subject: "Node.js", A: 85 },
  { subject: "Laravel", A: 80 },
  { subject: "PHP", A: 80 },
  { subject: "MongoDB", A: 75 },
  { subject: "API REST", A: 90 },
  { subject: "Express", A: 85 },
];

const tags = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Express",
  "MongoDB",
  "TailwindCSS",
  "JavaScript",
  "PHP",
  "TypeScript",
  "Redux",
  "Git",
];

/* ─── sub‑components ───────────────────────────── */

function SkillCard({ skill, darkMode }: { skill: Skill; darkMode: boolean }) {
  return (
    <div
      className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300
        ${
          darkMode
            ? "bg-gray-800/60 hover:bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
            : "bg-white hover:shadow-lg hover:shadow-blue-100"
        }
        border ${darkMode ? "border-gray-700" : "border-gray-100"}
      `}
    >
      {/* icon */}
      <div
        className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl
          transition-transform duration-300 group-hover:scale-110
          ${
            darkMode
              ? "bg-blue-500/20 text-blue-400"
              : "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600"
          }
        `}
      >
        {skill.icon}
      </div>

      {/* label + bar */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <h4
            className={`font-semibold text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {skill.name}
          </h4>
          <span
            className={`text-xs font-medium ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {skill.level}%
          </span>
        </div>
        <div
          className={`w-full h-2 rounded-full overflow-hidden ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  children,
  darkMode,
}: {
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <h3 className="flex items-center gap-3 text-xl font-bold mb-6">
      <span
        className={`inline-block w-1 h-7 rounded-full ${
          darkMode
            ? "bg-gradient-to-b from-blue-400 to-blue-600"
            : "bg-gradient-to-b from-blue-500 to-blue-700"
        }`}
      />
      <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
        {children}
      </span>
    </h3>
  );
}

/* ─── custom tooltip ───────────────────────────── */

function CustomTooltip({
  active,
  payload,
  darkMode,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: { subject: string } }>;
  darkMode: boolean;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className={`px-4 py-2 rounded-lg shadow-lg text-sm font-medium ${
        darkMode
          ? "bg-gray-800 text-white border border-gray-700"
          : "bg-white text-gray-800 border border-gray-200"
      }`}
    >
      <p>{payload[0].payload.subject}</p>
      <p className="text-blue-500">{payload[0].value}%</p>
    </div>
  );
}

/* ─── main component ───────────────────────────── */

export default function Skills() {
  const { darkMode } = usePortfolio();
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend">(
    "all",
  );

  const filteredChartData =
    activeTab === "all"
      ? chartData
      : activeTab === "frontend"
        ? chartData.filter((d) =>
            frontendSkills.some((s) => s.name === d.subject),
          )
        : chartData.filter((d) =>
            backendSkills.some((s) => s.name === d.subject),
          );

  return (
    <section
      id="competences"
      className={`relative py-24 overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2">
            Ce que je maîtrise
          </p>
          <h2
            className={`text-3xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Mes compétences
          </h2>
          <div className="mx-auto mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* content */}
        <div className="flex flex-col lg:flex-row gap-14">
          {/* ── left: skill cards ── */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <SectionHeading darkMode={darkMode}>Front‑end</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {frontendSkills.map((s) => (
                  <SkillCard key={s.name} skill={s} darkMode={darkMode} />
                ))}
              </div>
            </div>

            <div>
              <SectionHeading darkMode={darkMode}>Back‑end</SectionHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {backendSkills.map((s) => (
                  <SkillCard key={s.name} skill={s} darkMode={darkMode} />
                ))}
              </div>
            </div>
          </div>

          {/* ── right: radar chart ── */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            {/* tab switcher */}
            <div
              className={`inline-flex rounded-full p-1 mb-8 ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {(
                [
                  ["all", "Tout"],
                  ["frontend", "Front‑end"],
                  ["backend", "Back‑end"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activeTab === key
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* chart wrapper */}
            <div
              className={`w-full max-w-md aspect-square rounded-3xl p-6 ${
                darkMode
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white shadow-xl shadow-blue-100/40 border border-gray-100"
              }`}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="75%"
                  data={filteredChartData}
                >
                  <PolarGrid
                    stroke={darkMode ? "#374151" : "#e5e7eb"}
                    strokeDasharray="3 3"
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: darkMode ? "#9ca3af" : "#4b5563",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{
                      fill: darkMode ? "#6b7280" : "#9ca3af",
                      fontSize: 10,
                    }}
                    axisLine={false}
                  />
                  <Radar
                    name="Compétences"
                    dataKey="A"
                    stroke="#3b82f6"
                    fill="url(#radarGradient)"
                    fillOpacity={0.5}
                    strokeWidth={2}
                    dot={{
                      r: 4,
                      fill: "#3b82f6",
                      stroke: darkMode ? "#1f2937" : "#ffffff",
                      strokeWidth: 2,
                    }}
                    animationDuration={800}
                  />
                  {/* gradient def */}
                  <defs>
                    <radialGradient id="radarGradient">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop
                        offset="100%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.3}
                      />
                    </radialGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ── tags ── */}
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                cursor-default select-none
                ${
                  darkMode
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40"
                    : "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 hover:shadow-md hover:shadow-blue-100"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
