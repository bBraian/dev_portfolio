import { Description, Icon, LinkBox, ProjectContainer, ProjectContent, ProjectImage, TechBox, TechImg, TechStackBox, TechTitle, Title } from "./styles";
import img from "../../assets/images/project.png";

import githubIcon from "../../assets/github.svg";
import linkIcon from "../../assets/link.svg";

import react from "../../assets/skills/react.svg";
import html from "../../assets/skills/vscode-icons_file-type-js-official.svg";

export function Project() {
    return (
        <ProjectContainer>
            <ProjectImage src={img} />

            <ProjectContent>
                <Title>Project Tile goes here</Title>

                <Description>
                    This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                </Description>

                <TechStackBox>
                    <TechTitle>Tecnologies</TechTitle>
                    <TechBox>
                        <TechImg src={react} />
                        <TechImg src={html} />
                        <TechImg src={react} />
                        <TechImg src={html} />
                        <TechImg src={react} />
                        <TechImg src={html} />
                        <TechImg src={react} />
                        <TechImg src={html} />
                    </TechBox>
                </TechStackBox>

                <LinkBox>
                    <div>
                        <Icon src={linkIcon} />
                        <span>Live Preview</span>
                    </div>
                    <div>
                        <Icon src={githubIcon} />
                        <span>View Code</span>
                    </div>
                </LinkBox>
            </ProjectContent>
        </ProjectContainer>
    )
}