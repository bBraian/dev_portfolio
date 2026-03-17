import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile_pic.jpg";
import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";
import { SkillSection } from "../../components/SkillSection";
import { AppContext } from "../../context/AppContext";

export default function Home() {
  const { language, homeRef, skillsRef, projectsRef, scrollToSection } = useContext(AppContext);
  const { state } = useLocation();
  const { targetSection } = state || {};

  useEffect(() => {
    if (targetSection) {
      switch (targetSection) {
        case "homeRef":
          scrollToSection(homeRef);
          break;
        case "skillsRef":
          scrollToSection(skillsRef);
          break;
        case "projectsRef":
          scrollToSection(projectsRef);
          break;
      }
    }
  }, [targetSection, scrollToSection, homeRef, skillsRef, projectsRef]);

  return (
    <div ref={homeRef} className="flex flex-col gap-20 pt-10 md:pt-20">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-titles-light dark:text-titles-dark transition-colors">
            {language.hi} 👋,
            <br />
            {language.my_name_is}
            <br />
            <span className="text-gradient">Braian Viacava de Ávila</span>
            <br />
            {language.im_a_software_developer}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100 rounded-full p-2 bg-linear-to-r from-[#0a4bff] to-[#ff9100] animate-spin-slow">
            {/* Inner circle to hide the spin background if needed, or just let it be a border */}
          </div>
          <div className="absolute inset-2 rounded-full overflow-hidden bg-background-light dark:bg-background-dark flex items-center justify-center">
            <img src={profile} alt="Braian Viacava" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      <SkillSection />

      <ProjectSection />

      <Footer />
    </div>
  );
}
