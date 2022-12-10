import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { WorkExperienceCard } from "./components/WorkExperienceCard";
import { AboutContainer, TextAboutMe, Title, WorkExperienceBox } from "./styles";

export function About() {
    const { language } = useContext(AppContext);
    return (
        <AboutContainer>
            <Title>{language.about_me}</Title>
            <TextAboutMe>
                {language.desc_about_me}
            </TextAboutMe>

            <Title>{language.work_experience}</Title>
            <WorkExperienceBox>
                <WorkExperienceCard title="Software Developer Jr" company="Openfy" locale="Brochier" />
                <WorkExperienceCard title="Web Developer" company="Datacode Sistemas" locale="Brochier" />
            </WorkExperienceBox>

            <Title>{language.education}</Title>
            <WorkExperienceBox>
                <WorkExperienceCard title="Analysis and systems development" company="Unisinos" />
            </WorkExperienceBox>
        </AboutContainer>
    )
}