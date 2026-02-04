"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import React, { useState, useEffect, useCallback, memo } from "react";
import {
  Menu,
  X,
  Download,
  ChevronRight,
  Sparkles,
  Home,
  User,
  Zap,
  Rocket,
  Mail,
  LucideIcon,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Palette,
  Globe,
  Facebook,
} from "lucide-react";

// Types
interface NavLink {
  id: string;
  label: string;
  icon: LucideIcon;
  gradient: string;
}

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

// Constantes
const NAV_LINKS: NavLink[] = [
  {
    id: "accueil",
    label: "Accueil",
    icon: Home,
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "a-propos",
    label: "À propos",
    icon: User,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "competences",
    label: "Compétences",
    icon: Zap,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "projets",
    label: "Projets",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    gradient: "from-pink-500 to-rose-600",
  },
] as const;

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://twitter.com",
    color: "hover:text-sky-400",
  },
];

const CV_URL =
  "https://res.cloudinary.com/dx3xhdaym/image/upload/v1769999155/CV_tcwd82.pdf";
const CV_FILENAME = "ANDRIAMBOLA_Radoniaina_Michael_CV.pdf";

// Composant NavButton Desktop avec effet premium
const DesktopNavButton = memo(function DesktopNavButton({
  id,
  label,
  icon: Icon,
  isActive,
  onClick,
  gradient,
}: {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  gradient: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative group px-4 py-2.5 rounded-2xl text-sm font-medium transition-all duration-500 ${
        isActive ? "text-white shadow-lg" : "text-sky-100/80 hover:text-white"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Effet de glow au hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
      />

      {/* Background actif avec animation */}
      {isActive && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl animate-pulse`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
        </div>
      )}

      {/* Background hover */}
      {!isActive && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
        />
      )}

      {/* Contenu */}
      <span className="relative z-10 flex items-center gap-2">
        <Icon className={`w-4 h-4 ${isActive ? "animate-pulse" : ""}`} />
        <span className="hidden xl:inline">{label}</span>
      </span>

      {/* Indicateur de section active */}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-ping" />
      )}
    </button>
  );
});

// Composant NavButton Mobile amélioré
const MobileNavButton = memo(function MobileNavButton({
  id,
  label,
  icon: Icon,
  isActive,
  onClick,
  index,
  isMenuOpen,
  gradient,
}: {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  index: number;
  isMenuOpen: boolean;
  gradient: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full group overflow-hidden rounded-2xl transition-all duration-500 ${
        isActive ? "shadow-2xl" : "hover:shadow-lg"
      }`}
      style={{
        transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
        transform: isMenuOpen
          ? "translateX(0) scale(1)"
          : "translateX(30px) scale(0.95)",
        opacity: isMenuOpen ? 1 : 0,
      }}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      {/* Content */}
      <div
        className={`relative flex items-center gap-4 px-6 py-4 ${
          isActive ? "text-white" : "text-sky-200 group-hover:text-white"
        }`}
      >
        <div
          className={`p-2 rounded-xl ${isActive ? "bg-white/20" : "bg-white/10 group-hover:bg-white/20"} transition-colors duration-300`}
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="flex-1 text-left font-semibold text-base">
          {label}
        </span>
        <ArrowUpRight
          className={`w-4 h-4 transition-all duration-300 ${
            isActive
              ? "rotate-45 scale-110"
              : "group-hover:rotate-45 group-hover:scale-110 opacity-50 group-hover:opacity-100"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </button>
  );
});

// Composant Logo amélioré
const Logo = memo(function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700" />

        <div className="relative flex items-center gap-3">
          {/* Logo icon avec animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
              {isHovered ? (
                <Code2 className="w-6 h-6 text-white animate-pulse" />
              ) : (
                <span className="text-white font-black text-lg">RM</span>
              )}
            </div>
            {/* Badge de statut */}
          </div>

          {/* Texte du logo */}
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-white">Radoniaina</span>
              <span className="relative ml-1">
                {/* <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 blur-sm" /> */}
                <span className="relative bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  Michael
                </span>
              </span>
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[11px] text-sky-300/80 tracking-[0.2em] uppercase font-semibold">
                Full Stack Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Composant Theme Toggle
const ThemeToggle = memo(function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-500 ${
            isDark
              ? "opacity-0 rotate-180 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-sky-400 transition-all duration-500 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-0"
          }`}
        />
      </div>
    </button>
  );
});

// Composant principal Header amélioré
export default function Header() {
  const { scrollToSection, activeSection, setActiveSection } = usePortfolio();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculer la progression du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // Calculer le pourcentage de scroll
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled_progress = (winScroll / height) * 100;
      setScrollProgress(scrolled_progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Handler de navigation optimisé
  const handleNavClick = useCallback(
    (id: string) => {
      setActiveSection(id);
      scrollToSection(id);
      setIsMenuOpen(false);
    },
    [scrollToSection, setActiveSection],
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "py-2 bg-gradient-to-r from-slate-950/95 via-sky-950/95 to-blue-950/95 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(14,165,233,0.25)]"
            : "py-4 bg-gradient-to-b from-slate-950/50 to-transparent backdrop-blur-md"
        }`}
        role="banner"
      >
        {/* Ligne de progression du scroll */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-800/50">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 shadow-[0_0_10px_rgba(14,165,233,0.7)] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Pattern de fond animé */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Navigation Desktop */}
            <nav
              className="hidden lg:flex items-center gap-2"
              role="navigation"
              aria-label="Navigation principale"
            >
              <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-2xl p-1.5 border border-white/10 shadow-inner">
                {NAV_LINKS.map(({ id, label, icon, gradient }) => (
                  <DesktopNavButton
                    key={id}
                    id={id}
                    label={label}
                    icon={icon}
                    isActive={activeSection === id}
                    onClick={() => handleNavClick(id)}
                    gradient={gradient}
                  />
                ))}
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Social Links - Desktop uniquement */}
              <div className="hidden xl:flex items-center gap-2">
                {SOCIAL_LINKS.map(({ name, icon: Icon, href, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-sky-300/60 ${color} transition-all duration-300 hover:scale-110`}
                    aria-label={name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Separator */}
              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Bouton Télécharger CV Premium */}
              <a
                href={CV_URL}
                download={CV_FILENAME}
                target="_blanck"
                className="hidden md:flex items-center gap-2.5 relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button */}
                <div className="relative flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white text-sm font-bold rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Download
                    className="w-4 h-4 group-hover:animate-bounce"
                    aria-hidden="true"
                  />
                  <span>Télécharger CV</span>
                </div>
              </a>

              {/* Bouton Menu Mobile amélioré */}
              <button
                onClick={toggleMenu}
                className="lg:hidden relative group"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500" />

                {/* Button container */}
                <div className="relative w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-500" />

                  {/* Menu icon */}
                  <div className="relative w-5 h-5">
                    <span
                      className={`absolute top-0.5 left-0 w-5 h-0.5 bg-white transform transition-all duration-500 origin-left ${
                        isMenuOpen ? "rotate-45 translate-x-0.5" : ""
                      }`}
                    />
                    <span
                      className={`absolute top-2 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                        isMenuOpen ? "opacity-0 scale-x-0" : ""
                      }`}
                    />
                    <span
                      className={`absolute top-3.5 left-0 w-5 h-0.5 bg-white transform transition-all duration-500 origin-left ${
                        isMenuOpen ? "-rotate-45 translate-x-0.5" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Ligne décorative en bas avec animation */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent animate-slide-infinite" />
        </div>
      </header>

      {/* Overlay amélioré */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-sky-950/90 to-blue-950/90 backdrop-blur-xl" />
      </div>

      {/* Menu Mobile Premium */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 transform transition-all duration-700 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Menu mobile"
        aria-hidden={!isMenuOpen}
      >
        {/* Background avec gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-sky-900/20" />
        </div>

        {/* Motif décoratif animé */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-sky-400 blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-blue-400 blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-indigo-400 blur-3xl animate-pulse animation-delay-4000" />
        </div>

        {/* Bordure gauche lumineuse animée */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 animate-pulse" />

        <div className="relative h-full flex flex-col">
          {/* Header du menu amélioré */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl blur-md opacity-60" />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Navigation</p>
                <p className="text-sky-400 text-sm">Menu principal</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="relative group w-10 h-10"
              aria-label="Fermer le menu"
            >
              <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300" />
              <X
                className="absolute inset-0 m-auto w-5 h-5 text-sky-300 group-hover:text-white transition-colors duration-300"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Navigation Links avec scroll personnalisé */}
          <div className="flex-1 overflow-y-auto py-8 px-6 scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-transparent">
            <div className="space-y-3">
              {NAV_LINKS.map(({ id, label, icon, gradient }, index) => (
                <MobileNavButton
                  key={id}
                  id={id}
                  label={label}
                  icon={icon}
                  isActive={activeSection === id}
                  onClick={() => handleNavClick(id)}
                  index={index}
                  isMenuOpen={isMenuOpen}
                  gradient={gradient}
                />
              ))}
            </div>

            {/* Section Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sky-400 text-sm font-semibold mb-4">
                Réseaux sociaux
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sky-300 hover:bg-white/10 hover:text-white hover:border-sky-500 transition-all duration-300"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium hidden min-[350px]:inline">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer du menu amélioré */}
          <div className="p-6 border-t border-white/10 space-y-4">
            {/* Bouton CV avec animation premium */}
            <a
              href={CV_URL}
              download={CV_FILENAME}
              target="_blanck"
              className="relative group block"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Button */}
              <div className="relative flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white font-bold rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Download
                  className="w-5 h-5 group-hover:animate-bounce"
                  aria-hidden="true"
                />
                <span>Télécharger mon CV</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Footer info */}
            <div className="text-center space-y-1">
              <p className="text-sky-400/60 text-xs">
                © 2024 Radoniaina Michael
              </p>
              <p className="text-sky-400/40 text-xs">Tous droits réservés</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
