import { WorkExperienceCard } from "./components/WorkExperienceCard";
import { AboutContainer, TextAboutMe, Title, WorkExperienceBox } from "./styles";

export function About() {
    return (
        <AboutContainer>
            <Title>About Me</Title>
            <TextAboutMe>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</TextAboutMe>

            <Title>Work Experience</Title>
            <WorkExperienceBox>
                <WorkExperienceCard title="Software Developer Jr" company="Openfy" locale="Brochier" />
                <WorkExperienceCard title="Web Developer" company="Datacode Sistemas" locale="Brochier" />
            </WorkExperienceBox>

            <Title>Education</Title>
            <WorkExperienceBox>
                <WorkExperienceCard title="Analysis and Development systems" company="Unisinos" />
            </WorkExperienceBox>
        </AboutContainer>
    )
}