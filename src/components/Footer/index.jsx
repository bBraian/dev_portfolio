import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const { homeRef, skillsRef, projectsRef, scrollToSection, language } = useContext(AppContext);
  const navigate = useNavigate();

  const navItems = [
    { label: language.home, onClick: () => scrollToSection(homeRef) },
    { label: language.about, onClick: () => navigate("/about") },
    { label: language.tech_stack, onClick: () => scrollToSection(skillsRef) },
    { label: language.projects, onClick: () => scrollToSection(projectsRef) },
    { label: language.contact, onClick: () => navigate("/contact") },
  ];

  return (
    <footer className="py-12 mt-20 border-t border-separator-light dark:border-separator-dark transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        <span className="text-xl font-bold text-titles-light dark:text-white">bBraian</span>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-contents-light dark:text-contents-dark text-sm">
            <span>+55 51 99626-8989</span>
            <span>braianvoficial@gmail.com</span>
          </div>

          <div className="flex items-center gap-5">
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
        </div>
      </div>

      <div className="h-px w-full bg-separator-light dark:bg-separator-dark mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="text-contents-light dark:text-contents-dark hover:text-titles-light dark:hover:text-white text-sm transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <span className="text-sm text-contents-light dark:text-contents-dark">
          Built by <span className="text-gradient font-semibold">bBraian</span>
        </span>
      </div>
    </footer>
  );
}
