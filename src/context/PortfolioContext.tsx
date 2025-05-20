"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

const PotfolioContext = createContext<any | null>(null);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "a-propos",
        "competences",
        "projets",
        "temoignages",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      setShowScrollTop(window.scrollY > 80);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <PotfolioContext.Provider
      value={{
        darkMode,
        setDarkMode,
        activeSection,
        setActiveSection,
        scrollToSection,
        showScrollTop,
        setShowScrollTop,
        activeFilter,
        setActiveFilter,
        currentTestimonial,
        setCurrentTestimonial,
      }}
    >
      {children}
    </PotfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PotfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
