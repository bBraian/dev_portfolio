import { BackgroundGradient, HomeContainer, HomeSection, HomeTitle, ProfileImage, Skill, SkillsBox, SkillsSection, Subtitle, TextGradient, Title } from "./styles";
import profile from "../../assets/images/profile_pic.png";

import react from "../../assets/skills/react.svg";
import boostrap from "../../assets/skills/bootstrap.svg";
import github from "../../assets/skills/logos_git-icon.svg";
import git from "../../assets/skills/akar-icons_github-fill.svg";
import html from "../../assets/skills/vscode-icons_file-type-html.svg";
import js from "../../assets/skills/vscode-icons_file-type-js-official.svg";
import css from "../../assets/skills/vscode-icons_file-type-css.svg";
import tailwind from "../../assets/skills/vscode-icons_file-type-tailwind.svg";

export function Home() {
    return (
        <HomeContainer>
            <HomeSection>
                <div>
                    <HomeTitle>
                        Hi 👋,
                        <br />
                        My name is
                        <br />
                        <TextGradient>
                            Braian Viacava de Ávila
                        </TextGradient>
                        I'm a Software Developer
                    </HomeTitle>
                </div>
                <div>
                    <BackgroundGradient>
                        <ProfileImage src={profile} />
                    </BackgroundGradient>
                </div>
            </HomeSection>

            <SkillsSection>
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

        </HomeContainer>
    )
}