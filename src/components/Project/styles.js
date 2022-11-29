import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 30%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    /* margin-bottom: 2rem; */
    -webkit-box-shadow: 2px 2px 100px 0px rgba(0,0,0,1);
    -moz-box-shadow: 2px 2px 100px 0px rgba(0,0,0,1);
    box-shadow: 2px 2px 100px 0px rgba(0,0,0,1);
`;

export const ProjectImage = styled.img`
    overflow: hidden;
    max-height: 16.25rem;
`;

export const ProjectContent = styled.div`
    overflow: hidden;
    background-color: ${props => props.theme['project-bg']};
    border-radius: 0 0 20px 20px;
    padding: 1.75rem;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    color: ${props => props.theme['titles']};
`;

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    color: ${props => props.theme['titles']};
    margin-top: 1rem;
`;

export const TechStackBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
`;

export const TechTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme['titles']};
`;

export const TechBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.55rem;
    gap: 0.6rem;
    justify-content: center;
`;

export const TechImg = styled.img`
    width: 1.4rem;
    height: 1.4rem;
    object-fit: fill;
`;

export const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    margin-top: 1.5rem;
`;

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    text-decoration-color: ${props => props.theme['white']};
`;

export const Icon = styled.img``;

export const TextLink = styled.span`
    color: ${props => props.theme['white']};
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
`