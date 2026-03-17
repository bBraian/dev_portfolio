import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { tecnologies } from "../../data/tecnologies";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Project({ data }) {
  const { language, currentLanguage } = useContext(AppContext);
  const isEnglish = currentLanguage === "en";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-project-bg-light dark:bg-project-bg-dark rounded-2xl overflow-hidden shadow-xl flex flex-col h-full transition-colors border border-separator-light dark:border-separator-dark"
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-2xl font-semibold text-titles-light dark:text-titles-dark">{data.name}</h3>

        <p className="text-contents-light dark:text-contents-dark text-sm leading-relaxed flex-1">
          {isEnglish ? data.description_eng : data.description_pt}
        </p>

        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-titles-light dark:text-titles-dark opacity-80">
            {language.tecnologies}:
          </p>
          <div className="flex flex-wrap gap-2">
            {data.tecnologiesId.map((tecId) => (
              <img
                key={tecId}
                src={tecnologies[tecId].icon}
                title={tecnologies[tecId].name}
                className="w-5 h-5 object-contain transition-all"
                alt={tecnologies[tecId].name}
              />
            ))}
          </div>
        </div>

        <div className="pt-4 mt-auto flex items-center justify-between border-t border-separator-light dark:border-separator-dark">
          {data.previewLink && (
            <a
              href={data.previewLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-titles-light dark:text-titles-dark hover:underline transition-all"
            >
              <ExternalLink size={16} />
              {language.live_preview}
            </a>
          )}
          {data.repositoryLink && (
            <a
              href={data.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-titles-light dark:text-titles-dark hover:underline transition-all"
            >
              <Github size={16} />
              {language.view_code}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
