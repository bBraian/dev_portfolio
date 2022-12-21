import { Skill, SkillsBox, SkillsSection, Subtitle, Title } from "./styles";

import react from "../../assets/devicon/react.svg";
import boostrap from "../../assets/devicon/bootstrap.svg";
import github from "../../assets/devicon/github.svg";
import git from "../../assets/devicon/git.svg";
import html from "../../assets/devicon/html.svg";
import js from "../../assets/devicon/js.svg";
import css from "../../assets/devicon/css.svg";
import tailwind from "../../assets/devicon/tailwind.svg";
import next from "../../assets/devicon/next.svg";
import php from "../../assets/devicon/php.svg";
import mysql from "../../assets/devicon/mysql.svg";
import ts from "../../assets/devicon/ts.svg";
import vscode from "../../assets/devicon/vscode.svg";
import figma from "../../assets/devicon/figma.svg";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function SkillSection() {
    const { skillsRef, language } = useContext(AppContext);
    return (
        <SkillsSection ref={skillsRef}>
            <Title>{language.my_tech_stack}</Title>
            <Subtitle>{language.tecnologies_section_description}</Subtitle>

            <SkillsBox>
                <Skill src={html} title="HTML" />
                <Skill src={css} title="CSS" />
                <Skill src={js} title="Javascript" />
                <Skill src={ts} title="Typescript" />
                <Skill src={react} title="ReactJS" />
                <Skill src={git} title="Git" />
                <Skill src={github} title="Github" />
                <Skill src={php} title="PHP" />
                <Skill src={mysql} title="MySQL" />
                <Skill src={next} title="Next" />
                <Skill src={vscode} title="Visual Studio Code" />
                <Skill src={figma} title="Figma" />
            </SkillsBox>
        </SkillsSection>
    )
}