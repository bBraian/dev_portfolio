import { Project } from "../Project";
import { ProjectsBox, ProjectSectionContainer, Subtitle, Title } from "./styles";

export function ProjectSection() {
    return (
        <ProjectSectionContainer>
            <Title>Projects</Title>
            <Subtitle>Things I’ve built so far</Subtitle>

            <ProjectsBox>
                <Project /> 
                <Project /> 
                <Project />
            </ProjectsBox>
        </ProjectSectionContainer>
    )
}