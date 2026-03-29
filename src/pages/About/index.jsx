import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { WorkExperienceCard } from "../../components/WorkExperienceCard";
import { Footer } from "../../components/Footer";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { language } = useContext(AppContext);

  const workExperience = [
    {
      title: "Software Developer Mid Level",
      company: "Syonet",
      locale: "Porto Alegre",
      startDate: `${language.month[3]} 2025`,
      endDate: null,
      type: "Full Time",
      description:
        language.about_work_1_desc ||
        "Atuo no desenvolvimento e evolução de produtos, com foco em entregar interfaces performáticas, acessíveis e com ótima experiência de uso.",
      highlights: [
        language.about_work_1_h1 ||
          "Colaboração com time de produto, design e backend",
        language.about_work_1_h2 ||
          "Melhorias contínuas em performance e qualidade",
        language.about_work_1_h3 ||
          "Entrega e manutenção de features end-to-end",
      ],
      tech: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "PHP", "Laravel", "Vue", "Docker", "Micro-services"],
      links: [],
    },
    {
      title: "Software Developer Jr",
      company: "Happy Saude",
      locale: "Brochier",
      startDate: `${language.month[7]} 2021`,
      endDate: `${language.month[3]} 2025`,
      type: "Full Time",
      description:
        language.about_work_2_desc ||
        "Desenvolvimento de funcionalidades, correções e melhorias em sistemas internos, com atenção a estabilidade e usabilidade.",
      highlights: [
        language.about_work_2_h1 || "Implementação de novas telas e fluxos",
        language.about_work_2_h2 || "Correções e refinamentos com foco em UX",
      ],
      tech: ["JavaScript", "React", "SQL", "PHP", "GitHub"],
      links: [],
    },
    {
      title: "Software Developer Jr",
      company: "Openfy",
      locale: "Brochier",
      startDate: `${language.month[11]} 2020`,
      endDate: `${language.month[7]} 2021`,
      type: "Full Time",
      description:
        language.about_work_3_desc ||
        "Experiência inicial em desenvolvimento, dando suporte a features e correções, aprendendo boas práticas e ritmo de entrega.",
      highlights: [
        language.about_work_3_h1 || "Suporte a demandas do produto e correções",
      ],
      tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "ScriptCase", "Bootstrap", "jQuery", "Git"],
      links: [],
    },
  ];

  const education = [
    {
      title: "Engenharia de Software em IA Aplicada",
      company: language.education_provider || "UniPDS",
      locale: null,
      startDate: `${language.month[2]} 2026`,
      endDate: null,
      type: language.education_type_continuous || "Ongoing",
      description:
        language.about_edu_2_desc ||
        "Estudos contínuos para aprofundar em engenharia de software e IA aplicada.",
      highlights: [
        language.about_edu_2_h1 ||
          "Aprimoramento em engenharia de software e IA aplicada",
        language.about_edu_2_h2 ||
          "Projetos pessoais para consolidar aprendizado",
      ],
      tech: [
        "IA",
        "Engenharia de Software",
        "Machine Learning",
        "Deep Learning",
      ],
      expectedCompletion: {
        label: language.expected_completion || "Expected completion:",
        value:
          language.expected_completion_value || `${language.month[11]} 2026`,
      },
      links: [],
    },
    {
      title: "Analysis and systems development",
      company: "Unisinos",
      locale: null,
      startDate: `${language.month[1]} 2020`,
      endDate: `${language.month[5]} 2024`,
      type: language.education_type_degree || "Degree",
      description:
        language.about_edu_1_desc ||
        "Formação com base em algoritmos, engenharia de software, banco de dados e desenvolvimento web.",
      highlights: [
        language.about_edu_1_h1 || "Fundamentos sólidos de desenvolvimento",
        language.about_edu_1_h2 || "Projetos práticos e trabalho em equipe",
      ],
      tech: ["Algorithms", "Databases", "Software Engineering"],
      links: [],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-14 pt-10 md:pt-20"
    >
      <div className="space-y-6 max-w-4xl">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-titles-light dark:text-titles-dark transition-colors">
            {language.about_me}
          </h1>
          <div className="h-1 w-20 bg-linear-to-r from-[#0a4bff] to-[#ff9100] rounded-full" />
        </div>
        <p className="text-lg text-contents-light dark:text-contents-dark leading-relaxed transition-colors">
          {language.desc_about_me}
        </p>
      </div>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-titles-light dark:text-titles-dark transition-colors">
            {language.work_experience}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {workExperience.map((item) => (
            <WorkExperienceCard
              key={`${item.company}-${item.title}-${item.startDate}`}
              {...item}
              endLabel={language.currently || language.present || "Present"}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-bold text-titles-light dark:text-titles-dark transition-colors">
            {language.education}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((item) => (
            <WorkExperienceCard
              key={`${item.company}-${item.title}-${item.startDate}`}
              {...item}
              endLabel={language.currently || language.present || "Present"}
            />
          ))}
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
