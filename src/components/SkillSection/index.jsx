import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

import react from "../../assets/devicon/react.svg";
import github from "../../assets/devicon/github.svg";
import git from "../../assets/devicon/git.svg";
import html from "../../assets/devicon/html.svg";
import js from "../../assets/devicon/js.svg";
import css from "../../assets/devicon/css.svg";
import next from "../../assets/devicon/next.svg";
import php from "../../assets/devicon/php.svg";
import mysql from "../../assets/devicon/mysql.svg";
import ts from "../../assets/devicon/ts.svg";
import vscode from "../../assets/devicon/vscode.svg";
import figma from "../../assets/devicon/figma.svg";

export function SkillSection() {
    const { skillsRef, language } = useContext(AppContext);
    
    const skills = [
        { src: html, title: "HTML" },
        { src: css, title: "CSS" },
        { src: js, title: "Javascript" },
        { src: ts, title: "Typescript" },
        { src: react, title: "ReactJS" },
        { src: git, title: "Git" },
        { src: github, title: "Github" },
        { src: php, title: "PHP" },
        { src: mysql, title: "MySQL" },
        { src: next, title: "Next" },
        { src: vscode, title: "Visual Studio Code" },
        { src: figma, title: "Figma" },
    ];

    return (
        <section ref={skillsRef} className="py-20 flex flex-col items-center gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-titles-light dark:text-titles-dark transition-colors">
                    {language.my_tech_stack}
                </h2>
                <p className="text-lg md:text-xl text-contents-light dark:text-contents-dark transition-colors">
                    {language.tecnologies_section_description}
                </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 w-full max-w-4xl mx-auto px-4">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={skill.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex flex-col items-center gap-2 group cursor-default"
                    >
                        <img 
                            src={skill.src} 
                            alt={skill.title} 
                            title={skill.title}
                            loading="lazy"
                            className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300 dark:brightness-110"
                        />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-contents-light dark:text-contents-dark">
                            {skill.title}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
