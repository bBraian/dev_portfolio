import { Description, ProjectContainer, ProjectContent, ProjectImage, Title } from "./styles";
import img from "../../assets/images/project.png";

export function Project() {
    return (
        <ProjectContainer>
            <ProjectImage src={img} />

            <ProjectContent>
                <Title>Project Tile goes here</Title>

                <Description>
                    This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                </Description>
            </ProjectContent>
        </ProjectContainer>
    )
}