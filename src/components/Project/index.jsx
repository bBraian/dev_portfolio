import { Description, Icon, Link, LinkBox, ProjectContainer, ProjectContent, ProjectImage, TechBox, TechImg, TechStackBox, TechTitle, TextLink, Title } from "./styles";

import githubIcon from "../../assets/github.svg";
import linkIcon from "../../assets/link.svg";

import react from "../../assets/skills/react.svg";
import html from "../../assets/skills/vscode-icons_file-type-js-official.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Project(props) {
    const { language } = useContext(AppContext);
    return (
        <ProjectContainer>
            <ProjectImage src={props.data.image} />

            <ProjectContent>
                <Title>{props.data.name}</Title>

                <Description>
                    {props.data.description}
                </Description>

                <TechStackBox>
                    <TechTitle>{language.tecnologies}</TechTitle>
                    <TechBox>
                        <TechImg src={react} />
                        <TechImg src={html} />
                    </TechBox>
                </TechStackBox>

                <LinkBox>
                    <Link href={props.data.previewLink}>
                        <Icon src={linkIcon} />
                        <TextLink>{language.live_preview}</TextLink>
                    </Link>
                    <Link href={props.data.repositoryLink}>
                        <Icon src={githubIcon} />
                        <TextLink>{language.view_code}</TextLink>
                    </Link>
                </LinkBox>
            </ProjectContent>
        </ProjectContainer>
    )
}