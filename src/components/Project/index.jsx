import { Description, Icon, Link, LinkBox, ProjectContainer, ProjectContent, ProjectImage, TechBox, TechImg, TechStackBox, TechTitle, TextLink, Title } from "./styles";

import githubIcon from "../../assets/github.svg";
import linkIcon from "../../assets/link.svg";

import react from "../../assets/skills/react.svg";
import html from "../../assets/skills/vscode-icons_file-type-js-official.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Project(props) {
    const { projectsRef } = useContext(AppContext);
    return (
        <ProjectContainer ref={projectsRef}>
            <ProjectImage src={props.data.image} />

            <ProjectContent>
                <Title>{props.data.name}</Title>

                <Description>
                    {props.data.description}
                </Description>

                <TechStackBox>
                    <TechTitle>Tecnologies</TechTitle>
                    <TechBox>
                        <TechImg src={react} />
                        <TechImg src={html} />
                    </TechBox>
                </TechStackBox>

                <LinkBox>
                    <Link href={props.data.previewLink}>
                        <Icon src={linkIcon} />
                        <TextLink>Live Preview</TextLink>
                    </Link>
                    <Link href={props.data.repositoryLink}>
                        <Icon src={githubIcon} />
                        <TextLink>View Code</TextLink>
                    </Link>
                </LinkBox>
            </ProjectContent>
        </ProjectContainer>
    )
}