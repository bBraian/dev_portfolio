import { Project } from "../Project";
import { ProjectsBox, ProjectSectionContainer, Subtitle, Title } from "./styles";
import { projects } from "../../data/projects";

export function ProjectSection() {
    return (
        <ProjectSectionContainer>
            <Title>Projects</Title>
            <Subtitle>Things I’ve built so far</Subtitle>

            <ProjectsBox>
                {projects.map(project => {
                    return (
                        <Project key={project.id} data={project} /> 
                    )
                })}
            </ProjectsBox>
        </ProjectSectionContainer>
    )
}