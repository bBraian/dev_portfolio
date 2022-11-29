import { Description, Icon, Link, LinkBox, ProjectContainer, ProjectContent, ProjectImage, TechBox, TechImg, TechStackBox, TechTitle, TextLink, Title } from "./styles";
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
                    <Link href="https://digital-menu-bbraian.vercel.app">
                        <Icon src={linkIcon} />
                        <TextLink>Live Preview</TextLink>
                    </Link>
                    <Link href="https://github.com/bBraian/digital-menu">
                        <Icon src={githubIcon} />
                        <TextLink>View Code</TextLink>
                    </Link>
                </LinkBox>
            </ProjectContent>
        </ProjectContainer>
    )
}