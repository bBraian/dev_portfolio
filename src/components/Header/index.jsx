import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Languages, Check, ChevronDown, Linkedin, Twitter, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

import profile from "../../assets/images/profile_pic.jpg";
import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import { AppContext } from "../../context/AppContext";

export function Header() {
  const {
    toggleTheme,
    isDarkMode,
    setLanguage,
    language,
    currentLanguage,
    scrollToSection,
    homeRef,
    skillsRef,
    projectsRef,
  } = useContext(AppContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigateTo(path, sectionRef, sectionId) {
    setIsMobileMenuOpen(false);
    if (path !== "/") {
      navigate(path);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { targetSection: sectionId } });
      } else {
        scrollToSection(sectionRef);
      }
    }
  }

  const navItems = [
    { label: language.home, onClick: () => handleNavigateTo("/", homeRef, "homeRef") },
    { label: language.about, onClick: () => handleNavigateTo("/about") },
    { label: language.tech_stack, onClick: () => handleNavigateTo("/", skillsRef, "skillsRef") },
    { label: language.projects, onClick: () => handleNavigateTo("/", projectsRef, "projectsRef") },
    { label: language.contact, onClick: () => handleNavigateTo("/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-310 mx-auto px-6 h-20 flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="text-contents-light dark:text-contents-dark hover:text-titles-light dark:hover:text-white font-medium transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <div className="flex items-center gap-5 ml-4">
            <a
              href="https://github.com/bBraian"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/b_Braaian"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/braian-viacava-de-avila-536558186/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>

        {/* Right Side Config (Theme & Lang) */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-boxes-light dark:bg-boxes-dark text-titles-light dark:text-white hover:ring-2 hover:ring-titles-light dark:hover:ring-white transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="w-px h-6 bg-separator-light dark:bg-separator-dark" />

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-contents-light dark:text-contents-dark hover:text-titles-light dark:hover:text-white transition-colors cursor-pointer"
            >
              <Languages size={20} />
              <ChevronDown size={14} className={clsx("transition-transform", isLangOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-boxes-light dark:bg-boxes-dark rounded-lg shadow-lg border border-separator-light dark:border-separator-dark overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setIsLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <img src={usa} alt="USA" className="w-5 h-3" />
                      <span className="text-sm">English</span>
                    </div>
                    {currentLanguage === "en" && <Check size={14} className="text-blue-500" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("pt");
                      setIsLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <img src={brazil} alt="Brazil" className="w-5 h-3" />
                      <span className="text-sm">Português</span>
                    </div>
                    {currentLanguage === "pt" && <Check size={14} className="text-blue-500" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full p-0.5 bg-linear-to-r from-[#0a4bff] to-[#ff9100]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover bg-background-light dark:bg-background-dark"
              />
            </div>
            <span className="font-bold text-titles-light dark:text-white text-lg">Braian</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-titles-light dark:text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed h-screen inset-0 top-20 bg-white dark:bg-background-dark z-40 lg:hidden px-6 py-10 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-left text-2xl font-semibold text-titles-light dark:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="h-px w-full bg-separator-light dark:bg-separator-dark" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-contents-light dark:text-contents-dark">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-boxes-light dark:bg-boxes-dark text-titles-light dark:text-white"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-contents-light dark:text-contents-dark">Language</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setLanguage("en")}
                  className={clsx(
                    "p-2 rounded-md transition-colors",
                    currentLanguage === "en"
                      ? "bg-blue-500/20 ring-2 ring-blue-500"
                      : "bg-boxes-light dark:bg-boxes-dark",
                  )}
                >
                  <img src={usa} alt="English" className="w-8 h-5" />
                </button>
                <button
                  onClick={() => setLanguage("pt")}
                  className={clsx(
                    "p-2 rounded-md transition-colors",
                    currentLanguage === "pt"
                      ? "bg-blue-500/20 ring-2 ring-blue-500"
                      : "bg-boxes-light dark:bg-boxes-dark",
                  )}
                >
                  <img src={brazil} alt="Português" className="w-8 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-10 pb-10">
              <a href="https://github.com/bBraian" target="_blank" rel="noreferrer">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://twitter.com/b_Braaian" target="_blank" rel="noreferrer">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/braian-viacava-de-avila-536558186/" target="_blank" rel="noreferrer">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
