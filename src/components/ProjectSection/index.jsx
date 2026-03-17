import { Project } from "../Project";
import { projects } from "../../data/projects";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function ProjectSection() {
  const { language, projectsRef } = useContext(AppContext);
  return (
    <section ref={projectsRef} className="py-20 flex flex-col items-center gap-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-titles-light dark:text-titles-dark transition-colors">
          {language.projects}
        </h2>
        <p className="text-lg md:text-xl text-contents-light dark:text-contents-dark transition-colors">
          {language.projects_section_description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-310">
        {projects.map((project) => {
          return <Project key={project.id} data={project} />;
        })}
      </div>
    </section>
  );
}
