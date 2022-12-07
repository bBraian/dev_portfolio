import { Skill, SkillsBox, SkillsSection, Subtitle, Title } from "./styles";

import react from "../../assets/skills/react.svg";
import boostrap from "../../assets/skills/bootstrap.svg";
import github from "../../assets/skills/logos_git-icon.svg";
import git from "../../assets/skills/akar-icons_github-fill.svg";
import html from "../../assets/skills/vscode-icons_file-type-html.svg";
import js from "../../assets/skills/vscode-icons_file-type-js-official.svg";
import css from "../../assets/skills/vscode-icons_file-type-css.svg";
import tailwind from "../../assets/skills/vscode-icons_file-type-tailwind.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function SkillSection() {
    const { skillsRef } = useContext(AppContext);
    return (
        <SkillsSection ref={skillsRef}>
            <Title>My Tech Stack</Title>
            <Subtitle>Technologies I’ve been working with recently</Subtitle>

            <SkillsBox>
                <Skill src={html} />
                <Skill src={css} />
                <Skill src={js} />
                <Skill src={react} />
                <Skill src={boostrap} />
                <Skill src={tailwind} />
                <Skill src={git} />
                <Skill src={github} />
            </SkillsBox>
        </SkillsSection>
    )
}